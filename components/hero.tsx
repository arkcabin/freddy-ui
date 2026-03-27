"use client";

import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Github, SquareCode } from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_VERSION } from "@/config/site";
import { LogoIcon } from "@/components/logo";
import { GridPattern } from "./sheard";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative isolate flex flex-col items-center justify-center pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <GridPattern className="opacity-10" />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-primary/20 to-primary/5 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-8 flex max-w-fit items-center gap-3 rounded-full border border-border bg-muted/50 py-1.5 pl-3 pr-4 text-[11px] font-medium backdrop-blur-md"
        >
          <div className="flex items-center gap-2">
            <LogoIcon className="size-3.5" />
            <span className="text-foreground font-semibold">{SITE_NAME}</span>
          </div>
          <span className="h-3 w-px bg-border" />
          <span className="text-muted-foreground">Introducing V-{SITE_VERSION}</span>
          <span className="h-3 w-px bg-border" />
          <Link href="/changelog" className="flex items-center gap-1 text-muted-foreground/50 transition-colors hover:text-foreground">
            View Changelog
            <ChevronRight className="size-3" />
          </Link>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="relative font-heading text-4xl font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl"
        >
          Beautiful ✨ <span className="font-extrabold text-primary">shadcn/ui</span> Blocks <br />
          for the <span className="font-extrabold text-glow">Modern Developer.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Save hours of design time with clean, ready-to-use shadcn blocks <br className="hidden sm:block" />
          that just work — modern, responsive, and built for speed.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-border bg-muted/20 px-8 text-sm font-medium backdrop-blur-md transition-all hover:bg-muted/40 focus:ring-2 focus:ring-ring/20">
            <Link href="#blocks">
              Explore
            </Link>
          </Button>
          <Button asChild size="lg" className="h-12 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:opacity-90 focus:ring-2 focus:ring-ring">
            <Link href="/get-access">
              Get full Access
            </Link>
          </Button>
        </motion.div>

        {/* Floating Mockup Preview */}
        <motion.div
          variants={itemVariants}
          className="relative mt-20"
        >
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/10 to-transparent blur-2xl font-mono"></div>
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card/50 p-2 shadow-2xl backdrop-blur-xl transition-all hover:border-primary/20">
            <div className="flex items-center justify-between rounded-t-xl bg-muted/10 px-4 py-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-border"></div>
                <div className="size-2.5 rounded-full bg-border"></div>
                <div className="size-2.5 rounded-full bg-border"></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/30">
                <SquareCode className="size-3" />
                <span>Components.tsx</span>
              </div>
            </div>
            <div className="h-48 sm:h-64 lg:h-80 overflow-hidden bg-dot-foreground/[0.05] relative">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="max-w-md w-full space-y-4 opacity-50">
                   <div className="h-8 w-3/4 rounded-lg bg-muted/20 animate-pulse"></div>
                   <div className="h-4 w-full rounded-lg bg-muted/10 animate-pulse"></div>
                   <div className="h-4 w-5/6 rounded-lg bg-muted/10 animate-pulse"></div>
                   <div className="flex gap-4">
                     <div className="h-10 w-24 rounded-lg bg-muted/20 animate-pulse"></div>
                     <div className="h-10 w-24 rounded-lg bg-muted/20 animate-pulse"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Decorative Beam */}
      <div className="beam-effect opacity-50" />
    </div>
  );
}
