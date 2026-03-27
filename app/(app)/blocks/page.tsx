import { getAllCategories, getTotalBlocksCount } from "@/lib/utils/blocks-data";
import { CategoryCard } from "@/components/category-card";
import { DashedLines } from "@/components/sheard";
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
    <>
      {/* Page header — matches [cat]/page.tsx style */}
      <div className="cpx max-w-2xl space-y-2 pt-6">
        <h1 className="font-bold font-heading text-3xl sm:text-4xl text-foreground">
          Browse All Blocks
        </h1>
        <p className="text-muted-foreground text-sm">
          Explore {categories.length} categories and {totalBlocks}+ beautifully
          crafted blocks — ready to copy, customize, and drop into your next
          project.
        </p>
      </div>

      <DashedLines className="h-8 [mask-image:linear-gradient(to_bottom,transparent,var(--background),var(--background))]" />

      {/* Category grid */}
      <div className="cpx pb-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} index={index} {...category} />
          ))}
        </div>
      </div>
    </>
  );
}
