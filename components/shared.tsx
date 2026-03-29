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
        "pointer-events-none absolute inset-0 h-full w-full fill-transparent stroke-border/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          height={height}
          id={id}
          patternUnits="userSpaceOnUse"
          width={width}
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
      <rect fill={`url(#${id})`} height="100%" strokeWidth={0} width="100%" />
    </svg>
  );
}

export function GlassCard({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("glass-card rounded-xl p-6", className)} {...props}>
      {children}
    </div>
  );
}
