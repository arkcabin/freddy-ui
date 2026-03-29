import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "-mx-4 sticky top-14 z-20 mb-8 bg-background/80 px-4 py-4 text-left backdrop-blur-md",
        className
      )}
    >
      <h2 className="font-bold font-heading text-foreground text-xl tracking-tight sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 max-w-xl text-muted-foreground text-xs leading-relaxed sm:text-sm">
        {subtitle}
      </p>
    </div>
  );
}
