import Link from "next/link";
import { MY_HANDLE, SITE_NAME, siteConfig } from "@/config/site";
import { GithubIcon, XIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="relative bg-card dark:bg-card/50">
      <div className="cpx container flex flex-col gap-5 py-8 text-xs md:flex-row md:items-center md:justify-between md:text-sm">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="whitespace-nowrap text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground md:justify-start">
            <span>A project by</span>
            <Link
              className="font-bold text-foreground transition-colors hover:text-foreground/80"
              href={siteConfig.links.twitter}
              rel="noreferrer"
              target="_blank"
            >
              {MY_HANDLE}
            </Link>
            <span className="mx-1 text-border">|</span>
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

        <div className="flex items-center justify-center gap-3 md:justify-end">
          <Button asChild className="h-10 w-10 rounded-full" size="icon-sm" variant="dashed">
            <Link aria-label="Visit us on X" href={siteConfig.links.twitter} rel="noreferrer" target="_blank">
              <XIcon className="size-4.5" />
            </Link>
          </Button>
          <Button asChild className="h-10 w-10 rounded-full" size="icon-sm" variant="dashed">
            <Link aria-label="Visit our GitHub" href="https://github.com/arkcabin/freddy-ui" rel="noreferrer" target="_blank">
              <GithubIcon className="size-4.5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
