/**
 * Local filesystem content loader for the blog — ported from
 * mediasurface's reference implementation (src/lib/blog/local-content.ts).
 *
 * content/blog is checked into this repo, already on disk at build time —
 * no GitHub API, no GITHUB_TOKEN, no runtime dependency for this public
 * route.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostFrontmatter, PostSummary } from "@/lib/storage/schema";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function isPublished(post: PostSummary): boolean {
  return post.status !== "draft";
}

function readAllContentFiles(): { slug: string; raw: string }[] {
  const filenames = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
    raw: fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8"),
  }));
}

/** All published posts, newest first. Drafts excluded. */
export function getLocalPosts(): PostSummary[] {
  const files = readAllContentFiles();
  const summaries: PostSummary[] = files.map(({ slug, raw }) => {
    const { data } = matter(raw);
    const frontmatter = data as PostFrontmatter;
    return {
      ...frontmatter,
      slug: frontmatter.slug || slug,
      path: `content/blog/${slug}.md`,
    };
  });

  return summaries
    .filter(isPublished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** A single post by slug. Returns null if not found OR if it's a draft —
 * drafts are not reachable via direct URL. */
export function getLocalPost(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content: body } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  if (frontmatter.status === "draft") return null;

  return {
    ...frontmatter,
    slug: frontmatter.slug || slug,
    path: `content/blog/${slug}.md`,
    body,
    readingTime: readingTime(body).text,
  };
}

/** All slugs, published only — for generateStaticParams. */
export function getLocalPublishedSlugs(): string[] {
  return getLocalPosts().map((p) => p.slug);
}

/** Related posts for a given post, scored by count of shared tags
 * (descending), tie-broken by most recent date. Excludes the post itself.
 * Posts with zero shared tags are excluded entirely rather than padding
 * the list. */
export function getRelatedPosts(post: PostSummary, count = 3): PostSummary[] {
  const all = getLocalPosts();
  const postTags = new Set(post.tags ?? []);

  const scored = all
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const sharedTags = (p.tags ?? []).filter((t) => postTags.has(t)).length;
      return { post: p, sharedTags };
    })
    .filter((entry) => entry.sharedTags > 0)
    .sort((a, b) => {
      if (b.sharedTags !== a.sharedTags) return b.sharedTags - a.sharedTags;
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    });

  return scored.slice(0, count).map((entry) => entry.post);
}
