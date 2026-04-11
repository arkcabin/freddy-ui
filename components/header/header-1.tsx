"use client";

import React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { MY_HANDLE, SITE_NAME } from "@/config/site";
import { SiteNav } from "./nav";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

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

  return (
    <header className="sticky top-0 z-100 w-full border-b border-dashed bg-card/80 backdrop-blur-md dark:bg-card/50">
      <div className="cpx container flex h-14 items-center justify-between py-2">
        <div className="flex items-center">
          <Link
            className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
            href="/"
          >
            <Logo />
            <span className="sr-only">{SITE_NAME}</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <SiteNav />
          </div>

          <Button asChild className="hidden md:inline-flex" size="icon-sm" variant="dashed">
            <Link
              aria-label="github"
              href={`https://github.com/${MY_HANDLE}/freddy-ui`}
              target="_blank"
            >
              <GithubIcon className="size-4.5" />
            </Link>
          </Button>
          <ThemeToggle />
          <Button
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            size="icon-sm"
            type="button"
            variant="dashed"
          >
            <MenuToggleIcon className="size-4" duration={250} open={mobileMenuOpen} />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && typeof window !== "undefined"
        ? createPortal(
          <div className="fixed inset-0 z-[120] md:hidden" id="mobile-menu">
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              type="button"
            />

            <div
              aria-label="Mobile navigation menu"
              aria-modal="true"
              className="absolute inset-x-3 top-16 bottom-3 overflow-hidden rounded-[24px] border border-border/70 bg-card/96 shadow-2xl shadow-black/15"
              role="dialog"
            >
              <div className="flex h-full flex-col gap-5 overflow-y-auto p-4">
                <div className="flex items-center justify-between border-border/60 border-b pb-4">
                  <div>
                    <div className="font-black text-[10px] text-muted-foreground uppercase tracking-[0.24em]">
                      Navigation
                    </div>
                    <div className="font-semibold text-sm text-foreground/80">
                      Freddy UI
                    </div>
                  </div>
                  <Button
                    aria-label="Close menu"
                    className="h-8 w-8 rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                    size="icon"
                    type="button"
                    variant="ghost"
                  >
                    <MenuToggleIcon className="size-4" duration={250} open={true} />
                  </Button>
                </div>

                <SiteNav isMobile />

                <div className="mt-auto flex items-center justify-between border-border/60 border-t pt-4">
                  <Button asChild size="icon-sm" variant="dashed">
                    <Link
                      aria-label="github"
                      href={`https://github.com/${MY_HANDLE}/freddy-ui`}
                      target="_blank"
                    >
                      <GithubIcon className="size-4.5" />
                    </Link>
                  </Button>
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
