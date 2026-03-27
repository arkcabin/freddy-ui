import { redirect } from "next/navigation";
import { getAllCategories } from "@/lib/utils/blocks-data";

export function generateStaticParams() {
  const cats = getAllCategories();
  return cats.map((cat) => ({
    cat: cat.id,
  }));
}

// Redirect old /{cat} URLs to /blocks/{cat} for backward compatibility
export default async function OldCatRedirect({ params }: PageProps<"/[cat]">) {
  const { cat } = await params;
  redirect(`/blocks/${cat}`);
}
