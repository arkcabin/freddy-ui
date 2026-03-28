"use client";

import React from "react";
import { Hero2 } from "./hero";
import { DemoLayout } from "@/components/demo-layout";

export default function Hero2Page() {
  return (
    <div className="w-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <Hero2 />
    </div>
  );
}
