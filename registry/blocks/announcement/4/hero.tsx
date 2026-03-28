"use client";

import React from "react";
import { Asterisk, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * AI-Work Hero
 * Compact, premium, left-aligned SaaS hero with status cards.
 */
export function AiWorkHero() {
  return (
    <section className="relative z-20 flex min-h-[calc(100vh-3rem)] flex-col overflow-hidden bg-background">

      {/* Subtle gradient background */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(120,119,198,0.08),transparent)]" />
      </div>

      {/* Main content — left-aligned, max-width container */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20 md:px-10">

        {/* Badge */}
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-accent/40 px-3 py-1 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Now available · Freddy v1.0
        </div>

        {/* Headline */}
        <h1 className="mb-5 max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
          Introducing Freddy.{" "}
          <span className="text-muted-foreground/50 font-light italic">
            The first AI Worker for IT
          </span>
        </h1>

        {/* Description */}
        <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Freddy handles the repetitive work your team shouldn't — freeing your
          department to move 5× faster, starting week one.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <Button
            size="default"
            className="h-10 rounded-full px-6 font-semibold"
          >
            Request a Demo
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="default"
            className="h-10 rounded-full px-6 font-semibold text-muted-foreground hover:text-foreground"
          >
            See how it works
          </Button>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-[12px] text-muted-foreground/60">
          Trusted by IT teams at Figma, Linear, and 40+ companies.
        </p>
      </div>

      {/* Status Cards — bottom dock, centered */}
      <div className="relative z-10 mx-auto w-full max-w-2xl flex-shrink-0 px-6 pb-12 md:px-10">
        <div className="flex flex-col gap-2.5">

          {/* Ticket card */}
          <div className="flex w-full items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-3 shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-500">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-lg bg-secondary">
                <img
                  src="https://ui-avatars.com/api/?name=Guido+Scorza&background=2563eb&color=fff"
                  alt="Guido Scorza"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[12.5px] font-semibold text-foreground">Figma dev seat required</p>
                <p className="text-[11px] text-muted-foreground">Guido Scorza · @it-support</p>
              </div>
            </div>
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
            </div>
          </div>

          {/* Policy card */}
          <div className="flex w-full items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-blue-500/15 text-blue-500">
              <Check className="h-3 w-3" strokeWidth={3} />
            </div>
            <p className="text-[12.5px] text-muted-foreground">
              Read the{" "}
              <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                <span className="h-2.5 w-2.5 rounded-[3px] bg-blue-500" />
                Software access policy
              </span>{" "}
              to determine which apps require approval...
            </p>
          </div>

          {/* Executing card */}
          <div className="flex w-full items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 shadow-sm animate-in fade-in slide-in-from-bottom-5 duration-900">
            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-blue-500 animate-[spin_3s_linear_infinite]">
              <Asterisk className="h-4 w-4" />
            </div>
            <p className="text-[12.5px] font-medium text-foreground">Executing tasks</p>
            <div className="ml-auto h-1.5 w-24 overflow-hidden rounded-full bg-border/30">
              <div className="h-full w-[60%] animate-pulse rounded-full bg-blue-500/40" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
