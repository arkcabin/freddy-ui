"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

/**
 * HERO 3: CINEMATIC MINIMALIST
 * High-fidelity, typography-focused hero with staggered word reveal.
 */
export function Hero3() {
  const words = "Engineered for High-Performance Teams.".split(" ");

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 md:px-10 md:pt-32">
      
      {/* 1. Background Ambience (No Violet/Purple) */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-background" />
        {/* Subtle, premium neutral glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-foreground),transparent_70%)]/4" />
        <div className="absolute top-0 h-px w-full bg-linear-to-r from-transparent via-border to-transparent opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        
        {/* 2. Badge Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-border/60 bg-muted/30 py-1 pl-3 pr-3.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground backdrop-blur-md"
        >
          <Sparkles className="size-3 text-primary/80" />
          <span>New Release: Arkcabin v1.2</span>
          <span className="h-3 w-px bg-border" />
          <Link href="#" className="flex items-center gap-1 transition-colors hover:text-foreground">
            Explore <ArrowRight className="size-2.5" />
          </Link>
        </motion.div>

        {/* 3. Staggered Headline */}
        <h1 className="mb-8 font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </h1>

        {/* 4. Sub-description with balanced text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-balance text-[17px] leading-relaxed text-muted-foreground/80 md:text-xl"
        >
          Build, ship, and scale your SaaS with the absolute cleanest <br className="hidden md:block" /> 
          shadcn/ui blocks ever created. Minimalist by design, <br className="hidden md:block" />
          premium by default.
        </motion.p>

        {/* 5. CTAs with high-fidelity micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="group h-12 rounded-full px-8 text-[15px] font-bold shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            Get Full Access
            <div className="ml-2 flex size-5 items-center justify-center rounded-full bg-background/20 transition-transform group-hover:rotate-45">
              <ArrowRight className="size-3" />
            </div>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="h-12 rounded-full px-8 text-[15px] font-bold text-muted-foreground transition-all hover:bg-foreground/5 hover:text-foreground active:scale-95"
          >
            View Demo Sections
          </Button>
        </motion.div>
      </div>

      {/* 6. Decorative Elements — Neutral Spotlight Beams */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-t from-background via-background/40 to-transparent" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 z-0 h-[500px] w-full -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-foreground)_0%,transparent_100%)]/3 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-1/2 left-1/2 z-0 h-[600px] w-full -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-foreground)_0%,transparent_100%)]/5 blur-3xl" />
    </section>
  );
}
