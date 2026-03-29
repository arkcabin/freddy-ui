"use client";

import { Github } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function DaytonaHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background font-sans tracking-tight">
      {/* Top Announcement Bar */}
      <div className="flex h-10 items-center justify-center border-border border-b bg-muted/40 px-4 text-center">
        <p className="font-medium text-[13px] text-muted-foreground">
          Freddy UI Pro: Elevate your SaaS dashboard with 50+ new premium blocks
          {" // "}
          <span className="cursor-pointer text-foreground underline underline-offset-4 transition-colors hover:text-primary">
            Get Pro →
          </span>
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          {/* Logo Section with Separator */}
          <div className="flex items-center gap-4">
            <Logo className="h-6" />
            <span aria-hidden="true" className="font-thin text-2xl text-border">
              /
            </span>
          </div>

          {/* All-Caps Navigation Links */}
          <div className="hidden items-center gap-6 md:flex">
            {["Components", "Blocks", "Templates", "Showcase", "Docs"].map(
              (item) => (
                <a
                  className="font-bold text-[11px] text-muted-foreground uppercase tracking-[0.2em] transition-colors hover:text-foreground"
                  href="#"
                  key={item}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button
            className="hidden font-bold text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:inline-flex"
            type="button"
            variant="ghost"
          >
            Log In
          </Button>

          {/* GitHub Stars Mock Button */}
          <Button
            className="flex h-9 items-center gap-2 rounded-lg border-border bg-muted/30 px-3 transition-all hover:bg-muted/50 active:scale-[0.98]"
            type="button"
            variant="outline"
          >
            <Github className="h-4 w-4" />
            <div className="flex items-center gap-2">
              <span className="h-4 w-px bg-border" />
              <span className="font-bold text-[13px] text-foreground tabular-nums">
                50.5k
              </span>
            </div>
          </Button>
        </div>
      </nav>
    </header>
  );
}
