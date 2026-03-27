"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Category } from "@/types";

export function CategoryCard({ id, name, blocksCount, isNew, index }: Category & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.05,
      }}
    >
      <Link
        className="group relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/20 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-muted/40 hover:shadow-lg"
        href={`/${id}`}
      >
        {isNew && (
          <div className="absolute -top-px -right-px z-20">
            <div className="flex items-center gap-1.5 rounded-bl-xl border-b border-l border-border bg-muted/50 px-2.5 py-1 backdrop-blur-md transition-colors group-hover:bg-muted/80">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
              </span>
              <span className="font-mono text-[9px] font-bold tracking-widest text-foreground uppercase">
                New
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-1">
          <p className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </p>
          <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
            {blocksCount} {blocksCount === 1 ? "block" : "blocks"}
          </p>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 -z-10 translate-y-full bg-linear-to-t from-primary/5 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
      </Link>
    </motion.div>
  );
}
