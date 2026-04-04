"use client";

import { Check, Mail, Shield, User, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "./logo";
import { SectionGrid } from "./section-grid";
import { SectionHeader } from "./section-header";

/**
 * Showcase component that displays "Real Content" blocks in an
 * absolute/overlapping staggered layout.
 * Uses SectionGrid for architectural consistency.
 */
export function Showcase() {
  return (
    <SectionGrid
      className="pb-16 lg:pb-24"
      containerClassName="mt-8"
      markerOffset="top-0"
      markerType="plus"
      showDoubleBorders={true}
      showTopMarkers={true}
    >
      <SectionHeader
        className="sticky-none relative top-0 mb-12 bg-transparent"
        subtitle="Explore our library of 13+ categories and find the perfect beautifully crafted blocks for your next project."
        title="Real Components. Real Performance."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {/* 1. Auth Block (Tall Centerpiece) */}
        <motion.div
          className="group relative h-full lg:row-span-2"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="h-full transform-gpu rounded-3xl bg-linear-to-b from-border/50 via-border/10 to-transparent p-1 shadow-2xl backdrop-blur-[2px] transition-transform duration-500 will-change-transform hover:scale-[1.01]">
            <div className="flex h-full flex-col justify-center rounded-[22px] border border-border/50 bg-card/90 p-8">
              <div className="mb-6 flex justify-center">
                <LogoIcon className="size-10" />
              </div>
              <h3 className="mb-2 text-center font-bold text-xl tracking-tight">
                Welcome Back
              </h3>
              <p className="mb-8 text-center text-muted-foreground text-sm leading-relaxed">
                Enter your credentials to access your dashboard
              </p>
              <div className="space-y-4">
                <div className="space-y-1.5 text-left">
                  <div className="font-semibold text-muted-foreground text-[10px] uppercase tracking-widest">
                    Email Address
                  </div>
                  <div className="rounded-xl border border-border bg-muted/30 px-4 py-2.5 text-muted-foreground/60 text-xs shadow-inner">
                    name@company.com
                  </div>
                </div>
                <div className="space-y-1.5 text-left">
                  <div className="font-semibold text-muted-foreground text-[10px] uppercase tracking-widest">
                    Password
                  </div>
                  <div className="rounded-xl border border-border bg-muted/30 px-4 py-2.5 text-muted-foreground/60 text-xs shadow-inner">
                    ••••••••••••
                  </div>
                </div>
                <Button className="h-11 w-full rounded-xl shadow-lg" size="sm">
                  Continue with Email
                </Button>
                <div className="flex items-center gap-3 py-2">
                  <div className="h-px flex-1 bg-border/50" />
                  <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest font-bold">
                    or
                  </span>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <Button
                  className="h-11 w-full rounded-xl font-bold"
                  size="sm"
                  variant="outline"
                >
                  <User className="mr-2 size-4 opacity-50" />
                  Sign in with Google
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Pricing Card (Standard Grid Item) */}
        <motion.div
          className="group relative h-full"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="h-full transform-gpu rounded-2xl bg-linear-to-tr from-primary/10 to-transparent p-1 shadow-xl backdrop-blur-[4px] transition-transform duration-500 will-change-transform hover:scale-[1.01]">
            <div className="flex h-full flex-col justify-between rounded-xl border border-primary/10 bg-card/85 p-6">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 font-bold text-[10px] text-primary uppercase tracking-wider">
                    Most Popular
                  </span>
                  <span className="rounded-lg bg-primary/20 p-1.5">
                    <Zap className="size-4 text-primary" />
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-bold font-heading text-4xl tracking-tight text-foreground">$49</span>
                  <span className="ml-1 font-medium text-muted-foreground text-xs opacity-60">
                    / month
                  </span>
                </div>
                <p className="mb-6 font-medium text-muted-foreground text-[13px] leading-relaxed">
                  For scaling teams needing advanced IT automations.
                </p>
                <ul className="mb-6 space-y-3">
                  {["Rule Engine", "API Access", "24/7 Support"].map(
                    (feature) => (
                      <li
                        className="flex items-center gap-3 text-xs text-foreground/70"
                        key={feature}
                      >
                        <Check className="size-3.5 text-primary" strokeWidth={3} />
                        <span className="font-medium">Advanced {feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <Button
                className="h-10 w-full rounded-xl border-primary/30 font-bold text-xs shadow-sm hover:bg-primary/5 active:scale-95"
                variant="outline"
              >
                Upgrade Now
              </Button>
            </div>
          </div>
        </motion.div>

        {/* 3. Small Badge / Ticket Info (Standard Grid Item) */}
        <motion.div
          className="group relative h-full"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-card/50 p-6 shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-card/80">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary shadow-xl shadow-primary/20 transition-transform duration-500 group-hover:scale-110">
                <Mail className="size-6 text-primary-foreground" />
              </div>
              <div className="font-bold text-[11px] text-primary uppercase tracking-[0.2em]">
                New Ticket
              </div>
              <div className="mt-2 font-bold text-base text-foreground">
                Critical: Server 5 latency
              </div>
              <p className="mt-1 text-muted-foreground text-xs opacity-60">
                Opened 2 minutes ago
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4. Stats Card (Wide Spanning Row) */}
        <motion.div
          className="group relative h-full lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="h-full transform-gpu rounded-2xl border border-border bg-muted/40 p-6 shadow-lg backdrop-blur-[4px] transition-all duration-500 will-change-transform hover:bg-card/30 hover:shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-green-500/10 shadow-inner">
                  <Shield className="size-6 text-green-500" />
                </div>
                <div>
                  <div className="font-bold text-[10px] text-muted-foreground uppercase tracking-[0.15em]">
                    System Health
                  </div>
                  <div className="font-bold text-xl tracking-tight">
                    Secure and Stable
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1">
                <span className="size-2 animate-pulse rounded-full bg-green-500" />
                <span className="font-bold text-[10px] text-green-500 uppercase tracking-widest">
                  Live
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-muted-foreground">
                    Infrastructure Uptime
                  </span>
                  <span className="font-bold text-foreground">99.98%</span>
                </div>
                <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-muted shadow-inner">
                  <div className="h-full w-[99.98%] bg-green-500 transition-all duration-1000 ease-out" />
                </div>
                <p className="text-[11px] text-muted-foreground/60 leading-relaxed">
                  Real-time monitoring active across all global availability zones.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <div className="mb-4 flex items-center -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      className="flex size-8 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-muted shadow-sm transition-transform hover:-translate-y-1"
                      key={i}
                    >
                      <User className="size-4 text-muted-foreground" />
                    </div>
                  ))}
                  <div className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-primary/10 font-bold text-[9px] text-primary">
                    +12
                  </div>
                </div>
                <div className="font-bold text-xs text-foreground">
                  Active Security Administrators
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground uppercase tracking-widest">
                  Authentication level: High
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionGrid>
  );
}


