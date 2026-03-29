"use client";

import {
  ArrowRight,
  ChevronDown,
  Globe,
  Layout,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import { createPortal } from "react-dom";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const MARQUEE_ITEMS = [
  {
    icon: Sparkles,
    text: "Freddy UI Pro is now available with 50+ premium blocks",
  },
  {
    icon: Layout,
    text: "New 'Announcement' category just dropped! Check it out",
  },
  {
    icon: ShieldCheck,
    text: "Built with Shadcn UI, Tailwind CSS and Framer Motion",
  },
  { icon: Globe, text: "Trusted by 5,000+ developers worldwide" },
];

const NAV_LINKS = [
  { label: "Components", hasDropdown: true },
  { label: "Blocks", hasDropdown: true },
  { label: "Showcase", href: "#" },
  { label: "Templates", hasDropdown: true },
  { label: "Docs", href: "#" },
];

export const MarqueeHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-border border-b bg-background/95 backdrop-blur-md">
      {/* Marquee Bar */}
      <div className="relative flex h-9 items-center overflow-hidden border-border border-b bg-muted/30">
        <div className="flex animate-marquee whitespace-nowrap py-2 [--duration:40s] [--gap:2rem]">
          {[1, 2, 3, 4].map((i) => (
            <div
              className="flex shrink-0 items-center gap-8 px-4"
              key={`marquee-group-${i}`}
            >
              {MARQUEE_ITEMS.map((item, _idx) => (
                <div
                  className="flex items-center gap-2 font-medium text-[12px] text-muted-foreground transition-colors hover:text-foreground"
                  key={item.text}
                >
                  <item.icon className="h-3.5 w-3.5 text-primary/60" />
                  <span>{item.text}</span>
                  <ArrowRight className="hidden h-3 w-3 opacity-30 group-hover:block" />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Fades for smooth entry/exit */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent" />
      </div>

      {/* Main Navigation */}
      <nav className="container relative flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2">
          <Logo className="h-7" />
        </div>

        {/* Centered Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <MenuLink
              hasDropdown={link.hasDropdown}
              key={link.label}
              label={link.label}
            />
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            className="hidden font-semibold text-muted-foreground text-sm transition-colors hover:text-foreground md:block"
            type="button"
          >
            Log In
          </button>
          <Button className="hidden h-10 rounded-xl px-6 font-bold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] md:flex">
            Get Freddy UI
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/30 text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Portal */}
      {mounted &&
        isMobileMenuOpen &&
        createPortal(
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="fixed inset-0 top-[calc(64px+36px)] z-40 bg-background/98 backdrop-blur-xl md:hidden"
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: -10 }}
            >
              <div className="container flex flex-col gap-6 p-6">
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <button
                      className="flex items-center justify-between font-semibold text-foreground text-lg"
                      key={link.label}
                      type="button"
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown className="h-5 w-5 opacity-50" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 border-border border-t pt-8">
                  <Button
                    className="h-12 w-full rounded-xl font-bold text-lg"
                    variant="outline"
                  >
                    Log In
                  </Button>
                  <Button className="h-12 w-full rounded-xl font-bold text-lg">
                    Get Freddy UI
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
};

type MenuLinkProps = {
  label: string;
  hasDropdown?: boolean;
};

const MenuLink = ({ label, hasDropdown }: MenuLinkProps) => {
  return (
    <div className="group relative py-4">
      <button
        className="flex items-center gap-1 font-medium text-[15px] text-muted-foreground transition-colors hover:text-foreground"
        type="button"
      >
        {label}
        {hasDropdown && (
          <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
        )}
      </button>

      {/* Dropdown Content (Mock) */}
      {hasDropdown && (
        <div className="-translate-x-1/2 invisible absolute top-full left-1/2 w-48 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
          <div className="rounded-xl border border-border bg-background p-2 shadow-xl backdrop-blur-xl">
            {[1, 2, 3].map((item) => (
              <button
                className="w-full rounded-lg px-3 py-2 text-left font-medium text-muted-foreground text-sm transition-colors hover:bg-muted hover:text-foreground"
                key={item}
                type="button"
              >
                {label} Module {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
