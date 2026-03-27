"use client";

import { cn } from "@/lib/utils";

interface CategorySkeletonProps {
  id: string;
  className?: string;
}

export function CategorySkeleton({ id, className }: CategorySkeletonProps) {
  const renderSkeleton = () => {
    switch (id) {
      case "auth":
        return (
          <div className="flex h-full w-full items-center justify-center p-4">
            <div className="w-full max-w-[120px] space-y-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm">
              <div className="h-2 w-1/2 rounded-full bg-muted" />
              <div className="h-4 w-full rounded-md bg-muted/40" />
              <div className="h-4 w-full rounded-md bg-muted/40" />
              <div className="h-4 w-full rounded-md bg-primary/20" />
            </div>
          </div>
        );
      case "hero":
        return (
          <div className="relative h-full w-full p-4 flex flex-col items-center justify-center">
            <div className="mt-4 flex gap-2">
              <div className="h-6 w-16 rounded-md bg-muted/40" />
              <div className="h-6 w-16 rounded-md bg-muted/40" />
            </div>
          </div>
        );
      case "feature":
        return (
          <div className="flex h-full w-full items-end justify-center gap-4 p-4 pb-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="size-6 rounded-full bg-muted" />
                <div className="h-1.5 w-10 rounded-full bg-muted/50" />
              </div>
            ))}
          </div>
        );
      case "pricing":
        return (
          <div className="flex h-full w-full items-end justify-center gap-2 p-4">
            <div className="h-12 w-10 rounded-t-lg bg-muted/30" />
            <div className="h-18 w-12 rounded-t-lg border-x border-t border-border/50 bg-muted/50" />
            <div className="h-12 w-10 rounded-t-lg bg-muted/30" />
          </div>
        );
      case "cta":
        return (
          <div className="flex h-full w-full items-center justify-center p-4">
            <div className="flex gap-2">
              <div className="h-6 w-16 rounded-md bg-muted/40" />
              <div className="h-6 w-16 rounded-md bg-muted/40" />
            </div>
          </div>
        );
      case "testimonials":
        return (
          <div className="flex h-full w-full items-end justify-center gap-3 p-4">
             <div className="h-2 w-full max-w-[160px] rounded-full bg-muted/40 mb-2" />
             <div className="size-6 rounded-full bg-muted shrink-0" />
          </div>
        );
      case "integrations":
        return (
          <div className="relative h-full w-full p-4 flex items-center justify-center">
            <div className="relative size-16">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 size-4 rounded-full bg-muted" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-4 rounded-full bg-muted" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 size-4 rounded-full bg-muted" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 size-4 rounded-full bg-muted" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-6 rounded-full border border-border bg-muted/20" />
              <div className="absolute inset-0 size-full border border-dashed border-border/30 rounded-full scale-125" />
            </div>
          </div>
        );
      case "faqs":
        return (
          <div className="h-full w-full space-y-2 p-4 pt-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-2 w-full rounded-full bg-muted/30" />
            ))}
          </div>
        );
      case "contact":
        return (
          <div className="flex h-full w-full flex-col gap-2 p-4 pt-6">
            <div className="h-2 w-3/4 rounded-full bg-muted/30" />
            <div className="h-8 w-full rounded-md border border-border/30 bg-muted/10 px-2 pt-2">
               <div className="h-1.5 w-full rounded-full bg-muted/20" />
            </div>
          </div>
        );
      case "logo-cloud":
        return (
          <div className="flex h-full w-full items-end justify-center gap-4 p-4 pb-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-10 rounded bg-muted/30" />
            ))}
          </div>
        );
      case "footer":
        return (
          <div className="flex h-full w-full flex-col p-4 pt-2">
            <div className="grid grid-cols-4 gap-4 py-4 border-t border-border/20 mt-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-muted" />
                  <div className="h-1 w-2/3 rounded-full bg-muted/30" />
                  <div className="h-1 w-1/2 rounded-full bg-muted/30" />
                </div>
              ))}
            </div>
          </div>
        );
      case "header":
        return (
          <div className="h-full w-full p-4">
            <div className="flex items-center gap-2 border-b border-border/20 pb-2">
              <div className="size-3 rounded-full bg-muted" />
              <div className="flex gap-2 mx-auto">
                 <div className="h-1 w-8 rounded-full bg-muted/30" />
                 <div className="h-1 w-8 rounded-full bg-muted/30" />
              </div>
              <div className="h-4 w-10 rounded-md bg-muted/40" />
            </div>
          </div>
        );
      case "not-found":
        return (
          <div className="flex h-full w-full flex-col items-center justify-center p-4">
            <div className="text-3xl font-bold opacity-10">404</div>
          </div>
        );
      case "image-gallery":
        return (
          <div className="grid h-full w-full grid-cols-3 gap-1 p-4 pt-6">
             <div className="h-10 rounded bg-muted/40" />
             <div className="h-10 rounded bg-muted/40" />
             <div className="h-10 rounded bg-muted/40" />
          </div>
        );
      default:
        return (
          <div className="flex h-full w-full items-center justify-center p-4">
            <div className="size-12 rounded-lg bg-muted/20" />
          </div>
        );
    }
  };

  return (
    <div className={cn("pointer-events-none h-full w-full select-none", className)}>
      {renderSkeleton()}
    </div>
  );
}
