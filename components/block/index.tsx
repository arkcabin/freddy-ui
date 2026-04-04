"use client";

import React from "react";
import { CodeView } from "@/components/block/code-view";
import { BorderSeparator, DashedLines } from "@/components/shared";
import { Badge } from "@/components/ui/badge";
import { useOptimizedIframe } from "@/hooks/use-optimized-iframe";
import { cn } from "@/lib/utils";
import type { Block, PreviewMode } from "@/types";
import { BlockLoader } from "./block-loader";
import { BlockPreview } from "./block-preview";
import { CopyCliButton } from "./copy-cli-button";
import { IframeRenderer } from "./iframe-renderer";
import { OpenInNewTabButton } from "./open-in-new-tab-button";
import { RefreshButton } from "./refresh-button";
import { FavoriteButton } from "./favorite-button";
import { TogglePreviewMode } from "./toggle-preview-mode";

type BlockPreviewProps = {
  block: Block;
};

export function BlockBox({ block }: BlockPreviewProps) {
  const [previewMode, setPreviewMode] = React.useState<PreviewMode>("preview");
  const iframeContainerRef = React.useRef<HTMLDivElement>(null);
  const [registryUrl, setRegistryUrl] = React.useState<string>("");
  const [isLoaded, setIsLoaded] = React.useState(false);

  const { name, files, height, pinnedUntil, description, tier } = block;
  const previewLink = `/view/${name}`;

  const isPinned = React.useMemo(() => {
    if (!pinnedUntil) {
      return false;
    }
    return new Date(pinnedUntil).getTime() > Date.now();
  }, [pinnedUntil]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(`/r/${name}.json`, window.location.href).toString();
      setRegistryUrl(url);
    }
  }, [name]);

  const { iframeRef, shouldLoadIframe, onRefreshIframe, isRefreshing } =
    useOptimizedIframe({
      previewUrl: previewLink,
      containerRef: iframeContainerRef,
    });

  return (
    <div
      className="border-b border-dashed"
      id={name}
      style={{ "--block-height": height } as React.CSSProperties}
    >
      {/* Block Header */}
      <div className="relative px-5 py-5 flex flex-col gap-1.5 select-none border-t border-dashed bg-card/20 overflow-hidden">
        <DashedLines className="absolute inset-0 z-0 h-full w-full opacity-60 stroke-border/40 mask-[linear-gradient(to_bottom,black,transparent)]" />
        <BorderSeparator className="-top-px z-1" />
        <div className="relative z-10 flex items-center gap-3">
          <h2 className="font-extrabold text-lg capitalize tracking-tight text-foreground/90 sm:text-xl">
            {name.replace(/-/g, " ")}
          </h2>
          {tier && (
            <Badge
              className={cn(
                "rounded-md border-0 px-2 py-0.5 font-bold font-mono text-[9px] uppercase tracking-widest transition-all",
                tier.toLowerCase() === "pro"
                  ? "bg-yellow-500/10 text-yellow-600 shadow-[0_0_10px_rgba(234,179,8,0.1)] dark:bg-yellow-500/20 dark:text-yellow-500"
                  : "bg-secondary/80 text-secondary-foreground"
              )}
            >
              {tier}
            </Badge>
          )}
        </div>
        {description && (
          <p className="max-w-[600px] text-xs leading-relaxed text-muted-foreground/50 sm:text-[13px]">
            {description}
          </p>
        )}
      </div>

      {/* Toolbar */}
      <div className="relative flex items-center justify-between bg-card px-4 py-1.5">
        <BorderSeparator className="-top-px z-1" />

        <div className="flex items-center gap-3">
          <TogglePreviewMode
            name={name}
            previewMode={previewMode}
            setPreviewMode={setPreviewMode}
          />
          {isPinned && (
            <Badge
              className="h-5 animate-pulse border-primary/20 bg-primary/10 px-1.5 font-bold text-[10px] text-primary uppercase tracking-wider"
              variant="secondary"
            >
              New
            </Badge>
          )}
          <div className="h-5 border-r border-dashed" />
          <RefreshButton
            handleRefresh={onRefreshIframe}
            isRefreshing={isRefreshing}
          />
        </div>

        <div className="flex items-center gap-3">
          <CopyCliButton name={name} />
          <div className="h-5 border-r border-dashed" />
          <FavoriteButton name={name} />
          <OpenInNewTabButton previewLink={previewLink} />
        </div>

        <BorderSeparator className="-bottom-px z-1" />
      </div>

      {/* Preview */}
      <BlockPreview previewMode={previewMode}>
        <div
          className="relative h-full overflow-hidden bg-background"
          ref={iframeContainerRef}
        >
          {shouldLoadIframe && (
            <IframeRenderer
              ariaLabel={`${name}-block-preview`}
              className={cn(
                "transition-opacity duration-500 ease-in-out",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
              iframeRef={iframeRef}
              name={name}
              onLoad={() => setIsLoaded(true)}
              src={previewLink}
            />
          )}

          <div
            className={cn(
              "pointer-events-none absolute inset-0 flex items-center justify-center bg-background transition-opacity duration-300",
              isLoaded ? "opacity-0" : "opacity-100"
            )}
          >
            <BlockLoader />
          </div>
        </div>
      </BlockPreview>

      {/* Code View */}
      {previewMode === "code" && <CodeView files={files} name={name} />}
    </div>
  );
}
