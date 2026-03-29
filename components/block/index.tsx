"use client";

import React from "react";
import { CodeView } from "@/components/block/code-view";
import { cn } from "@/lib/utils";
import { BorderSeparator } from "@/components/shared";
import { useOptimizedIframe } from "@/hooks/use-optimized-iframe";
import type { Block, PreviewMode } from "@/types";
import { BlockLoader } from "./block-loader";
import { BlockPreview } from "./block-preview";
import { CopyCliButton } from "./copy-cli-button";
import { IframeRenderer } from "./iframe-renderer";
import { OpenInNewTabButton } from "./open-in-new-tab-button";
import { OpenInV0Button } from "./open-in-v0";
import { RefreshButton } from "./refresh-button";
import { TogglePreviewMode } from "./toggle-preview-mode";

import { Badge } from "@/components/ui/badge";

type BlockPreviewProps = {
  block: Block;
};

export function BlockBox({ block }: BlockPreviewProps) {
  const [previewMode, setPreviewMode] = React.useState<PreviewMode>("preview");
  const iframeContainerRef = React.useRef<HTMLDivElement>(null);
  const [registryUrl, setRegistryUrl] = React.useState<string>("");
  const [isLoaded, setIsLoaded] = React.useState(false);

  const { name, files, height, pinnedUntil } = block;
  const previewLink = `/view/${name}`;

  const isPinned = React.useMemo(() => {
    if (!pinnedUntil) return false;
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
              variant="secondary"
              className="h-5 px-1.5 text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary border-primary/20 animate-pulse"
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
          <OpenInV0Button name={name} registryUrl={registryUrl} />
          <OpenInNewTabButton previewLink={previewLink} />
        </div>

        <BorderSeparator className="-bottom-px z-1" />
      </div>

      {/* Preview */}
      <BlockPreview previewMode={previewMode}>
        <div
          className="relative h-full bg-background overflow-hidden"
          ref={iframeContainerRef}
        >
          {shouldLoadIframe && (
            <IframeRenderer
              ariaLabel={`${name}-block-preview`}
              iframeRef={iframeRef}
              name={name}
              src={previewLink}
              onLoad={() => setIsLoaded(true)}
              className={cn(
                "transition-opacity duration-500 ease-in-out",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          )}

          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-background transition-opacity duration-300 pointer-events-none",
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
