import { blocks } from "@/config/blocks";
import { capitalize, unslugify } from "@/lib/utils";
import type { Block, Category } from "@/types";

export const BLOCKS_DIR = "registry/blocks";
export function getAllCategories(): Category[] {
  const categoryMap = new Map<string, number>();
  const newCategories = new Set<string>();
  const now = Date.now();

  for (const block of blocks) {
    const cat = block.category;
    categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + 1);

    // Smart "New" Category Logic:
    // 1. Manually pinned (isPinned: true)
    // 2. Recently created (based on activeForDays, default 90)
    const isBlockPinned = block.isPinned === true;
    
    // Per-block highlight duration (default 90 days)
    const activeDays = block.activeForDays ?? 90;
    const createdAtTime = block.createdAt ? new Date(block.createdAt).getTime() : 0;
    const expirationTime = createdAtTime + activeDays * 24 * 60 * 60 * 1000;
    const isRecent = createdAtTime > 0 && now < expirationTime;

    if (isBlockPinned || isRecent) {
      newCategories.add(cat);
    }
  }

  // Sort blocks within categories (Smart Sorting)
  blocks.sort((a, b) => {
    // 1. Priority to pinned/recently active items
    const aActiveDays = a.activeForDays ?? 90;
    const bActiveDays = b.activeForDays ?? 90;
    const aExpiration = (a.createdAt ? new Date(a.createdAt).getTime() : 0) + aActiveDays * 24 * 60 * 60 * 1000;
    const bExpiration = (b.createdAt ? new Date(b.createdAt).getTime() : 0) + bActiveDays * 24 * 60 * 60 * 1000;

    const aPinned = (a.isPinned === true) || (now < aExpiration);
    const bPinned = (b.isPinned === true) || (now < bExpiration);

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
  const now = Date.now();
  return blocks
    .filter((block) => block.category === category)
    .sort((a, b) => {
      // 1. Priority to pinned/recently active items
      const aActiveDays = a.activeForDays ?? 90;
      const bActiveDays = b.activeForDays ?? 90;
      const aExpiration = (a.createdAt ? new Date(a.createdAt).getTime() : 0) + aActiveDays * 24 * 60 * 60 * 1000;
      const bExpiration = (b.createdAt ? new Date(b.createdAt).getTime() : 0) + bActiveDays * 24 * 60 * 60 * 1000;

      const aPinned = (a.isPinned === true) || (now < aExpiration);
      const bPinned = (b.isPinned === true) || (now < bExpiration);

      if (aPinned !== bPinned) return aPinned ? -1 : 1;

      // 2. Then by creation date (newest first)
      const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;

      return bDate - aDate;
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
