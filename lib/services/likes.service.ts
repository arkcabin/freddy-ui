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
   * Toggles a like for a block and fingerprint.
   * Atomically creates or deletes the like record.
   */
  async toggle(
    blockName: string,
    fingerprint: string
  ): Promise<{ action: "liked" | "unliked"; count: number }> {
    try {
      const existing = await prisma.like.findUnique({
        where: {
          blockName_fingerprint: {
            blockName,
            fingerprint,
          },
        },
      });

      if (existing) {
        await prisma.like.delete({
          where: { id: existing.id },
        });
      } else {
        await prisma.like.create({
          data: { blockName, fingerprint },
        });
      }

      const count = await this.getCount(blockName);
      return {
        action: existing ? "unliked" : "liked",
        count,
      };
    } catch (error) {
      console.error(`[LikesService] Error toggling like for ${blockName}:`, error);
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
