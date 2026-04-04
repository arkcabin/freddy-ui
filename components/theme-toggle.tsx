"use client";

import { MoonStar, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import React from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        aria-label="Toggle Theme"
        disabled
        size="icon-sm"
        variant="dashed"
      >
        <div className="size-5" />
      </Button>
    );
  }

  return (
    <Button
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon-sm"
      variant="dashed"
    >
      <SunDim className="size-5 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <MoonStar className="dark:-rotate-90 absolute rotate-0 scale-100 dark:scale-0" />
      <span className="sr-only">Switch Theme</span>
    </Button>
  );
}
