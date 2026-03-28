"use client";

import React from "react";
import { Asterisk } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Logo } from "@/components/logo";

/**
 * AI-Work Header
 * Sticky, minimalist navigation with glassmorphism and theme toggle.
 */
export function AiWorkHeader({
  isScrolled,
  isFullWidth
}: {
  isScrolled: boolean;
  isFullWidth: boolean;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = ["AI Workforce", "Platform", "Integrations", "Company"];

  // Avoid hydration mismatch by waiting for mount
  const activeScrolled = mounted ? isScrolled : false;
  const activeFullWidth = mounted ? isFullWidth : false;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 items-center justify-between px-4 md:px-6 transition-all duration-300",
        activeScrolled
          ? "bg-transparent"
          : "bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(120,119,198,0.08),transparent)]",
        !activeFullWidth && "rounded-t-2xl"
      )}
    >
      {/* Logo */}
      <div className="flex-1 flex items-center gap-2">
        <Logo className="h-6" />
        <span className="inline-flex items-center justify-center rounded-full bg-accent/10 px-1.5 py-px text-[7px] font-black uppercase tracking-widest text-foreground ring-1 ring-inset ring-foreground/20 leading-none h-3.5">
          Pro
        </span>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-1 rounded-full bg-secondary/30 p-1 backdrop-blur-md border border-border/50">
          {navItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              size="sm"
              className="rounded-full px-5 h-9 text-[14px] font-medium transition-all hover:bg-white/5"
            >
              {item}
            </Button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            className="h-10 rounded-full font-bold transition-all hover:scale-105 active:scale-95 px-6 text-[14px]"
          >
            Request a Demo
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="group relative rounded-full ring-1 ring-border/50 transition-all hover:bg-primary/5 hover:ring-primary/40 active:scale-95 shadow-[0_0_0_rgba(var(--primary),0)] hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]"
            title="Toggle Theme"
          >
            <Asterisk className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:rotate-180 group-hover:text-primary animate-[spin_15s_linear_infinite]" />
            <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </Button>
        </div>
      </div>
    </header>
  );
}
