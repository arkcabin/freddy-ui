import { getAllCategories, getTotalBlocksCount } from "@/lib/utils/blocks-data";
import { CategoryCard } from "@/components/category-card";
import { DashedLines } from "@/components/shared";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Browse All Blocks",
  description: "Explore 13+ categories of beautifully crafted Shadcn/UI blocks — ready to copy, customize, and ship.",
  canonicalUrl: "/blocks",
});

export default function BlocksPage() {
  const categories = getAllCategories();
  const totalBlocks = getTotalBlocksCount();

  return (
    <div className="relative">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 -top-24 -z-10 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[80rem] flex-none justify-end">
          <div className="w-[80rem] flex-none bg-[radial-gradient(35%_50%_at_50%_50%,theme(colors.primary/5%),transparent)] h-[40rem]" />
        </div>
      </div>

      {/* Page header — matches [cat]/page.tsx style */}
      <div className="cpx max-w-2xl space-y-4 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          New Blocks Added
        </div>
        <h1 className="font-bold font-heading text-4xl sm:text-5xl text-foreground tracking-tightest leading-none">
          Browse All Blocks
        </h1>
        <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
          Explore {categories.length} categories and {totalBlocks}+ premium 
          components. Ready to copy, customize, and ship.
        </p>
      </div>

      <DashedLines className="h-8 [mask-image:linear-gradient(to_bottom,transparent,var(--background),var(--background))]" />

      {/* Category grid */}
      <div className="cpx pb-24 border-t border-zinc-100 dark:border-zinc-800">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} index={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}
