"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AiWorkHeader } from "./header";

/**
 * AI-Work Content Wrapper
 * Manages the scroll-sync logic and provides the "slide-over" layering context.
 */
export function AiWorkWrapper({
  children,
  isAnnouncementVisible,
}: {
  children: React.ReactNode;
  isAnnouncementVisible: boolean;
}) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isFullWidth, setIsFullWidth] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Stage 1: Full-width snap once past announcement (32px)
      setIsFullWidth(scrollY > 32 || !isAnnouncementVisible);

      // Stage 2: Transparency snap once Hero reaches middle of Header (32 + 40 = 72px)
      setIsScrolled(scrollY > 72);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAnnouncementVisible]);

  const activeFullWidth = mounted ? isFullWidth : false;

  return (
    <div
      className={cn(
        "relative z-20 bg-background shadow-[0_-20px_80px_rgba(0,0,0,0.1)] transition-all duration-300",
        activeFullWidth
          ? "mx-0 rounded-none border-none"
          : "mx-2 rounded-t-2xl border-border/50 border-t border-r border-l"
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === AiWorkHeader) {
          // Pass states only after mounting to prevent mismatch
          return React.cloneElement(
            child as React.ReactElement<
              React.ComponentProps<typeof AiWorkHeader>
            >,
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
