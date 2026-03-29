"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export const LogoIcon = ({ className }: LogoProps) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-block size-6 animate-pulse rounded-full bg-muted",
          className
        )}
      />
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const src =
    currentTheme === "dark"
      ? "/logo/freddy-logo-icon-light.png"
      : "/logo/freddy-logo-icon-dark.png";

  return (
    <Link href="/">

      <Image
        alt="Freddy UI Icon"
        className={cn("size-6 object-contain", className)}
        height={250}
        priority
        src={src}
        width={250}
      />
    </Link>
  );
};

export const Logo = ({ className }: LogoProps) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-block h-6 w-24 animate-pulse rounded bg-muted",
          className
        )}
      />
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const src =
    currentTheme === "dark"
      ? "/logo/freddy-logo-light.png"
      : "/logo/freddy-logo-dark.png";

  return (
    <Link href="/">

      <Image
        alt="Freddy UI Logo"
        className={cn("h-6 w-auto object-contain", className)}
        height={106}
        priority
        src={src}
        width={344}
      />
    </Link>
  );
};
