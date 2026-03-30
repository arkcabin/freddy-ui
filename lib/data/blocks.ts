"use cache";

import { cacheLife } from "next/cache";
import { blocks } from "@/config/blocks";
import { capitalize, unslugify } from "@/lib/utils";
import type { Block, Category } from "@/types";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function sortBlocks(a: Block, b: Block, now: number): number {
  const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
  const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;

  const aExpiration = aDate + (a.activeForDays ?? 90) * MS_PER_DAY;
  const bExpiration = bDate + (b.activeForDays ?? 90) * MS_PER_DAY;

  const aPinned = a.isPinned === true || now < aExpiration;
  const bPinned = b.isPinned === true || now < bExpiration;

  if (aPinned !== bPinned) {
    return aPinned ? -1 : 1;
  }

  return bDate - aDate;
}

/**
 * Fetches and categorizes blocks with server-side caching.
 */
export async function getCachedAllCategories(): Promise<Category[]> {
  cacheLife({ revalidate: 3600 });
  
  const categoryMap = new Map<string, number>();
  const newCategories = new Set<string>();
  const now = Date.now();

  for (const block of blocks) {
    const cat = block.category;
    categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + 1);

    const isBlockPinned = block.isPinned === true;
    const activeDays = block.activeForDays ?? 90;
    const createdAtTime = block.createdAt
      ? new Date(block.createdAt).getTime()
      : 0;
    const expirationTime = createdAtTime + activeDays * MS_PER_DAY;
    const isRecent = createdAtTime > 0 && now < expirationTime;

    if (isBlockPinned || isRecent) {
      newCategories.add(cat);
    }
  }

  return Array.from(categoryMap.entries()).map(([id, count]) => ({
    id,
    name: capitalize(unslugify(id)) as string,
    isNew: newCategories.has(id),
    blocksCount: count,
  }));
}

/**
 * Fetches blocks by category with server-side caching.
 */
export async function getCachedBlocksByCategory(category: string): Promise<Block[]> {
  cacheLife({ revalidate: 3600 });
  const now = Date.now();
  
  return blocks
    .filter((block) => block.category === category)
    .sort((a, b) => sortBlocks(a, b, now));
}
