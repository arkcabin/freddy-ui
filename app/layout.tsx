import "./globals.css";

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
      <body
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} overscroll-none bg-background font-sans text-foreground antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4M45MP6"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm-noscript"
            width="0"
          />
        </noscript>
        <GoogleTagManager gtmId="GTM-T4M45MP6" />
        {process.env.GOOGLE_ANALYTICS && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LenisProvider>
            <JsonLd />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
