import { blocks } from "@/config/blocks";
import { capitalize, unslugify } from "@/lib/utils";
import type { Block, Category } from "@/types";

export const BLOCKS_DIR = "registry/blocks";
export function getAllCategories(): Category[] {
  const categoryMap = new Map<string, number>();
  const newCategories = new Set<string>();
  const now = Date.now();
  const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000;

  for (const block of blocks) {
    const cat = block.category;
    categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + 1);

    // Smart "New" Category Logic:
    // 1. Manually pinned
    // 2. Temporally pinned (until date)
    // 3. Recently created (last 30 days)
    const isBlockPinned = block.isPinned === true;
    const isTemporallyPinned = block.pinnedUntil && new Date(block.pinnedUntil).getTime() > now;
    const isRecent = block.createdAt && new Date(block.createdAt).getTime() > thirtyDaysAgo;

    if (isBlockPinned || isTemporallyPinned || isRecent) {
      newCategories.add(cat);
    }
  }

  // Sort blocks within categories (Smart Sorting)
  blocks.sort((a, b) => {
    // 1. Priority to pinned items
    const aPinned = (a.isPinned === true) || (a.pinnedUntil && new Date(a.pinnedUntil).getTime() > now);
    const bPinned = (b.isPinned === true) || (b.pinnedUntil && new Date(b.pinnedUntil).getTime() > now);

    if (aPinned !== bPinned) return aPinned ? -1 : 1;

    // 2. Then by creation date (newest first)
    const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;

    return bDate - aDate;
  });

  return Array.from(categoryMap.entries()).map(([id, count]) => ({
    id,
    name: capitalize(unslugify(id)) as string,
    isNew: newCategories.has(id),
    blocksCount: count,
  }));
}

export function getBlocksByCategory(category: string): Block[] {
  return blocks
    .filter((block) => block.category === category)
    .sort((a, b) => {
      const now = Date.now();
      const aPinned = a.pinnedUntil && new Date(a.pinnedUntil).getTime() > now;
      const bPinned = b.pinnedUntil && new Date(b.pinnedUntil).getTime() > now;
      return (bPinned ? 1 : 0) - (aPinned ? 1 : 0);
    });
}

export function findBlockByName(name: string) {
  return blocks.find((item) => item.name === name) ?? null;
}

export function importBlockIndex(category: string, blockNumber: string) {
  return () => import(`@/${BLOCKS_DIR}/${category}/${blockNumber}/page`);
}

export function getTotalBlocksCount(): number {
  return blocks.length;
}
