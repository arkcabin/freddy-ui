"use client";

import { useFreddyStore } from "@/hooks/use-freddy-store";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FavoriteButton({ name }: { name: string }) {
  const { favorites, toggleFavorite } = useFreddyStore();
  const isFavorited = favorites.includes(name);

  /** 
   * Mocked baseline count for demo purposes.
   * In a real app, this would come from a backend.
   */
  const baselineCount = Math.abs(
    name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 99
  );
  const count = baselineCount + (isFavorited ? 1 : 0);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(name);
            }}
            variant="outline"
            className={cn(
              "h-8 gap-2 rounded-full border-border/40 bg-muted/20 backdrop-blur-md px-3 transition-all hover:bg-muted/40 active:scale-95",
              isFavorited && "border-yellow-500/50 bg-yellow-500/10 text-yellow-500"
            )}
          >
            <Star
              className={cn(
                "size-3.5 transition-all duration-300",
                isFavorited ? "fill-yellow-500 scale-110" : "text-muted-foreground/50 group-hover:text-muted-foreground"
              )}
            />
            <span className={cn(
              "text-[11px] font-bold tabular-nums tracking-tight",
              isFavorited ? "text-yellow-600 dark:text-yellow-500" : "text-muted-foreground/70"
            )}>
              {count}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" align="center" sideOffset={8}>
          <p className="font-bold">{isFavorited ? "Remove from library" : "Add to library"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
