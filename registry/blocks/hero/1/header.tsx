"use client";

import { Asterisk } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * AI-Work Header
 * Sticky, minimalist navigation with glassmorphism and theme toggle.
 */
export function AiWorkHeader({
  isScrolled,
  isFullWidth,
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
        "sticky top-0 z-50 flex h-16 items-center justify-between px-4 transition-all duration-300 md:px-6",
        activeScrolled
          ? "bg-transparent"
          : "bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(120,119,198,0.08),transparent)]",
        !activeFullWidth && "rounded-t-2xl"
      )}
    >
      {/* Logo */}
      <div className="flex flex-1 items-center gap-2">
        <Logo className="h-6" />
        <span className="inline-flex h-3.5 items-center justify-center rounded-full bg-accent/10 px-1.5 py-px font-black text-[7px] text-foreground uppercase leading-none tracking-widest ring-1 ring-foreground/20 ring-inset">
          Pro
        </span>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-1 rounded-full border border-border/50 bg-secondary/30 p-1 backdrop-blur-md">
          {navItems.map((item) => (
            <Button
              className="h-9 rounded-full px-5 font-medium text-[14px] transition-all hover:bg-white/5"
              key={item}
              size="sm"
              variant="ghost"
            >
              {item}
            </Button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            className="h-10 rounded-full px-6 font-bold text-[14px] transition-all hover:scale-105 active:scale-95"
            variant="secondary"
          >
            Request a Demo
          </Button>
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
        </div>
      </div>
    </header>
  );
}
