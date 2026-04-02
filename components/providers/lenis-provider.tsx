"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * LenisProvider component for smooth scrolling.
 * Configured with Apple-style high-fidelity physics.
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        lerp: 0.1,
        orientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
