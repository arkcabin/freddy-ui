import Link from "next/link";
import { Suspense } from "react";
import { CategoryCard } from "@/components/category-card";
import { Hero } from "@/components/hero";
import { SectionGrid } from "@/components/section-grid";
import { SectionHeader } from "@/components/section-header";
import { GridPattern } from "@/components/shared";
import { Showcase } from "@/components/showcase";
import { Tweets } from "@/components/tweets";
import { FAQ } from "@/components/faq";
import { ClientPageWrapper } from "@/components/layout/client-page-wrapper";
import { GridSkeleton, HeroSkeleton, ShowcaseSkeleton } from "@/components/skeletons";
import { getAllCategories } from "@/lib/utils/blocks-data";

/**
 * Page component for the Freddy UI homepage.
 * Optimized for performance using Server Components and Streaming.
 */
export default function Page() {
  const categories = getAllCategories();

  return (
    <ClientPageWrapper>
      <main>
        {/* 2. Hero Landing Section */}
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>

        <div className="relative grow">
          <div className="relative min-h-screen overflow-hidden">
            {/* Background Grid Pattern */}
            <GridPattern
              className="mask-[radial-gradient(100%_100%_at_top_right,var(--foreground),transparent)] opacity-20"
              height={40}
              strokeDasharray="2 2"
              width={40}
            />

            {/* Showcase Section */}
            <Suspense fallback={<ShowcaseSkeleton />}>
              <Showcase />
            </Suspense>

            {/* Categories Grid Section */}
            <Suspense fallback={<GridSkeleton />}>
              <SectionGrid
                className="pb-16 lg:pb-24"
                markerType="plus"
                showBottomMarkers={true}
                showDoubleBorders={true}
                showTopMarkers={true}
              >
                <SectionHeader
                  subtitle="Explore our library of 13+ categories and find the perfect beautifully crafted blocks for your project."
                  title="Browse Premium Blocks"
                />
                <div className="relative">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.slice(0, 12).map((category, index) => (
                      <CategoryCard
                        index={index}
                        key={category.id}
                        {...category}
                      />
                    ))}
                  </div>

                  {/* Bottom Fade Mask */}
                  <div className="bottom-fade-mask" />
                </div>

                {/* View All Button */}
                <div className="mt-12 flex justify-center">
                  <Link
                    className="group flex items-center gap-2 font-bold font-heading text-muted-foreground text-sm transition-colors hover:text-foreground"
                    href="/blocks"
                  >
                    <span>View All</span>
                    <svg
                      className="size-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </SectionGrid>
            </Suspense>

            {/* FAQ Section (GEO Optimization) */}
            <Suspense fallback={<GridSkeleton />}>
              <SectionGrid
                className="pb-16 lg:pb-24"
                markerType="plus"
                showBottomMarkers={true}
                showDoubleBorders={true}
                showTopMarkers={true}
              >
                <SectionHeader
                  subtitle="Frequently asked questions about Freddy UI blocks and components."
                  title="Common Questions"
                />
                <FAQ />
              </SectionGrid>
            </Suspense>

            {/* Social Proof / Tweets */}
            <Suspense fallback={<GridSkeleton />}>
              <SectionGrid
                className="pb-16 lg:pb-24"
                markerType="plus"
                showBottomMarkers={true}
                showDoubleBorders={true}
                showTopMarkers={true}
              >
                <SectionHeader
                  subtitle="Hear from our community about their hands-on experience and feedback."
                  title="Wall of Love"
                />
                <Tweets />
              </SectionGrid>
            </Suspense>
          </div>
        </div>
      </main>
    </ClientPageWrapper>
  );
}
