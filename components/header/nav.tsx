"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { getAllCategories } from "@/lib/utils/blocks-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Cloud,
  CreditCard,
  FileText,
  HelpCircle,
  Image as ImageIcon,
  Layout,
  Lock,
  Mail,
  Menu,
  MessageSquare,
  MousePointer2,
  Star,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = getAllCategories();

function getCategoryIcon(id: string, className?: string) {
  const iconClass = cn("size-5", className);
  switch (id) {
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

export function SiteNav() {
  return (
    <NavigationMenu
      className="hidden md:flex"
      viewportContainerClassName="md:left-auto md:right-0 md:translate-x-0"
    >
      <NavigationMenuList>


        {/* Blocks dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-transparent hover:text-foreground data-[state=open]:bg-transparent data-[state=open]:text-foreground">
            Blocks
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[800px] overflow-hidden rounded-2xl border border-border/50 bg-card/95 text-card-foreground shadow-2xl backdrop-blur-xl">
              {/* Left Highlight Section */}
              <div className="flex w-[270px] shrink-0 flex-col justify-between bg-muted/40 p-6 border-r border-border/40">
                <div>
                  <Badge variant="secondary" className="mb-4 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border-none bg-secondary/80 text-secondary-foreground shadow-sm">
                    Blocks
                  </Badge>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    Modern Blocks
                  </h3>
                  <p className="mt-2 text-[12.5px] text-muted-foreground/60 leading-relaxed font-normal max-w-[200px]">
                    Elite UI components, meticulously crafted for modern web experiences.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-background/50 p-3 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground shadow-inner">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted-foreground/70">
                          FLASH UPDATE
                        </p>
                        <p className="text-sm font-bold">New Auth Blocks</p>
                      </div>
                    </div>
                  </div>

                  <Button asChild variant="default" className="w-full rounded-xl h-11 text-sm font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] group/btn">
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
                    Components
                  </span>
                  <Link
                    href="/blocks"
                    className="group flex items-center gap-1 text-[11px] font-bold text-primary hover:underline transition-all"
                  >
                    View all
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {categories.slice(0, 10).map((cat) => (
                    <NavigationMenuLink asChild key={cat.id}>
                      <Link
                        href={`/blocks/${cat.id}`}
                        className="group flex flex-row items-center gap-3.5 p-3 rounded-xl transition-all duration-300 hover:bg-muted/50"
                      >
                        <div className="flex size-11 grow-0 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background/5 transition-all group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-inner">
                          <div className="transition-transform group-hover:scale-110 duration-300 text-muted-foreground group-hover:text-primary">
                            {getCategoryIcon(cat.id, "size-5")}
                          </div>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-0.5">
                            {cat.name}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/40 leading-none group-hover:text-primary/50 transition-colors">
                            {cat.blocksCount} Blocks
                          </span>
                        </div>
                        <ChevronRight className="size-3.5 text-muted-foreground/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto shrink-0" />
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  );
}
