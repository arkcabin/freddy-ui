import { Code2, Eye } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { PreviewMode } from "@/types";

const MODE_OPTIONS = [
  { value: "preview", icon: Eye },
  { value: "code", icon: Code2 },
] as const;

type TogglePreviewModeProps = {
  name: string;
  previewMode: PreviewMode;
  setPreviewMode: (mode: PreviewMode) => void;
};

export function TogglePreviewMode({
  name,
  previewMode,
  setPreviewMode,
}: TogglePreviewModeProps) {
  return (
    <div className="flex items-center bg-muted/20 backdrop-blur-md rounded-full p-1 border border-border/40 shadow-sm" role="radiogroup">
      {MODE_OPTIONS.map((option) => (
        <button
          aria-label={`Switch to ${option.value} mode`}
          className={cn(
            "relative flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-[11px] font-bold tracking-tight transition-all duration-300",
            previewMode === option.value
              ? "text-primary-foreground shadow-sm"
              : "text-muted-foreground/70 hover:text-foreground"
          )}
          key={option.value}
          onClick={() => setPreviewMode(option.value)}
          type="button"
        >
          {previewMode === option.value && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary shadow-[0_0_12px_rgba(var(--primary),0.2)]"
              layoutId={`${name}-current-preview-mode`}
              transition={{
                type: "spring",
                bounce: 0.15,
                duration: 0.5,
              }}
            />
          )}
          <option.icon className={cn("size-3.5 z-10 transition-transform duration-300", previewMode === option.value && "scale-110")} />
          <span className="z-10 capitalize lg:block">{option.value}</span>
        </button>
      ))}
    </div>
  );
}
