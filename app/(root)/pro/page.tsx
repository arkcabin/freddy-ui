"use client";

import React from "react";
import { Zap, Check, Shield, Rocket, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Elite Components",
    description: "Access our most advanced architectural blocks with complex animations.",
  },
  {
    title: "CLI Integration",
    description: "Directly inject pro blocks into your codebase with one command.",
  },
  {
    title: "Priority Support",
    description: "Personalized assistance for complex design implementations.",
  },
  {
    title: "Commercial License",
    description: "Build unlimited commercial projects for your clients.",
  },
];

export default function ProPage() {
  const { data: session } = authClient.useSession();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleUpgrade = async () => {
    setIsLoading(true);
    try {
      const { error } = await authClient.checkout({
        slug: "pro",
      });
      if (error) {
        alert(error.message || "Failed to initiate checkout");
      }
    } catch (_err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-sky-500/30">
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Background Gradients */}
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-full -translate-x-1/2 [background:radial-gradient(100%_100%_at_50%_0%,rgba(14,165,233,0.15)_0%,transparent_100%)]" />
        
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/10 bg-sky-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400 ring-1 ring-sky-500/20">
            <Star className="h-3 w-3 fill-current" />
            Elite Membership
          </div>
          <h1 className="mx-auto max-w-3xl text-5xl font-extrabold tracking-tight sm:text-7xl">
            Build at the <span className="italic uppercase text-sky-400">Speed</span> of Thought.
          </h1>
          <p className="mx-auto max-w-xl text-lg text-zinc-500 font-medium">
            Unlock the full potential of Freddy UI with premium components, 
            CLI automation, and high-fidelity architectural patterns.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mt-20">
          <div className="relative mx-auto max-w-md rounded-[3rem] border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-3xl shadow-2xl ring-1 ring-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-60 w-60 rounded-full bg-sky-500/10 blur-[100px]" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold uppercase italic tracking-tight">Pro Architectural <span className="text-sky-400 not-italic uppercase">Plan</span></h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tight">$19</span>
                  <span className="text-xl font-medium text-zinc-500">/mo</span>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                {FEATURES.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                      <Check className="h-3.5 w-3.5 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-200">{feature.title}</h4>
                      <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleUpgrade}
                disabled={isLoading}
                className={cn(
                  "mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all",
                  "hover:bg-sky-400 hover:scale-[1.02] active:scale-[0.98]",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
              >
                {isLoading ? "Starting Session..." : "Activate Elite Membership"}
                {!isLoading && <ArrowRight className="h-4 w-4" />}
              </button>
              
              <p className="mt-4 text-center text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                Secure checkout via Polar
              </p>
            </div>
          </div>
        </div>

        {/* Value Prop Icons */}
        <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { icon: Shield, label: "Secure Payments", color: "text-emerald-500" },
            { icon: Rocket, label: "Instant Access", color: "text-sky-500" },
            { icon: Zap, label: "CLI Ready", color: "text-amber-500" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-4xl border border-white/5 bg-white/1 text-center">
              <item.icon className={cn("h-10 w-10 opacity-80", item.color)} />
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
