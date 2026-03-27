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
} from "lucide-react";

const categories = getAllCategories();

function getCategoryIcon(id: string) {
  switch (id) {
    case "auth":
      return <Lock className="size-4" />;
    case "contact":
      return <Mail className="size-4" />;
    case "cta":
      return <MousePointer2 className="size-4" />;
    case "faqs":
      return <HelpCircle className="size-4" />;
    case "feature":
      return <Star className="size-4" />;
    case "footer":
      return <Layout className="size-4" />;
    case "form":
      return <FileText className="size-4" />;
    case "header":
      return <Menu className="size-4" />;
    case "image-gallery":
      return <ImageIcon className="size-4" />;
    case "logo-cloud":
      return <Cloud className="size-4" />;
    case "not-found":
      return <AlertTriangle className="size-4" />;
    case "pricing":
      return <CreditCard className="size-4" />;
    case "testimonials":
      return <MessageSquare className="size-4" />;
    default:
      return <Layout className="size-4" />;
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
            <div className="flex w-[850px] overflow-hidden rounded-xl border border-border/50 bg-card/90 text-card-foreground shadow-2xl backdrop-blur-xl">
              {/* Left Highlight Section */}
              <div className="flex w-1/3 flex-col justify-between bg-muted/30 p-8 border-r border-border/40">
                <div>
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary mb-4">
                    Registry
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    Modern Blocks
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    A curated collection of high-fidelity components built with Tailwind CSS and Radix UI. Perfectly crafted for your next big idea.
                  </p>
                </div>
                
                <div className="mt-auto space-y-4">
                  <div className="group relative overflow-hidden rounded-xl border bg-background/50 p-4 shadow-sm transition-all hover:shadow-md">
                    <div className="absolute -right-2 -top-2 h-12 w-12 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-inner">
                        <Star className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">
                          FLASH UPDATE
                        </p>
                        <p className="text-sm font-bold">New Auth Blocks</p>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href="/blocks"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Explore Library
                    <MousePointer2 className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Main Categories Grid - 3 Columns with Single-Row Items */}
              <div className="w-2/3 p-8">
                <div className="mb-6 flex items-center justify-between px-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                    Component Categories
                  </span>
                  <Link 
                    href="/blocks" 
                    className="text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    View counts
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {categories.map((cat) => (
                    <NavigationMenuLink asChild key={cat.id}>
                      <Link
                        href={`/blocks/${cat.id}`}
                        className="group flex items-center gap-3 rounded-lg p-2 transition-all hover:bg-muted/50 hover:shadow-sm border border-transparent hover:border-border/20"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary/40 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                          {getCategoryIcon(cat.id)}
                        </div>
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground truncate transition-colors flex-1">
                          {cat.name}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground/30 transition-colors group-hover:text-muted-foreground/50 shrink-0">
                          {cat.blocksCount}
                        </span>
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
