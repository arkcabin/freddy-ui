import type { Metadata } from "next";
import {
  MY_HANDLE,
  SITE_DESCRIPTION,
  SITE_HOME_URL,
  SITE_NAME,
  SITE_SHORT_DESCRIPTION,
} from "@/config/site";

type ConstructMetadataProps = {
  title?: string;
  fullTitle?: string;
  description?: string;
  image?: string | null;
  video?: string | null;
  url?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  manifest?: string | URL | null;
  keywords?: string[];
};

export function constructMetadata({
  title,
  fullTitle,
  description = SITE_DESCRIPTION,
  image = `${SITE_HOME_URL}/og.jpeg`,
  video,
  url,
  canonicalUrl,
  noIndex = false,
  manifest,
  keywords,
}: ConstructMetadataProps = {}): Metadata {
  return {
    title:
      fullTitle ||
      (title
        ? `${title} | ${SITE_NAME}`
        : `${SITE_NAME} - ${SITE_SHORT_DESCRIPTION}`),
    description,
    keywords: [
      SITE_NAME,
      "Shadcn UI",
      "UI",
      "Components",
      "Blocks",
      ...(keywords || []),
    ],
    openGraph: {
      title: title || SITE_NAME,
      description,
      siteName: SITE_NAME,
      ...(image && {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title || SITE_NAME,
          },
        ],
      }),
      url,
      type: "website",
      ...(video && {
        videos: video,
      }),
    },
    twitter: {
      title: title || SITE_NAME,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),
      ...(video && {
        player: video,
      }),
      creator: `@${MY_HANDLE}`,
      site: `@${MY_HANDLE}`,
    },
    authors: [
      {
        name: MY_HANDLE,
        url: `https://x.com/${MY_HANDLE}`,
      },
    ],
    category: "technology",
    metadataBase: new URL(SITE_HOME_URL),
    ...((url || canonicalUrl) && {
      alternates: {
        canonical: url || canonicalUrl,
      },
    }),
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    ...(manifest && {
      manifest,
    }),
  };
}
