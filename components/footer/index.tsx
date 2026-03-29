import Link from "next/link";
import { MY_HANDLE, SITE_NAME, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="relative bg-card dark:bg-card/50">
      <div className="absolute top-0 left-0 right-0 border-t border-dashed border-border pointer-events-none" />
      <div className="absolute top-[40px] left-0 right-0 border-t border-dashed border-border pointer-events-none" />
      <div className="cpx container flex flex-col items-center justify-between gap-4 py-8 text-xs sm:flex-row md:text-sm">
        <p className="text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <span>A project by</span>
          <Link
            className="font-bold text-foreground transition-colors hover:text-foreground/80"
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            {MY_HANDLE}
          </Link>
          <span className="mx-2 text-border">|</span>
          <Link
            className="font-bold text-foreground transition-colors hover:text-foreground/80 underline decoration-border underline-offset-4"
            href="https://arkcabin.com/contact"
            target="_blank"
            rel="noreferrer"
          >
            Hire Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
