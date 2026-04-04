"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { SectionGrid } from "@/components/section-grid";
import { SectionHeader } from "@/components/section-header";
import { GridPattern } from "@/components/shared";
import { GridSkeleton, HeroSkeleton, ShowcaseSkeleton } from "@/components/skeletons";
import { LazyHydrate } from "./lazy-hydrate";

/**
 * Deferred loading of heavy client-side sections to minimize TBT.
 * Using next/dynamic with ssr: false for hydration-intensive components.
 */
const Hero = dynamic(() => import("@/components/hero").then((mod) => mod.Hero), {
  ssr: true, // Hero remains SSR for faster First Contentful Paint (FCP)
  loading: () => <HeroSkeleton />,
});

const Showcase = dynamic(() => import("@/components/showcase").then((mod) => mod.Showcase), {
  ssr: false,
  loading: () => <ShowcaseSkeleton />,
});

const FAQ = dynamic(() => import("@/components/faq").then((mod) => mod.FAQ), {
  ssr: false,
  loading: () => <GridSkeleton />,
});

const Tweets = dynamic(() => import("@/components/tweets").then((mod) => mod.Tweets), {
  ssr: false,
  loading: () => <GridSkeleton />,
});

/**
 * Client Content Wrapper for the Homepage.
 * Accept categories as props from the Server Page Component.
 */
export function HomeContentClient({ categories }: { categories: any[] }) {
  return (
    <main className="relative">
      {/* 2. Hero Landing Section */}
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      <div className="relative grow">
          {/* Background Grid Pattern */}
          <GridPattern
            className="mask-[radial-gradient(100%_100%_at_top_right,var(--foreground),transparent)] opacity-20"
            height={40}
            strokeDasharray="2 2"
            width={40}
          />

          {/* Showcase Section */}
          <LazyHydrate fallback={<ShowcaseSkeleton />}>
            <Showcase />
          </LazyHydrate>

          {/* Categories Grid Section */}
          <SectionGrid
            className="pb-16 lg:pb-24"
            markerType="plus"
            showBottomMarkers={true}
            showDoubleBorders={true}
            showTopMarkers={true}
          >
            <SectionHeader
              subtitle="Explore our library of 13+&nbsp;categories and find the perfect beautifully crafted blocks for your project."
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
                aria-label="View all premium component blocks and categories"
                className="group flex items-center gap-2 font-bold font-heading text-muted-foreground text-sm transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                href="/blocks"
              >
                <span>View All</span>
                <svg
                  aria-hidden="true"
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

          {/* FAQ Section (GEO Optimization) */}
          <LazyHydrate fallback={<GridSkeleton />}>
            <SectionGrid
              className="pb-16 lg:pb-24"
              markerType="plus"
              showBottomMarkers={true}
              showDoubleBorders={true}
              showTopMarkers={true}
            >
              <SectionHeader
                subtitle="Frequently Asked Questions about Freddy UI blocks and components."
                title="Common Questions"
              />
              <FAQ />
            </SectionGrid>
          </LazyHydrate>

          {/* Social Proof / Tweets */}
          <LazyHydrate fallback={<GridSkeleton />}>
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
          </LazyHydrate>
      </div>
    </main>
  );
}
