import { getAllCategories, getTotalBlocksCount } from "@/lib/utils/blocks-data";
import { CategoryCard } from "@/components/category-card";
import { SectionHeader } from "@/components/section-header";
import { GridPattern } from "@/components/sheard";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Browse All Blocks",
  description: "Explore 13+ categories of beautifully crafted Shadcn/UI blocks — ready to copy, customize, and ship.",
  canonicalUrl: "/blocks",
});

export default function BlocksPage() {
  const categories = getAllCategories();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridPattern
        className="opacity-20 mask-[radial-gradient(100%_100%_at_top_right,var(--foreground),transparent)]"
        width={40}
        height={40}
        strokeDasharray="2 2"
      />

      <div className="relative z-10 cpx py-16 lg:py-24">
        <SectionHeader
          title="Browse All Blocks"
          subtitle={`Explore ${categories.length} categories and ${getTotalBlocksCount()}+ beautifully crafted blocks for your next project.`}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} index={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}
