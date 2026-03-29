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

      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Background Decorative Rings */}
        <div className="-z-10 -translate-y-1/2 pointer-events-none absolute inset-x-0 top-1/2 flex justify-center opacity-20">
          <div className="h-[600px] w-[600px] animate-[spin_60s_linear_infinite] rounded-full border border-primary/30 border-dashed" />
          <div className="absolute h-[400px] w-[400px] animate-[spin_40s_linear_infinite_reverse] rounded-full border border-primary/20 border-dashed" />
        </div>

        {/* 1. Auth Block (The Centerpiece) */}
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-30 w-full max-w-[400px] rounded-3xl bg-linear-to-b from-border/50 via-border/10 to-transparent p-1 px-6 shadow-2xl backdrop-blur-sm md:px-0"
          initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: 10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        >
          <div className="rounded-[22px] border border-border/50 bg-card/90 p-8">
            <div className="mb-6 flex justify-center">
              <LogoIcon className="size-10" />
            </div>
            <h3 className="mb-2 text-center font-bold text-xl">Welcome Back</h3>
            <p className="mb-6 text-center text-muted-foreground text-sm">
              Enter your credentials to access your dashboard
            </p>
            <div className="space-y-4">
              <div className="space-y-1.5 text-left">
                <div className="font-semibold text-muted-foreground text-xs">
                  Email Address
                </div>
                <div className="rounded-lg border border-border bg-muted/50 px-4 py-2 text-muted-foreground/60 text-xs">
                  name@company.com
                </div>
              </div>
              <div className="space-y-1.5 text-left">
                <div className="font-semibold text-muted-foreground text-xs">
                  Password
                </div>
                <div className="rounded-lg border border-border bg-muted/50 px-4 py-2 text-muted-foreground/60 text-xs">
                  ••••••••••••
                </div>
              </div>
              <Button className="w-full rounded-full" size="sm">
                Continue with Email
              </Button>
              <div className="flex items-center gap-2 py-2">
                <div className="h-px flex-1 bg-border" />
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                  or
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <Button
                className="w-full rounded-full"
                size="sm"
                variant="outline"
              >
                Sign in with Google
              </Button>
            </div>
          </div>
        </motion.div>

        {/* 2. Pricing Card (Overlapping Right) */}
        <motion.div
          className="absolute top-[10%] right-[5%] z-20 hidden w-[300px] rounded-2xl bg-linear-to-tr from-primary/20 to-transparent p-1 shadow-xl backdrop-blur-md lg:block"
          initial={{ opacity: 0, x: 100, rotate: "5deg" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0, rotate: "2deg" }}
        >
          <div className="rounded-xl border border-primary/20 bg-card/85 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 font-bold text-[10px] text-primary uppercase tracking-wider">
                Most Popular
              </span>
              <span className="rounded-lg bg-primary/20 p-1.5">
                <Zap className="size-4 text-primary" />
              </span>
            </div>
            <div className="mb-4">
              <span className="font-bold font-heading text-3xl">$49</span>
              <span className="ml-1 text-muted-foreground text-xs">
                / month
              </span>
            </div>
            <p className="mb-4 font-medium text-muted-foreground text-xs">
              For scaling teams needing advanced IT automations.
            </p>
            <ul className="mb-6 space-y-2">
              {["Rule Engine", "API Access", "24/7 Support"].map((feature) => (
                <li
                  className="flex items-center gap-2 text-[11px] text-foreground/80"
                  key={feature}
                >
                  <Check className="size-3 text-primary" strokeWidth={3} />
                  <span>Advanced {feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className="h-8 w-full rounded-full border-primary/30 font-bold text-xs hover:bg-primary/5"
              variant="outline"
            >
              Upgrade Now
            </Button>
          </div>
        </motion.div>

        {/* 3. Feature/Stats Card (Overlapping Left) */}
        <motion.div
          className="absolute top-[40%] left-[5%] z-20 hidden w-[280px] rounded-2xl border border-border bg-muted/30 p-4 shadow-lg backdrop-blur-md md:block"
          initial={{ opacity: 0, x: -100, rotate: "-5deg" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0, rotate: "-3deg" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-green-500/10">
              <Shield className="size-4 text-green-500" />
            </div>
            <div>
              <div className="font-semibold text-[10px] text-muted-foreground uppercase tracking-wider">
                System Health
              </div>
              <div className="font-bold text-sm">Secure and Stable</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[85%] bg-green-500" />
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-muted-foreground">Uptime</span>
              <span className="font-bold text-foreground">99.98%</span>
            </div>
            <div className="flex items-center justify-between border-border border-t pt-2">
              <div className="-space-x-2 flex">
                {[1, 2, 3].map((i) => (
                  <div
                    className="flex size-5 items-center justify-center overflow-hidden rounded-full border border-background bg-muted"
                    key={i}
                  >
                    <User className="size-2.5 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <div className="font-medium text-[9px] text-muted-foreground">
                +12 active admins
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Small Overlapping Elements (Peeking in) */}
        <motion.div
          className="absolute right-[15%] bottom-[10%] z-40 flex items-center gap-3 rounded-xl bg-primary p-3 text-primary-foreground shadow-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Mail className="size-5" />
          <div className="pr-2 leading-none">
            <div className="font-bold text-[10px] uppercase tracking-tightest">
              New Ticket
            </div>
            <div className="mt-0.5 max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap font-medium text-[12px] opacity-80">
              Critical: Server 5 latency
            </div>
          </div>
        </motion.div>

        {/* Floating Accent Icons */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
          <FloatingIcon delay={1} x="10%" y="15%" />
          <FloatingIcon delay={1.5} x="85%" y="60%" />
          <FloatingIcon delay={2} x="20%" y="80%" />
        </div>
      </div>
    </SectionGrid>
  );
}

function FloatingIcon({
  delay,
  x,
  y,
}: {
  delay: number;
  x: string;
  y: string;
}) {
  return (
    <motion.div
      animate={{
        opacity: [0, 0.4, 0],
        y: [0, -40, 0],
      }}
      className="absolute size-2 rounded-full bg-primary"
      initial={{ opacity: 0, y: 0 }}
      style={{ left: x, top: y }}
      transition={{
        duration: 4,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}
