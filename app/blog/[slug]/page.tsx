// Blog post detail. Statically generated via generateStaticParams,
// reading content/blog off the local filesystem — no GitHub API call, no
// GITHUB_TOKEN dependency. Ported from mediasurface's reference
// implementation (src/app/blog/[slug]/page.tsx) and restyled to MI's
// typography (Space Grotesk headings, Manrope body, accent/cobalt tokens)
// matching the conventions established on app/privacy-policy/page.tsx.
//
// A direct URL to a draft's slug 404s, same as a nonexistent slug.
// Tag list and the primary-tag pill both link to /blog?tag=slug — there's
// no dedicated tag archive page (deliberately not built upstream either,
// see mediasurface's CLAUDE.md), so the filtered index is the "tag page."
// Related posts reuse the same PostCard grid as the index.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {
  getLocalPost,
  getLocalPublishedSlugs,
  getRelatedPosts,
} from "@/lib/blog/local-content";
import { getPrimaryTag, getResolvedTags } from "@/lib/blog/local-tags";
import { AuthorByline } from "@/components/blog/AuthorByline";
import { PostCard } from "@/components/blog/PostCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function generateStaticParams() {
  return getLocalPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getLocalPost(slug);
  if (!post) return {};
  return {
    title: `${post.seoTitle ?? post.title} | Martech Insiders`,
    description: post.seoDescription ?? post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getLocalPost(slug);

  if (!post) notFound();

  const primaryTag = getPrimaryTag(post.tags);
  const allTags = getResolvedTags(post.tags);
  const related = getRelatedPosts(post, 3);

  return (
    <div className="font-manrope bg-paper text-void">
      <SiteHeader />

      <article className="mx-auto max-w-[760px] px-8 py-24 text-lg leading-[1.7]">
        <p className="mb-8">
          <Link href="/blog" className="font-mono text-[0.8rem] tracking-wide text-muted hover:text-cobalt">
            &larr; BACK TO BLOG
          </Link>
        </p>

        {primaryTag && (
          <Link
            href={`/blog?tag=${primaryTag.slug}`}
            className="mb-5 inline-block border-[1.5px] border-accent px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-paper"
          >
            {primaryTag.name}
          </Link>
        )}

        <h1 className="mb-4 font-display text-[2.1rem] font-semibold leading-[1.16] tracking-tight sm:text-[2.5rem]">
          {post.title}
        </h1>

        <div className="mb-12 font-mono text-[0.82rem] text-muted">
          <AuthorByline author={post.author} avatarSize={22} /> · {post.date} · {post.readingTime}
        </div>

        <div className="text-[1.05rem] text-void">
          <ReactMarkdown
            components={{
              h2: (props) => (
                <h2 className="mb-5 mt-16 font-display text-[1.3rem] font-semibold" {...props} />
              ),
              p: (props) => <p className="my-4 leading-[1.75] text-muted" {...props} />,
              a: (props) => <a className="text-cobalt hover:underline" {...props} />,
              ul: (props) => (
                <ul className="my-4 list-disc space-y-2 pl-6 leading-[1.75] text-muted marker:text-accent" {...props} />
              ),
              ol: (props) => (
                <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.75] text-muted marker:text-accent" {...props} />
              ),
            }}
          >
            {post.body}
          </ReactMarkdown>
        </div>

        {allTags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2.5">
            {allTags.map((tag) => (
              <Link
                key={tag.id}
                href={`/blog?tag=${tag.slug}`}
                className="border-[1.5px] border-hairline px-3 py-1.5 font-mono text-[0.72rem] tracking-wide text-muted hover:border-void hover:text-void"
              >
                {tag.name.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </article>

      {related.length > 0 && (
        <section className="border-t border-hairline">
          <div className="mx-auto max-w-[1180px] px-8 py-24">
            <span className="mb-5 inline-block font-mono text-[0.82rem] tracking-wide text-accent">
              [ related reading ]
            </span>
            <h2 className="mb-14 font-display text-[1.8rem] font-semibold sm:text-[2.1rem]">
              More from the blog
            </h2>
            <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
              {related.map((p, i) => (
                <PostCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
