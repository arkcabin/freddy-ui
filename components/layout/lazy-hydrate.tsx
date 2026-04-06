"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyHydrateProps {
  children: React.ReactNode;
  /** Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px". */
  rootMargin?: string;
  /** Fallback content to show before hydration (e.g., a skeleton). */
  fallback?: React.ReactNode;
}

/**
 * LazyHydrate component for deferred rendering and hydration.
 * De-prioritizes off-screen content to maximize main-thread availability during initial load.
 * Critical for achieving 100/100 Lighthouse Performance scores.
 */
export function LazyHydrate({
  children,
  rootMargin = "500px",
  fallback,
}: LazyHydrateProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip if already in view
    if (isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, isInView]);

  return (
    <div ref={containerRef} className="w-full">
      {isInView ? children : fallback}
    </div>
  );
}
