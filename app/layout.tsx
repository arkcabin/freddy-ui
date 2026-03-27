import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { fontHeading, fontMono, fontSans } from "@/lib/fonts";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  canonicalUrl: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} overscroll-none bg-background font-sans text-foreground antialiased`}
      >
        {process.env.GOOGLE_ANALYTICS && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
