"use client";

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
        "relative z-20 bg-background transition-all duration-300",
        activeFullWidth
          ? "mx-0 rounded-none border-none"
          : "mx-2 rounded-t-2xl border-t border-dashed border-border/20"
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === MainHeader) {
          // Pass states only after mounting to prevent mismatch
          return React.cloneElement(child as React.ReactElement<any>, {
            isScrolled: mounted ? isScrolled : false,
            isFullWidth: activeFullWidth,
          });
        }
        return child;
      })}
    </div>
  );
}
