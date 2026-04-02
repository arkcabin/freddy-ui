"use client";

import { motion } from "motion/react";
import { ArrowUpRight, DollarSign, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * REVENUE METRIC CARD (Right Top)
 * Features "Total Revenue" title, status pill, and high-fidelity currency display.
 */
export function RevenueMetricCard({ className }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-950",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Total Revenue</span>
        <div className="flex size-5 items-center justify-center rounded-full bg-[#BFFF70]/10 text-[#54A000]">
           <ArrowUpRight className="size-3" />
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#BFFF70] text-[#03251E]">
          <DollarSign className="size-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">4.32k</span>
          <span className="text-[10.5px] font-medium text-emerald-600">+12% vs last month</span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * INCOME CHART CARD (Left Top)
 * Features "Income & Expenses" title and a stylized high-fidelity mockup chart.
 */
export function IncomeChartCard({ className }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "flex flex-col gap-5 rounded-2xl border border-zinc-100 bg-white p-5 shadow-xl dark:border-zinc-800 dark:bg-zinc-950",
        "w-[240px]",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-zinc-50 pb-3 dark:border-zinc-900">
        <span className="text-[12px] font-bold text-zinc-900 dark:text-white">Income & Expenses</span>
        <button className="text-[11px] font-bold text-zinc-400 hover:text-zinc-600 transition-colors">7 Days</button>
      </div>

      {/* Stylized Chart Mockup */}
      <div className="relative h-28 w-full pt-3">
        {/* Mock Chart SVG */}
        <svg className="h-full w-full" viewBox="0 0 200 80">
          <path
            d="M 10 70 Q 30 20, 50 60 T 90 20 T 130 50 T 170 10 T 190 40"
            fill="none"
            stroke="#03251E"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="opacity-90 dark:stroke-emerald-400"
          />
          <path
            d="M 10 70 Q 30 20, 50 60 T 90 20 T 130 50 T 170 10 T 190 40 L 190 80 L 10 80 Z"
            fill="url(#chart-gradient)"
            className="opacity-10"
          />
          <defs>
            <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#BFFF70" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <circle cx="170" cy="10" r="4" fill="#BFFF70" className="animate-pulse shadow-glow" />
        </svg>
        
        {/* Floating Tooltip */}
        <div className="absolute top-0 right-4 rounded bg-[#BFFF70] px-2 py-1 text-[10px] font-bold text-[#03251E] shadow-sm">
          $2,890
        </div>
      </div>
    </motion.div>
  );
}

/**
 * BALANCE PROGRESS CARD (Right Bottom)
 * Features "Balance" title, numeric amount, and custom progress bar with Pine accent.
 */
export function BalanceProgressBarCard({ className }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-xl dark:border-zinc-800 dark:bg-zinc-950",
        "w-[220px]",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-bold text-zinc-900 dark:text-white">Balance</span>
        <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">Reserved</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xl font-black text-zinc-900 dark:text-white">$60,124.00</span>
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[9px] font-black text-zinc-400 uppercase tracking-widest">
            <div className="size-1 rounded-full bg-[#BFFF70]" />
            Pine Account
          </div>
          <span className="text-[9px] font-black text-zinc-900 dark:text-emerald-400">75%</span>
        </div>
        <div className="relative mt-1 h-1.5 w-full overflow-hidden rounded-full bg-zinc-50 dark:bg-zinc-900">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="h-full bg-[#BFFF70] shadow-[0_0_10px_rgba(191,255,112,0.4)]" 
          />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * MEMBER GROWTH CARD (Left Bottom)
 * Features numeric metric, progress badge, and descriptive footer.
 */
export function MemberGrowthCard({ className }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-5 shadow-xl dark:border-zinc-800 dark:bg-zinc-950",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span className="text-2xl font-black text-zinc-900 dark:text-white">75%</span>
          <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wide">Member Growth</span>
        </div>
        <div className="flex h-10 items-center justify-center rounded-xl bg-zinc-900 px-4 text-white hover:bg-zinc-800 transition-colors cursor-pointer">
           <span className="text-[11px] font-bold">Details</span>
        </div>
      </div>
    </motion.div>
  );
}
