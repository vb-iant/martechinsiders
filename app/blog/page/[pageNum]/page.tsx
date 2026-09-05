// Path-based pagination (/blog/page/2, /blog/page/3, ...), matching the
// mediasurface reference implementation's /blog/page/[pageNum] structure.
// Reads searchParams (for ?tag=), so this renders dynamically rather than
// pre-building static HTML — same accepted trade-off as the index route.

import type { Metadata } from "next";
import { BlogIndexContent } from "@/components/blog/BlogIndexContent";

export const metadata: Metadata = {
  title: "Blog | Martech Insiders",
};

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
