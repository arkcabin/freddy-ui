"use client";

import React from "react";
import { Asterisk, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Logo } from "@/components/logo";
import { SiteNav } from "./nav";

/**
 * AI-Work Header
 * Sticky, minimalist navigation with glassmorphism and theme toggle.
 */
export function MainHeader({
    isFullWidth
}: {
    isFullWidth: boolean;
}) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Avoid hydration mismatch by waiting for mount
    const activeScrolled = mounted ? scrolled : false;
    const activeFullWidth = mounted ? isFullWidth : false;

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                activeScrolled
                    ? "bg-transparent"
                    : "bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(120,119,198,0.08),transparent)]"
            )}
        >
            {/* Architectural Grid Frame - Integrated directly into the header for sticky support */}
            <div className={cn(
                "relative mx-auto w-full max-w-6xl border-dashed min-h-16 flex items-center justify-between px-4 md:px-6 transition-all duration-300",
                activeScrolled
                    ? "border-transparent"
                    : "border-x border-b border-border"
            )}>
                {/* Header Dual Borders */}
                {!activeScrolled && (
                    <>
                        {/* Vertical Dual (Left/Right) */}
                        <div className="absolute inset-y-0 -left-[40px] border-l border-dashed border-border pointer-events-none" />
                        <div className="absolute inset-y-0 -right-[40px] border-r border-dashed border-border pointer-events-none" />

                        {/* Horizontal Dual (Bottom) */}
                        <div className="absolute -bottom-[40px] left-0 right-0 border-b border-dashed border-border pointer-events-none" />
                        {/* Extended Horizontal (Full Width) for that expansive look */}
                        <div className="absolute -bottom-[40px] -left-[100vw] -right-[100vw] border-b border-dashed border-border/20 pointer-events-none" />

                        {/* Plus Markers at intersections */}

                        {/* 1. Outer-Outer Intersections */}
                        <div className="absolute -left-[40px] -bottom-[40px] pointer-events-none z-50">
                            <div className="relative">
                                <PlusIcon className="absolute size-3.5 -left-[7px] -top-[7px] text-zinc-500" strokeWidth={1} />
                            </div>
                        </div>
                        <div className="absolute -right-[40px] -bottom-[40px] pointer-events-none z-50">
                            <div className="relative">
                                <PlusIcon className="absolute size-3.5 -left-[7px] -top-[7px] text-zinc-500" strokeWidth={1} />
                            </div>
                        </div>

                        {/* 2. Inner-Inner Intersections */}
                        <div className="absolute left-0 -bottom-px pointer-events-none z-50">
                            <div className="relative">
                                <PlusIcon className="absolute size-3.5 -left-[7px] -top-[7px] text-zinc-500" strokeWidth={1} />
                            </div>
                        </div>
                        <div className="absolute right-0 -bottom-px pointer-events-none z-50">
                            <div className="relative">
                                <PlusIcon className="absolute size-3.5 -left-[7px] -top-[7px] text-zinc-500" strokeWidth={1} />
                            </div>
                        </div>

                        {/* 3. Outer-Vertical / Inner-Horizontal Intersections */}
                        <div className="absolute -left-[40px] -bottom-px pointer-events-none z-50">
                            <div className="relative">
                                <PlusIcon className="absolute size-3.5 -left-[7px] -top-[7px] text-zinc-500" strokeWidth={1} />
                            </div>
                        </div>
                        <div className="absolute -right-[40px] -bottom-px pointer-events-none z-50">
                            <div className="relative">
                                <PlusIcon className="absolute size-3.5 -left-[7px] -top-[7px] text-zinc-500" strokeWidth={1} />
                            </div>
                        </div>

                        {/* 4. Inner-Vertical / Outer-Horizontal Intersections */}
                        <div className="absolute left-0 -bottom-[40px] pointer-events-none z-50">
                            <div className="relative">
                                <PlusIcon className="absolute size-3.5 -left-[7px] -top-[7px] text-zinc-500" strokeWidth={1} />
                            </div>
                        </div>
                        <div className="absolute right-0 -bottom-[40px] pointer-events-none z-50">
                            <div className="relative">
                                <PlusIcon className="absolute size-3.5 -left-[7px] -top-[7px] text-zinc-500" strokeWidth={1} />
                            </div>
                        </div>
                    </>
                )}
                {/* Logo */}
                <div className="flex-1 flex items-center gap-2 ">
                    <div

                        className={cn(
                            "flex items-center gap-1 rounded-full  px-5",
                            activeScrolled
                                ? "bg-secondary/30 p-1 backdrop-blur-md "
                                : ""
                        )}
                    >
                        <Logo className="h-6" />
                        <span className="inline-flex items-center justify-center rounded-full bg-accent/10 px-1.5 py-px text-[7px] font-black uppercase tracking-widest text-foreground ring-1 ring-inset ring-foreground/20 leading-none h-3.5">
                            Beta
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="rounded-full bg-secondary/30 p-1 backdrop-blur-md border border-border/50">
                        <SiteNav />
                    </div>

                    <div className="flex items-center gap-4">

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="group relative rounded-full ring-1 ring-border/50 transition-all hover:bg-primary/5 hover:ring-primary/40 active:scale-95 shadow-[0_0_0_rgba(var(--primary),0)] hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]"
                            title="Toggle Theme"
                        >
                            <Asterisk className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:rotate-180 group-hover:text-primary animate-[spin_15s_linear_infinite]" />
                            <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
