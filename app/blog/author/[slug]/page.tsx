// Author archive page. Lists all published posts by a given author.
// Statically generated via generateStaticParams, reading content/blog and
// content/authors off the local filesystem. Ported from mediasurface's
// reference implementation (src/app/blog/author/[slug]/page.tsx) and
// restyled to match the "Meet the Team" section's photo/badge conventions
// on the homepage (app/page.tsx).
//
// 404s if the slug has no author profile OR has a profile but zero
// published posts, rather than rendering an empty/broken page.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAuthorBySlug,
  getPostsByAuthor,
  getLocalAuthorSlugsWithPosts,
} from "@/lib/blog/local-authors";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function generateStaticParams() {
  return getLocalAuthorSlugsWithPosts().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};
  return { title: `${author.name} | Martech Insiders Blog` };
}

export default async function AuthorArchivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  const posts = author ? getPostsByAuthor(slug) : [];

  if (!author || posts.length === 0) notFound();

  return (
    <div className="font-manrope bg-paper text-void">
      <SiteHeader />

      <main className="mx-auto max-w-[760px] px-8 py-24">
        <p className="mb-10">
          <Link href="/blog" className="font-mono text-[0.8rem] tracking-wide text-muted hover:text-cobalt">
            &larr; BACK TO BLOG
          </Link>
        </p>

        <div className="mb-12 flex items-start gap-7">
          <AuthorAvatar author={author} size={96} />
          <div>
            <h1 className="mb-1.5 font-display text-[1.6rem] font-semibold">{author.name}</h1>
            {author.role && (
              <span className="mb-2 inline-block border-[1.5px] border-cobalt px-3 py-[5px] font-mono text-[0.78rem] tracking-wide text-cobalt">
                {author.role}
              </span>
            )}
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-mono text-[0.78rem] tracking-wide text-cobalt hover:underline"
              >
                Connect on LinkedIn →
              </a>
            )}
          </div>
        </div>

        {author.bio && (
          <p className="mb-14 text-[1.05rem] leading-[1.7] text-muted">{author.bio}</p>
        )}

        <h2 className="mb-6 font-display text-[1.2rem] font-semibold">Posts by {author.name}</h2>
        <ul className="list-none space-y-6 p-0">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-hairline pb-6">
              <h3 className="mb-1">
                <Link href={`/blog/${post.slug}`} className="font-display font-semibold hover:text-cobalt">
                  {post.title}
                </Link>
              </h3>
              <div className="font-mono text-[0.78rem] text-muted">{post.date}</div>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}
