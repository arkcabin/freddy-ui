import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Plus({ className }: { className?: string }) {
  return (
    <PlusIcon
      className={cn(
        "-top-[7px] -left-[7px] absolute size-3.5 text-border",
        className
      )}
      strokeWidth={1}
    />
  );
}
