"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BarChart3, 
  BookMarked, 
  Layout, 
  Layers, 
  Settings, 
  User,
  LogOut,
  CreditCard,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";

const sidebarItems = [
  { name: "My Library", href: "/library", icon: BookMarked },
  { name: "Pro Blocks", href: "/library/pro", icon: Zap, pro: true },
  { name: "Analytics", href: "/library/analytics", icon: BarChart3 },
  { name: "Settings", href: "/library/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="flex h-16 items-center border-b border-white/10 px-6 font-bold tracking-tight text-white">
        <Layout className="mr-2 h-5 w-5 text-sky-400" />
        Freddy <span className="text-sky-400">Library</span>
      </div>
      
      <div className="flex-1 space-y-1 p-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
              pathname === item.href
                ? "bg-white/10 text-white shadow-lg ring-1 ring-white/20"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon className={cn(
              "mr-3 h-4 w-4 transition-colors",
              pathname === item.href ? "text-sky-400" : "text-zinc-500 group-hover:text-sky-400"
            )} />
            {item.name}
            {item.pro && (
              <span className="ml-auto rounded-full bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-bold text-sky-400 ring-1 ring-inset ring-sky-500/20">
                PRO
              </span>
            )}
          </Link>
        ))}
      </div>

      <div className="border-t border-white/10 p-4">
        {session?.user ? (
          <div className="space-y-3">
            { (session.user as any)?.isPro && (
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-xs font-bold text-emerald-400 hover:bg-emerald-500/20 transition-all">
                <CreditCard className="h-3.5 w-3.5" />
                Billing Portal
              </button>
            )}
            <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
              <div className="h-8 w-8 rounded-xl bg-sky-500/20 ring-1 ring-sky-500/40 flex items-center justify-center text-sky-400 font-extrabold shadow-inner">
                {session.user.name?.[0] || "U"}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-1.5 min-w-0">
                  <p className="truncate text-xs font-bold text-white leading-none">
                    {session.user.name}
                  </p>
                  {(session.user as any)?.isPro && (
                    <div className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                  )}
                </div>
                <p className="truncate text-[10px] text-zinc-600 font-bold uppercase tracking-tight mt-0.5">
                  {(session.user as any)?.isPro ? "Elite Member" : "Free Explorer"}
                </p>
              </div>
              <button 
                onClick={() => authClient.signOut()}
                className="text-zinc-600 hover:text-zinc-400 transition-colors"
                title="Sign Out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <Link 
            href="/auth/sign-in"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 border border-sky-400/20 px-4 py-2 text-sm font-bold text-white hover:bg-sky-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
