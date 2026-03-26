import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Plus({ className }: { className?: string }) {
  return (
    <PlusIcon
      className={cn(
        "absolute size-3.5 -top-[7px] -left-[7px] text-border",
        className
      )}
      strokeWidth={1}
    />
  );
}
