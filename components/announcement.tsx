"use client";

import { ArrowUpRight, Asterisk } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * AI-Work Announcement Bar
 * Precision-engineered thin bar for top-level alerts.
 */
export function AnnouncementBar({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="sticky top-0 z-10 flex h-8 items-center justify-between bg-accent px-4 font-bold text-[10px] text-muted-foreground uppercase tracking-[0.15em] md:px-6">
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        <p>
          Launching <span className="text-foreground">Freddy UI v0.0.1</span> Beta
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className="flex items-center gap-1 transition-colors hover:text-foreground"
          href="/changelog"
        >
          Read More
          <ArrowUpRight className="h-2.5 w-2.5" />
        </Link>
        <Button
          className="ml-2 transition-all hover:scale-110"
          onClick={onClose}
          size="icon-sm"
          variant="ghost"
        >
          <Asterisk className="h-2.5 w-2.5 rotate-45" />
        </Button>
      </div>
    </div>
  );
}
