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
      {icons.map((item, index) => (
        <div
          className={cn(
            "relative flex items-center justify-center transition-all duration-500",
            item.isCenter
              ? "feature-card-active z-20 size-18 rounded-3xl sm:size-22"
              : "feature-card size-12 rounded-2xl text-muted-foreground sm:size-16",
            index % 2 !== 0 && "hidden sm:flex"
          )}
          key={item.id}
          style={{
            zIndex: item.zIndex,
            transform: `translateY(${item.y * 0.7}px) rotate(${item.rotate})`,
          }}
        >
          <item.icon
            className={cn(
              item.isCenter ? "size-6 sm:size-8" : "size-4 sm:size-5"
            )}
            strokeWidth={item.isCenter ? 2.5 : 2}
          />
        </div>
      ))}
    </div>
  );
}
