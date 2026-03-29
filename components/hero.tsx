"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
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
 * Reverted to standard centered layout as requested.
 */
export function Hero() {
  return (
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
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex max-w-fit items-center gap-2 rounded-full border border-border/50 bg-muted/10 px-4 py-1.5 font-extrabold text-[10px] text-muted-foreground/80 uppercase tracking-widest backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <LogoIcon className="size-3 opacity-60" />
          <span>Introducing V-{SITE_VERSION}</span>
          <span className="mx-1 h-2 w-px bg-border/50" />
          <Link
            className="group relative flex items-center gap-1.5 overflow-hidden rounded-sm px-2 py-0.5"
            href="/changelog"
          >
            {/* Premium Left-to-Right Fill */}
            <span className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />

            {/* Inverted Content Layer */}
            <span className="relative z-10 flex items-center gap-1.5 text-white mix-blend-difference">
              Changelog
              <ArrowUpRight className="size-[10px] stroke-[2.5px]" />
            </span>
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 max-w-4xl font-extrabold text-4xl text-foreground leading-[1.1] tracking-tightest sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.h1>

        {/* Advanced Word-Stagger Description */}
        <div className="mb-10 max-w-2xl overflow-hidden">
          <motion.p
            animate="visible"
            className="text-balance font-medium text-base text-muted-foreground/60 leading-relaxed tracking-tight sm:text-lg"
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {"100+ high-fidelity shadcn/ui blocks for React 19 & Next.js 16. Copy, paste, and ship your next big idea today."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  className="mr-[0.25em] inline-block last:mr-0"
                  // biome-ignore lint/suspicious/noArrayIndexKey: Static sentence with word-index combination is appropriate for this stagger animation.
                  key={`${word}-${i}`}
                  transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                  variants={{
                    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                >
                  {word}
                </motion.span>
              ))}
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            className="shadow-lg shadow-primary/5 transition-all hover:opacity-90 active:scale-95"
            rounded="full"
            size="hero"
          >
            Explore
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Button>
          <Button
            className="text-muted-foreground/60 transition-all hover:text-foreground"
            rounded="full"
            size="hero"
            variant="ghost"
          >
            Get full Access
          </Button>
        </motion.div>
      </div>

      <FeaturedIcons />
    </SectionGrid>
  );
}
