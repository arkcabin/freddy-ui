"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";

/**
 * Suppress the React 19 warning for next-themes script tag in development.
 * This is a known false positive where React flags the necessary theme-injection script.
 */
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const origError = console.error;
  // biome-ignore lint/suspicious/noExplicitAny: Suppressing React 19 warning requires overriding console.error
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return;
    }
    origError.apply(console, args);
  };
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
