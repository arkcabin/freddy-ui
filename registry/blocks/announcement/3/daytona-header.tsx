"use client";

import React from "react";
import { Github, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function DaytonaHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background font-sans tracking-tight">
      {/* Top Announcement Bar */}
      <div className="flex h-10 items-center justify-center border-b border-border bg-muted/40 px-4 text-center">
        <p className="text-[13px] font-medium text-muted-foreground">
          Freddy UI Pro: Elevate your SaaS dashboard with 50+ new premium blocks // <span className="text-foreground transition-colors hover:text-primary cursor-pointer underline underline-offset-4">Get Pro →</span>
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          {/* Logo Section with Separator */}
          <div className="flex items-center gap-4">
            <Logo className="h-6" />
            <span className="text-2xl font-thin text-border" aria-hidden="true">/</span>
          </div>

          {/* All-Caps Navigation Links */}
          <div className="hidden items-center gap-6 md:flex">
            {["Components", "Blocks", "Templates", "Showcase", "Docs"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button 
            type="button"
            variant="ghost" 
            className="hidden text-[13px] font-bold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:inline-flex"
          >
            Log In
          </Button>
          
          {/* GitHub Stars Mock Button */}
          <Button 
            type="button"
            variant="outline" 
            className="flex h-9 items-center gap-2 rounded-lg border-border bg-muted/30 px-3 transition-all hover:bg-muted/50 active:scale-[0.98]"
          >
            <Github className="h-4 w-4" />
            <div className="flex items-center gap-2">
              <span className="h-4 w-px bg-border" />
              <span className="text-[13px] font-bold tabular-nums text-foreground">50.5k</span>
            </div>
          </Button>
        </div>
      </nav>
    </header>
  );
}
