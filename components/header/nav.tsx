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
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  { name: "Docs", href: "/docs" },
  { name: "Changelog", href: "/changelog" },
  { name: "Pricing", href: "/pricing" },
];

export function SiteNav({ isMobile }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-2">
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
      </div>
    );
  }

  return (
    <NavigationMenu
      aria-label="Main Navigation"
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
            <div className="flex w-[800px] overflow-hidden rounded-2xl border border-border/50 bg-card/95 text-card-foreground shadow-2xl backdrop-blur-xl">
              {/* Left Highlight Section */}
              <div className="flex w-[270px] shrink-0 flex-col justify-between border-border/40 border-r bg-muted/40 p-6">
                <div>
                  <Badge
                    className="mb-4 rounded-full border-none bg-secondary/80 px-2.5 py-0.5 font-bold text-[10px] text-secondary-foreground uppercase tracking-wider shadow-sm"
                    variant="secondary"
                  >
                    Blocks
                  </Badge>
                  <h3 className="font-bold text-foreground text-xl tracking-tight">
                    Modern Blocks
                  </h3>
                  <p className="mt-2 max-w-[200px] font-normal text-[12.5px] text-muted-foreground/60 leading-relaxed">
                    Elite UI components, meticulously crafted for modern web
                    experiences.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-background/50 p-3 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground shadow-inner">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-[9px] text-muted-foreground/70 uppercase tracking-[0.1em]">
                          FLASH UPDATE
                        </p>
                        <p className="font-bold text-sm">New Auth Blocks</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="group/btn h-11 w-full rounded-xl font-bold text-sm shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
                    variant="default"
                  >
                    <Link href="/blocks">
                      Explore Library
                      <MousePointer2 className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
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
                    className="group flex items-center gap-1 font-bold text-[11px] text-primary transition-all hover:underline"
                    href="/blocks"
                  >
                    View all
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {categories.slice(0, 10).map((cat) => (
                    <NavigationMenuLink asChild key={cat.id}>
                      <Link
                        className="group flex flex-row items-center gap-3.5 rounded-xl p-3 transition-all duration-300 hover:bg-muted/50"
                        href={`/blocks/${cat.id}`}
                      >
                        <div className="flex size-11 shrink-0 grow-0 items-center justify-center rounded-xl border border-border/50 bg-background/5 transition-all group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-inner">
                          <div className="text-muted-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                            {getCategoryIcon(cat.id, "size-5")}
                          </div>
                        </div>
                        <div className="flex min-w-0 flex-col">
                          <div className="mb-0.5 flex items-center gap-2">
                            <span className="font-bold text-foreground text-sm leading-tight transition-colors group-hover:text-primary">
                              {cat.name}
                            </span>
                            {cat.isNew && (
                              <div className="flex items-center gap-1.5">
                                <span className="flex h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" />
                                <span className="font-bold text-[10px] text-primary uppercase leading-none tracking-wider">
                                  New
                                </span>
                              </div>
                            )}
                          </div>
                          <span className="font-bold text-[11px] text-muted-foreground/40 uppercase leading-none tracking-wider transition-colors group-hover:text-primary/50">
                            {cat.blocksCount} Blocks
                          </span>
                        </div>
                        <ChevronRight className="-translate-x-2 ml-auto size-3.5 shrink-0 text-muted-foreground/30 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Regular Links */}
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
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  );
}
