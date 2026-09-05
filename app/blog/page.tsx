// Blog index. Thin wrapper: all listing/pagination/tag-filter logic lives
// in components/blog/BlogIndexContent.tsx, shared with
// /blog/page/[pageNum]. See that file for the searchParams -> dynamic
// rendering trade-off.

import type { Metadata } from "next";
import { BlogIndexContent } from "@/components/blog/BlogIndexContent";

export const metadata: Metadata = {
  title: "Blog | Martech Insiders",
  description:
    "Independent perspective on martech, CMS and DXP strategy from the Martech Insiders team.",
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  return <BlogIndexContent currentPage={1} tagSlug={tag} />;
}
