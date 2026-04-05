import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

/**
 * LikesService (NestJS Pattern)
 * Encapsulates all business logic for the Liking system.
 * Follows 'arch-single-responsibility' and 'arch-use-repository-pattern'.
 */
export class LikesService {
  /**
   * Fetches the total like count for a specific block.
   */
  async getCount(blockName: string): Promise<number> {
    try {
      return await prisma.like.count({
        where: { blockName },
      });
    } catch (error) {
      console.error(`[LikesService] Error fetching count for ${blockName}:`, error);
      return 0;
    }
  }

  /**
   * Fetches the like count AND whether a specific fingerprint has liked the block.
   * Used to derive true liked state server-side, avoiding stale localStorage.
   */
  async getCountAndStatus(
    blockName: string,
    fingerprint: string
  ): Promise<{ count: number; liked: boolean }> {
    try {
      const session = await auth.api.getSession({
        headers: await headers(),
      });
      const userId = session?.user?.id;

      const [count, existing] = await Promise.all([
        prisma.like.count({ where: { blockName } }),
        userId
          ? prisma.like.findFirst({
              where: { blockName, userId },
              select: { id: true },
            })
          : fingerprint
            ? prisma.like.findUnique({
                where: {
                  blockName_fingerprint: { blockName, fingerprint },
                },
                select: { id: true },
              })
            : Promise.resolve(null),
      ]);

      return { count, liked: existing !== null };
    } catch (error) {
      console.error(`[LikesService] Error in getCountAndStatus for ${blockName}:`, error);
      return { count: 0, liked: false };
    }
  }

  /**
   * Atomically toggles a like using a Prisma transaction.
   * Prevents race conditions from concurrent requests.
   */
  async toggle(
    blockName: string,
    fingerprint: string
  ): Promise<{ action: "liked" | "unliked"; count: number }> {
    // Defence-in-depth: guard even if API layer validation passes
    if (!blockName || !fingerprint || blockName.length > 64 || fingerprint.length > 64) {
      throw new Error("Invalid input.");
    }

    try {
      const session = await auth.api.getSession({
        headers: await headers(),
      });
      const userId = session?.user?.id;

      let action: "liked" | "unliked" = "liked";

      try {
        // Optimistic create: Rely on unique constraint to detect existing likes
        await prisma.like.create({
          data: { blockName, fingerprint, userId },
        });
        action = "liked";
      } catch (error: any) {
        // P2002 is the Prisma error code for Unique Constraint violation
        if (error.code === "P2002") {
          await prisma.like.delete({
            where: {
              blockName_fingerprint: { blockName, fingerprint },
            },
          });
          action = "unliked";
        } else {
          throw error;
        }
      }

      const count = await this.getCount(blockName);
      return { action, count };
    } catch (error) {
      console.error(`[LikesService] Toggle failed for "${blockName}":`, error);
      throw new Error("Could not process like action.");
    }
  }

  /**
   * Fetches all like counts for hydration purposes.
   */
  async getAllCounts(): Promise<Record<string, number>> {
    try {
      const counts = await prisma.like.groupBy({
        by: ["blockName"],
        _count: { blockName: true },
      });

      return Object.fromEntries(
        counts.map((item: { blockName: string; _count: { blockName: number } }) => [
          item.blockName,
          item._count.blockName,
        ])
      );
    } catch (error) {
      console.error("[LikesService] Error fetching all counts:", error);
      return {};
    }
  }

  /**
   * Transitions anonymous likes (fingerprint-only) to a user account.
   * Called typically on the first visit to the dashboard after login.
   */
  async claimLikes(userId: string, fingerprint: string) {
    if (!userId || !fingerprint) return;

    try {
      // Find all likes by this fingerprint that are NOT already claimed
      await prisma.like.updateMany({
        where: {
          fingerprint,
          userId: null,
        },
        data: {
          userId,
        },
      });
    } catch (error) {
      console.error(`[LikesService] Failed to claim likes for ${userId}:`, error);
    }
  }
}

// Export a singleton instance for use across the API layer
export const likesService = new LikesService();
