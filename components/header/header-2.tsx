"use client";

import { Asterisk, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiteNav } from "./nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_HOME_URL, SITE_NAME } from "@/config/site";

/**
 * Header
 * Sticky, minimalist navigation with glassmorphism and theme toggle.
 */
export function MainHeader({
  isFullWidth,
  isScrolled: propIsScrolled,
}: {
  isFullWidth: boolean;
  isScrolled?: boolean;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const breadcrumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((path, index, array) => ({
      name: path.charAt(0).toUpperCase() + path.slice(1),
      item: `${SITE_HOME_URL}/${array.slice(0, index + 1).join("/")}`,
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_HOME_URL,
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: crumb.item,
      })),
    ],
  };

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync scroll state with prop if provided, else use local
  const activeScrolled = mounted ? propIsScrolled ?? scrolled : false;

  return (
    <header
      className={cn(
        "sticky top-0 z-100 w-full transition-[background-color,border-color,backdrop-filter] duration-500",
        activeScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
          : "bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(120,119,198,0.12),transparent)]"
      )}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Architectural Grid Frame - Integrated directly into the header for sticky support */}
      <div
        className={cn(
          "relative mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between border-dashed px-4 transition-[border-color,padding] duration-500 md:px-6",
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

        {/* Logo & Branding */}
        <Link
          className="group flex items-center outline-none"
          href="/"
          prefetch={false}
        >
          <div
            className={cn(
              "flex items-center gap-1.5 rounded-full transition-all duration-300",
              activeScrolled
                ? "bg-secondary/40 p-1.5 ring-1 ring-border/20 backdrop-blur-md"
                : "px-2"
            )}
          >
            <Logo className="h-6 transition-transform group-hover:scale-105" />
            <span className="inline-flex h-4 animate-pulse items-center justify-center rounded-full bg-primary/10 px-1.5 py-px font-black text-[7.5px] text-primary uppercase leading-none tracking-widest ring-1 ring-primary/20 ring-inset">
              Beta
            </span>
          </div>
        </Link>

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
              className="group md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              size="icon"
              variant="ghost"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-transform group-hover:scale-110" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background/98 p-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-6">
            <SiteNav isMobile />
            <div className="h-px w-full bg-border/50 border-dashed" />
            <div className="flex flex-col gap-4">
              <Button className="w-full rounded-xl shadow-lg" size="lg">
                Get full Access
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
