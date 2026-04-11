"use client";

import { Asterisk } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { createPortal } from "react-dom";
import { Logo } from "@/components/logo";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
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
export const MainHeader = React.memo(
  ({
    isFullWidth,
    isScrolled: propIsScrolled,
    isAnnouncementVisible,
  }: {
    isFullWidth: boolean;
    isScrolled?: boolean;
    isAnnouncementVisible?: boolean;
  }) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
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
    }, []);

    React.useEffect(() => {
      if (mobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }

      return () => {
        document.body.style.overflow = "";
      };
    }, [mobileMenuOpen]);

    React.useEffect(() => {
      setMobileMenuOpen(false);
    }, [pathname]);

    // Sync scroll state with prop (Optimized: No local scroll listener needed)
    const activeScrolled = mounted ? propIsScrolled ?? false : false;

    return (
      <header
        className={cn(
          "sticky top-0 z-100 w-full transition-[background-color,border-color,backdrop-filter] duration-500 will-change-[transform,opacity]",
          activeScrolled
            ? "bg-transparent"
            : "border-transparent bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(120,119,198,0.12),transparent)]"
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Architectural Grid Frame - Integrated directly into the header for sticky support */}
        <div
          className={cn(
            "relative mx-auto flex min-h-12 w-full max-w-6xl items-center justify-between border-dashed px-4 transition-[border-color,padding] duration-500 md:min-h-14 md:px-6",
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
            aria-label="Freddy UI Home"
            className="group flex items-center outline-none"
            href="/"
            prefetch={false}
          >
            <div
              className={cn(
                "flex items-center gap-1 rounded-full transition-all duration-300",
                activeScrolled
                  ? "bg-secondary/40 p-1.5 ring-1 ring-border/20 backdrop-blur-md"
                  : "px-2"
              )}
            >
              <Logo />
              <span className="inline-flex h-4 -translate-y-0.5 items-center justify-center rounded-full bg-primary/10 px-2 py-px font-black text-[6px] text-primary uppercase leading-none tracking-widest ring-1 ring-primary/20 ring-inset">
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
                aria-label="Toggle Theme"
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
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                className="group md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                size="icon"
                variant="ghost"
                type="button"
              >
                <MenuToggleIcon className="size-5" duration={300} open={mobileMenuOpen} />
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && typeof window !== "undefined"
          ? createPortal(
            <div
              className="fixed inset-0 z-[120] md:hidden"
              id="mobile-menu"
            >
              <button
                aria-label="Close menu"
                className="absolute inset-0 cursor-default bg-background/72 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
                type="button"
              />

              <div
                className={cn(
                  "absolute inset-x-0 overflow-hidden border-y border-border/70 bg-background/96 shadow-2xl shadow-black/20 md:inset-x-3 md:bottom-3 md:rounded-[28px] md:border md:top-auto",
                  isAnnouncementVisible ? "top-[88px]" : "top-14"
                )}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-border/60 border-b px-4 py-4">
                    <div className="flex flex-col">
                      <span className="font-black text-[10px] text-muted-foreground uppercase tracking-[0.24em]">
                        Freddy UI
                      </span>
                      <span className="font-semibold text-sm text-foreground/80">
                        Menu
                      </span>
                    </div>
                    <Button
                      aria-label="Close menu"
                      className="h-9 w-9 rounded-full"
                      onClick={() => setMobileMenuOpen(false)}
                      size="icon"
                      type="button"
                      variant="ghost"
                    >
                      <MenuToggleIcon className="size-4" duration={300} open={true} />
                    </Button>
                  </div>

                  <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 py-5">
                    <SiteNav isMobile />

                    <div className="mt-auto space-y-3 border-border/60 border-t pt-5">
                      <Button className="h-11 w-full rounded-xl font-semibold shadow-lg shadow-primary/10" size="lg">
                        Get Full Access
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
          : null}
      </header>
    );
  }
);
