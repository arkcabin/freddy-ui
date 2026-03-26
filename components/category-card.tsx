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
        className="group relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/6 hover:shadow-[0_0_20px_rgba(255,255,255,0.02)]"
        href={`/${id}`}
      >
        {isNew && (
          <div className="absolute top-2 left-2 z-20">
            <span className="rounded-sm bg-white px-1.5 py-0.5 font-mono text-[8px] font-bold text-black uppercase tracking-wider">
              New
            </span>
          </div>
        )}

        <div className="flex flex-col items-center gap-1">
          <p className="font-heading text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
            {name}
          </p>
          <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
            {blocksCount} {blocksCount === 1 ? "block" : "blocks"}
          </p>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 -z-10 translate-y-full bg-linear-to-t from-white/5 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
      </Link>
    </motion.div>
  );
}
