import React from "react";
import { cn } from "@/lib/utils";

export function BorderSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "-translate-x-1/2 pointer-events-none absolute left-1/2 w-screen border-t border-dashed",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DashedLines({
  width = 20,
  height = 50,
  x = 10,
  className,
  ...props
}: React.ComponentProps<"svg">) {
  const id = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none size-full stroke-border", className)}
      {...props}
    >
      <pattern
        height={height}
        id={id}
        patternUnits="userSpaceOnUse"
        width={width}
        x={x}
      >
        <path d={`M.5 0 V${height}`} fill="none" strokeDasharray={2.5} />
      </pattern>
      <rect fill={`url(#${id})`} height="100%" strokeWidth={0} width="100%" />
    </svg>
  );
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  className,
  ...props
}: React.ComponentProps<"svg"> & {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string;
}) {
  const id = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-transparent stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export function GlassCard({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md dark:border-white/5 dark:bg-card/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
