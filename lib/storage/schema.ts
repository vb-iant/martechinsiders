/**
 * Blog content schema — ported from mediasurface's reference blog
 * implementation (src/lib/storage/schema.ts) so this site's content shape
 * matches the shared standard other sites migrate onto.
 *
 * `author` accepts a single slug or an array of slugs. Multi-author UI is
 * backlogged upstream (mediasurface CTRL board), but the loaders here are
 * already author-count-agnostic via normalizeAuthors(), so every post on
 * this site can start single-author without a schema change later.
 */

export interface PostFrontmatter {
  title: string;
  slug: string;
  /** ISO date string, e.g. "2026-09-04". */
  date: string;
  author: string | string[];
  tags: string[];
  excerpt: string;
  featuredImage?: string;
  /** Which image renders as this post's social-share (OG) card. Defaults to
   *  "generated" if unset — the code-generated typographic card. "featured"
   *  uses featuredImage directly instead, when one is set. Irrelevant if
   *  featuredImage is empty, regardless of this value. */
  ogImageSource?: "generated" | "featured";
  status?: "draft" | "published";
  seoTitle?: string;
  seoDescription?: string;
}

export interface PostSummary extends PostFrontmatter {
  /** File path within the repo, e.g. "content/blog/my-post.md". */
  path: string;
}

export interface Post extends PostSummary {
  body: string;
  /** Human-readable, e.g. "5 min read". Always computed, never stored. */
  readingTime: string;
}

/**
 * Author entity (content/authors/*.md — frontmatter is everything but
 * bio; bio is the markdown body). A post's `author` field is a slug (or
 * array of slugs) into this entity, not a display name — resolve via
 * getAuthorBySlug (lib/blog/local-authors.ts) before rendering.
 */
export interface Author {
  name: string;
  slug: string;
  role?: string;
  linkedin?: string;
  avatar?: string;
  bio: string;
}

/**
 * Tag entity (content/tags.json — a flat array, not per-tag files like
 * authors). A post's `tags` field is an array of slugs into this entity —
 * resolve via getTagBySlug/getAllTags (lib/blog/local-tags.ts).
 */
export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export function normalizeAuthors(author: string | string[]): string[] {
  return Array.isArray(author) ? author : [author];
}

/** Slug -> filename convention: `${slug}.md`. */
export function slugToFilename(slug: string): string {
  return `${slug}.md`;
}

export function filenameToSlug(filename: string): string {
  return filename.replace(/\.md$/, "");
}
