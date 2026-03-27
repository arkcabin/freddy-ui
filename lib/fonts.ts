import { Geist, Geist_Mono, Syne } from "next/font/google";

export const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const fontHeading = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700", "800"],
});
