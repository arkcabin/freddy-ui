"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";
import { Check, ChevronDown, Terminal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFreddyStore, type PackageManager } from "@/hooks/use-freddy-store";
import { ShadcnIcon } from "../icons";
import { LogoIcon } from "../logo";
import { ButtonGroup, ButtonGroupSeparator } from "../ui/button-group";

/** Oficial NPMLogo in SVG */
const NpmIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 780 250" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#CB3837" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z" />
  </svg>
);

/** Official PNPM Logo in SVG */
const PnpmIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#F9AD00" d="M0 0h30v30H0zM35 0h30v30H35zM70 0h30v30H70zM0 35h30v30H0zM35 35h30v30H35zM70 35h30v30H70zM0 70h30v30H0zM35 70h30v30H35z" />
  </svg>
);

/** Official Bun Logo in SVG */
const BunIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#fbf0e3" d="M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40z" />
    <path fill="#ffddbe" d="M50 85c-19.3 0-35-15.7-35-35s15.7-35 35-35 35 15.7 35 35-15.7 35-35 35z" />
    <path fill="#000" d="M45 45c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm10 0c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
    <path fill="#ff7f7f" d="M50 65c-4.4 0-8-3.6-8-8h16c0 4.4-3.6 8-8 8z" />
  </svg>
);

type CopyCliButtonProps = {
  name: string;
};

export function CopyCliButton({ name }: CopyCliButtonProps) {
  const { copied, copy } = useCopyToClipboard();
  const { packageManager, setPackageManager } = useFreddyStore();

  const handleCopy = (pm?: PackageManager) => {
    const targetPm = pm || packageManager;
    /** Standardize commands based on industry best practices */
    const cmdPrefix = targetPm === "npx" ? "npx" : targetPm;
    const cmd = `${cmdPrefix} dlx shadcn@latest add @freddy/${name}`;

    copy(cmd);
    if (pm) setPackageManager(pm);
    sendGAEvent("event", "copy_cli", {
      block_name: name,
      package_manager: targetPm,
    });
  };

  const renderIcon = (pm: PackageManager, className?: string) => {
    switch (pm) {
      case "npx":
        return <ShadcnIcon className={cn("size-3.5", className)} />;
      case "npm":
        return <NpmIcon className={cn("size-3.5", className)} />;
      case "pnpm":
        return <PnpmIcon className={cn("size-3.5", className)} />;
      case "bun":
        return <BunIcon className={cn("size-3.5 rounded-full overflow-hidden", className)} />;
      default:
        return <Terminal className={cn("size-3.5", className)} />;
    }
  };

  return (
    <ButtonGroup className="h-[34px] rounded-full border border-border/40 bg-muted/40 backdrop-blur-md p-[2px] shadow-sm transition-all duration-300">
      {/* Left: Branding & Command Area */}
      <button
        onClick={() => handleCopy()}
        className="flex h-full items-center gap-2.5 rounded-l-full pl-3 pr-3 transition-all hover:bg-background/80 active:scale-[0.98]"
        type="button"
      >
        <div className="flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-100">
          <LogoIcon className="size-4" />
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground/60 transition-colors group-hover:text-foreground/80">
          <span className="opacity-30 select-none">//</span>
          <span className="font-bold text-foreground/90 tracking-tight">@freddy/{name}</span>
        </div>

        <div className="flex size-4 items-center justify-center ml-1">
          {copied && (
            <Check className="size-3.5 text-emerald-500 animate-in zoom-in-50 duration-200" />
          )}
        </div>
      </button>

      {/* Separator */}
      <ButtonGroupSeparator className="bg-border/40" />

      {/* Right: Package Switcher Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="flex h-full items-center gap-1.5 rounded-r-full bg-background/0 hover:bg-background/90 px-3 transition-all outline-none"
            type="button"
          >
            <div className="opacity-60 transition-opacity group-hover:opacity-100 scale-90">
              {renderIcon(packageManager)}
            </div>
            <ChevronDown className="size-3.5 text-muted-foreground/40 transition-transform duration-200 group-hover:text-muted-foreground" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          {[
            { pm: "npx", label: "npx", icon: <ShadcnIcon className="size-3.5" /> },
            { pm: "npm", label: "npm", icon: <NpmIcon className="size-3.5" /> },
            { pm: "pnpm", label: "pnpm", icon: <PnpmIcon className="size-3.5" /> },
            { pm: "bun", label: "bun", icon: <BunIcon className="size-3.5 rounded-full" /> },
          ].map((item) => (
            <DropdownMenuItem
              key={item.pm}
              onClick={() => handleCopy(item.pm as PackageManager)}
              className="flex items-center justify-between rounded-md cursor-pointer px-2.5"
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "flex size-5 items-center justify-center transition-all",
                  packageManager === item.pm ? "opacity-100" : "opacity-40 grayscale"
                )}>
                  {item.icon}
                </div>
                <span className={cn(
                  "text-[11px] font-bold uppercase tracking-widest",
                  packageManager === item.pm ? "text-primary" : "text-muted-foreground/70"
                )}>
                  {item.label}
                </span>
              </div>
              {packageManager === item.pm && (
                <div className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
