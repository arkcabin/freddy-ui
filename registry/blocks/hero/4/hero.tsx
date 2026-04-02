"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { GridPattern } from "@/components/shared";
import { Hero4Cards } from "./cards";

/**
 * HERO 4: BOXED STRUCTURAL
 * Layout-heavy hero with structural borders and interactive feature grid.
 */
export function Hero4() {
  return (
    <section className="relative mx-auto w-full max-w-7xl border-x bg-background px-4 pt-24 pb-20 md:px-10 md:pt-32 lg:px-20">
      
      {/* 1. Corner Markers & Structural Elements */}
      <div className="absolute -top-3 -left-3 size-6 text-muted-foreground/40">
        <Plus className="size-full" strokeWidth={1} />
      </div>
      <div className="absolute -top-3 -right-3 size-6 text-muted-foreground/40">
        <Plus className="size-full" strokeWidth={1} />
      </div>
      <div className="absolute -bottom-3 -left-3 size-6 text-muted-foreground/40">
        <Plus className="size-full" strokeWidth={1} />
      </div>
      <div className="absolute -bottom-3 -right-3 size-6 text-muted-foreground/40">
        <Plus className="size-full" strokeWidth={1} />
      </div>

      {/* 2. Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <GridPattern height={40} width={40} className="mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* 3. Badge with Structural Feel */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-3 rounded-md border bg-muted/40 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-foreground ring-1 ring-inset ring-foreground/10"
        >
          <div className="size-1.5 rounded-full bg-primary" />
          Ship faster with Freddy
        </motion.div>

        {/* 4. Headline / Copy */}
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-heading text-[clamp(2rem,6vw,4rem)] font-bold leading-none tracking-tight"
          >
            A New Standard for <br />
            Component Libraries.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-balance text-muted-foreground/80 md:text-lg"
          >
            Pre-built blocks for every SaaS category. Expertly crafted with <br className="hidden md:block" /> 
            Shadcn UI, Tailwind CSS, and precise Framer Motion physics.
          </motion.p>
        </div>

        {/* 5. CTAs */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="mb-20 flex flex-wrap items-center gap-4"
        >
          <Button
            size="lg"
            className="h-11 rounded-none px-8 font-bold tracking-tight shadow-md transition-all active:scale-95"
          >
            View Documentation
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 rounded-none px-8 font-bold transition-all hover:bg-muted active:scale-95"
          >
            Browse Categories
          </Button>
        </motion.div>

        {/* 6. Featured Cards Grid */}
        <div className="w-full">
          <Hero4Cards />
        </div>
      </div>

      {/* Bottom Horizontal Border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
    </section>
  );
}
