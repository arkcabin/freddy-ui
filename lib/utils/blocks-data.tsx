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
    const createdAtTime = block.createdAt
      ? new Date(block.createdAt).getTime()
      : 0;
    const expirationTime = createdAtTime + activeDays * MS_PER_DAY;
    const isRecent = createdAtTime > 0 && now < expirationTime;

    if (isBlockPinned || isRecent) {
      newCategories.add(cat);
    }
  }

  // Sort blocks within categories (Smart Sorting)
  blocks.sort((a, b) => sortBlocks(a, b, now));

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
    .sort((a, b) => sortBlocks(a, b, now));
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
