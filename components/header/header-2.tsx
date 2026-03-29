"use client";

import { Asterisk, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiteNav } from "./nav";

/**
 * Header
 * Sticky, minimalist navigation with glassmorphism and theme toggle.
 */
export function MainHeader({ isFullWidth }: { isFullWidth: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Avoid hydration mismatch by waiting for mount
  const activeScrolled = mounted ? scrolled : false;
  const _activeFullWidth = mounted ? isFullWidth : false;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        activeScrolled
          ? "bg-transparent"
          : "bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(120,119,198,0.08),transparent)]"
      )}
    >
      {/* Architectural Grid Frame - Integrated directly into the header for sticky support */}
      <div
        className={cn(
          "relative mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between border-dashed px-4 transition-all duration-300 md:px-6",
          activeScrolled ? "border-transparent" : "border-border border-x"
        )}
      >
        {!activeScrolled && (
          <>
            {/* Vertical Dual (Left/Right) - Added back as requested */}
            <div className="-left-[40px] pointer-events-none absolute inset-y-0 border-border border-l border-dashed" />
            <div className="-right-[40px] pointer-events-none absolute inset-y-0 border-border border-r border-dashed" />
          </>
        )}

        {/* Logo */}
        <div className="flex flex-1 items-center gap-2">
          <div
            className={cn(
              "flex items-center gap-1 rounded-full px-5",
              activeScrolled ? "bg-secondary/30 p-1 backdrop-blur-md" : ""
            )}
          >
            <Logo className="h-6" />
            <span className="inline-flex h-3.5 items-center justify-center rounded-full bg-accent/10 px-1.5 py-px font-black text-[7px] text-foreground uppercase leading-none tracking-widest ring-1 ring-foreground/20 ring-inset">
              Beta
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden rounded-full border border-border bg-secondary/30 p-1 backdrop-blur-md md:block">
            <SiteNav />
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="group relative rounded-full shadow-[0_0_0_rgba(var(--primary),0)] ring-1 ring-border/50 transition-all hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] hover:ring-primary/40 active:scale-95"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              size="icon"
              title="Toggle Theme"
              variant="ghost"
            >
              <Asterisk className="h-5 w-5 animate-[spin_15s_linear_infinite] text-muted-foreground transition-all duration-500 group-hover:rotate-180 group-hover:text-primary" />
              <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              size="icon"
              variant="ghost"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background/95 p-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-6">
            <SiteNav isMobile />
            <div className="h-px w-full bg-border/50 border-dashed" />
            <div className="flex flex-col gap-4">
              <Button className="w-full rounded-xl" size="lg">
                Get full Access
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
