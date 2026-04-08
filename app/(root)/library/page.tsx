import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { Zap, BookMarked, Plus } from "lucide-react";
import Link from "next/link";
import registry from "@/registry.json";

interface Block {
  name: string;
  categories: string[];
  tier?: string;
}

export default async function LibraryPage() {
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
    <div className="space-y-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-4 border-b border-white/5">
        <div className="space-y-1.5">
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center">
            My <span className="text-sky-400">Library</span>
            <BookMarked className="ml-3 h-5 w-5 text-sky-400/60" />
          </h1>
          <p className="text-sm text-zinc-500">
            Manage your curated collection of {bookmarkedBlocks.length} performance-first blocks.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Link 
            href="/blocks"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-white/10"
          >
            <Plus className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white" />
            Explore More
          </Link>
          <button className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:bg-sky-400">
            <Zap className="h-3.5 w-3.5 fill-white" />
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
               className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-4 transition-all hover:border-sky-500/50 hover:bg-zinc-900/60 animate-in fade-in slide-in-from-bottom-2 duration-500"
             >
                <div className="aspect-video w-full rounded-2xl bg-black/60 flex items-center justify-center border border-white/5 group-hover:border-sky-500/20">
                   <Layout className="h-8 w-8 text-zinc-800" />
                </div>
                <div className="mt-4 space-y-1">
                   <h3 className="font-bold text-white group-hover:text-sky-400 transition-colors uppercase tracking-tight text-sm">
                    {block.name}
                   </h3>
                   <div className="flex items-center gap-2">
                     <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-zinc-500 font-mono">
                       {block.categories?.[0] || "General"}
                     </span>
                   </div>
                </div>
             </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-24 text-center space-y-6 border border-dashed border-white/10 rounded-[2.5rem] bg-white/1">
           <div className="h-20 w-20 rounded-full bg-zinc-950 border border-white/5 flex items-center justify-center shadow-inner">
             <BookMarked className="h-10 w-10 text-zinc-700" />
           </div>
           <div className="space-y-2">
             <h3 className="text-xl font-bold text-white font-display">No saved blocks found</h3>
             <p className="max-w-[320px] mx-auto text-sm text-zinc-500 leading-relaxed font-medium">
               Start building your elite collection by saving headers and heros from our library.
             </p>
           </div>
           <Link 
             href="/blocks" 
             className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-3 text-sm font-bold text-black hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
           >
             Browse the Library
           </Link>
        </div>
      )}
    </div>
  );
}

// Minimal placeholder for the icon grid
function Layout(props: any) {
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
