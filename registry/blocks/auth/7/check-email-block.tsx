"use client";

import { ArrowRight, ExternalLink, InboxIcon } from "lucide-react";
import { Plus } from "@/components/plus";
import { Button } from "@/components/ui/button";

export function CheckEmailBlock() {
  return (
    <div className="group relative w-full max-w-md overflow-hidden rounded-2xl border bg-background p-8 shadow-lg">
      <Plus className="-top-px -left-px" />
      <Plus className="-top-px -right-px rotate-90" />
      <Plus className="-bottom-px -left-px -rotate-90" />
      <Plus className="-bottom-px -right-px rotate-180" />

      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative">
          <div className="flex size-16 rotate-3 items-center justify-center rounded-2xl bg-primary/5 transition-transform group-hover:rotate-6">
            <InboxIcon className="size-8 text-primary/60" />
          </div>
          <div className="-top-1 -right-1 absolute size-4 animate-pulse rounded-full border-2 border-background bg-primary" />
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl tracking-tight">
            Check your Email
          </h2>
          <p className="text-muted-foreground text-sm">
            We&apos;ve sent a password reset link to <br />
            <span className="font-semibold text-foreground">
              john@example.com
            </span>
          </p>
        </div>

        <div className="w-full space-y-3">
          <Button
            className="h-11 w-full font-semibold shadow-sm transition-all active:scale-[0.98]"
            type="button"
          >
            Open Email Client
            <ExternalLink className="ml-2 size-4 opacity-50" />
          </Button>

          <p className="text-muted-foreground text-xs">
            Didn&apos;t receive the email? <br />
            <button
              className="mt-1 font-medium text-primary hover:underline"
              type="button"
            >
              Click to resend
            </button>
          </p>
        </div>

        <a
          className="flex items-center gap-2 font-medium text-muted-foreground text-xs transition-colors hover:text-primary"
          href="#"
        >
          Back to Sign In
          <ArrowRight className="size-3" />
        </a>
      </div>
    </div>
  );
}
