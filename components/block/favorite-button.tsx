"use client";

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
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

// ─── Fingerprint Singleton ────────────────────────────────────────────────────
let cachedFingerprint: string | null = null;

async function getFingerprint(): Promise<string> {
  if (cachedFingerprint) return cachedFingerprint;
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  cachedFingerprint = result.visitorId;
  return cachedFingerprint;
}

// ─── API Helpers ──────────────────────────────────────────────────────────────
async function fetchLikeStatus(
  name: string,
  fp: string
): Promise<{ count: number; liked: boolean }> {
  const url = fp
    ? `/api/blocks/${name}/likes?fp=${encodeURIComponent(fp)}`
    : `/api/blocks/${name}/likes`;
  const res = await fetch(url);
  if (!res.ok) return { count: 0, liked: false };
  return res.json();
}

async function toggleLikeApi(
  name: string,
  fingerprint: string
): Promise<{ count: number; action: string }> {
  const res = await fetch(`/api/blocks/${name}/likes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fingerprint }),
  });
  if (!res.ok) throw new Error("Failed to toggle like");
  return res.json();
}

// ─── Component ────────────────────────────────────────────────────────────────
export function FavoriteButton({ name }: { name: string }) {
  const [fingerprint, setFingerprint] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const queryKey = ["likes", name, fingerprint];

  // Load fingerprint once on mount — mounted guard prevents stale state update
  useEffect(() => {
    let mounted = true;
    getFingerprint().then((fp) => {
      if (mounted) setFingerprint(fp);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Fetch real like count + liked status from server (source of truth)
  const { data } = useQuery({
    queryKey,
    queryFn: () => fetchLikeStatus(name, fingerprint ?? ""),
    enabled: true,
    staleTime: 30_000,
  });

  const count = data?.count ?? 0;
  const isFavorited = data?.liked ?? false;

  // Mutation with optimistic update
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      if (!fingerprint) throw new Error("No fingerprint");
      return toggleLikeApi(name, fingerprint);
    },
    // Optimistically update before server responds
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey });
      const prev = queryClient.getQueryData<{ count: number; liked: boolean }>(queryKey);
      queryClient.setQueryData(queryKey, {
        count: isFavorited ? count - 1 : count + 1,
        liked: !isFavorited,
      });
      return { prev };
    },
    // Sync with real server state on success
    onSuccess: (serverData) => {
      queryClient.setQueryData(queryKey, {
        count: serverData.count,
        liked: serverData.action === "liked",
      });
    },
    // Rollback on error
    onError: (_err, _vars, context) => {
      queryClient.setQueryData(queryKey, context?.prev);
    },
  });

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (!fingerprint || isPending) return;
              mutate();
            }}
            disabled={!fingerprint || isPending}
            variant="outline"
            className={cn(
              "group h-8 gap-1.5 rounded-full border-border/40 bg-muted/20 backdrop-blur-md px-3",
              "transition-all duration-200 hover:bg-muted/40 active:scale-95",
              isFavorited
                ? "border-amber-500/50 bg-amber-500/10"
                : "hover:border-border/70"
            )}
          >
            {isPending ? (
              <Loader2 className="size-3.5 animate-spin text-muted-foreground/60" />
            ) : (
              <Star
                className={cn(
                  "size-3.5 transition-all duration-200",
                  isFavorited
                    ? "fill-amber-400 text-amber-400 [animation:star-pop_0.25s_ease-out]"
                    : "text-muted-foreground/40 group-hover:text-muted-foreground/70"
                )}
              />
            )}
            <span
              className={cn(
                "text-[11px] font-semibold tabular-nums tracking-tight transition-colors duration-200",
                isFavorited
                  ? "text-amber-500 dark:text-amber-400"
                  : "text-muted-foreground/60 group-hover:text-muted-foreground/80"
              )}
            >
              {count}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" align="center" sideOffset={8}>
          {isFavorited ? (
            <p className="text-xs">
              <span className="font-semibold">Saved to library</span>
              <span className="ml-1 text-muted-foreground">· click to unsave</span>
            </p>
          ) : (
            <p className="text-xs font-semibold">Save to library</p>
          )}
        </TooltipContent>
      </Tooltip>
      <style>{`
        @keyframes star-pop {
          0%   { transform: scale(0.7) rotate(-15deg); opacity: 0.4; }
          60%  { transform: scale(1.25) rotate(5deg);  opacity: 1;   }
          100% { transform: scale(1)   rotate(0deg);   opacity: 1;   }
        }
      `}</style>
    </TooltipProvider>
  );
}

