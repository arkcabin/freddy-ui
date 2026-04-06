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
      <SidebarHeader className="h-14 flex items-center px-4 border-b border-border/10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-transparent px-0">
              <a href="/">
                <div className="flex aspect-square size-7 items-center justify-center rounded-lg bg-foreground text-background">
                  <Command className="size-4" strokeWidth={2.5} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                  <span className="truncate font-bold tracking-tighter text-foreground">Freddy UI</span>
                  <span className="truncate text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 -mt-0.5">Architectural</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <NavMain items={data.navMain} />
        <div className="mt-auto px-2 py-4">
          <div className="rounded-xl border border-border/20 bg-secondary/10 p-4 space-y-3">
             <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center">
               <Sparkles className="size-4 text-primary" />
             </div>
             <div className="space-y-1">
               <p className="text-[11px] font-bold text-foreground">Unlock Pro Features</p>
               <p className="text-[10px] text-muted-foreground/60 font-medium leading-tight">Get access to premium elite components.</p>
             </div>
             <button className="w-full rounded-lg bg-foreground text-background py-1.5 text-[10px] font-bold uppercase tracking-wider hover:opacity-90 transition-all">
               Upgrade
             </button>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t border-border/10 p-2">
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
