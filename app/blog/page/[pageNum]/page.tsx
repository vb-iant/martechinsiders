// Path-based pagination (/blog/page/2, /blog/page/3, ...), matching the
// mediasurface reference implementation's /blog/page/[pageNum] structure.
// Reads searchParams (for ?tag=), so this renders dynamically rather than
// pre-building static HTML — same accepted trade-off as the index route.

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BlogIndexContent } from "@/components/blog/BlogIndexContent";

export const metadata: Metadata = pageMetadata({
  title: "Blog | Martech Insiders",
  description:
    "Independent perspective on martech, CMS and DXP strategy from the Martech Insiders team.",
  path: "/blog",
});

export default async function BlogIndexPagedPage({
  params,
  searchParams,
}: {
  params: Promise<{ pageNum: string }>;
  searchParams: Promise<{ tag?: string }>;
}) {
  const { pageNum } = await params;
  const { tag } = await searchParams;
  const currentPage = parseInt(pageNum, 10) || 1;
  return <BlogIndexContent currentPage={currentPage} tagSlug={tag} />;
}
