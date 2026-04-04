import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function OpenInNewTabButton({ previewLink }: { previewLink: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label="Open in new tab"
            asChild
            size="icon-sm"
            variant="outline"
            className="group size-8 rounded-full border-border/40 bg-muted/20 backdrop-blur-md transition-all hover:bg-muted/40 hover:border-primary/20 shadow-sm"
          >
            <Link href={previewLink} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="size-3.5 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="center" className="bg-background/95 backdrop-blur-md border-border/40">
          <p className="text-[11px] font-medium">Open in new tab</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
