"use client";

import { ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

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

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          animate={{ height: "auto", opacity: 1 }}
          className="relative w-full overflow-hidden border-border border-b bg-foreground text-background"
          exit={{ height: 0, opacity: 0 }}
          initial={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container mx-auto flex h-10 items-center justify-between px-4 sm:px-6">
            <div className="flex flex-1 items-center justify-center gap-x-3 text-center font-medium text-[13px] leading-none tracking-tight">
              <span className="hidden items-center rounded-full bg-background/20 px-2 py-0.5 text-[10px] text-background uppercase tracking-wider ring-1 ring-background/30 ring-inset sm:inline-flex">
                New
              </span>
              <p className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
                <span>Unlock premium components with Freddy UI Pro.</span>
                <a
                  className="group inline-flex items-center font-bold text-primary-foreground hover:underline"
                  href="#"
                >
                  Get Started
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </p>
            </div>

            <button
              aria-label="Close announcement"
              className="ml-auto inline-flex items-center justify-center rounded-md p-1 opacity-50 transition-all hover:bg-background/10 hover:opacity-100 focus:outline-hidden"
              onClick={handleClose}
              onKeyDown={handleKeyDown}
              type="button"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Decorative gradient blur */}
          <div className="-z-10 -translate-x-1/2 absolute top-0 left-1/2 h-full w-full bg-radial from-background/20 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
