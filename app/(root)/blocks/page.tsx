import { Suspense } from "react";
import { CategoryCard } from "@/components/category-card";
import { DashedLines } from "@/components/shared";
import { CategorySkeletonGrid } from "@/components/skeletons";
import { constructMetadata } from "@/lib/metadata";
import {
  getAllCategories,
  getTotalBlocksCount,
} from "@/lib/utils/blocks-data";

export const metadata = constructMetadata({
  title: "Browse All Blocks",
  description:
    "Explore 13+ categories of beautifully crafted Shadcn/UI blocks — ready to copy, customize, and ship.",
  canonicalUrl: "/blocks",
});

async function CategoryGrid() {
  const categories = getAllCategories();

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categories.map((category, index) => (
        <CategoryCard index={index} key={category.id} {...category} />
      ))}
    </div>
  );
}

export default function BlocksPage() {
  const totalBlocks = getTotalBlocksCount();

  return (
    <div className="relative">
      {/* Background Ambience */}
      <div className="-top-24 -z-10 pointer-events-none absolute inset-x-0 flex justify-center overflow-hidden">
        <div className="w-7xl flex-none justify-end">
          <div className="h-160 w-7xl flex-none bg-[radial-gradient(35%_50%_at_50%_50%,var(--hero-ambience-color),transparent)]" />
        </div>
      </div>

      {/* Page header — matches [cat]/page.tsx style */}
      <div className="cpx max-w-2xl space-y-4 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 font-bold text-[10px] text-primary uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          New Blocks Added
        </div>
        <h1 className="font-bold font-heading text-4xl text-foreground leading-none tracking-tightest sm:text-5xl">
          Browse All Blocks
        </h1>
        <p className="max-w-xl font-medium text-lg text-muted-foreground leading-relaxed">
          Explore {getAllCategories().length} categories and {totalBlocks}+
          premium components. Ready to copy, customize, and ship.
        </p>
      </div>

      <DashedLines className="h-8 mask-[linear-gradient(to_bottom,transparent,var(--background),var(--background))]" />

      {/* Category grid */}
      <div className="cpx border-zinc-100 border-t pb-24 dark:border-zinc-800">
        <Suspense fallback={<CategorySkeletonGrid />}>
          <CategoryGrid />
        </Suspense>
      </div>
    </div>
  );
}
