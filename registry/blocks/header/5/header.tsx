"use client";

import {
  AlertCircle,
  ArrowRight,
  Box,
  Cloud,
  CreditCard,
  FileText,
  GalleryVertical,
  Github,
  HelpCircle,
  Mail,
  Monitor,
  MousePointer2,
  Quote,
  Sparkles,
  Star,
  X,
  Zap,
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
    <div
      className={cn(
        "relative w-full",
        isMobileMenuOpen && "h-screen overflow-hidden"
      )}
    >
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-60 bg-background/80 backdrop-blur-xl md:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        animate={
          isMobileMenuOpen
            ? { scale: 0.95, y: 10, borderRadius: "2rem" }
            : { scale: 1, y: 0, borderRadius: "0" }
        }
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled || isMobileMenuOpen
            ? "border-b bg-background/80 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        )}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a
              className="group flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-accent"
              href="/"
            >
              <LogoIcon className="size-7 transition-transform group-hover:scale-110" />
              <span className="hidden font-bold text-lg tracking-tight sm:inline-block">
                Freddy
              </span>
            </a>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 bg-transparent px-4 font-medium text-sm transition-colors hover:bg-accent data-[state=open]:bg-accent">
                    Blocks
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-[900px] flex-row overflow-hidden rounded-3xl border bg-card shadow-2xl">
                      {/* Sidebar */}
                      <div className="flex w-[320px] flex-col justify-between border-r bg-muted/30 p-8">
                        <div className="space-y-6">
                          <div className="inline-flex items-center rounded-full border bg-secondary px-2.5 py-0.5 font-medium text-secondary-foreground text-xs">
                            Registry
                          </div>
                          <div className="space-y-4">
                            <h2 className="font-bold text-3xl tracking-tight">
                              Modern Blocks
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              A curated collection of high-fidelity components
                              built with Tailwind CSS and Radix UI. Perfectly
                              crafted for your next big idea.
                            </p>
                          </div>
                        </div>

                        <div className="mt-12 space-y-4">
                          <div className="group/card relative overflow-hidden rounded-2xl border bg-card p-4 shadow-sm">
                            <div className="absolute top-0 right-0 p-3 opacity-10 transition-opacity group-hover/card:opacity-20">
                              <Star className="h-12 w-12" />
                            </div>
                            <div className="mb-1 flex items-center gap-3">
                              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                                <Sparkles
                                  aria-hidden="true"
                                  className="h-4 w-4 text-primary"
                                />
                              </div>
                              <span className="font-bold text-[10px] text-muted-foreground uppercase tracking-widest">
                                Flash Update
                              </span>
                            </div>
                            <p className="font-bold text-sm">New Auth Blocks</p>
                          </div>

                          <Button
                            className="group/btn h-12 w-full gap-2 rounded-2xl font-semibold text-sm"
                            type="button"
                          >
                            Explore Library
                            <ArrowRight
                              aria-hidden="true"
                              className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                            />
                          </Button>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 p-8 md:p-10">
                        <div className="mb-8 flex items-center justify-between">
                          <h3 className="font-bold text-muted-foreground text-xs uppercase tracking-[0.2em]">
                            Component Categories
                          </h3>
                          <div className="flex items-center gap-2">
                            <span
                              className="font-medium text-muted-foreground text-xs"
                              id="view-counts-label"
                            >
                              View counts
                            </span>
                            <button
                              aria-checked="true"
                              aria-labelledby="view-counts-label"
                              className="h-5 w-9 rounded-full border border-primary bg-primary p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                              role="switch"
                              type="button"
                            >
                              <div className="ml-auto aspect-square h-full rounded-full bg-primary-foreground shadow-sm" />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                          {categories.map((cat) => (
                            <a
                              className="group/item hover:-translate-y-1.5 flex flex-col items-center gap-4 transition-all"
                              href="#"
                              key={cat.name}
                            >
                              <div className="relative flex size-14 items-center justify-center overflow-hidden rounded-2xl border bg-muted/40 text-muted-foreground shadow-sm backdrop-blur-sm transition-all duration-300 group-hover/item:border-primary/20 group-hover/item:bg-primary/5 group-hover/item:text-primary">
                                <cat.icon
                                  aria-hidden="true"
                                  className="relative z-10 h-6 w-6"
                                />
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover/item:opacity-100" />
                                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity group-hover/item:opacity-100" />
                              </div>
                              <div className="text-center">
                                <p className="mb-0.5 font-bold text-foreground text-sm transition-colors group-hover/item:text-primary">
                                  {cat.name}
                                </p>
                                <p className="font-medium text-[10px] text-muted-foreground tracking-wide">
                                  {cat.count} blocks
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="flex h-9 items-center px-4 font-medium text-sm transition-colors hover:text-primary"
                    href="#"
                  >
                    Components
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="flex h-9 items-center px-4 font-medium text-sm transition-colors hover:text-primary"
                    href="#"
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 sm:flex">
              <Button
                className="rounded-full text-muted-foreground hover:text-foreground"
                size="icon"
                type="button"
                variant="ghost"
              >
                <Github aria-hidden="true" className="h-5 w-5" />
              </Button>
              <div className="mx-2 h-4 w-px bg-border" />
              <Button
                className="h-9 rounded-full px-4 font-semibold text-xs"
                type="button"
                variant="outline"
              >
                Sign In
              </Button>
            </div>
            <Button
              className="h-9 rounded-full px-5 font-semibold text-xs shadow-lg shadow-primary/20"
              type="button"
            >
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              className="ml-1 rounded-full md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              size="icon"
              type="button"
              variant="ghost"
            >
              <MenuToggleIcon
                className="size-5"
                duration={300}
                open={isMobileMenuOpen}
              />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            animate={{ x: 0 }}
            className="fixed inset-y-0 right-0 z-70 w-full max-w-sm overflow-y-auto border-l bg-background shadow-2xl md:hidden"
            exit={{ x: "100%" }}
            initial={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="space-y-8 p-6">
              <div className="flex items-center justify-between">
                <LogoIcon className="size-8" />
                <Button
                  className="rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                  size="icon"
                  variant="ghost"
                >
                  <X className="size-6" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-4 px-2 font-bold text-muted-foreground text-xs uppercase tracking-widest">
                    Navigation
                  </h4>
                  <div className="grid gap-1">
                    <a
                      className="flex h-12 items-center rounded-xl px-4 font-medium text-lg transition-colors hover:bg-muted"
                      href="#"
                    >
                      Home
                    </a>
                    <a
                      className="flex h-12 items-center rounded-xl px-4 font-medium text-lg transition-colors hover:bg-muted"
                      href="#"
                    >
                      Components
                    </a>
                    <a
                      className="flex h-12 items-center rounded-xl px-4 font-medium text-lg transition-colors hover:bg-muted"
                      href="#"
                    >
                      Pricing
                    </a>
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center justify-between px-2">
                    <h4 className="font-bold text-muted-foreground text-xs uppercase tracking-widest">
                      Blocks Registry
                    </h4>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-bold text-[10px] text-primary uppercase tracking-tighter">
                      13 categories
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat) => (
                      <a
                        className="group/m-item flex flex-col gap-2 rounded-2xl border bg-muted/40 p-4 transition-colors hover:bg-muted"
                        href="#"
                        key={cat.name}
                      >
                        <cat.icon className="size-5 text-muted-foreground transition-colors group-hover/m-item:text-primary" />
                        <span className="font-bold text-sm">{cat.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t pt-6">
                <Button
                  className="h-12 w-full rounded-2xl font-bold text-sm"
                  variant="outline"
                >
                  Sign In
                </Button>
                <Button className="h-12 w-full rounded-2xl font-bold text-sm shadow-lg shadow-primary/20">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const categories = [
  { name: "Auth", count: 12, icon: Zap },
  { name: "Contact", count: 2, icon: Mail },
  { name: "Cta", count: 5, icon: MousePointer2 },
  { name: "Faqs", count: 5, icon: HelpCircle },
  { name: "Feature", count: 1, icon: Star },
  { name: "Footer", count: 5, icon: Monitor },
  { name: "Form", count: 3, icon: FileText },
  { name: "Header", count: 3, icon: GalleryVertical },
  { name: "Image Gallery", count: 1, icon: Box },
  { name: "Logo Cloud", count: 4, icon: Cloud },
  { name: "Not Found", count: 2, icon: AlertCircle },
  { name: "Pricing", count: 4, icon: CreditCard },
  { name: "Testimonials", count: 2, icon: Quote },
];
