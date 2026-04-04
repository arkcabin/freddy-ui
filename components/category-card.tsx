"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Category } from "@/types";

/**
 * CategoryCard for the blocks registry browsing.
 * Reverted to standard rounded style as requested.
 */
export function CategoryCard({
  id,
  name,
  blocksCount,
  isNew,
  index,
}: Category & { index: number }) {
  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
      style={{
        animationDelay: `${index * 40}ms`,
        animationDuration: "600ms",
      }}
    >
      <Link
        className={cn(
          "group relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-border bg-card/30 text-center backdrop-blur-sm transition-all hover:border-border/80 hover:bg-card/50 hover:shadow-xl focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:outline-none dark:shadow-black/20"
        )}
        href={`/blocks/${id}`}
      >
        {isNew && (
          <div className="absolute top-0 right-0 z-20">
            <div className="flex items-center gap-1.5 rounded-bl-xl border-border border-b border-l bg-background/50 px-2.5 py-1 backdrop-blur-md transition-colors group-hover:bg-background/80">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-bold font-mono text-[9px] text-foreground uppercase tracking-widest">
                New
              </span>
            </div>
          </div>
        )}

        <div className="space-y-1 p-6">
          <h3 className="font-bold font-heading text-foreground text-lg leading-tight transition-colors group-hover:text-primary">
            {name}
          </h3>
          <p className="font-medium text-[10px] text-muted-foreground/80">
            {blocksCount} blocks
          </p>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="-z-10 absolute inset-0 translate-y-full bg-linear-to-t from-primary/5 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
      </Link>
    </div>
  );
}
