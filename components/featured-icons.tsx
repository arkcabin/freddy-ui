"use client";

import {
  Check,
  Code2,
  Cpu,
  Fingerprint,
  Layers,
  Layout,
  MousePointer2,
  Palette,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [
  { id: "layout", icon: Layout, rotate: "-10deg", y: 0, zIndex: 10 },
  { id: "zap", icon: Zap, rotate: "-8deg", y: -10, zIndex: 11 },
  { id: "palette", icon: Palette, rotate: "-6deg", y: -20, zIndex: 12 },
  { id: "search", icon: Search, rotate: "-4deg", y: -10, zIndex: 13 },
  { id: "code", icon: Code2, rotate: "-2deg", y: 0, zIndex: 14 },
  {
    id: "check",
    icon: Check,
    rotate: "0deg",
    y: 15,
    zIndex: 20,
    isCenter: true,
  },
  { id: "mouse", icon: MousePointer2, rotate: "2deg", y: 0, zIndex: 14 },
  { id: "sparkles", icon: Sparkles, rotate: "4deg", y: -10, zIndex: 13 },
  { id: "layers", icon: Layers, rotate: "6deg", y: -20, zIndex: 12 },
  { id: "cpu", icon: Cpu, rotate: "8deg", y: -10, zIndex: 11 },
  { id: "fingerprint", icon: Fingerprint, rotate: "10deg", y: 0, zIndex: 10 },
];

export function FeaturedIcons({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mt-32 mb-24 flex items-center justify-center gap-2 sm:gap-4 lg:gap-6",
        className
      )}
    >
      {icons.map((item) => (
        <div
          className={cn(
            "relative flex items-center justify-center transition-all duration-500",
            item.isCenter
              ? "feature-card-active z-20 size-24 rounded-[32px] sm:size-28"
              : "feature-card size-16 rounded-[20px] text-muted-foreground sm:size-20"
          )}
          key={item.id}
          style={{
            zIndex: item.zIndex,
            transform: `translateY(${item.y}px) rotate(${item.rotate}) ${item.isCenter ? "scale(1.05)" : "scale(1)"}`,
          }}
        >
          <item.icon
            className={cn(
              item.isCenter ? "size-8 sm:size-10" : "size-5 sm:size-6"
            )}
            strokeWidth={item.isCenter ? 2.5 : 2}
          />
        </div>
      ))}
    </div>
  );
}
