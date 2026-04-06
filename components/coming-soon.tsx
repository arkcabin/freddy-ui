"use client";

import { ShieldCheck } from "lucide-react";

export function ComingSoon() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center p-6">
      <div className="relative w-full max-w-sm overflow-hidden rounded-4xl border border-border/50 bg-secondary/5 p-8 sm:p-12 shadow-2xl backdrop-blur-3xl">
        {/* Architectural Minimalist Aesthetic */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.03),transparent)]" />
        
        <div className="relative flex flex-col items-center text-center space-y-8">
          <div className="space-y-2.5">
            <h1 className="text-2xl font-black tracking-tighter text-foreground uppercase leading-none">
              Command Center
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/30">
               Access Restricted
            </p>
          </div>

          <div className="w-12 h-px bg-border/50" />

          <p className="text-[11px] text-muted-foreground/60 font-medium leading-relaxed max-w-[240px]">
            The elite registry and dashboard are currently being finalized. 
            Full system offline until deployment v0.8.4.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground/30 uppercase tracking-[0.3em] pt-4">
            <ShieldCheck className="size-3.5 opacity-50" />
            Secure Active Session
          </div>
        </div>
      </div>
    </div>
  );
}
