import { SectionGrid } from "./section-grid";
import { SectionHeader } from "./section-header";

/**
 * Premium skeleton loaders for homepage segments.
 * Uses a subtle "shimmer" effect with sharp geometry (0px).
 */

function Shimmer() {
  return (
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />
  );
}

export function HeroSkeleton() {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-background px-6 pt-24 md:px-10 md:pt-32">
      <div className="relative mb-8 h-8 w-32 overflow-hidden rounded-full border border-border/50 bg-muted/10">
        <Shimmer />
      </div>
      <div className="relative mb-4 h-16 w-full max-w-4xl overflow-hidden bg-muted/10 md:h-24">
        <Shimmer />
      </div>
      <div className="relative mb-10 h-6 w-full max-w-2xl overflow-hidden bg-muted/5">
        <Shimmer />
      </div>
      <div className="flex gap-3">
        <div className="relative h-12 w-28 overflow-hidden rounded-full bg-primary/10">
          <Shimmer />
        </div>
        <div className="relative h-12 w-28 overflow-hidden rounded-full bg-muted/10">
          <Shimmer />
        </div>
      </div>
    </div>
  );
}

export function ShowcaseSkeleton() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-muted/5 md:h-[700px]">
      <Shimmer />
    </div>
  );
}

export function GridSkeleton() {
  return (
    <SectionGrid
      className="pb-16 lg:pb-24"
      markerType="plus"
      showBottomMarkers={true}
      showDoubleBorders={true}
      showTopMarkers={true}
    >
      <SectionHeader
        subtitle="Exploring the library..."
        title="Browse Premium Blocks"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Skeleton list is static and purely visual.
          <div
            className="relative h-48 overflow-hidden border border-border/50 bg-secondary/20"
            key={i}
          >
            <Shimmer />
          </div>
        ))}
      </div>
    </SectionGrid>
  );
}
