"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Plus } from "./plus";

interface SectionGridProps {
  children: React.ReactNode;
  showTopMarkers?: boolean;
  showBottomMarkers?: boolean;
  markerType?: "dot" | "plus";
  markerOffset?: string;
  className?: string;
  containerClassName?: string;
}

/**
 * Reusable SectionGrid component for the "Boxed" architectural layout.
 * Provides consistent vertical dashed lines and intersection markers.
 * Standardized on full border visibility for high-fidelity professional designs.
 */
export function SectionGrid({
  children,
  showTopMarkers = true,
  showBottomMarkers = true,
  markerType = "plus",
  markerOffset = "top-32",
  className,
  containerClassName,
}: SectionGridProps) {
  return (
    <section className={cn("relative z-20 overflow-hidden bg-background", className)}>
      {/* Boxed Grid Layer (Vertical Borders Only) */}
      <div className="absolute inset-x-0 inset-y-0 z-0 overflow-hidden pointer-events-none">
        {/* Using standard border opacity to match the main site layout perfectly */}
        <div className="relative h-full mx-auto w-full max-w-6xl border-l border-r border-dashed border-border">
          {/* Top Markers */}
          {showTopMarkers && (
            <>
              {markerType === "plus" ? (
                <>
                  <Plus className={cn("absolute -left-[7.5px] text-border/60", markerOffset)} />
                  <Plus className={cn("absolute -right-[7.5px] text-border/60", markerOffset)} />
                </>
              ) : (
                <>
                  <div className={cn("absolute -left-[2.5px] size-[5px] rounded-full bg-border/60", markerOffset)} />
                  <div className={cn("absolute -right-[2.5px] size-[5px] rounded-full bg-border/60", markerOffset)} />
                </>
              )}
            </>
          )}

          {/* Bottom Markers - Positioned exactly at the section transition point */}
          {showBottomMarkers && (
            <>
              {markerType === "plus" ? (
                <>
                  <Plus className="absolute -left-[7.5px] bottom-0 text-border/60" />
                  <Plus className="absolute -right-[7.5px] bottom-0 text-border/60" />
                </>
              ) : (
                <>
                  <div className="absolute -left-[2.5px] bottom-0 size-[5px] rounded-full bg-border/60" />
                  <div className="absolute -right-[2.5px] bottom-0 size-[5px] rounded-full bg-border/60" />
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Content Container - Standardizing mx-auto to ensure vertical line alignment */}
      <div className={cn("relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
