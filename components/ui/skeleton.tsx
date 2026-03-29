import { cn } from "@/lib/utils/index"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("rounded-md bg-muted/20", className)}
      {...props}
    />
  )
}

export { Skeleton }
