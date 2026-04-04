import { prisma } from "@/lib/db";

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
      const [count, existing] = await Promise.all([
        prisma.like.count({ where: { blockName } }),
        fingerprint
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
      let action: "liked" | "unliked" = "liked";

      await prisma.$transaction(async (tx) => {
        const existing = await tx.like.findUnique({
          where: {
            blockName_fingerprint: { blockName, fingerprint },
          },
        });

        if (existing) {
          await tx.like.delete({ where: { id: existing.id } });
          action = "unliked";
        } else {
          await tx.like.create({ data: { blockName, fingerprint } });
          action = "liked";
        }
      });

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
}

// Export a singleton instance for use across the API layer
export const likesService = new LikesService();
