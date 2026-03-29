"use client";
import type React from "react";
import { cn } from "@/lib/utils";

type IframeRendererProps = {
  name: string;
  src: string;
  ariaLabel?: string;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  className?: string;
  onLoad?: () => void;
};

export function IframeRenderer({
  name,
  src,
  ariaLabel,
  iframeRef,
  className,
  onLoad,
}: IframeRendererProps) {
  return (
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: onLoad is standard and necessary for iframe lifecycle management
    <iframe
      allowFullScreen={true}
      aria-label={ariaLabel || `${name}-preview`}
      className={cn("absolute inset-0 size-full", className)}
      id={name}
      key={`${name}-iframe`}
      loading={"lazy"}
      onLoad={onLoad}
      ref={iframeRef}
      sandbox="allow-scripts allow-same-origin"
      src={src}
      title={name}
    />
  );
}
