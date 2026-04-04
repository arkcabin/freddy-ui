"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
import { MainHeader } from "./header/header-2";

/**
 * AI-Work Content Wrapper
 * Manages the scroll-sync logic and provides the "slide-over" layering context.
 */
export function HomePageWrapper({
  children,
  isAnnouncementVisible,
}: {
  children: React.ReactNode;
  isAnnouncementVisible: boolean;
}) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isFullWidth, setIsFullWidth] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const { scrollY } = useScroll();

  // Optimized: Only trigger React state updates when scroll crosses specific thresholds
  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextFullWidth = latest > 32 || !isAnnouncementVisible;
    const nextScrolled = latest > 72;

    // Manual identity check to prevent unnecessary re-render triggers
    setIsFullWidth((prev) => (prev !== nextFullWidth ? nextFullWidth : prev));
    setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const activeFullWidth = mounted ? isFullWidth : false;

  return (
    <div
      className={cn(
        "relative z-20 bg-background transition-all duration-300",
        activeFullWidth
          ? "mx-0 rounded-none border-none"
          : "mx-2 rounded-t-2xl border-border/20 border-t border-dashed"
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === MainHeader) {
          // Pass states only after mounting to prevent mismatch
          return React.cloneElement(
            child as React.ReactElement<{
              isScrolled: boolean;
              isFullWidth: boolean;
            }>,
            {
              isScrolled: mounted ? isScrolled : false,
              isFullWidth: activeFullWidth,
            }
          );
        }
        return child;
      })}
    </div>
  );
}
