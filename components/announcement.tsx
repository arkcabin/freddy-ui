"use client";

import { ArrowUpRight, Asterisk } from "lucide-react";
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
  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-10 flex h-8 items-center justify-between bg-accent px-6 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        <p>
          Announcing <span className="text-foreground">$10M</span> Seed Funding
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="flex items-center gap-1 transition-colors hover:text-foreground"
        >
          Read More
          <ArrowUpRight className="h-2.5 w-2.5" />
        </a>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          className="ml-2 transition-all hover:scale-110"
        >
          <Asterisk className="h-2.5 w-2.5 rotate-45" />
        </Button>
      </div>
    </div>
  );
}
