"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { LogoIcon } from "@/components/logo";
import { GridPattern } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { SITE_NAME, SITE_VERSION } from "@/config/site";
import { FeaturedIcons } from "./featured-icons";

export function Hero2() {
  return (
    <div className="relative isolate flex flex-col items-center justify-center overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32">
      {/* Background Decor */}
      <div className="-z-10 absolute inset-0 h-full w-full">
        <GridPattern className="opacity-10" />
      </div>

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="-top-40 -z-10 sm:-top-80 absolute inset-x-0 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="-translate-x-1/2 relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 rotate-30 bg-linear-to-tr from-primary/20 to-primary/5 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto mb-8 flex max-w-fit items-center gap-3 rounded-full border border-border bg-muted/50 py-1.5 pr-4 pl-3 font-medium text-[11px] backdrop-blur-md">
          <div className="flex items-center gap-2">
            <LogoIcon className="size-3.5" />
            <span className="font-semibold text-foreground">{SITE_NAME}</span>
          </div>
          <span className="h-3 w-px bg-border" />
          <span className="text-muted-foreground">
            Introducing V-{SITE_VERSION}
          </span>
          <span className="h-3 w-px bg-border" />
          <Link
            className="flex items-center gap-1 text-muted-foreground/50 transition-colors hover:text-foreground"
            href="/changelog"
          >
            View Changelog
            <ChevronRight className="size-3" />
          </Link>
        </div>

        <h1 className="relative font-bold font-heading text-4xl text-foreground tracking-tighter sm:text-6xl lg:text-7xl">
          Beautiful ✨{" "}
          <span className="font-extrabold text-primary">shadcn/ui</span> Blocks{" "}
          <br />
          for the{" "}
          <span className="font-extrabold text-glow">Modern Developer.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          Save hours of design time with clean, ready-to-use shadcn blocks{" "}
          <br className="hidden sm:block" />
          that just work — modern, responsive, and built for speed.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            className="h-9 min-w-[140px] rounded-full px-6 font-bold text-xs shadow-md transition-all active:scale-95"
            size="sm"
            variant="secondary"
          >
            <Link href="/blocks">Explore</Link>
          </Button>
          <Button
            asChild
            className="h-9 min-w-[140px] rounded-full bg-foreground px-6 font-bold text-background text-xs shadow-md transition-all hover:opacity-90 active:scale-95"
            size="sm"
          >
            <Link href="/get-access">Get full Access</Link>
          </Button>
        </div>
      </div>
      <FeaturedIcons />

      {/* Background Decorative Beam */}
      <div className="beam-effect opacity-50" />
    </div>
  );
}
