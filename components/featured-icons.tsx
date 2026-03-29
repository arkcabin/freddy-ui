"use client";

import {
  Layout,
  Zap,
  Palette,
  Search,
  Check,
  Code2,
  MousePointer2,
  Sparkles,
  Layers,
  Cpu,
  Fingerprint
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [
  { icon: Layout, rotate: "-10deg", y: 0, zIndex: 10 },
  { icon: Zap, rotate: "-8deg", y: -10, zIndex: 11 },
  { icon: Palette, rotate: "-6deg", y: -20, zIndex: 12 },
  { icon: Search, rotate: "-4deg", y: -10, zIndex: 13 },
  { icon: Code2, rotate: "-2deg", y: 0, zIndex: 14 },
  { icon: Check, rotate: "0deg", y: 15, zIndex: 20, isCenter: true },
  { icon: MousePointer2, rotate: "2deg", y: 0, zIndex: 14 },
  { icon: Sparkles, rotate: "4deg", y: -10, zIndex: 13 },
  { icon: Layers, rotate: "6deg", y: -20, zIndex: 12 },
  { icon: Cpu, rotate: "8deg", y: -10, zIndex: 11 },
  { icon: Fingerprint, rotate: "10deg", y: 0, zIndex: 10 },
];

export function FeaturedIcons({ className }: { className?: string }) {
  return (
    <div className={cn("mt-32 mb-24 flex items-center justify-center gap-2 sm:gap-4 lg:gap-6", className)}>
      {icons.map((item, i) => (
        <div
          key={i}
          className={cn(
            "relative flex items-center justify-center transition-all duration-500",
            item.isCenter ? "feature-card-active size-24 sm:size-28 z-20 rounded-[32px]" : "feature-card size-16 sm:size-20 rounded-[20px] text-muted-foreground"
          )}
          style={{
            zIndex: item.zIndex,
            transform: `translateY(${item.y}px) rotate(${item.rotate}) ${item.isCenter ? 'scale(1.05)' : 'scale(1)'}`
          }}
        >
          <item.icon
            className={cn(item.isCenter ? "size-8 sm:size-10" : "size-5 sm:size-6")}
            strokeWidth={item.isCenter ? 2.5 : 2}
          />
        </div>
      ))}
    </div>
  );
}
