"use client";

import { Lock, Zap } from "lucide-react";
import Link from "next/link";

export function GlassLock() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl transition-all duration-500">
      <div className="max-w-[320px] rounded-[2.5rem] border border-white/10 bg-zinc-900/60 p-8 text-center shadow-2xl ring-1 ring-white/20 animate-in fade-in zoom-in-95 duration-500">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-sky-500/10 border border-sky-500/20 shadow-[0_0_40px_rgba(14,165,233,0.15)]">
          <Lock className="h-7 w-7 text-sky-400" />
        </div>
        <h3 className="mb-3 text-xl font-extrabold text-white tracking-tighter uppercase italic">
          Pro <span className="text-sky-400 not-italic">Architectural</span> block
        </h3>
        <p className="mb-8 text-sm text-zinc-500 font-medium leading-relaxed">
          This premium block features advanced animations and production-ready architecture. 
          Upgrade to access the source code and CLI integration.
        </p>
        <Link 
          href="/library/pro"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all hover:bg-sky-400 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Zap className="h-4 w-4 fill-current" />
          Upgrade to Pro
        </Link>
      </div>
    </div>
  );
}
