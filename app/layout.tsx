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
        className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} overscroll-none`}
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

        {/* Third-Party Scripts: Deferred to end of body to minimize initial TBT */}
        <GoogleTagManager gtmId="GTM-T4M45MP6" />
        {process.env.GOOGLE_ANALYTICS && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
        )}
      </body>
    </html>
  );
}
