import Link from "next/link";
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
        className="opacity-20 mask-[radial-gradient(100%_100%_at_top_right,var(--foreground),transparent)]"
        width={40}
        height={40}
        strokeDasharray="2 2"
      />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <BorderSeparator className="opacity-50" />
      <div className="relative z-10 cpx py-16 lg:py-24">
        <SectionHeader 
          title="Essential Core Patterns" 
          subtitle="Expertly designed components and reusable solutions to accelerate your professional workflow."
        />
        <Features totalBlocks={getTotalBlocksCount()} />
      </div>

      {/* Categories Grid Section */}
      <BorderSeparator className="opacity-50" />
      <div className="relative z-10 cpx py-16 lg:py-24">
        <SectionHeader 
          title="Browse Premium Blocks" 
          subtitle="Explore our library of 13+ categories and find the perfect beautifully crafted blocks for your project."
        />
        <div className="relative">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 12).map((category, index) => (
              <CategoryCard key={category.id} index={index} {...category} />
            ))}
          </div>
          
          {/* Bottom Fade Mask */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background via-background/20 to-transparent pointer-events-none" />
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link 
            href="/blocks" 
            className="group flex items-center gap-2 font-heading text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>View All</span>
            <svg 
              className="size-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
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
