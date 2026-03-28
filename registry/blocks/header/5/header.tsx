"use client";

import {
  ArrowRight,
  FileText,
  Github,
  Mail,
  MousePointer2,
  Sparkles,
  Star,
  X,
  CreditCard,
  HelpCircle,
  Zap,
  Box,
  Monitor,
  GalleryVertical,
  Cloud,
  AlertCircle,
  Quote,
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
    <div className={cn("relative w-full", isMobileMenuOpen && "h-screen overflow-hidden")}>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-background/80 backdrop-blur-xl md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        animate={isMobileMenuOpen ? { scale: 0.95, y: 10, borderRadius: "2rem" } : { scale: 1, y: 0, borderRadius: "0" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled || isMobileMenuOpen
            ? "border-b bg-background/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 group p-2 rounded-md hover:bg-accent transition-colors">
              <LogoIcon className="size-7 transition-transform group-hover:scale-110" />
              <span className="font-bold text-lg hidden sm:inline-block tracking-tight">Freddy</span>
            </a>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-9 px-4 text-sm font-medium hover:bg-accent transition-colors data-[state=open]:bg-accent">
                    Blocks
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] border bg-card rounded-3xl shadow-2xl overflow-hidden flex flex-row">
                      {/* Sidebar */}
                      <div className="w-[320px] bg-muted/30 p-8 flex flex-col justify-between border-r">
                        <div className="space-y-6">
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border">
                            Registry
                          </div>
                          <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">Modern Blocks</h2>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                              A curated collection of high-fidelity components built with Tailwind CSS and Radix UI. Perfectly crafted for your next big idea.
                            </p>
                          </div>
                        </div>

                        <div className="mt-12 space-y-4">
                          <div className="p-4 rounded-2xl bg-card border shadow-sm relative overflow-hidden group/card">
                            <div className="absolute top-0 right-0 p-3 opacity-10 transition-opacity group-hover/card:opacity-20">
                              <Star className="h-12 w-12" />
                            </div>
                            <div className="flex items-center gap-3 mb-1">
                              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Flash Update</span>
                            </div>
                            <p className="text-sm font-bold">New Auth Blocks</p>
                          </div>

                          <Button className="w-full rounded-2xl h-12 gap-2 text-sm font-semibold group/btn" type="button">
                            Explore Library
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                          </Button>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 p-8 md:p-10">
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Component Categories</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-muted-foreground" id="view-counts-label">View counts</span>
                            <button
                              type="button"
                              role="switch"
                              aria-checked="true"
                              aria-labelledby="view-counts-label"
                              className="h-5 w-9 rounded-full bg-primary border border-primary p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                              <div className="h-full aspect-square rounded-full bg-primary-foreground shadow-sm ml-auto" />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-y-10 gap-x-8">
                          {categories.map((cat) => (
                            <a
                              key={cat.name}
                              href="#"
                              className="group/item flex flex-col items-center gap-4 transition-all hover:-translate-y-1.5"
                            >
                              <div className="size-14 rounded-2xl bg-muted/40 backdrop-blur-sm border shadow-sm flex items-center justify-center text-muted-foreground group-hover/item:text-primary group-hover/item:bg-primary/5 group-hover/item:border-primary/20 transition-all duration-300 relative overflow-hidden">
                                <cat.icon className="h-6 w-6 relative z-10" aria-hidden="true" />
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                              </div>
                              <div className="text-center">
                                <p className="text-sm font-bold text-foreground mb-0.5 group-hover/item:text-primary transition-colors">{cat.name}</p>
                                <p className="text-[10px] font-medium text-muted-foreground tracking-wide">{cat.count} blocks</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="flex h-9 items-center px-4 text-sm font-medium hover:text-primary transition-colors">Components</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="flex h-9 items-center px-4 text-sm font-medium hover:text-primary transition-colors">Pricing</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground" type="button">
                <Github className="h-5 w-5" aria-hidden="true" />
              </Button>
              <div className="h-4 w-px bg-border mx-2" />
              <Button variant="outline" className="rounded-full px-4 h-9 text-xs font-semibold" type="button">
                Sign In
              </Button>
            </div>
            <Button className="rounded-full px-5 h-9 text-xs font-semibold shadow-lg shadow-primary/20" type="button">
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
            >
              <MenuToggleIcon open={isMobileMenuOpen} className="size-5" duration={300} />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-70 w-full max-w-sm bg-background border-l shadow-2xl md:hidden overflow-y-auto"
          >
            <div className="p-6 space-y-8">
              <div className="flex items-center justify-between">
                <LogoIcon className="size-8" />
                <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="size-6" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 px-2">Navigation</h4>
                  <div className="grid gap-1">
                    <a href="#" className="flex items-center h-12 px-4 rounded-xl text-lg font-medium hover:bg-muted transition-colors">Home</a>
                    <a href="#" className="flex items-center h-12 px-4 rounded-xl text-lg font-medium hover:bg-muted transition-colors">Components</a>
                    <a href="#" className="flex items-center h-12 px-4 rounded-xl text-lg font-medium hover:bg-muted transition-colors">Pricing</a>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4 px-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Blocks Registry</h4>
                    <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-tighter">13 categories</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat) => (
                      <a key={cat.name} href="#" className="flex flex-col gap-2 p-4 rounded-2xl bg-muted/40 border hover:bg-muted transition-colors group/m-item">
                        <cat.icon className="size-5 text-muted-foreground group-hover/m-item:text-primary transition-colors" />
                        <span className="text-sm font-bold">{cat.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t space-y-3">
                <Button variant="outline" className="w-full rounded-2xl h-12 text-sm font-bold">Sign In</Button>
                <Button className="w-full rounded-2xl h-12 text-sm font-bold shadow-lg shadow-primary/20">Get Started</Button>
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
