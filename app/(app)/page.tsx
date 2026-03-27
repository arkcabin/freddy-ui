import { GridPattern, BorderSeparator } from "@/components/sheard";
import { Tweets } from "@/components/tweets";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CategoryCard } from "@/components/category-card";
import { getAllCategories, getTotalBlocksCount } from "@/lib/utils/blocks-data";
import { SectionHeader } from "@/components/section-header";

export default function Page() {
  const categories = getAllCategories();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Grid Pattern */}
      <GridPattern
        className="opacity-20 mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]"
        width={40}
        height={40}
        strokeDasharray="2 2"
      />

      {/* Hero Section */}
      <Hero />

      <Features totalBlocks={getTotalBlocksCount()} />
      <BorderSeparator className="opacity-50" />

      {/* Categories Grid */}
      <div className="relative z-10 cpx py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} index={index} {...category} />
          ))}
          <div className="group relative flex aspect-video flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/2 p-6 transition-colors hover:bg-white/4">
            <p className="font-heading text-lg font-semibold text-muted-foreground/50">
              Coming Soon
            </p>
          </div>
        </div>
      </div>

      <BorderSeparator className="opacity-50" />

      {/* Social Proof / Tweets */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="cpx">
          <SectionHeader 
            title="Wall of Love" 
            subtitle="Hear from our community about their hands-on experience and feedback."
          />
        </div>
        <Tweets />
      </div>
    </div>
  );
}
