import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { JsonLd } from "@/components/json-ld";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { fontHeading, fontMono, fontSans } from "@/lib/fonts";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  canonicalUrl: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} overscroll-none`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NextTopLoader
            color="var(--foreground)"
            height={2}
            shadow="none"
            showSpinner={false}
          />
          <JsonLd />
          {children}
        </ThemeProvider>

        {/* Third-Party Scripts: Re-enabled by user request. Using Next.js @next/third-parties optimized delivery. */}
        <GoogleTagManager gtmId="GTM-T4M45MP6" />
        {process.env.GOOGLE_ANALYTICS && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
        )}
      </body>
    </html>
  );
}
