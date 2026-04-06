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
        "mb-8 text-left",
        className
      )}
    >
      <h2 className="text-wrap-balance font-bold font-heading text-foreground text-xl tracking-tight sm:text-2xl">
        {title}
      </h2>
      <p className="text-wrap-balance mt-2 max-w-xl text-muted-foreground text-xs leading-relaxed sm:text-sm">
        {subtitle}
      </p>
    </div>
  );
}
