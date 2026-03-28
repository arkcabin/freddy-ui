"use client";

import React from "react";
import { Asterisk, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * AI-Work Hero
 * Compact, premium, left-aligned SaaS hero with status cards.
 */
export function AiWorkHero() {
  return (
    <section className="relative z-20 flex min-h-[calc(100vh-3rem)] flex-col overflow-hidden bg-background">

      {/* Subtle background */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Main content — left-aligned, max-width container */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-24 pb-20 md:px-10 md:pt-32">

        {/* Badge */}
        <Badge variant="outline" className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border-border/60 bg-accent/40 px-3 py-1 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Now available · Freddy v1.0
        </Badge>

        {/* Headline */}
        <h1 className="mb-6 max-w-4xl text-[clamp(3.5rem,6vw,5.5rem)] font-bold leading-[1] tracking-tighter text-foreground">
          Introducing Freddy.<br />
          <span className="text-muted-foreground/60 font-medium italic tracking-tight text-[clamp(2.5rem,4.5vw,4.5rem)]">
            The first AI Worker for IT
          </span>
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-xl text-[16px] leading-relaxed text-muted-foreground/90">
          Freddy handles the repetitive work your team shouldn't — freeing your
          department to move 5× faster, starting week one.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            className="rounded-full px-8 text-[15px] font-semibold shadow-sm hover:shadow-md transition-all"
          >
            Request a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full px-8 text-[15px] font-semibold text-muted-foreground hover:text-foreground transition-all"
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
      <div className="relative z-10 mx-auto w-full max-w-2xl flex-shrink-0 px-6 pb-16 md:px-10">
        <div className="flex flex-col gap-4">

          {/* Ticket card */}
          <Card className="flex flex-row w-full items-center justify-between gap-0 rounded-2xl border-border/50 p-2 py-4 px-4 shadow-md animate-in fade-in slide-in-from-bottom-3 duration-500">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src="https://ui-avatars.com/api/?name=arkdev&background=2563eb&color=fff" alt="arkdev" />
                <AvatarFallback className="rounded-lg">AD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[12.5px] font-semibold text-foreground">Figma dev seat required</p>
                <p className="text-[11px] text-muted-foreground">arkdev · @it-support</p>
              </div>
            </div>
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
            </div>
          </Card>

          {/* Policy card */}
          <Card className="flex flex-row w-full items-center gap-4 p-4 py-4 rounded-2xl border-border/50 shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700">
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
          </Card>

          {/* Executing card */}
          <Card className="flex flex-row w-full items-center gap-4 p-4 py-4 rounded-2xl border-border/50 shadow-md animate-in fade-in slide-in-from-bottom-5 duration-900">
            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-blue-500 animate-[spin_3s_linear_infinite]">
              <Asterisk className="h-4 w-4" />
            </div>
            <p className="text-[12.5px] font-medium text-foreground">Executing tasks</p>
            <div className="ml-auto h-1.5 w-24 overflow-hidden rounded-full bg-border/30">
              <div className="h-full w-[60%] animate-pulse rounded-full bg-blue-500/40" />
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}
