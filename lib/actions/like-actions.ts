"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

/**
 * Toggles a like for a specific block and fingerprint.
 * Ensures the 'one like per user' constraint.
 */
export async function toggleLike(blockName: string, fingerprint: string) {
  if (!blockName || !fingerprint) {
    throw new Error("Block name and fingerprint are required.");
  }

  try {
    const existingLike = await prisma.like.findUnique({
      where: {
        blockName_fingerprint: {
          blockName,
          fingerprint,
        },
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          blockName,
          fingerprint,
        },
      });
    }

    revalidatePath("/blocks");
    return { success: true };
  } catch (error) {
    console.error("Error toggling like:", error);
    throw new Error("Failed to toggle like.");
  }
}

/**
 * Fetches the like count for a specific block.
 */
export async function getBlockLikes(blockName: string) {
  try {
    return await prisma.like.count({
      where: {
        blockName,
      },
    });
  } catch (error) {
    console.error("Error fetching likes:", error);
    return 0;
  }
}

/**
 * Fetches all block like counts in one go for efficient hydration.
 */
export async function getAllLikes() {
  try {
    const counts = await prisma.like.groupBy({
      by: ["blockName"],
      _count: {
        blockName: true,
      },
    });

    return Object.fromEntries(
      counts.map((item: { blockName: string; _count: { blockName: number } }) => [
        item.blockName,
        item._count.blockName,
      ])
    );
  } catch (error) {
    console.error("Error fetching all likes:", error);
    return {};
  }
}
