import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import { V0Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function OpenInV0Button({
  registryUrl,
  name,
}: {
  registryUrl: string;
  name: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label="Open in v0"
            asChild
            onClick={() =>
              sendGAEvent("event", "open_in_v0", {
                block_name: name,
              })
            }
            size="icon-sm"
            variant="outline"
            className="group size-8 rounded-full border-border/40 bg-muted/20 backdrop-blur-md transition-all hover:bg-muted/40 hover:border-primary/20 hover:shadow-[0_0_12px_rgba(var(--primary),0.05)]"
          >
            <Link
              href={`https://v0.dev/chat/api/open?url=${registryUrl}`}
              rel="noreferrer"
              target="_blank"
            >
              <V0Icon className="size-3.5 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="center" className="bg-background/95 backdrop-blur-md border-border/40">
          <p className="text-[11px] font-medium">Open in v0</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
