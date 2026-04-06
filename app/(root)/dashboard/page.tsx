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

  const likedBlockNames = userLikes.map((l: { blockName: string }) => l.blockName);
  
  // Cross-reference with our central registry
  const bookmarkedBlocks = (registry.items as Block[]).filter((b) => likedBlockNames.includes(b.name));

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <h1 className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-2">
            Overview
            <span className="h-4 w-px bg-border/40 mx-1" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/30 mt-1">Status</span>
          </h1>
          <p className="text-[11px] text-muted-foreground/60 font-medium tracking-tight">
            Managing <span className="text-foreground font-bold">{bookmarkedBlocks.length}</span> signature blocks in your elite collection.
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Link 
            href="/blocks"
            className="group flex items-center gap-2 rounded-lg border border-border/40 bg-secondary/10 px-3 py-1.5 text-[11px] font-bold text-foreground transition-all hover:bg-secondary/20"
          >
            <Plus className="h-3 w-3 text-muted-foreground group-hover:text-foreground" />
            Add Blocks
          </Link>
          <button className="flex items-center gap-2 rounded-lg bg-foreground px-4 py-1.5 text-[11px] font-bold text-background shadow-lg shadow-primary/5 transition-all hover:opacity-90 active:scale-95 leading-none">
            <Zap className="h-3 w-3 fill-current" />
            Go Pro
          </button>
        </div>
      </div>

      {/* Metrics Row - Elite Command Center */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Saved Blocks", value: bookmarkedBlocks.length, sub: "Archive" },
          { label: "Account Tier", value: session.user.isPro ? "Pro" : "Free", sub: "Status" },
          { label: "Collections", value: "01", sub: "Folders" },
          { label: "Sync Status", value: "Ready", sub: "Cloud" },
        ].map((metric) => (
          <div key={metric.label} className="rounded-xl border border-border/30 bg-card/10 p-4 space-y-1 backdrop-blur-sm">
            <p className="text-[9px] font-black uppercase tracking-[0.15em] text-muted-foreground/40 leading-none">
              {metric.sub}
            </p>
            <div className="flex items-baseline justify-between">
              <h4 className="text-[11px] font-bold text-muted-foreground tracking-tight">{metric.label}</h4>
              <span className="text-sm font-bold tracking-tighter text-foreground">{metric.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bookmarks Grid */}
      {bookmarkedBlocks.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bookmarkedBlocks.map((block) => (
             <Link 
               key={block.name} 
               href={`/blocks/${block.name}`}
               className="group relative overflow-hidden rounded-xl border border-border/30 bg-card/20 p-3 transition-all hover:border-primary/30 hover:bg-card/40 animate-in fade-in slide-in-from-bottom-2 duration-500"
             >
                <div className="aspect-4/3 w-full rounded-lg bg-background/40 flex items-center justify-center border border-border/20 group-hover:border-primary/10 transition-colors">
                   <LayoutPlaceholder className="h-6 w-6 text-muted-foreground/10 group-hover:text-primary/20 transition-all" />
                </div>
                <div className="mt-3 space-y-1">
                   <h3 className="font-bold text-foreground group-hover:text-primary transition-colors tracking-tight text-[11px] leading-tight">
                    {block.name}
                   </h3>
                   <div className="flex items-center justify-between">
                     <span className="text-[9px] text-muted-foreground/40 font-bold uppercase tracking-wider leading-none">
                       {block.categories?.[0] || "Component"}
                     </span>
                     {block.tier === "pro" && <Zap className="h-2.5 w-2.5 text-primary fill-current opacity-80" />}
                   </div>
                </div>
             </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 border border-dashed border-border/20 rounded-2xl bg-card/5 backdrop-blur-sm mt-8">
           <div className="size-12 rounded-xl bg-background border border-border/50 flex items-center justify-center shadow-inner">
             <BookMarked className="size-5 text-muted-foreground/20" />
           </div>
           <div className="space-y-1">
             <h3 className="text-sm font-bold text-foreground tracking-tight">Zero blocks indexed</h3>
             <p className="max-w-[280px] mx-auto text-[10px] text-muted-foreground/40 font-bold uppercase tracking-widest leading-relaxed">
               Start building your elite collection from our library.
             </p>
           </div>
           <Link 
             href="/blocks" 
             className="mt-2 inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-2 text-[11px] font-black uppercase tracking-widest text-background hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
           >
             Explore blocks
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
