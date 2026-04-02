"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React from "react";
import { Zap, Code2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex w-full flex-col gap-4 rounded-xl border border-border/50 bg-card/50 p-6 shadow-sm transition-shadow hover:shadow-xl dark:bg-card/20",
        className
      )}
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="flex size-10 items-center justify-center rounded-lg bg-foreground text-background shadow-lg transition-transform group-hover:scale-110"
      >
        <Icon className="size-5" />
      </div>
      
      <div style={{ transform: "translateZ(25px)" }} className="space-y-2">
        <h3 className="font-heading text-lg font-bold leading-tight">{title}</h3>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground/80">
          {description}
        </p>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-tr from-foreground/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
};

export function Hero4Cards() {
  const features = [
    {
      icon: Zap,
      title: "Ultra Speed",
      description: "Optimized for sub-second performance in Next.js applications.",
    },
    {
      icon: Code2,
      title: "Clean API",
      description: "Intuitive component patterns with full TypeScript support.",
    },
    {
      icon: Globe,
      title: "Production Ready",
      description: "Tested and refined for real-world enterprise deployment.",
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </div>
  );
}
