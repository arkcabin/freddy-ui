"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Command as CommandIcon, Orbit, Zap } from "lucide-react";
import { DashedLines, GridPattern } from "@/components/shared";
import { cn } from "@/lib/utils";

/**
 * HERO 5: NEURAL AI
 * High-fidelity, layout-heavy AI SaaS Hero with structural borders and neural physics.
 */
export function Hero5() {
  const headline = "Hyper-Productive Teams Are Powered by Neural AI.".split(" ");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-44 pb-24 md:px-10 lg:pt-52">
      
      {/* 1. Generative Background Infrastructure */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        
        {/* Generative Radial Glow (AI Core) */}
        <div className="absolute top-1/4 left-1/2 h-[800px] w-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-primary)_0%,transparent_70%)]/15 blur-[120px]" />
        
        {/* Structural Grid (Neural Substrate) */}
        <GridPattern 
          width={60} 
          height={60} 
          className="stroke-primary/8 mask-[radial-gradient(100%_100%_at_top,white,transparent_80%)]" 
        />
        
        {/* Circuit Dashes */}
        <DashedLines className="h-20 stroke-primary/20 opacity-40 mix-blend-plus-lighter" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        
        {/* 2. Neural System Badge (Top Pill) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="mx-auto mb-10 flex w-fit items-center gap-2.5 rounded-full border border-primary/20 bg-primary/3 py-1 pl-1.5 pr-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary backdrop-blur-xl ring-1 ring-inset ring-primary/10 shadow-[0_0_15px_-5px_--theme(--color-primary/40%)]"
        >
          <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
            <Orbit className="size-3 animate-[spin_3s_linear_infinite]" />
            <div className="absolute inset-0 animate-ping rounded-full bg-primary/20 opacity-40" />
          </div>
          <span>Freddy Neural Protocol v2.5 Online</span>
        </motion.div>

        {/* 3. Staggered Neural Headline */}
        <h1 className="mb-8 font-heading text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tightest">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(12px)", y: 10, scale: 0.98 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              <span className={cn(
                "inline-block",
                word.toLowerCase() === "neural" && "bg-linear-to-b from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent drop-shadow-[0_0_8px_--theme(--color-primary/30%)]"
              )}>
                {word}&nbsp;
              </span>
            </motion.span>
          ))}
        </h1>

        {/* 4. Sub-description with sophisticated micro-typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto max-w-2xl"
        >
          <p className="mb-10 text-balance text-muted-foreground/90 md:text-xl md:leading-relaxed">
            The generative infrastructure for modern engineering teams. 
            Automate production-grade components, accelerate <br className="hidden md:block" />
            block registry growth, and ship with absolute precision.
          </p>

          {/* 5. CTAs with high-fidelity hover physics */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="group h-12 rounded-full border border-primary/20 bg-primary shadow-[0_10px_20px_-10px_theme(colors.primary/40%)] transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/50"
            >
              <span className="flex items-center gap-2 font-black tracking-tightest">
                <BrainCircuit className="size-4" />
                Start Generating For Free
              </span>
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-border/40 bg-background/50 px-8 font-bold backdrop-blur-md transition-all hover:bg-foreground/5 hover:text-foreground"
            >
              <span className="flex items-center gap-2">
                <CommandIcon className="size-4" />
                View Block Registry
              </span>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* 6. Generative Footer Elements (Depth layers) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] bg-linear-to-t from-background via-background/80 to-transparent" />
      <div className="absolute -bottom-1/2 left-1/2 h-[600px] w-full -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
    </section>
  );
}
