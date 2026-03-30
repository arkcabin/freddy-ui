import type { MetadataRoute } from "next";
import { blocks } from "@/config/blocks";
import { SITE_HOME_URL } from "@/config/site";
import { getAllCategories } from "@/lib/utils/blocks-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const date = new Date().toISOString();
  const cats = getAllCategories();
  const catRoutes = cats.map((cat) => ({
    url: `${SITE_HOME_URL}/blocks/${cat.id}`,
    lastModified: date,
  }));
  const blockRoutes = blocks.map((item) => ({
    url: `${SITE_HOME_URL}/view/${item.name}`,
    lastModified: date,
  }));

  const staticRoutes = ["", "/docs", "/changelog", "/pricing"].map((route) => ({
    url: `${SITE_HOME_URL}${route}`,
    lastModified: date,
  }));

  return [...staticRoutes, ...catRoutes, ...blockRoutes];
}
