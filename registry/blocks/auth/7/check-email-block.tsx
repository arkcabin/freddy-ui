"use client";

import { InboxIcon, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Plus } from "@/components/plus";
import React from "react";

export function CheckEmailBlock() {
  return (
    <div className="relative w-full max-w-md bg-background p-8 rounded-2xl border shadow-lg overflow-hidden group">
      <Plus className="-top-px -left-px" />
      <Plus className="-top-px -right-px rotate-90" />
      <Plus className="-bottom-px -left-px -rotate-90" />
      <Plus className="-bottom-px -right-px rotate-180" />

      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative">
          <div className="size-16 rounded-2xl bg-primary/5 flex items-center justify-center rotate-3 transition-transform group-hover:rotate-6">
            <InboxIcon className="size-8 text-primary/60" />
          </div>
          <div className="absolute -top-1 -right-1 size-4 bg-primary rounded-full border-2 border-background animate-pulse" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Check your Email</h2>
          <p className="text-sm text-muted-foreground">
            We&apos;ve sent a password reset link to <br />
            <span className="font-semibold text-foreground">john@example.com</span>
          </p>
        </div>

        <div className="w-full space-y-3">
          <Button 
            className="w-full h-11 font-semibold transition-all active:scale-[0.98] shadow-sm" 
            type="button"
          >
            Open Email Client
            <ExternalLink className="size-4 ml-2 opacity-50" />
          </Button>
          
          <p className="text-xs text-muted-foreground">
            Didn&apos;t receive the email? <br />
            <button className="text-primary hover:underline font-medium mt-1">Click to resend</button>
          </p>
        </div>

        <a 
          href="#" 
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
        >
          Back to Sign In
          <ArrowRight className="size-3" />
        </a>
      </div>
    </div>
  );
}
