"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE_VERSION } from "@/config/site";
import { LogoIcon } from "@/components/logo";
import { ShadcnIcon } from "@/components/icons";
import { FeaturedIcons } from "./featured-icons";
import { SectionGrid } from "./section-grid";
import { motion } from "motion/react";

/**
 * Hero component for the Freddy UI landing page.
 * Uses the SectionGrid HOC for the "Boxed" architectural layout.
 */
export function Hero() {
  return (
    <SectionGrid
      markerType="plus"
      markerOffset="top-0"
      showDoubleBorders={true}
      className="bg-background min-h-[calc(100vh-3rem)] flex flex-col pt-12"
      containerClassName="flex flex-1 flex-col justify-center py-20 md:py-32"
    >
      {/* Subtle background glow - positioned below content and grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 px-6 md:px-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex max-w-fit items-center gap-2 rounded-full border border-border/50 bg-muted/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground/80 backdrop-blur-md"
        >
          <LogoIcon className="size-3 opacity-60" />
          <span>Introducing V-{SITE_VERSION}</span>
          <span className="h-2 w-px bg-border/50 mx-1" />
          <Link
            href="/changelog"
            className="transition-colors hover:text-foreground"
          >
            Changelog
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 max-w-4xl text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-none tracking-tightest text-foreground"
        >
          Beautiful <ShadcnIcon className="inline size-[0.9em] translate-y-[-0.05em] mr-1" /> <span className="text-muted-foreground/40 font-medium">shadcn/ui</span> Blocks <br />
          for <span className="italic font-semibold text-primary">Busy & Smart devs.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 max-w-2xl text-[16px] leading-[1.6] text-muted-foreground/70 font-medium tracking-tight"
        >
          Save hours of design time with clean, ready-to-use shadcn blocks
          that just work — modern, responsive, and built for speed.
          Focus on your product, not on building every section from scratch.
        </motion.p>

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

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-[12px] text-muted-foreground/60"
        >
          Trusted by IT teams at Figma, Linear, and 40+ companies.
        </motion.p>
      </div>

      <FeaturedIcons />
    </SectionGrid>
  );
}
