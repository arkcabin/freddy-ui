import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BlockBox } from "@/components/block";
import { DashedLines } from "@/components/shared";
import { constructMetadata } from "@/lib/metadata";
import { capitalize, unslugify } from "@/lib/utils";
import { getAllCategories, getBlocksByCategory } from "@/lib/utils/blocks-data";

export const revalidate = false;
export function generateStaticParams() {
  const cats = getAllCategories();
  return cats.map((cat) => ({
    cat: cat.id,
  }));
}

export async function generateMetadata({ params }: PageProps<"/blocks/[cat]">) {
  const { cat } = await params;

  if (!cat) {
    return null;
  }

  const categoryName = capitalize(unslugify(cat)) as string;

  return constructMetadata({
    title: `Free Shadcn/UI ${categoryName} Blocks`,
    description: `Discover ${categoryName} blocks — ready to copy, customize, and drop into your Shadcn/UI project.`,
    canonicalUrl: `/blocks/${cat}`,
    keywords: [categoryName],
  });
}

export default async function CategoryPage({ params }: PageProps<"/blocks/[cat]">) {
  const { cat } = await params;

  const categoryBlocks = getBlocksByCategory(cat);

  if (categoryBlocks?.length === 0) {
    return notFound();
  }

  const categoryName = capitalize(unslugify(cat)) as string;

  return (
    <>
      <div className="cpx max-w-xl space-y-2 pt-6">
        <Link
          className="flex w-max items-center gap-1 text-muted-foreground text-sm hover:text-foreground"
          href="/blocks"
        >
          <ArrowLeft className="inline-block size-3" /> All Blocks
        </Link>
        <h1 className="font-bold font-heading text-3xl sm:text-4xl md:text-nowrap text-foreground">
          Explore {categoryName} Blocks
        </h1>
        <p className="text-muted-foreground text-sm">
          Discover {categoryBlocks.length} beautifully crafted {categoryName}{" "}
          blocks — ready to copy, customize, and drop into your next Shadcn UI
          project.
        </p>
      </div>

      <DashedLines className="h-8 [mask-image:linear-gradient(to_bottom,transparent,var(--background),var(--background))]" />

      {categoryBlocks.map((block) => (
        <React.Fragment key={block.name}>
          <BlockBox block={block} />
          <DashedLines className="h-16" />
        </React.Fragment>
      ))}
    </>
  );
}
