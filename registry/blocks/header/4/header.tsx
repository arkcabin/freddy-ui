"use client";
import {
  Building2,
  CalendarDays,
  ChevronRight,
  Gem,
  Github,
  LayoutGrid,
  LineChart,
  RefreshCw,
  Search,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { LogoIcon } from "@/components/logo";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

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
          <a
            className="group flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-accent"
            href="/"
          >
            <LogoIcon className="size-7 transition-transform group-hover:scale-110" />
            <span className="hidden font-bold text-xl tracking-tight sm:inline-block">
              Freddy
            </span>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex" viewport={false}>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <a
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Home
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Pricing
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 bg-transparent px-4 font-medium text-sm transition-colors hover:bg-accent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:-translate-x-1/2 md:left-1/2 md:translate-y-2">
                  <motion.div
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="grid max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] grid-cols-1 gap-6 overflow-y-auto rounded-2xl border bg-background p-6 shadow-2xl md:w-[840px] md:grid-cols-[1fr_1.2fr] md:gap-8 md:p-8"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  >
                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-6 font-bold text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                          Basic Asset
                        </h3>
                        <div className="grid gap-2">
                          {basicAssets.map((asset, _idx) => (
                            <MenuCard key={asset.title} {...asset} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-6 font-bold text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                          Assets with a ready-made strategy
                        </h3>
                        <div className="grid gap-2">
                          {strategyAssets.map((asset, _idx) => (
                            <MenuCard key={asset.title} {...asset} largeIcon />
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-6 border-t pt-8 font-bold text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                          Trade
                        </h3>
                        <div className="grid gap-2">
                          {tradeAssets.map((asset, _idx) => (
                            <MenuCard key={asset.title} {...asset} ghostIcon />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 flex flex-col items-start justify-between gap-4 border-border/50 border-t pt-6 md:col-span-2 md:flex-row md:items-center">
                      <p className="text-muted-foreground text-sm">
                        Interested?{" "}
                        <a
                          className="font-bold text-foreground transition-colors hover:text-primary"
                          href="#"
                        >
                          Schedule a demo
                        </a>
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-medium text-muted-foreground text-xs">
                        <a
                          className="transition-colors hover:text-foreground"
                          href="#"
                        >
                          Documentation
                        </a>
                        <span className="hidden size-1 rounded-full bg-border md:block" />
                        <a
                          className="transition-colors hover:text-foreground"
                          href="#"
                        >
                          API Reference
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 bg-transparent px-4 font-medium text-sm transition-colors hover:bg-accent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:translate-y-2">
                  <div className="w-[calc(100vw-2rem)] p-4 md:w-80">
                    <ul className="grid gap-3">
                      {serviceLinks.map((link, _idx) => (
                        <ListItem key={link.title} {...link}>
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 bg-transparent px-4 font-medium text-sm transition-colors hover:bg-accent">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:right-0 md:left-auto md:translate-y-2">
                  <div className="w-[calc(100vw-2rem)] p-4 md:w-80">
                    <ul className="grid gap-3">
                      {resourceLinks.map((link, _idx) => (
                        <ListItem key={link.title} {...link}>
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
          <div className="mr-2 hidden items-center gap-2 sm:flex">
            <Button
              aria-label="Search"
              className="rounded-full"
              size="icon"
              type="button"
              variant="ghost"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              aria-label="GitHub"
              className="rounded-full"
              size="icon"
              type="button"
              variant="ghost"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
          <Button
            className="rounded-full px-6 font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:shadow-xl active:scale-95"
            type="button"
          >
            Get in touch
          </Button>

          {/* Mobile menu toggle */}
          <Button
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
            className="rounded-full md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            size="icon"
            type="button"
            variant="ghost"
          >
            <MenuToggleIcon
              className="size-6"
              duration={300}
              open={isMobileMenuOpen}
            />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="overflow-hidden border-b bg-background md:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <div className="container space-y-6 px-4 py-8">
              <nav className="flex flex-col gap-4">
                <a className="px-2 py-1 font-medium text-lg" href="#">
                  Home
                </a>
                <a className="px-2 py-1 font-medium text-lg" href="#">
                  Pricing
                </a>
                <div className="space-y-4">
                  <h4 className="px-2 font-bold text-muted-foreground text-xs uppercase tracking-widest">
                    Products
                  </h4>
                  <div className="grid gap-2">
                    {[...basicAssets, ...strategyAssets, ...tradeAssets].map(
                      (asset, _i) => (
                        <a
                          className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-accent"
                          href="#"
                          key={asset.title}
                        >
                          <div
                            className={cn(
                              "flex size-10 shrink-0 items-center justify-center rounded-lg shadow-sm",
                              asset.gradient
                            )}
                          >
                            <asset.icon
                              className={cn("size-5", asset.iconColor)}
                            />
                          </div>
                          <span className="font-medium">{asset.title}</span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </nav>
              <div className="flex flex-col gap-3 border-t pt-4">
                <Button className="h-12 w-full rounded-2xl" variant="outline">
                  Search
                </Button>
                <Button className="h-12 w-full rounded-2xl">
                  Get in touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

type Asset = {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient?: string;
  iconColor: string;
  largeIcon?: boolean;
  ghostIcon?: boolean;
};

function MenuCard({
  title,
  description,
  icon: Icon,
  gradient,
  iconColor,
  largeIcon = false,
  ghostIcon = false,
}: Asset) {
  return (
    <a
      className={cn(
        "group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300",
        "hover:bg-accent/50 hover:shadow-sm"
      )}
      href="#"
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105",
          largeIcon ? "h-14 w-14" : "h-12 w-12",
          ghostIcon ? "border border-border bg-accent/50" : gradient
        )}
      >
        <Icon className={cn(largeIcon ? "h-7 w-7" : "h-6 w-6", iconColor)} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="font-bold text-foreground text-sm transition-colors group-hover:text-primary">
          {title}
        </span>
        <span className="text-muted-foreground text-xs leading-relaxed">
          {description}
        </span>
      </div>
      <ChevronRight className="-translate-x-2 size-4 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </a>
  );
}

type LinkItem = {
  title: string;
  href: string;
  description: string;
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

function ListItem({
  title,
  children,
  href,
  className,
  ...props
}: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href}
          {...props}
        >
          <div className="font-medium text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
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
