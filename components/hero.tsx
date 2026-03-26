"use client";

import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Github, SquareCode } from "lucide-react";
import Link from "next/link";
import { SITE_NAME } from "@/config/site";
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
        <GridPattern className="opacity-[0.03]" />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-white/20 to-white/5 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium backdrop-blur-md"
        >
          <span className="text-white/40">Introducing v1</span>
          <span className="h-3 w-px bg-white/10" />
          <Link href="/changelog" className="flex items-center gap-1 text-white/70 transition-colors hover:text-white">
            View Changelog
            <ChevronRight className="size-3" />
          </Link>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="relative font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Beautiful ✨ <span className="font-extrabold text-white">shadcn/ui</span> Blocks <br />
          for the <span className="font-extrabold text-white text-glow">Modern Developer.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/40 sm:text-base"
        >
          Save hours of design time with clean, ready-to-use shadcn blocks <br className="hidden sm:block" />
          that just work — modern, responsive, and built for speed.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" variant="outline" className="h-10 rounded-xl border-white/5 bg-white/2 px-6 text-xs font-medium backdrop-blur-md transition-all hover:bg-white/5">
            <Link href="#blocks">
              Explore
            </Link>
          </Button>
          <Button asChild size="lg" className="h-10 rounded-full bg-white px-6 text-xs font-bold text-black transition-colors hover:bg-white/90">
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
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-white/10 to-transparent blur-2xl font-mono"></div>
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-black/50 p-2 shadow-2xl backdrop-blur-xl transition-all hover:border-white/20">
            <div className="flex items-center justify-between rounded-t-xl bg-white/5 px-4 py-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-white/10"></div>
                <div className="size-2.5 rounded-full bg-white/10"></div>
                <div className="size-2.5 rounded-full bg-white/10"></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-white/30">
                <SquareCode className="size-3" />
                <span>Components.tsx</span>
              </div>
            </div>
            <div className="h-48 sm:h-64 lg:h-80 overflow-hidden bg-dot-white/[0.05] relative">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="max-w-md w-full space-y-4 opacity-50">
                   <div className="h-8 w-3/4 rounded-lg bg-white/10 animate-pulse"></div>
                   <div className="h-4 w-full rounded-lg bg-white/5 animate-pulse"></div>
                   <div className="h-4 w-5/6 rounded-lg bg-white/5 animate-pulse"></div>
                   <div className="flex gap-4">
                     <div className="h-10 w-24 rounded-lg bg-white/10 animate-pulse"></div>
                     <div className="h-10 w-24 rounded-lg bg-white/10 animate-pulse"></div>
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
