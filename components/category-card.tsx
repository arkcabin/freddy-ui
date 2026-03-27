"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Category } from "@/types";

import { cn } from "@/lib/utils";
import { CategorySkeleton } from "./category-skeleton";

export function CategoryCard({ id, name, blocksCount, isNew, index }: Category & { index: number }) {
  // Determine precise layout based on the reference image
  const layout = ["auth", "faqs", "contact", "integrations"].includes(id)
    ? "split"
    : ["feature", "pricing", "testimonials", "footer", "logo-cloud", "image-gallery"].includes(id)
      ? "stack"
      : id === "cta"
        ? "cta"
        : id === "header"
          ? "header"
          : "center";

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
        className={cn(
          "group relative flex aspect-video overflow-hidden rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all hover:border-border/80 hover:bg-card/50 hover:shadow-xl dark:shadow-black/20",
          layout === "stack" && "flex-col",
          layout === "header" && "flex-col",
          layout === "center" && "items-center justify-center text-center"
        )}
        href={`/${id}`}
      >
        {isNew && (
          <div className="absolute top-0 right-0 z-20">
            <div className="flex items-center gap-1.5 rounded-bl-xl border-b border-l border-border bg-background/50 px-2.5 py-1 backdrop-blur-md transition-colors group-hover:bg-background/80">
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

        {layout === "split" && (
          <>
            <div className="flex w-[40%] flex-col justify-start border-r border-border/50 p-4 sm:p-5">
              <div className="space-y-1">
                <p className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {name}
                </p>
                <p className="text-[10px] font-medium text-muted-foreground/80">
                  {blocksCount} blocks
                </p>
              </div>
            </div>
            <div className="relative flex-1 bg-muted/5 transition-colors group-hover:bg-muted/10">
              <CategorySkeleton id={id} />
              <div className="absolute inset-0 bg-linear-to-tr from-background/5 to-transparent shadow-inner" />
            </div>
          </>
        )}

        {layout === "stack" && (
          <>
            <div className="p-4 text-center">
              <p className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                {name}
              </p>
              <p className="text-[10px] font-medium text-muted-foreground/80">
                {blocksCount} blocks
              </p>
            </div>
            <div className="relative flex-1 bg-muted/5 group-hover:bg-muted/10 transition-colors">
              <CategorySkeleton id={id} />
              <div className="absolute inset-0 bg-linear-to-b from-background/5 to-transparent" />
            </div>
          </>
        )}

        {layout === "center" && (
          <>
            <div className="absolute inset-0 size-full opacity-60">
              <CategorySkeleton id={id} />
            </div>
            <div className="relative z-10 space-y-1">
              <p className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {name}
              </p>
              <p className="text-[10px] font-medium text-muted-foreground/80">
                {blocksCount} blocks
              </p>
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background/60" />
          </>
        )}

        {layout === "cta" && (
          <>

            <div className="flex flex-1 flex-col items-center justify-center gap-2 p-4">
              <div>
                <p className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {name}
                </p>
                <p className="text-[10px] font-medium text-muted-foreground/80">
                  {blocksCount} blocks
                </p>
              </div>
              <CategorySkeleton id={id} className="h-auto w-auto" />
            </div>
          </>
        )}

        {layout === "header" && (
          <>
            <div className="relative flex-1 bg-muted/5 transition-colors group-hover:bg-muted/10">
              <CategorySkeleton id={id} />
            </div>
            <div className="p-4 pt-2 text-center">
              <p className="text-[10px] font-medium text-muted-foreground/80">
                {blocksCount} blocks
              </p>
              <p className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {name}
              </p>
            </div>
          </>
        )}

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 -z-10 translate-y-full bg-linear-to-t from-primary/5 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
      </Link>
    </motion.div>
  );
}
