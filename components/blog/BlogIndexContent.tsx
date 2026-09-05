// Shared blog index content — pagination + tag filtering + a 3-column
// grid, ported from mediasurface's reference implementation
// (src/components/blog/BlogIndexContent.tsx) and restyled to MI's design
// system (square filter buttons and pager, bracket-tag eyebrow, brand
// tokens). Used by both /blog (currentPage=1) and /blog/page/[pageNum].
//
// Includes SiteHeader/SiteFooter directly, matching the pattern used by
// app/page.tsx and app/privacy-policy/page.tsx — this repo's root layout
// doesn't render them globally, each top-level page does.
//
// Reads a `tagSlug` prop that ultimately comes from searchParams in the
// page.tsx wrappers, which makes this route render dynamically rather
// than pre-building static HTML — an accepted trade-off (mirrors
// mediasurface's own reference implementation), not an oversight. Still
// zero GitHub-API dependency either way: reads content/blog and
// content/tags.json off the local filesystem.
//
// Page-number validity is checked against the UNFILTERED total: a
// wildly out-of-range page in the URL is a real 404 regardless of what a
// tag filter narrows the results down to.

import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocalPosts } from "@/lib/blog/local-content";
import { getAllTags, getTagBySlug } from "@/lib/blog/local-tags";
import { PostCard } from "@/components/blog/PostCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import type { PostSummary, Tag } from "@/lib/storage/schema";

export const BLOG_PAGE_SIZE = 9;

export function getUnfilteredBlogPageCount(): number {
  return Math.max(1, Math.ceil(getLocalPosts().length / BLOG_PAGE_SIZE));
}

export function BlogIndexContent({
  currentPage,
  tagSlug,
}: {
  currentPage: number;
  tagSlug?: string;
}) {
  const allPosts = getLocalPosts();
  const tags = getAllTags();

  const unfilteredTotalPages = getUnfilteredBlogPageCount();
  if (currentPage > unfilteredTotalPages || currentPage < 1) {
    notFound();
  }

  const activeTag: Tag | null = tagSlug ? getTagBySlug(tagSlug) : null;
  const filteredPosts: PostSummary[] = activeTag
    ? allPosts.filter((p) => p.tags?.includes(activeTag.slug))
    : allPosts;

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / BLOG_PAGE_SIZE));
  const pageForSlice = Math.min(currentPage, totalPages);
  const pagePosts = filteredPosts.slice(
    (pageForSlice - 1) * BLOG_PAGE_SIZE,
    pageForSlice * BLOG_PAGE_SIZE
  );

  function pageHref(page: number): string {
    const base = page <= 1 ? "/blog" : `/blog/page/${page}`;
    return activeTag ? `${base}?tag=${activeTag.slug}` : base;
  }

  return (
    <div className="font-manrope bg-paper text-void">
      <SiteHeader />

      <main className="mx-auto max-w-[1180px] px-8 py-24">
        <span className="mb-5 inline-block font-mono text-[0.82rem] tracking-wide text-accent">
          [ insights ]
        </span>
        <h1 className="mb-14 font-display text-[2.1rem] font-semibold leading-[1.16] tracking-tight sm:text-[2.5rem]">
          Blog
        </h1>

        {tags.length > 0 && (
          <div className="mb-14 flex flex-wrap gap-2.5">
            <Link
              href="/blog"
              className={`border-[1.5px] px-4 py-2 font-mono text-[0.76rem] tracking-wide ${
                !activeTag
                  ? "border-void bg-void text-paper"
                  : "border-hairline text-muted hover:border-void hover:text-void"
              }`}
            >
              ALL
            </Link>
            {tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/blog?tag=${tag.slug}`}
                className={`border-[1.5px] px-4 py-2 font-mono text-[0.76rem] tracking-wide ${
                  activeTag?.slug === tag.slug
                    ? "border-void bg-void text-paper"
                    : "border-hairline text-muted hover:border-void hover:text-void"
                }`}
              >
                {tag.name.toUpperCase()}
              </Link>
            ))}
          </div>
        )}

        {pagePosts.length === 0 ? (
          <p className="text-muted">No posts found for this tag yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
            {pagePosts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={pageHref(p)}
                className={`flex h-9 w-9 items-center justify-center border-[1.5px] font-mono text-sm ${
                  p === pageForSlice
                    ? "border-void bg-void text-paper"
                    : "border-hairline text-muted hover:border-void hover:text-void"
                }`}
              >
                {p}
              </Link>
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
