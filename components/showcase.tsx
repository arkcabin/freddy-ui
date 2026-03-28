"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, Mail, Shield, User } from "lucide-react";
import { LogoIcon } from "./logo";
import { SectionHeader } from "./section-header";
import { SectionGrid } from "./section-grid";

/**
 * Showcase component that displays "Real Content" blocks in an 
 * absolute/overlapping staggered layout.
 * Uses SectionGrid for architectural consistency.
 */
export function Showcase() {
  return (
    <SectionGrid
      markerType="plus"
      showTopMarkers={false}
      showBottomMarkers={true}
      markerOffset="top-4"
      className="py-16 lg:py-24"
      containerClassName="mt-8"
    >
      <SectionHeader
        title="Real Components. Real Performance."
        subtitle="Explore our library of 13+ categories and find the perfect beautifully crafted blocks for your next project."
        className="bg-transparent sticky-none relative top-0 mb-12"
      />

      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Background Decorative Rings */}
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 flex justify-center opacity-20 pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-dashed border-primary/30 animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-primary/20 animate-[spin_40s_linear_infinite_reverse]" />
        </div>

        {/* 1. Auth Block (The Centerpiece) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 z-30 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 p-1 rounded-3xl bg-linear-to-b from-border/50 via-border/10 to-transparent shadow-2xl backdrop-blur-sm px-6 md:px-0"
        >
          <div className="bg-card/90 rounded-[22px] p-8 border border-border/50">
            <div className="flex justify-center mb-6">
              <LogoIcon className="size-10" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Welcome Back</h3>
            <p className="text-muted-foreground text-sm text-center mb-6">Enter your credentials to access your dashboard</p>
            <div className="space-y-4">
              <div className="space-y-1.5 text-left">
                <div className="text-xs font-semibold text-muted-foreground">Email Address</div>
                <div className="px-4 py-2 rounded-lg bg-muted/50 border border-border text-xs text-muted-foreground/60">name@company.com</div>
              </div>
              <div className="space-y-1.5 text-left">
                <div className="text-xs font-semibold text-muted-foreground">Password</div>
                <div className="px-4 py-2 rounded-lg bg-muted/50 border border-border text-xs text-muted-foreground/60">••••••••••••</div>
              </div>
              <Button className="w-full rounded-full" size="sm">Continue with Email</Button>
              <div className="flex items-center gap-2 py-2">
                <div className="h-px flex-1 bg-border" />
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">or</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <Button variant="outline" className="w-full rounded-full" size="sm">
                Sign in with Google
              </Button>
            </div>
          </div>
        </motion.div>

        {/* 2. Pricing Card (Overlapping Right) */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: "5deg" }}
          whileInView={{ opacity: 1, x: 0, rotate: "2deg" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute right-[5%] top-[10%] z-20 hidden lg:block w-[300px] p-1 rounded-2xl bg-linear-to-tr from-primary/20 to-transparent shadow-xl backdrop-blur-md"
        >
          <div className="bg-card/85 rounded-xl p-6 border border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Most Popular</span>
              <span className="bg-primary/20 p-1.5 rounded-lg"><Zap className="size-4 text-primary" /></span>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold font-heading">$49</span>
              <span className="text-muted-foreground text-xs ml-1">/ month</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4 font-medium">For scaling teams needing advanced IT automations.</p>
            <ul className="space-y-2 mb-6">
              {[1, 2, 3].map(i => (
                <li key={i} className="flex items-center gap-2 text-[11px] text-foreground/80">
                  <Check className="size-3 text-primary" strokeWidth={3} />
                  <span>Advanced {i === 1 ? 'Rule Engine' : i === 2 ? 'API Access' : '24/7 Support'}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full rounded-full h-8 text-xs font-bold border-primary/30 hover:bg-primary/5">Upgrade Now</Button>
          </div>
        </motion.div>

        {/* 3. Feature/Stats Card (Overlapping Left) */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: "-5deg" }}
          whileInView={{ opacity: 1, x: 0, rotate: "-3deg" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute left-[5%] top-[40%] z-20 hidden md:block w-[280px] p-4 rounded-2xl border border-border bg-muted/30 shadow-lg backdrop-blur-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="size-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Shield className="size-4 text-green-500" />
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">System Health</div>
              <div className="text-sm font-bold">Secure and Stable</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-green-500" />
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-muted-foreground">Uptime</span>
              <span className="text-foreground font-bold">99.98%</span>
            </div>
            <div className="pt-2 border-t border-border flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="size-5 rounded-full bg-muted border border-background flex items-center justify-center overflow-hidden">
                    <User className="size-2.5 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <div className="text-[9px] text-muted-foreground font-medium">+12 active admins</div>
            </div>
          </div>
        </motion.div>

        {/* 4. Small Overlapping Elements (Peeking in) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute right-[15%] bottom-[10%] z-40 p-3 rounded-xl bg-primary text-primary-foreground shadow-2xl flex items-center gap-3"
        >
          <Mail className="size-5" />
          <div className="pr-2 leading-none">
            <div className="text-[10px] font-bold uppercase tracking-tightest">New Ticket</div>
            <div className="text-[12px] opacity-80 mt-0.5 font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">Critical: Server 5 latency</div>
          </div>
        </motion.div>

        {/* Floating Accent Icons */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <FloatingIcon delay={1} x="10%" y="15%" />
          <FloatingIcon delay={1.5} x="85%" y="60%" />
          <FloatingIcon delay={2} x="20%" y="80%" />
        </div>
      </div>
    </SectionGrid>
  );
}

function FloatingIcon({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 0.4, 0],
        y: [0, -40, 0]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ left: x, top: y }}
      className="absolute size-2 rounded-full bg-primary"
    />
  );
}
