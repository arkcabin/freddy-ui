import { ClientPageWrapper } from "@/components/layout/client-page-wrapper";
import { HomeContentClient } from "@/components/layout/home-content-client";
import { getAllCategories } from "@/lib/utils/blocks-data";

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
