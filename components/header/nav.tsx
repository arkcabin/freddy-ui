"use client";

import {
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Cloud,
  CreditCard,
  FileText,
  HelpCircle,
  Image as ImageIcon,
  Layout,
  Lock,
  Mail,
  Megaphone,
  Menu,
  MessageSquare,
  MousePointer2,
  Star,
  User,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserAccountNav } from "./user-account-nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { getAllCategories } from "@/lib/utils/blocks-data";

const categories = getAllCategories();

function getCategoryIcon(id: string, className?: string) {
  const iconClass = cn("size-5", className);
  switch (id) {
    case "announcement":
      return <Megaphone className={iconClass} />;
    case "auth":
      return <Lock className={iconClass} />;
    case "contact":
      return <Mail className={iconClass} />;
    case "cta":
      return <MousePointer2 className={iconClass} />;
    case "faqs":
      return <HelpCircle className={iconClass} />;
    case "feature":
      return <Star className={iconClass} />;
    case "footer":
      return <Layout className={iconClass} />;
    case "form":
      return <FileText className={iconClass} />;
    case "header":
      return <Menu className={iconClass} />;
    case "image-gallery":
      return <ImageIcon className={iconClass} />;
    case "logo-cloud":
      return <Cloud className={iconClass} />;
    case "not-found":
      return <AlertTriangle className={iconClass} />;
    case "pricing":
      return <CreditCard className={iconClass} />;
    case "testimonials":
      return <MessageSquare className={iconClass} />;
    default:
      return <Layout className={iconClass} />;
  }
}

const NAV_LINKS = [
  // { name: "Docs", href: "/docs" },
  { name: "Changelog", href: "/changelog" },
  // { name: "Pricing", href: "/pricing" },
];

