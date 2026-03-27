import { Box, Layers, LayoutGrid, Server, type LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  isDynamic?: boolean;
}

export const features: Feature[] = [
  {
    title: "100% Free & Open-Source",
    description: "The most complete open-source shadcn library loved by devs and teams around the world.",
    icon: Box,
  },
  {
    title: "Patterns", // Title will be prefixed with the count dynamically
    description: "Reusable solutions composed from shadcn/ui primitives into real-world product flows.",
    icon: Layers,
    isDynamic: true,
  },
  {
    title: "Shadcn Create Compatible",
    description: "All components and patterns are compatible with all 5 shadcn create styles.",
    icon: LayoutGrid,
  },
  {
    title: "Dual Library Support",
    description: "ReUI ships canonical Base UI docs plus matching Radix UI implementations for the same high-value components.",
    icon: Server,
  },
];
