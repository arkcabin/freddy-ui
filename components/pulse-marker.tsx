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
    <div
      aria-hidden="true"
      className={cn("-top-[7px] -left-[7px] absolute z-50", className)}
    >
      {/* Primary Icon - Static for Minimal Look */}
      <div className="relative z-10">
        <Plus className="static size-3.5 text-muted-foreground/80" />
      </div>
    </div>
  );
}
