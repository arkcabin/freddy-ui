"use client";

import Link from "next/link";
import { LogOut, LayoutDashboard, User, Settings, CreditCard } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

/**
 * UserAccountNav
 * High-fidelity, minimalist user profile dropdown for the header.
 * Following "Architectural" design tokens: rounded-xl, tracking-tighter, bg-background/80.
 */
export function UserAccountNav({ user }: { user: any }) {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // Redirect to home after logout
          router.refresh();
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="size-8 cursor-pointer ring-1 ring-border/50 transition-all hover:ring-primary/40 active:scale-95">
          <AvatarImage alt={user.name || "User avatar"} src={user.image || ""} />
          <AvatarFallback className="bg-primary/5 font-bold text-[10px] text-primary uppercase tracking-wider">
            {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[160px] overflow-hidden rounded-xl border border-border/40 bg-background/95 p-1 shadow-2xl backdrop-blur-3xl animate-in fade-in zoom-in-95 duration-200"
        sideOffset={12}
      >
        <DropdownMenuLabel className="px-2 py-2">
          <div className="flex flex-col space-y-0 text-left">
            <p className="font-bold text-[12px] tracking-tight text-foreground leading-none">
              {user.name}
            </p>
            <p className="truncate text-[10px] text-muted-foreground/30 font-bold lowercase tracking-tight leading-none mt-1">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-border/20 mx-1" />
        <DropdownMenuGroup className="space-y-0.5 p-0.5">
          <DropdownMenuItem asChild className="rounded-lg cursor-pointer focus:bg-primary/5 focus:text-primary transition-all duration-200 group">
            <Link className="flex w-full items-center gap-2 px-1.5 py-1.5 font-bold text-[10px] tracking-tight" href="/dashboard">
              <LayoutDashboard className="size-3 opacity-30 group-focus:opacity-100 transition-opacity" strokeWidth={2.5} />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="rounded-lg cursor-pointer focus:bg-primary/5 focus:text-primary transition-all duration-200 group">
            <Link className="flex w-full items-center gap-2 px-1.5 py-1.5 font-bold text-[10px] tracking-tight" href="/blocks">
              <User className="size-3 opacity-30 group-focus:opacity-100 transition-opacity" strokeWidth={2.5} />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="rounded-lg cursor-pointer focus:bg-destructive/10 focus:text-destructive transition-all duration-200 group"
          >
            <button
              onClick={handleSignOut}
              className="flex w-full items-center gap-2 px-1.5 py-1.5 font-bold text-[10px] tracking-tight outline-none"
            >
              <LogOut className="size-3 opacity-30 group-focus:opacity-100 transition-opacity" strokeWidth={2.5} />
              Log out
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
