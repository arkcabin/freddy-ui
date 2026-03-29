import Link from "next/link";
import { MY_HANDLE, SITE_NAME, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="relative bg-card dark:bg-card/50">
      <div className="pointer-events-none absolute top-0 right-0 left-0 border-border border-t border-dashed" />
      <div className="pointer-events-none absolute top-[40px] right-0 left-0 border-border border-t border-dashed" />
      <div className="cpx container flex flex-col items-center justify-between gap-4 py-8 text-xs sm:flex-row md:text-sm">
        <p className="text-center text-muted-foreground sm:text-left">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <span>A project by</span>
          <Link
            className="font-bold text-foreground transition-colors hover:text-foreground/80"
            href={siteConfig.links.twitter}
            rel="noreferrer"
            target="_blank"
          >
            {MY_HANDLE}
          </Link>
          <span className="mx-2 text-border">|</span>
          <Link
            className="font-bold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground/80"
            href="https://arkcabin.com/contact"
            rel="noreferrer"
            target="_blank"
          >
            Hire Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
