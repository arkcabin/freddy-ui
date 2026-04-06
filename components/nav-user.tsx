"use client"

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    image: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground transition-all duration-200"
            >
              <Avatar className="h-8 w-8 rounded-lg border border-border/10">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback className="rounded-lg bg-primary/10 text-[10px] font-bold text-primary">
                  {user.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-[11px] leading-tight ml-1">
                <span className="truncate font-bold tracking-tight text-foreground">{user.name}</span>
                <span className="truncate text-[10px] text-muted-foreground/50 lowercase tracking-tight">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-3 opacity-30" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[200px] rounded-xl border border-border/40 bg-background/95 p-1 shadow-2xl backdrop-blur-3xl animate-in fade-in zoom-in-95 duration-200"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={8}
          >
            <DropdownMenuLabel className="px-2 py-1.5">
              <div className="flex flex-col space-y-0.5">
                <p className="font-bold text-[11px] tracking-tight text-foreground leading-none">
                  {user.name}
                </p>
                <p className="truncate text-[9.5px] text-muted-foreground/40 font-medium lowercase tracking-tight leading-none mt-1">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-border/20 mx-1" />
            <DropdownMenuGroup className="space-y-0.5">
              <DropdownMenuItem className="rounded-lg cursor-pointer focus:bg-primary/5 focus:text-primary transition-all duration-200 group">
                <Sparkles className="size-3.5 opacity-40 group-focus:opacity-100 transition-opacity" />
                <span className="text-[11px] font-bold tracking-tight">Upgrade to Pro</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-border/20 mx-1" />
            <DropdownMenuGroup className="space-y-0.5">
              <DropdownMenuItem className="rounded-lg cursor-pointer focus:bg-primary/5 focus:text-primary transition-all duration-200 group">
                <BadgeCheck className="size-3.5 opacity-40 group-focus:opacity-100 transition-opacity" />
                <span className="text-[11px] font-bold tracking-tight">Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-lg cursor-pointer focus:bg-primary/5 focus:text-primary transition-all duration-200 group">
                <CreditCard className="size-3.5 opacity-40 group-focus:opacity-100 transition-opacity" />
                <span className="text-[11px] font-bold tracking-tight">Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-lg cursor-pointer focus:bg-primary/5 focus:text-primary transition-all duration-200 group">
                <Bell className="size-3.5 opacity-40 group-focus:opacity-100 transition-opacity" />
                <span className="text-[11px] font-bold tracking-tight">Notifications</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-border/20 mx-1" />
            <DropdownMenuItem 
              className="rounded-lg cursor-pointer focus:bg-destructive/10 focus:text-destructive transition-all duration-200 group"
              onClick={() => {
                const { authClient } = require("@/lib/auth-client");
                authClient.signOut().then(() => window.location.href = "/");
              }}
            >
              <LogOut className="size-3.5 opacity-40 group-focus:opacity-100 transition-opacity" />
              <span className="text-[11px] font-bold tracking-tight">Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
