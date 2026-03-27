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
    <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature, index) => {
          const title = feature.isDynamic 
            ? `${totalBlocks}+ ${feature.title}`
            : feature.title;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl border border-white/10 bg-white/2 p-6 transition-colors hover:bg-white/5"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-colors group-hover:text-white">
                <feature.icon className="size-5" />
              </div>
              <h3 className="font-heading text-sm font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/40">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
