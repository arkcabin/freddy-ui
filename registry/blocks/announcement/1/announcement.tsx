"use client";

import * as React from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Announcement = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        handleClose();
      }
    },
    [handleClose]
  );

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative w-full overflow-hidden border-b border-border bg-foreground text-background"
        >
          <div className="container mx-auto flex h-10 items-center justify-between px-4 sm:px-6">
            <div className="flex flex-1 items-center justify-center gap-x-3 text-center text-[13px] font-medium leading-none tracking-tight">
              <span className="hidden sm:inline-flex items-center rounded-full bg-background/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-background ring-1 ring-inset ring-background/30">
                New
              </span>
              <p className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
                <span>Unlock premium components with Freddy UI Pro.</span>
                <a
                  href="#"
                  className="group inline-flex items-center font-bold text-primary-foreground hover:underline"
                >
                  Get Started
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              onKeyDown={handleKeyDown}
              className="ml-auto inline-flex items-center justify-center rounded-md p-1 opacity-50 transition-all hover:bg-background/10 hover:opacity-100 focus:outline-hidden"
              aria-label="Close announcement"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Decorative gradient blur */}
          <div className="absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-radial from-background/20 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
