"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const LogoIcon = ({ className }: LogoProps) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={cn("size-6 animate-pulse bg-muted rounded-full inline-block", className)} />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const src = currentTheme === "dark" 
    ? "/logo/freddy-logo-icon-light.png" 
    : "/logo/freddy-logo-dark.png";

  return (
    <Image
      src={src}
      alt="Freddy UI Icon"
      width={65}
      height={65}
      style={{
        width: "auto",
        height: "auto",
      }}
      className={cn("size-6 object-contain", className)}
    />
  );
};

export const Logo = ({ className }: LogoProps) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={cn("h-6 w-24 animate-pulse bg-muted rounded inline-block", className)} />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const src = currentTheme === "dark" 
    ? "/logo/freddy-logo-light.png" 
    : "/logo/freddy-logo-icon-dark.png";

  return (
    <Image
      src={src}
      alt="Freddy UI Logo"
      width={35}
      height={35}
      style={{
        width: "auto",
        height: "auto",
      }}
      className={cn("h-6 w-auto object-contain", className)}
    />
  );
};
