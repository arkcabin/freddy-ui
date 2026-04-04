import { constructMetadata } from "@/lib/metadata";
import { ClientPageWrapper } from "@/components/layout/client-page-wrapper";
import { HomeContentClient } from "@/components/layout/home-content-client";
import { getAllCategories } from "@/lib/utils/blocks-data";

export const metadata = constructMetadata({
  fullTitle: "Freddy UI | 100+ Professional Shadcn/UI Blocks",
  description:
    "The ultimate library of 100+ high-fidelity shadcn/ui blocks for React 19, Next.js 16, and Tailwind CSS 4. Copy-paste beautifully crafted, responsive, and production-ready components designed for modern SaaS and enterprise applications.",
  canonicalUrl: "https://ui.arkcabin.com/",
});

/**
 * Page component for the Freddy UI homepage.
 * Highly optimized for performance (Lighthouse 100 Target).
 * Uses Server Components for static data fetching and SEO, 
 * while delegating hydration-heavy sections to HomeContentClient.
 */
export default function Page() {
  const categories = getAllCategories();

  return (
    <ClientPageWrapper>
      <HomeContentClient categories={categories} />
    </ClientPageWrapper>
  );
}
