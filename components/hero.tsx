"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="relative z-10 cpx space-y-6 py-20 text-center lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
        </span>
        <span className="font-mono text-[10px] font-bold tracking-widest text-white/70 uppercase">
          New Blocks Added Weekly
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="font-heading text-5xl font-bold tracking-tight text-gradient sm:text-7xl"
      >
        Beautiful Shadcn <br /> UI Blocks
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-lg text-muted-foreground"
      >
        A premium collection of beautifully crafted, production-ready blocks for your next modern web application. Built with Shadcn UI and Tailwind CSS.
      </motion.p>
    </div>
  );
}
