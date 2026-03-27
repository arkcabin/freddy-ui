import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("sticky top-14 z-20 -mx-4 mb-8 bg-background/80 px-4 py-4 text-left backdrop-blur-md", className)}>
      <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
