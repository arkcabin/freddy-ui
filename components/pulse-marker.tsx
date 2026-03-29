"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Plus } from "./plus";

/**
 * A pulsing marker component that wraps the standard Plus icon.
 * Features a subtle "breathing" animation and a soft outer glow.
 * drop-in replacement for Plus component.
 */
export function PulseMarker({ className }: { className?: string }) {
  return (
    <div className={cn("-top-[7px] -left-[7px] absolute z-50", className)}>
      {/* Outer Glow Ring */}
      <motion.div
        animate={{
          scale: [1, 2, 1],
          opacity: [0.1, 0.5, 0.1],
        }}
        className="pointer-events-none absolute inset-x-0 inset-y-0 rounded-full bg-primary/30 blur-md"
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Primary Icon with subtle scale pulse */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        className="relative z-10"
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Plus className="static size-3.5 text-muted-foreground/80" />
      </motion.div>
    </div>
  );
}
