"use client";
import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Github,
  LayoutGrid,
  Menu,
  Moon,
  Search,
  Sun,
  X,
  TrendingUp,
  LineChart,
  Wallet,
  Building2,
  Gem,
  RefreshCw,
  Trophy,
} from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { LogoIcon } from "@/components/logo";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";

export function Header() {
  const scrolled = useScroll(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2 group p-2 rounded-md hover:bg-accent transition-colors">
            <LogoIcon className="size-7 transition-transform group-hover:scale-110" />
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">Freddy</span>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex" viewport={false}>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <a
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Home
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Pricing
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent h-9 px-4 text-sm font-medium hover:bg-accent transition-colors">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:left-1/2 md:-translate-x-1/2 md:translate-y-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="w-[840px] p-8 grid grid-cols-[1fr_1.2fr] gap-8 bg-background border rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6">
                          Basic Asset
                        </h3>
                        <div className="grid gap-2">
                          {basicAssets.map((asset, idx) => (
                            <MenuCard key={idx} {...asset} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6">
                          Assets with a ready-made strategy
                        </h3>
                        <div className="grid gap-2">
                          {strategyAssets.map((asset, idx) => (
                            <MenuCard key={idx} {...asset} largeIcon />
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6 border-t pt-8">
                          Trade
                        </h3>
                        <div className="grid gap-2">
                          {tradeAssets.map((asset, idx) => (
                            <MenuCard key={idx} {...asset} ghostIcon />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="col-span-2 mt-4 pt-6 border-t border-border/50 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Interested?{" "}
                        <a href="#" className="font-bold text-foreground hover:text-primary transition-colors">
                          Schedule a demo
                        </a>
                      </p>
                      <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                         <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
                         <span className="size-1 rounded-full bg-border" />
                         <a href="#" className="hover:text-foreground transition-colors">API Reference</a>
                      </div>
                    </div>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent h-9 px-4 text-sm font-medium hover:bg-accent transition-colors">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4">
                    <ul className="grid gap-3">
                      {serviceLinks.map((link, idx) => (
                        <ListItem key={idx} {...link}>
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent h-9 px-4 text-sm font-medium hover:bg-accent transition-colors">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4">
                    <ul className="grid gap-3">
                      {resourceLinks.map((link, idx) => (
                        <ListItem key={idx} {...link}>
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <Button variant="ghost" size="icon" className="rounded-full" type="button" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" type="button" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Button>
          </div>
          <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all" type="button">
            Get in touch
          </Button>
          
          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <MenuToggleIcon className="size-6" open={isMobileMenuOpen} duration={300} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b bg-background overflow-hidden"
          >
            <div className="container px-4 py-8 space-y-6">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-lg font-medium px-2 py-1">Home</a>
                <a href="#" className="text-lg font-medium px-2 py-1">Pricing</a>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-2">Products</h4>
                  <div className="grid gap-2">
                    {[...basicAssets, ...strategyAssets, ...tradeAssets].map((asset, i) => (
                      <a key={i} href="#" className="flex items-center gap-3 p-3 hover:bg-accent rounded-xl transition-colors">
                         <div className={cn(
                          "flex size-10 items-center justify-center rounded-lg shadow-sm shrink-0",
                          asset.gradient
                        )}>
                          <asset.icon className={cn("size-5", asset.iconColor)} />
                        </div>
                        <span className="font-medium">{asset.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
              <div className="pt-4 border-t flex flex-col gap-3">
                <Button variant="outline" className="w-full rounded-2xl h-12">Search</Button>
                <Button className="w-full rounded-2xl h-12">Get in touch</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

interface Asset {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient?: string;
  iconColor: string;
  largeIcon?: boolean;
  ghostIcon?: boolean;
}

function MenuCard({ 
  title, 
  description, 
  icon: Icon, 
  gradient, 
  iconColor, 
  largeIcon = false,
  ghostIcon = false 
}: Asset) {
  return (
    <a
      href="#"
      className={cn(
        "group flex items-center gap-4 p-3 rounded-2xl transition-all duration-300",
        "hover:bg-accent/50 hover:shadow-sm"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-xl transition-transform group-hover:scale-105 duration-300 shadow-sm shrink-0",
          largeIcon ? "h-14 w-14" : "h-12 w-12",
          ghostIcon ? "bg-accent/50 border border-border" : gradient
        )}
      >
        <Icon className={cn(largeIcon ? "h-7 w-7" : "h-6 w-6", iconColor)} />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </span>
        <span className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </span>
      </div>
      <ChevronRight className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
    </a>
  );
}

interface LinkItem {
  title: string;
  href: string;
  description: string;
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

function ListItem({ title, children, href, className, ...props }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

const basicAssets: Asset[] = [
  {
    title: "Stocks",
    description: "Shares of public companies",
    icon: TrendingUp,
    gradient: "bg-blue-500/10 dark:bg-blue-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Mutual funds",
    description: "Ready-made portfolios at affordable prices",
    icon: Wallet,
    gradient: "bg-purple-500/10 dark:bg-purple-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Currency",
    description: "Currency trading at the exchange rate",
    icon: RefreshCw,
    gradient: "bg-orange-500/10 dark:bg-orange-500/20",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Bonds",
    description: "Lend your funds to companies",
    icon: Building2,
    gradient: "bg-rose-500/10 dark:bg-rose-500/20",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    title: "Futures",
    description: "Contracts based on the underlying asset",
    icon: Gem,
    gradient: "bg-indigo-500/10 dark:bg-indigo-500/20",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
];

const strategyAssets: Asset[] = [
  {
    title: "Structural products",
    description: "Combinations of assets to protect against risks",
    icon: LayoutGrid,
    gradient: "bg-emerald-500/10 dark:bg-emerald-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

const tradeAssets: Asset[] = [
  {
    title: "Currency exchange",
    description: "Calculate the benefits of the exchange rate",
    icon: RefreshCw,
    iconColor: "text-foreground/70",
  },
  {
    title: "Trading",
    description: "Trading for professionals",
    icon: LineChart,
    iconColor: "text-foreground/70",
  },
  {
    title: "Dividend Calendar",
    description: "Keep track of important dates",
    icon: CalendarDays,
    iconColor: "text-foreground/70",
  },
];

const serviceLinks: LinkItem[] = [
  {
    title: "Consulting",
    href: "#",
    description: "Expert financial advice tailored to your needs.",
  },
  {
    title: "Asset Management",
    href: "#",
    description: "Professional management of your diverse portfolio.",
  },
];

const resourceLinks: LinkItem[] = [
  {
    title: "Blog",
    href: "#",
    description: "Latest news and insights from the market.",
  },
  {
    title: "Help Center",
    href: "#",
    description: "Everything you need to know about our platform.",
  },
];
