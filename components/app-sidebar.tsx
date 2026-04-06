"use client"

import { 
  LayoutDashboard, 
  Library, 
  Settings, 
  HelpCircle, 
  Plus, 
  Sparkles,
  Command
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Blocks Registry",
      url: "/blocks",
      icon: Library,
    },
    {
      title: "Saved Items",
      url: "/dashboard",
      icon: Plus,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard",
      icon: Settings,
    },
    {
      title: "Support",
      url: "#",
      icon: HelpCircle,
    },
  ],
}

export function AppSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar> & { user: any }) {
  return (
    <Sidebar variant="inset" className="border-r border-border/10" {...props}>
      <SidebarHeader className="h-12 flex items-center px-4 border-b border-border/10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-transparent px-0">
              <a href="/">
                <div className="flex aspect-square size-6 items-center justify-center rounded-lg bg-foreground text-background">
                  <Command className="size-3.5" strokeWidth={2.5} />
                </div>
                <div className="grid flex-1 text-left leading-tight ml-2">
                  <span className="truncate font-bold tracking-tighter text-foreground text-xs">Freddy UI</span>
                  <span className="truncate text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/30 -mt-1">Architectural</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <NavMain items={data.navMain} />
        <div className="mt-auto px-2 py-4">
          <div className="relative rounded-2xl border border-border/50 bg-secondary/5 p-5 shadow-2xl backdrop-blur-md overflow-hidden group">
             {/* Subtle aesthetic gradient */}
             <div className="absolute -right-8 -top-8 size-24 bg-primary/10 blur-2xl rounded-full" />
             
             <div className="relative space-y-4">
                <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.05)]">
                  <Sparkles className="size-4.5 text-primary" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs font-black text-foreground tracking-tight uppercase">Unlock Pro Features</p>
                  <p className="text-[11px] text-muted-foreground/60 font-medium leading-relaxed">
                    Get access to premium elite components and production-ready source code.
                  </p>
                </div>
                <button className="w-full rounded-xl bg-foreground text-background py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-foreground/90 transition-all shadow-xl active:scale-[0.98]">
                  Upgrade Now
                </button>
             </div>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t border-border/10 p-2">
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