export function SiteNav({ isMobile }: { isMobile?: boolean }) {
  const { data: session, isPending } = authClient.useSession();
  if (isMobile) {
    return (
      <nav className="flex flex-col gap-2">
        <div className="mb-2 font-bold text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          Menu
        </div>
        <Link
          className="flex items-center gap-3 rounded-lg py-2.5 font-bold text-base transition-colors hover:text-primary"
          href="/blocks"
        >
          <Layout className="size-5" />
          Blocks
        </Link>
        {NAV_LINKS.map((item) => (
          <Link
            className="flex items-center gap-3 rounded-lg py-2.5 font-bold text-base transition-colors hover:text-primary"
            href={item.href}
            key={item.name}
          >
            {item.name === "Docs" ? (
              <FileText className="size-5" />
            ) : item.name === "Changelog" ? (
              <Megaphone className="size-5" />
            ) : (
              <CreditCard className="size-5" />
            )}
            {item.name}
          </Link>
        ))}
        {!isPending && (
          <Link
            className="flex items-center gap-3 rounded-lg py-2.5 font-bold text-base transition-colors hover:text-primary border-t border-dashed mt-2 pt-4"
            href={session ? "/dashboard" : "/auth/sign-in"}
          >
            {session ? (
              <>
                <LayoutDashboard className="size-5 text-sky-400" />
                Dashboard
              </>
            ) : (
              <>
                <User className="size-5" />
                Sign In
              </>
            )}
          </Link>
        )}
      </nav>
    );
  }

  return (
    <nav aria-label="Main Navigation">
      <NavigationMenu
        className="flex"
        viewportContainerClassName="md:left-auto md:right-0 md:translate-x-0"
      >
      <NavigationMenuList className="flex-row gap-1">
        {/* 1. Blocks dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-9 rounded-full bg-transparent px-5 font-bold text-[14px] text-muted-foreground shadow-none transition-all hover:bg-white/5 hover:text-foreground active:bg-white/10 data-[state=open]:bg-transparent data-[state=open]:text-foreground">
            Blocks
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[800px] overflow-hidden rounded-2xl border border-border/80 bg-card/95 text-card-foreground backdrop-blur-xl transition-all">
              {/* Left Highlight Section */}
              <div className="flex w-[270px] shrink-0 flex-col justify-between border-border/40 border-r bg-muted/40 p-6">
                <div>
                  <Badge
                    className="mb-4 rounded-full border-none bg-secondary/80 px-2.5 py-0.5 font-bold text-[10px] text-secondary-foreground uppercase tracking-wider"
                    variant="secondary"
                  >
                    Blocks
                  </Badge>
                  <h3 className="font-bold text-foreground text-2xl tracking-tight">
                    Modern Blocks
                  </h3>
                  <p className="mt-2.5 max-w-[200px] font-normal text-[13px] text-muted-foreground/60 leading-relaxed">
                    Elite UI components, meticulously crafted for modern web
                    experiences.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-muted/20 p-2.5 transition-colors hover:bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-foreground border border-border/40">
                        <Star className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-[9px] text-muted-foreground/50 uppercase tracking-widest leading-none mb-0.5">
                          FLASH UPDATE
                        </p>
                        <p className="font-bold text-sm leading-tight text-foreground">New Auth Blocks</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="group/btn h-12 w-full rounded-xl bg-foreground font-black text-background text-sm transition-colors hover:bg-foreground/90 active:scale-[0.98]"
                    variant="default"
                  >
                    <Link href="/blocks">
                      Explore Library
                      <MousePointer2 className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Main Categories Grid - 2 Columns with Side-by-Side Items */}
              <div className="flex-1 p-6">
                <div className="mb-4 flex items-center justify-between px-1">
                  <span className="font-bold text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em]">
                    Components
                  </span>
                  <Link
                    className="group flex items-center gap-1 font-black text-[11px] text-foreground transition-all hover:opacity-70"
                    href="/blocks"
                  >
                    View all
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {categories.slice(0, 10).map((cat) => (
                    <NavigationMenuLink asChild key={cat.id}>
                      <Link
                        className="group flex flex-row items-center gap-3.5 rounded-xl p-2.5 transition-colors duration-150 hover:bg-muted/50"
                        href={`/blocks/${cat.id}`}
                      >
                        <div className="flex size-10 shrink-0 grow-0 items-center justify-center rounded-xl border border-border/50 bg-background/50 transition-colors group-hover:border-foreground/50 group-hover:bg-background">
                          <div className="text-muted-foreground transition-colors group-hover:text-foreground">
                            {getCategoryIcon(cat.id, "size-5")}
                          </div>
                        </div>
                        <div className="flex min-w-0 flex-col">
                          <div className="mb-0 flex items-center gap-2">
                            <span className="font-black text-foreground text-sm leading-tight transition-colors">
                              {cat.name}
                            </span>
                            {cat.isNew && (
                              <div className="flex items-center gap-1.5">
                                <span className="flex h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" />
                              </div>
                            )}
                          </div>
                          <span className="font-bold text-[10px] text-muted-foreground/40 uppercase leading-none tracking-widest transition-colors">
                            {cat.blocksCount} Blocks
                          </span>
                        </div>
                        <div className="ml-auto" />
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Regular Links (e.g. Changelog) */}
        {NAV_LINKS.map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink asChild>
              <Link href={item.href || "#"}>
                <Button
                  className="h-9 rounded-full bg-transparent px-5 font-bold text-[14px] text-muted-foreground shadow-none transition-all hover:bg-white/5 hover:text-foreground active:bg-white/10"
                  variant="default"
                >
                  {item.name}
                </Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        {/* User Account / Sign In - Moved after Changelog */}
        {!isPending && (
          <NavigationMenuItem className="flex items-center">
            {session ? (
              <div className="ml-2 flex items-center">
                <UserAccountNav user={session.user} />
              </div>
            ) : (
              <NavigationMenuLink asChild>
                <Link href="/auth/sign-in">
                  <Button
                    className="h-9 rounded-full bg-foreground px-5 font-bold text-[14px] text-background shadow-none transition-all hover:opacity-90 active:scale-95"
                    variant="default"
                  >
                    Sign In
                  </Button>
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
    </nav>
  );
}
