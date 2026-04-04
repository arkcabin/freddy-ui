"use client";

import { useFreddyStore } from "@/hooks/use-freddy-store";
import { cn } from "@/lib/utils";
import { Star, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

/**
 * Professional 'Global Likes' Button
 * Follows 'NestJS' best practices for REST integration.
 */
export function FavoriteButton({ name }: { name: string }) {
  const { favorites, toggleFavorite } = useFreddyStore();
  const [fingerprint, setFingerprint] = useState<string | null>(null);
  const [globalCount, setGlobalCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isFavorited = favorites.includes(name);

  // 1. Initialize Fingerprint and fetch initial global count from REST API
  useEffect(() => {
    const initFingerprint = async () => {
      const fpPromise = FingerprintJS.load();
      const fp = await fpPromise;
      const result = await fp.get();
      setFingerprint(result.visitorId);
    };

    const fetchInitialCount = async () => {
      try {
        const res = await fetch(`/api/blocks/${name}/likes`);
        if (!res.ok) throw new Error("Failed to fetch count");
        const data = await res.json();
        setGlobalCount(data.count ?? 0);
      } catch (error) {
        console.error("[UI] Failed to fetch initial count:", error);
      }
    };

    initFingerprint();
    fetchInitialCount();
  }, [name]);

  /** 
   * Professional REST API Liking Action
   * Incorporates optimistic UI updates and server synchronization.
   */
  const handleLike = async () => {
    if (!fingerprint || isLoading) return;

    // Optimistically update the UI
    const prevCount = globalCount ?? 0;
    setGlobalCount(isFavorited ? prevCount - 1 : prevCount + 1);
    
    // Toggle the favorite locally (Zustand)
    toggleFavorite(name);

    // Call the Professional REST API via fetch()
    setIsLoading(true);
    try {
      const response = await fetch(`/api/blocks/${name}/likes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fingerprint }),
      });

      if (!response.ok) {
        throw new Error("Failed to sync like action");
      }
      
      const data = await response.json();
      setGlobalCount(data.count); // Final synchronization with server count
    } catch (error) {
      // Automatic architectural rollback on error
      setGlobalCount(prevCount);
      console.error("[UI] API Error in FavoriteButton:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const countDisplay = globalCount !== null ? globalCount : 0;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleLike();
            }}
            disabled={!fingerprint || isLoading}
            variant="outline"
            className={cn(
              "h-8 gap-2 rounded-full border-border/40 bg-muted/20 backdrop-blur-md px-3 transition-all hover:bg-muted/40 active:scale-95",
              isFavorited && "border-yellow-500/50 bg-yellow-500/10 text-yellow-500"
            )}
          >
            {isLoading ? (
              <Loader2 className="size-3.5 animate-spin" />
            ) : (
              <Star
                className={cn(
                  "size-3.5 transition-all duration-300",
                  isFavorited ? "fill-yellow-500 scale-110" : "text-muted-foreground/50 group-hover:text-muted-foreground"
                )}
              />
            )}
            <span className={cn(
              "text-[11px] font-bold tabular-nums tracking-tight",
              isFavorited ? "text-yellow-600 dark:text-yellow-500" : "text-muted-foreground/70"
            )}>
              {countDisplay}
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
