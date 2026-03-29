"use client";
import Link from "next/link";
import { useState } from "react";
import { AnnouncementBar } from "@/components/announcement";
import { CategoryCard } from "@/components/category-card";
import { MainHeader } from "@/components/header/header-2";
import { Hero } from "@/components/hero";
import { SectionGrid } from "@/components/section-grid";
import { SectionHeader } from "@/components/section-header";
import { GridPattern } from "@/components/shared";
import { Showcase } from "@/components/showcase";
import { Tweets } from "@/components/tweets";
import { HomePageWrapper } from "@/components/wrapper";
import { getAllCategories } from "@/lib/utils/blocks-data";

/**
 * Page component for the Freddy UI homepage.
 * Reverted to standard layout while preserving the dynamic SectionGrid animations.
 */
export default function Page() {
  const categories = getAllCategories();
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  return (
    <main>
      <div className="bg-accent">
        {/* 1. Announcement Bar */}
        <AnnouncementBar
          isVisible={isAnnouncementVisible}
          onClose={() => setIsAnnouncementVisible(false)}
        />

        <HomePageWrapper isAnnouncementVisible={isAnnouncementVisible}>
          {/* Navigation Header */}
          <MainHeader isFullWidth={false} />

          {/* 2. Hero Landing Section */}
          <Hero />

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
              <Showcase />

              {/* Categories Grid Section */}
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
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background via-background/20 to-transparent" />
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

              {/* Social Proof / Tweets */}
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
            </div>
          </div>
        </HomePageWrapper>
      </div>
    </main>
  );
}
