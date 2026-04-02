"use client";

import React, { useState } from "react";
import { Hero6 } from "./hero";
import { Logo, LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Box, CircleDot, Share2, Sparkles, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

/**
 * TOP BANNER (Slate Infrastructure)
 * Emerald banner at the absolute top of the page.
 */
function TopBanner() {
  return (
    <div className="flex h-10 w-full items-center justify-between bg-[#03251E] px-6 text-[11px] font-bold text-white uppercase tracking-widest sm:px-10">
      <div className="flex items-center gap-2">
         <CircleDot className="size-3 animate-pulse text-[#BFFF70]" />
         <span>The banner is to inform the visitors of an important message</span>
      </div>
      <div className="hidden items-center gap-4 sm:flex">
         <Share2 className="size-3.5 cursor-pointer hover:text-[#BFFF70] transition-colors" />
         <Box className="size-3.5 cursor-pointer hover:text-[#BFFF70] transition-colors" />
         <Sparkles className="size-3.5 cursor-pointer hover:text-[#BFFF70] transition-colors" />
      </div>
    </div>
  );
}

/**
 * SLATE HEADER (Internal for Demo)
 * Refined with official Logo and mobile precision.
 */
function SlateHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-50 bg-white/80 backdrop-blur-md dark:border-zinc-900 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-12 items-center justify-between px-6 sm:px-10">
        
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

        {/* Links (Desktop) */}
        <nav 
          aria-label="Main Navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {["Features", "Pricing", "About", "Contact"].map((link) => (
            <Link 
              key={link}
              href="#" 
              aria-label={`Navigate to ${link}`}
              className="text-[13px] font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            className="flex size-8 items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 md:hidden"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>

          {/* Actions (Desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm" aria-label="Log in to account" className="font-bold text-zinc-500">Log in</Button>
            <Button size="sm" aria-label="Get Started with Freddy UI" className="bg-zinc-900 font-bold text-white dark:bg-white dark:text-black">Get Started</Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="border-b border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {["Features", "Pricing", "About", "Contact"].map((link) => (
                <Link 
                  key={link}
                  href="#" 
                  aria-label={`Navigate to ${link}`}
                  className="flex h-10 items-center px-4 text-sm font-bold text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg"
                >
                  {link}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 pt-2 border-t border-zinc-50 dark:border-zinc-900">
                <Button variant="outline" aria-label="Log in" className="w-full justify-start font-bold">Log in</Button>
                <Button aria-label="Get Started" className="w-full justify-start font-bold">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/**
 * HERO 6 PAGE ENTRY
 * Demonstrates the full "Slate Masterpiece" experience.
 */
export default function Hero6Page() {
  return (
    <div className="w-full">
      <TopBanner />
      <SlateHeader />
      <main>
        <Hero6 />
      </main>
    </div>
  );
}
