import { RotateCwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RefreshButtonProps = {
  handleRefresh: () => void;
  isRefreshing: boolean;
};

export function RefreshButton({
  handleRefresh,
  isRefreshing,
}: RefreshButtonProps) {
  return (
    <Button 
      onClick={handleRefresh} 
      size="icon-sm" 
      variant="outline"
      className="group size-8 rounded-full border-border/40 bg-muted/20 backdrop-blur-md transition-all hover:bg-muted/40 active:scale-95 shadow-sm"
    >
      <RotateCwIcon
        className={cn(
          "size-3.5 opacity-60 transition-all duration-300 ease-[cubic-bezier(0.12,0,0.39,0)] will-change-transform group-hover:opacity-100",
          isRefreshing ? "rotate-90" : "rotate-0"
        )}
      />
    </Button>
  );
}
