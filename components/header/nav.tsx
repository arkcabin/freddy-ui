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

const categories = getAllCategories();

const NAV_LINKS = [
  { label: "Home", href: "/" },
];

export function SiteNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {NAV_LINKS.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className="inline-flex h-9 items-center px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
              >
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        {/* Blocks dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-transparent hover:text-foreground data-[state=open]:bg-transparent data-[state=open]:text-foreground">
            Blocks
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[520px] p-4">
              <div className="mb-3 flex items-center justify-between px-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                  Categories
                </p>
                <Link
                  href="/blocks"
                  className="text-xs font-medium text-primary transition-colors hover:underline"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {categories.map((cat) => (
                  <NavigationMenuLink asChild key={cat.id}>
                    <Link
                      href={`/blocks/${cat.id}`}
                      className="group flex items-center justify-between rounded-md px-3 py-2 transition-colors hover:bg-accent"
                    >
                      <span className="text-sm font-medium capitalize text-foreground/90 group-hover:text-foreground">
                        {cat.name}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground/60">
                        {cat.blocksCount}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  );
}
