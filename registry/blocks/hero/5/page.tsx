"use client";

import React from "react";
import { Hero5 } from "./hero";
import { Header5 } from "../../header/5/header";

/**
 * HERO 5 BLOCK (Page Entry)
 * High-fidelity AI SaaS Hero with integrated Neural Header.
 */
export default function Hero5Page() {
  return (
    <div className="w-full min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <Header5 />
      <main>
        <Hero5 />
      </main>
    </div>
  );
}
