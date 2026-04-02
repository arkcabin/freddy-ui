"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Menu, Search, Sparkles, X } from "lucide-react";
import Link from "next/link";

/**
 * HEADER 5: NEURAL GLASS (REFINED)
 * Minimalist, centered floating header with official branding and mobile precision.
 */
export function Header5() {
  const scrolled = useScroll(80);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navLinks = [
    { name: "Features", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full px-6 pt-6">
      <motion.div
        animate={{ 
          y: 0, 
          opacity: 1,
          width: scrolled ? "auto" : "100%",
          padding: scrolled ? "0.4rem 0.4rem 0.4rem 1rem" : "0.5rem 1.25rem"
        }}
        initial={{ y: -20, opacity: 0 }}
        className={cn(
          "mx-auto flex h-12 items-center justify-between transition-all duration-500",
          "rounded-full border border-border/40 font-medium shadow-2xl",
          scrolled 
            ? "max-w-md bg-background/80 backdrop-blur-3xl ring-1 ring-white/10 dark:bg-zinc-900/80" 
            : "max-w-7xl bg-background/30 backdrop-blur-lg"
        )}
      >
        {/* Logo */}
        <Link 
          href="/" 
          aria-label="Freddy UI Homepage"
          className="flex items-center gap-2.5"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center"
          >
            <Logo className="h-4.5 w-auto" />
          </motion.div>
        </Link>

        {/* Center: Navigation (Desktop) */}
        {!scrolled && (
          <nav 
            aria-label="Main Navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                aria-label={`Navigate to ${link.name}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative rounded-full px-4 py-1 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
              >
                {hoveredIndex === i && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 z-[-1] rounded-full bg-foreground/5 shadow-inner"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            className="flex size-8 items-center justify-center rounded-full hover:bg-foreground/5 md:hidden"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>

          <Button
            size="sm"
            aria-label="Get Early Access to Freddy AI"
            className={cn(
              "group relative h-8 overflow-hidden rounded-full font-black text-[11px] uppercase tracking-wider transition-all duration-500",
              scrolled ? "px-5" : "px-6"
            )}
          >
            <div className="relative z-10 flex items-center gap-2">
              <Sparkles className="size-3 fill-current transition-transform group-hover:rotate-12" />
              <span>{scrolled ? "Join" : "Get Early Access"}</span>
            </div>
            {/* Neural Pulse Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-white/20 to-transparent transition-opacity group-hover:opacity-100" />
            <div className="absolute -inset-1 opacity-0 transition-opacity group-hover:animate-pulse group-hover:opacity-100" />
          </Button>
        </div>
      </motion.div>

      {/* 4. Mobile Dropdown Menu (Pill Style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="absolute top-20 left-6 right-6 z-40 flex flex-col gap-1 rounded-3xl border border-border/40 bg-background/80 p-2 backdrop-blur-3xl shadow-3xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                aria-label={`Navigate to ${link.name}`}
                className="flex h-11 items-center justify-between rounded-full px-6 text-sm font-bold text-muted-foreground transition-all hover:bg-foreground/5 hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrolled-mode integrated badge */}
      <AnimatePresence mode="wait">
        {scrolled && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2"
          >
            <div className="rounded-full border border-border/40 bg-background/60 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md shadow-sm">
              Neural Protocol v2.5
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
