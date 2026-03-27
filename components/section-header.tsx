import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-left", className)}>
      <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
