"use client";

import dynamic from "next/dynamic";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ShadcnIcon } from "@/components/icons";
import { LogoIcon } from "@/components/logo";
import { GridPattern } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { SITE_VERSION } from "@/config/site";
import { FeaturedIcons } from "./featured-icons";
import { SectionGrid } from "./section-grid";

/**
 * Hero component for the Freddy UI landing page.
 * Uses the SectionGrid HOC for the "Boxed" architectural layout.
 * Optimized for maximum performance by leveraging native CSS animations
 * instead of JavaScript-based Framer Motion for the initial fold.
 */
export function Hero() {
  return (
    <div className="relative">
      <SectionGrid
        allowOverflow={true}
        aria-label="Hero Section"
        className="flex min-h-[calc(100vh-3rem)] flex-col bg-background pt-12"
        containerClassName="flex flex-1 flex-col justify-center py-20 md:py-32"
        markerOffset="top-0"
        markerType="plus"
        showDoubleBorders={true}
        zIndex="z-[55]"
      >
        {/* Neutral High-Contrast Grid with Pro Mask */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <GridPattern
            className="mask-[radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-15"
            strokeDasharray="4 4"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--foreground),0.02)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_60%)]" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 px-6 md:px-10">
          {/* Badge */}
          <div className="animate-in fade-in slide-in-from-bottom-4 mb-8 flex max-w-fit items-center gap-2 rounded-full border border-border/50 bg-muted/10 px-4 py-1.5 font-extrabold text-[10px] text-muted-foreground/80 uppercase tracking-widest backdrop-blur-md duration-500 fill-mode-both">
            <LogoIcon className="size-3 opacity-60" />
            <span>Introducing V-{SITE_VERSION}</span>
            <span className="mx-1 h-2 w-px bg-border/50" />
            <Link
              className="group relative flex items-center gap-1.5 overflow-hidden rounded-sm px-2 py-0.5"
              href="/changelog"
            >
              {/* Premium Left-to-Right Fill */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />

              {/* Text Layer - Explicitly themed for high visibility */}
              <span className="relative z-10 flex items-center gap-1.5 text-foreground/80 transition-colors duration-300 group-hover:text-background dark:group-hover:text-foreground">
                Changelog
                <ArrowUpRight className="size-[10px] stroke-[2.5px]" />
              </span>
            </Link>
          </div>

          {/* Headline */}
          <h1 className="text-wrap-balance animate-in fade-in slide-in-from-bottom-6 mb-4 max-w-4xl font-extrabold text-4xl text-foreground leading-[1.1] tracking-tightest sm:text-6xl lg:text-7xl duration-1000 delay-200 fill-mode-both will-change-transform">
            Beautiful{" "}
            <ShadcnIcon className="mr-1 inline size-[0.9em] translate-y-[-0.05em]" />{" "}
            <span className="font-medium text-muted-foreground/40">
              shadcn/ui
            </span>{" "}
            Blocks <br />
            for{" "}
            <span className="font-semibold text-primary/90 italic">
              Busy & Smart devs.
            </span>
          </h1>

          {/* Simplified Description */}
          <p className="animate-in fade-in slide-in-from-bottom-4 mb-10 max-w-2xl text-balance font-medium text-base text-muted-foreground/60 leading-relaxed tracking-tight sm:text-lg duration-1000 delay-400 fill-mode-both will-change-transform">
            100+&nbsp;high-fidelity shadcn/ui blocks for React 19 & Next.js 16.
            Copy, paste, and ship your next big idea today.
          </p>

          {/* CTAs */}
          <div className="animate-in fade-in slide-in-from-bottom-8 flex flex-wrap items-center gap-3 duration-1000 delay-600 fill-mode-both">
            <Button
              asChild
              className="shadow-lg shadow-primary/5 transition-all hover:opacity-90 active:scale-95"
              rounded="full"
              size="hero"
            >
              <Link href="/blocks">
                Explore Blocks
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button
              asChild
              className="text-muted-foreground/60 transition-all hover:text-foreground"
              rounded="full"
              size="hero"
              variant="ghost"
            >
              <Link href="/pricing">Get Full Access</Link>
            </Button>
          </div>
        </div>

        <div className="z-10 mt-12 w-full">
          <FeaturedIcons />
        </div>
      </SectionGrid>
    </div>
  );
}
