import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { Zap, BookMarked, Plus, Layout as LayoutIcon } from "lucide-react";
import Link from "next/link";
import registry from "@/registry.json";

interface Block {
  name: string;
  categories: string[];
  tier?: string;
}

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  // Fetch the user's liked blocks from the database
  const userLikes = await prisma.like.findMany({
    where: { userId: session.user.id },
    select: { blockName: true },
  });

  const likedBlockNames = userLikes.map((l) => l.blockName);
  
  // Cross-reference with our central registry
  const bookmarkedBlocks = (registry.items as Block[]).filter((b) => likedBlockNames.includes(b.name));

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-border/50">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tighter text-foreground flex items-center">
            Dashboard
            <LayoutIcon className="ml-3 h-5 w-5 text-primary/60" />
          </h1>
          <p className="text-[13px] text-muted-foreground font-medium">
            Manage your curated collection of {bookmarkedBlocks.length} performance-first blocks.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Link 
            href="/blocks"
            className="group flex items-center gap-2 rounded-xl border border-border bg-secondary/30 px-4 py-2 text-xs font-bold text-foreground transition-all hover:bg-secondary/50"
          >
            <Plus className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground" />
            Explore More
          </Link>
          <button className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/10 transition-all hover:opacity-90">
            <Zap className="h-3.5 w-3.5 fill-current" />
            Go Pro
          </button>
        </div>
      </div>

      {/* Bookmarks Grid */}
      {bookmarkedBlocks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedBlocks.map((block) => (
             <Link 
               key={block.name} 
               href={`/blocks/${block.name}`}
               className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/40 p-4 transition-all hover:border-primary/50 hover:bg-card/60 animate-in fade-in slide-in-from-bottom-2 duration-500"
             >
                <div className="aspect-video w-full rounded-lg bg-background/60 flex items-center justify-center border border-border/50 group-hover:border-primary/20">
                   <LayoutPlaceholder className="h-8 w-8 text-muted-foreground/20" />
                </div>
                <div className="mt-4 space-y-1">
                   <h3 className="font-bold text-foreground group-hover:text-primary transition-colors tracking-tight text-sm">
                    {block.name}
                   </h3>
                   <div className="flex items-center gap-2">
                     <span className="rounded-full bg-secondary/50 px-2.5 py-0.5 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                       {block.categories?.[0] || "General"}
                     </span>
                   </div>
                </div>
             </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-24 text-center space-y-6 border border-dashed border-border rounded-xl bg-card/20 backdrop-blur-sm">
           <div className="h-16 w-16 rounded-xl bg-background border border-border flex items-center justify-center shadow-inner">
             <BookMarked className="h-8 w-8 text-muted-foreground/40" />
           </div>
           <div className="space-y-2">
             <h3 className="text-xl font-bold text-foreground tracking-tight">No saved blocks found</h3>
             <p className="max-w-[320px] mx-auto text-[13px] text-muted-foreground leading-relaxed font-medium">
               Start building your elite collection by saving headers and heros from our library.
             </p>
           </div>
           <Link 
             href="/blocks" 
             className="mt-2 inline-flex items-center gap-2 rounded-xl bg-foreground px-8 py-2.5 text-sm font-bold text-background hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
           >
             Browse the Library
           </Link>
        </div>
      )}
    </div>
  );
}

function LayoutPlaceholder(props: any) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}
