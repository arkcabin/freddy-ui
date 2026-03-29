"use client";

import { motion, type Variants } from "motion/react";
import { features } from "@/config/features";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Features({ totalBlocks }: { totalBlocks: number }) {
  return (
    <div className="relative z-10">
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        whileInView="visible"
      >
        {features.map((feature, _index) => {
          const title = feature.isDynamic
            ? `${totalBlocks}+ ${feature.title}`
            : feature.title;

          return (
            <motion.div
              className="group relative rounded-2xl border border-border bg-muted/20 p-6 transition-colors hover:bg-muted/40"
              key={feature.title}
              variants={itemVariants}
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-muted/30 text-muted-foreground transition-colors group-hover:text-primary">
                <feature.icon className="size-5" />
              </div>
              <h3 className="font-bold font-heading text-foreground text-sm">
                {title}
              </h3>
              <p className="mt-2 text-muted-foreground text-xs leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
