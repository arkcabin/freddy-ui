"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, CircleDot, Mail, Share2, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  BalanceProgressBarCard, 
  IncomeChartCard, 
  MemberGrowthCard, 
  RevenueMetricCard 
} from "./cards";

/**
 * HERO 6: THE SLATE MASTERPIECE
 * Pixel-perfect SaaS Hero with floating UI mockups, dot grids, and SVG path tracing.
 */
export function Hero6() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-zinc-950 font-sans selection:bg-[#BFFF70]/30 transition-colors duration-500">
      
      {/* 1. Generative Background Infrastructure (Dot Grid) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(#03251E 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32">
        
        {/* 3. Floating UI Mockups (Neural Positions) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {/* Left Side Group */}
          <motion.div 
             initial={{ opacity: 0, x: -100, y: 20 }}
             animate={{ opacity: 1, x: 0, y: 0 }}
             transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
             className="absolute top-[28%] left-[2%] pointer-events-auto"
          >
            <IncomeChartCard />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: -80, y: 40 }}
             animate={{ opacity: 1, x: 0, y: 0 }}
             transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
             className="absolute top-[52%] left-[4%] pointer-events-auto"
          >
            <MemberGrowthCard />
          </motion.div>

          {/* Right Side Group */}
          <motion.div 
             initial={{ opacity: 0, x: 100, y: -20 }}
             animate={{ opacity: 1, x: 0, y: 0 }}
             transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
             className="absolute top-[26%] right-[3%] pointer-events-auto"
          >
            <RevenueMetricCard />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 80, y: -40 }}
             animate={{ opacity: 1, x: 0, y: 0 }}
             transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
             className="absolute top-[50%] right-[3%] pointer-events-auto"
          >
            <BalanceProgressBarCard />
          </motion.div>
        </div>

        {/* 4. Strategic Content Stack */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block text-[14px] font-bold text-zinc-900 dark:text-emerald-400"
          >
            The AI-First Component Library
          </motion.span>
          
          <h1 className="relative max-w-3xl font-heading text-[clamp(2.25rem,6vw,4.25rem)] font-bold leading-[1.05] tracking-tightest text-zinc-900 dark:text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              Deliver&nbsp;
            </motion.span>
            <motion.span 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative mx-1 inline-block rounded-xl bg-[#BFFF70] px-4 py-1 text-[#03251E] shadow-sm"
            >
              the Perfect
            </motion.span>
            <br />
            <motion.span
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative inline-block"
            >
              solution
              {/* 5. SVG Path Tracing (The "Hand-Drawn" look) */}
              <svg 
                className="absolute -bottom-2 left-0 h-4 w-full text-zinc-900/10 dark:text-emerald-400/20"
                viewBox="0 0 200 20"
                fill="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                  d="M 5 15 Q 100 0, 195 15"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block"
            >
              &nbsp;for your client now
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-8 max-w-xl text-balance text-lg font-medium text-zinc-500 leading-relaxed dark:text-zinc-400"
          >
            Freddy UI is the world&apos;s most advanced AI-first component library. <br className="hidden sm:block" />
            Build stunning, high-performance interfaces in seconds.
          </motion.p>

          {/* 6. Elite SaaS Input CTA */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="mx-auto mt-12 flex max-w-lg items-center justify-between rounded-full border border-zinc-200 bg-white/50 p-1.5 shadow-xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div className="flex flex-1 items-center gap-3 px-4">
              <Mail className="size-4 text-zinc-400" />
              <input 
                type="email" 
                placeholder="Enter your mail address" 
                className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400"
              />
            </div>
            <Button size="lg" className="h-12 rounded-full bg-[#BFFF70] font-black text-[#03251E] hover:bg-[#AEEB60] transition-all hover:scale-[1.02]">
              Get Started
            </Button>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 inline-block text-[11px] font-bold text-zinc-400 uppercase tracking-widest"
          >
            This template <span className="mx-1">✥</span> Free to get started
          </motion.span>
        </div>
      </div>

      {/* 7. Service Highlight Footer */}
      <div className="border-t border-zinc-100 bg-white px-10 py-12 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {[
            { 
              icon: Zap, 
              title: "Sub-second Performance",
              text: "Optimized for speed with streaming-first architecture." 
            },
            { 
              icon: Sparkles, 
              title: "Type-safe Registry",
              text: "Zero-config development powered by Biome and v4." 
            },
            { 
              icon: Box, 
              title: "AI-Centric Design",
              text: "High-fidelity layouts crafted for generative products." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <item.icon className="size-6 text-zinc-900 dark:text-[#BFFF70]" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-wider">{item.title}</h4>
                <p className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
