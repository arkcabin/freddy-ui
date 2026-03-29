import { Rocket, Sparkles, Zap } from "lucide-react";
import type { ReactNode } from "react";

export type ChangelogGroup = {
  category: string;
  icon: ReactNode;
  items: string[];
};

export type ChangelogEntry = {
  version: string;
  title: string;
  date: string;
  status: "Latest" | "Stable" | "Legacy";
  description: string;
  groups: ChangelogGroup[];
};

export const CHANGELOG_DATA: ChangelogEntry[] = [
  {
    version: "0.0.1",
    title: "Initial Beta Release",
    date: "March 29, 2026",
    status: "Latest",
    description: "The official launch of Freddy UI - elite high-fidelity blocks for modern SaaS apps.",
    groups: [
      {
        category: "Features",
        icon: <Rocket className="size-4 text-primary" />,
        items: [
          "100+ Premium shadcn/ui Blocks.",
          "High-fidelity Auth & Hero variants.",
          "Unique 'Boxed' Grid Layout System.",
          "Intersection-based animations.",
        ],
      },
      {
        category: "Improvements",
        icon: <Sparkles className="size-4 text-amber-500" />,
        items: [
          "Full Responsive Support.",
          "Native Dark mode optimization.",
          "Ultra-fast Turbopack builds.",
        ],
      },
      {
        category: "Tech Stack",
        icon: <Zap className="size-4 text-blue-500" />,
        items: [
          "Next.js 16 & React 19.",
          "Tailwind CSS v4 & Motion JS.",
          "Biome.js zero-delay linting.",
        ],
      },
    ],
  },
];
