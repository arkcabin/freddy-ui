"use client";

import { motion } from "motion/react";
import type React from "react";
import { cn } from "@/lib/utils";
import { PulseMarker } from "./pulse-marker";

type SectionGridProps = {
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
  zIndex?: string;
};

function LightBeam({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      animate={{
        top: ["-20%", "120%"],
        opacity: [0, 0.8, 0],
      }}
      className="-left-px pointer-events-none absolute z-40 h-[150px] w-[2px] bg-linear-to-b from-transparent via-primary/50 to-transparent"
      initial={{ top: "-20%", opacity: 0 }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        delay,
      }}
    />
  );
}

function getPaddingFromOffset(offset: string): string {
  switch (offset) {
    case "top-32":
      return "pt-48";
    case "top-20":
      return "pt-32";
    case "top-0":
      return "pt-20";
    default:
      return offset.replace("top-", "pt-");
  }
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
  allowOverflow = true,
  showDoubleBorders = false,
  doubleBorderGap = "40px",
  zIndex = "z-20",
}: SectionGridProps) {
  const isTailwindGap =
    doubleBorderGap.startsWith("h-") ||
    doubleBorderGap.startsWith("top-") ||
    doubleBorderGap.startsWith("mt-");

  return (
    <section
      className={cn(
        "relative bg-background",
        zIndex,
        allowOverflow ? "overflow-visible" : "overflow-hidden",
        className
      )}
    >
      {/* Boxed Grid Layer (Vertical & Horizontal Borders) - Elevated to z-[60] to ensure priority over masks / sticky header (z-50) */}
      <div className="pointer-events-none absolute inset-x-0 inset-y-0 z-[60]">
        {/* Full-width marker lines (outside boxed container) */}
        {showTopMarkers && (
          <>
            <div
              className={cn(
                "absolute right-0 left-0 border-border border-t border-dashed",
                markerOffset
              )}
            />
            {showDoubleBorders && (
              <div
                className={cn(
                  "absolute right-0 left-0 border-border border-t border-dashed",
                  markerOffset,
                  isTailwindGap ? doubleBorderGap : ""
                )}
                style={
                  isTailwindGap
                    ? {}
                    : { transform: `translateY(${doubleBorderGap})` }
                }
              />
            )}
          </>
        )}
        {showBottomMarkers && (
          <>
            <div className="absolute right-0 bottom-0 left-0 border-border border-t border-dashed" />
            {showDoubleBorders && (
              <div
                className={cn(
                  "absolute right-0 left-0 border-border border-t border-dashed",
                  isTailwindGap ? `-${doubleBorderGap}` : ""
                )}
                style={
                  isTailwindGap
                    ? {}
                    : { bottom: doubleBorderGap, transform: "translateY(0)" }
                }
              />
            )}
          </>
        )}

        {/* Main boxed container with vertical borders and markers */}
        <div
          className={cn(
            "relative mx-auto h-full w-full max-w-6xl border-border border-r border-l border-dashed"
          )}
        >
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
                  "absolute inset-y-0 border-border border-l border-dashed",
                  isTailwindGap ? `-${doubleBorderGap.replace("h-", "w-")}` : ""
                )}
                style={isTailwindGap ? {} : { left: `-${doubleBorderGap}` }}
              />
              <div
                className={cn(
                  "absolute inset-y-0 border-border border-r border-dashed",
                  isTailwindGap ? `-${doubleBorderGap.replace("h-", "w-")}` : ""
                )}
                style={isTailwindGap ? {} : { right: `-${doubleBorderGap}` }}
              />
            </>
          )}
          {showTopMarkers && markerType === "plus" && (
            <div className={cn("absolute right-0 left-0", markerOffset)}>
              <PulseMarker />
              <PulseMarker className="-right-[7px] left-auto" />

              {showDoubleBorders && (
                <>
                  {/* Top-Outer Corner Left: Outer-Outer Intersection */}
                  <div
                    className="absolute z-50"
                    style={{
                      left: `-${doubleBorderGap}`,
                      top: doubleBorderGap,
                    }}
                  >
                    <PulseMarker />
                  </div>
                  {/* Top-Outer Corner Right: Outer-Outer Intersection */}
                  <div
                    className="absolute z-50"
                    style={{
                      right: `-${doubleBorderGap}`,
                      top: doubleBorderGap,
                    }}
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
            <div className={cn("absolute right-0 left-0", markerOffset)}>
              <div className="-left-[2.5px] -top-[2.5px] absolute size-[5px] rounded-full bg-border/60" />
              <div className="-right-[2.5px] -top-[2.5px] absolute size-[5px] rounded-full bg-border/60" />
            </div>
          )}
          {showBottomMarkers && markerType === "plus" && (
            <div className="absolute right-0 bottom-0 left-0">
              <PulseMarker />
              <PulseMarker className="-right-[7px] left-auto" />
              {showDoubleBorders && (
                <>
                  <div
                    className="absolute z-50"
                    style={{
                      left: `-${doubleBorderGap}`,
                      bottom: doubleBorderGap,
                    }}
                  >
                    <PulseMarker />
                  </div>
                  <div
                    className="absolute z-50"
                    style={{
                      right: `-${doubleBorderGap}`,
                      bottom: doubleBorderGap,
                    }}
                  >
                    <PulseMarker />
                  </div>
                </>
              )}
            </div>
          )}
          {showBottomMarkers && markerType === "dot" && (
            <div className="absolute right-0 bottom-0 left-0">
              <div className="-bottom-[2.5px] -left-[2.5px] absolute size-[5px] rounded-full bg-border/60" />
              <div className="-bottom-[2.5px] -right-[2.5px] absolute size-[5px] rounded-full bg-border/60" />
            </div>
          )}
        </div>
      </div>

      {/* Content Container - Standardizing mx-auto and syncing top-padding with markerOffset to ensure content sits INSIDE the frame with a premium "breathing room" gap */}
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10",
          showTopMarkers && getPaddingFromOffset(markerOffset),
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
