"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PulseMarker } from "./pulse-marker";
import { motion } from "motion/react";

interface SectionGridProps {
  children: React.ReactNode;
  showTopMarkers?: boolean;
  showBottomMarkers?: boolean;
  markerType?: "dot" | "plus";
  markerOffset?: string;
  className?: string;
  containerClassName?: string;
  allowOverflow?: boolean;
  showDoubleBorders?: boolean;
  doubleBorderGap?: string;
}

function LightBeam({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ top: "-20%", opacity: 0 }}
      animate={{ 
        top: ["-20%", "120%"],
        opacity: [0, 0.8, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }}
      className="absolute -left-px w-[2px] h-[150px] bg-linear-to-b from-transparent via-primary/50 to-transparent z-40 pointer-events-none"
    />
  );
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
  allowOverflow = false,
  showDoubleBorders = false,
  doubleBorderGap = "40px",
}: SectionGridProps) {
  const isTailwindGap = doubleBorderGap.startsWith("h-") || doubleBorderGap.startsWith("top-") || doubleBorderGap.startsWith("mt-");

  return (
    <section className={cn(
      "relative z-20 bg-background",
      !allowOverflow && "overflow-hidden",
      className
    )}>
      {/* Boxed Grid Layer (Vertical & Horizontal Borders) - Elevated to z-30 to ensure overlay visibility */}
      <div className="absolute inset-x-0 inset-y-0 z-30 pointer-events-none">

        {/* Full-width marker lines (outside boxed container) */}
        {showTopMarkers && (
          <>
            <div className={cn("absolute left-0 right-0 border-t border-dashed border-border/80", markerOffset)} />
            {showDoubleBorders && (
              <div
                className={cn(
                  "absolute left-0 right-0 border-t border-dashed border-border",
                  markerOffset,
                  isTailwindGap ? doubleBorderGap : ""
                )}
                style={!isTailwindGap ? { transform: `translateY(${doubleBorderGap})` } : {}}
              />
            )}
          </>
        )}

        {showBottomMarkers && (
          <>
            <div className="absolute bottom-0 left-0 right-0 border-t border-dashed border-border/80" />
            {showDoubleBorders && (
              <div
                className={cn(
                  "absolute left-0 right-0 border-t border-dashed border-border",
                  isTailwindGap ? `-${doubleBorderGap}` : ""
                )}
                style={!isTailwindGap ? { bottom: `-${doubleBorderGap}` } : {}}
              />
            )}
          </>
        )}

        {/* Main boxed container with vertical borders and markers */}
        <div className={cn(
          "relative h-full mx-auto w-full max-w-6xl border-l border-r border-dashed border-border/80"
        )}>
          {/* Vertical Light Beams */}
          <div className="absolute inset-y-0 left-0">
             <LightBeam />
          </div>
          <div className="absolute inset-y-0 right-0">
             <LightBeam delay={2} />
          </div>

          {/* Vertical Double Borders (Left & Right) */}
          {showDoubleBorders && (
            <>
              <div
                className={cn(
                  "absolute inset-y-0 border-l border-dashed border-border",
                  isTailwindGap ? `-${doubleBorderGap.replace('h-', 'w-')}` : ""
                )}
                style={!isTailwindGap ? { left: `-${doubleBorderGap}` } : {}}
              />
              <div
                className={cn(
                  "absolute inset-y-0 border-r border-dashed border-border",
                  isTailwindGap ? `-${doubleBorderGap.replace('h-', 'w-')}` : ""
                )}
                style={!isTailwindGap ? { right: `-${doubleBorderGap}` } : {}}
              />
            </>
          )}
          {/* Top Markers (Boxed) */}
          {showTopMarkers && markerType === "plus" && (
            <div className={cn("absolute left-0 right-0", markerOffset)}>
              <PulseMarker />
              <PulseMarker className="left-auto -right-[7px]" />

              {showDoubleBorders && (
                <>
                  {/* Top-Outer Corner Left: Outer-Outer Intersection */}
                  <div
                    className="absolute z-50"
                    style={{ left: `-${doubleBorderGap}`, top: doubleBorderGap }}
                  >
                    <PulseMarker />
                  </div>
                  {/* Top-Outer Corner Right: Outer-Outer Intersection */}
                  <div
                    className="absolute z-50"
                    style={{ right: `-${doubleBorderGap}`, top: doubleBorderGap }}
                  >
                    <PulseMarker />
                  </div>

                  {/* Top-Outer Corner Left: Outer-Vertical / Inner-Horizontal Intersection */}
                  <div
                    className="absolute z-50"
                    style={{ left: `-${doubleBorderGap}`, top: "0px" }}
                  >
                    <PulseMarker />
                  </div>
                  {/* Top-Outer Corner Right: Outer-Vertical / Inner-Horizontal Intersection */}
                  <div
                    className="absolute z-50"
                    style={{ right: `-${doubleBorderGap}`, top: "0px" }}
                  >
                    <PulseMarker />
                  </div>

                  {/* Top-Outer Corner Left: Inner-Vertical / Outer-Horizontal Intersection */}
                  <div
                    className="absolute z-50"
                    style={{ left: "0px", top: doubleBorderGap }}
                  >
                    <PulseMarker />
                  </div>
                  {/* Top-Outer Corner Right: Inner-Vertical / Outer-Horizontal Intersection */}
                  <div
                    className="absolute z-50"
                    style={{ right: "0px", top: doubleBorderGap }}
                  >
                    <PulseMarker />
                  </div>
                </>
              )}
            </div>
          )}

          {showTopMarkers && markerType === "dot" && (
            <div className={cn("absolute left-0 right-0", markerOffset)}>
              <div className="absolute -left-[2.5px] -top-[2.5px] size-[5px] rounded-full bg-border/60" />
              <div className="absolute -right-[2.5px] -top-[2.5px] size-[5px] rounded-full bg-border/60" />
            </div>
          )}

          {/* Bottom Markers (Boxed) */}
          {showBottomMarkers && (
            <div className="absolute left-0 right-0 bottom-0">
              {markerType === "plus" ? (
                <>
                  <PulseMarker className="top-auto -bottom-[7px]" />
                  <PulseMarker className="left-auto top-auto -right-[7px] -bottom-[7px]" />

                  {showDoubleBorders && (
                    <>
                      {/* Bottom-Outer Left Corner: Outer-Outer Intersection */}
                      <div
                        className="absolute z-50"
                        style={{ left: `-${doubleBorderGap}`, bottom: `-${doubleBorderGap}` }}
                      >
                        <PulseMarker />
                      </div>
                      {/* Bottom-Outer Right Corner: Outer-Outer Intersection */}
                      <div
                        className="absolute z-50"
                        style={{ right: `-${doubleBorderGap}`, bottom: `-${doubleBorderGap}` }}
                      >
                        <PulseMarker />
                      </div>

                      {/* Bottom-Outer Left Corner: Outer-Vertical / Inner-Horizontal Intersection */}
                      <div
                        className="absolute z-50"
                        style={{ left: `-${doubleBorderGap}`, bottom: "0px" }}
                      >
                        <PulseMarker />
                      </div>
                      {/* Bottom-Outer Right Corner: Outer-Vertical / Inner-Horizontal Intersection */}
                      <div
                        className="absolute z-50"
                        style={{ right: `-${doubleBorderGap}`, bottom: "0px" }}
                      >
                        <PulseMarker />
                      </div>

                      {/* Bottom-Outer Left Corner: Inner-Vertical / Outer-Horizontal Intersection */}
                      <div
                        className="absolute z-50"
                        style={{ left: "0px", bottom: `-${doubleBorderGap}` }}
                      >
                        <PulseMarker />
                      </div>
                      {/* Bottom-Outer Right Corner: Inner-Vertical / Outer-Horizontal Intersection */}
                      <div
                        className="absolute z-50"
                        style={{ right: "0px", bottom: `-${doubleBorderGap}` }}
                      >
                        <PulseMarker />
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="absolute -left-[2.5px] -bottom-[2.5px] size-[5px] rounded-full bg-zinc-500" />
                  <div className="absolute -right-[2.5px] -bottom-[2.5px] size-[5px] rounded-full bg-zinc-500" />
                </>
              )}
            </div>
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
