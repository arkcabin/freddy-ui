import { blocks } from "@/config/blocks";
import { capitalize, unslugify } from "@/lib/utils";
import type { Block, Category } from "@/types";

export const BLOCKS_DIR = "registry/blocks";
export function getAllCategories(): Category[] {
  const categoryMap = new Map<string, number>();
  // New Category assign here
  const newCategories = new Set<string>(["auth", "header", "announcement"]);
  const now = Date.now();

  for (const block of blocks) {
    const cat = block.category;
    categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + 1);

    if (block.pinnedUntil && new Date(block.pinnedUntil).getTime() > now) {
      newCategories.add(cat);
    }
  }

  const sortedEntries = Array.from(categoryMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .sort(
      (a, b) =>
        Number(newCategories.has(b[0])) -
        Number(newCategories.has(a[0]))
    );

  return sortedEntries.map(([id, count]) => ({
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
