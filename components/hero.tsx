"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SITE_VERSION } from "@/config/site";
import { LogoIcon } from "@/components/logo";
import { ShadcnIcon } from "@/components/icons";
import { GridPattern } from "@/components/shared";
import { FeaturedIcons } from "./featured-icons";
import { SectionGrid } from "./section-grid";
import { motion } from "motion/react";

/**
 * Hero component for the Freddy UI landing page.
 * Uses the SectionGrid HOC for the "Boxed" architectural layout.
 * Reverted to standard centered layout as requested.
 */
export function Hero() {
  return (
    <SectionGrid
      markerType="plus"
      markerOffset="top-0"
      showDoubleBorders={true}
      allowOverflow={true}
      zIndex="z-[55]"
      className="bg-background min-h-[calc(100vh-3rem)] flex flex-col pt-12"
      containerClassName="flex flex-1 flex-col justify-center py-20 md:py-32"
      aria-label="Hero Section"
    >
      {/* Neutral High-Contrast Grid with Pro Mask */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridPattern
          className="opacity-15 mask-[radial-gradient(ellipse_at_center,white,transparent_80%)]"
          strokeDasharray="4 4"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--foreground),0.02)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_60%)]" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 px-6 md:px-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex max-w-fit items-center gap-2 rounded-full border border-border/50 bg-muted/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground/80 backdrop-blur-md"
        >
          <LogoIcon className="size-3 opacity-60" />
          <span>Introducing V-{SITE_VERSION}</span>
          <span className="h-2 w-px bg-border/50 mx-1" />
          <Link
            href="/changelog"
            className="group relative flex items-center gap-1.5 px-2 py-0.5 rounded-sm overflow-hidden"
          >
            {/* Premium Left-to-Right Fill */}
            <span className="absolute inset-0 bg-foreground scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />

            {/* Inverted Content Layer */}
            <span className="relative z-10 flex items-center gap-1.5 mix-blend-difference text-white">
              Changelog
              <ArrowUpRight className="size-[10px] stroke-[2.5px]" />
            </span>
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tightest text-foreground sm:text-6xl lg:text-7xl"
        >
          Beautiful{" "}
          <ShadcnIcon className="inline size-[0.9em] translate-y-[-0.05em] mr-1" />{" "}
          <span className="text-muted-foreground/40 font-medium">
            shadcn/ui
          </span>{" "}
          Blocks <br />
          for{" "}
          <span className="italic font-semibold text-primary/90">
            Busy & Smart devs.
          </span>
        </motion.h1>

        {/* Advanced Word-Stagger Description */}
        <div className="mb-10 max-w-2xl overflow-hidden">
          <motion.p
            initial="hidden"
            animate="visible"
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
            className="text-base leading-relaxed text-muted-foreground/60 font-medium tracking-tight text-balance sm:text-lg"
          >
            {"100+ high-fidelity shadcn/ui blocks for React 19 & Next.js 16. Copy, paste, and ship your next big idea today."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className="inline-block mr-[0.25em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Button
            size="hero"
            rounded="full"
            className="shadow-lg shadow-primary/5 transition-all hover:opacity-90 active:scale-95"
          >
            Explore
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="hero"
            rounded="full"
            className="text-muted-foreground/60 hover:text-foreground transition-all"
          >
            Get full Access
          </Button>
        </motion.div>
      </div>

      <FeaturedIcons />
    </SectionGrid>
  );
}
