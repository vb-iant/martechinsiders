/**
 * Local filesystem loader for author profiles — ported from
 * mediasurface's reference implementation (src/lib/blog/local-authors.ts).
 *
 * A post's `author` field is a slug (or array of slugs, see
 * normalizeAuthors) into this entity — resolve it here before rendering a
 * name, avatar, or link. This loader is author-count-agnostic; it doesn't
 * assume single vs. multi.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Author, PostSummary } from "@/lib/storage/schema";
import { normalizeAuthors } from "@/lib/storage/schema";
import { getLocalPosts } from "@/lib/blog/local-content";

const AUTHORS_DIR = path.join(process.cwd(), "content/authors");

let authorCache: Record<string, Author> | null = null;

function readAllAuthors(): Record<string, Author> {
  if (authorCache) return authorCache;

  const result: Record<string, Author> = {};
  if (fs.existsSync(AUTHORS_DIR)) {
    const filenames = fs.readdirSync(AUTHORS_DIR).filter((f) => f.endsWith(".md"));
    for (const filename of filenames) {
      const raw = fs.readFileSync(path.join(AUTHORS_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      const frontmatter = data as Omit<Author, "bio">;
      const slug = frontmatter.slug || filename.replace(/\.md$/, "");
      result[slug] = { ...frontmatter, slug, bio: content.trim() };
    }
  }

  authorCache = result;
  return result;
}

/** All author profiles that exist, regardless of whether they have posts. */
export function getAllAuthors(): Author[] {
  return Object.values(readAllAuthors());
}

export function getAuthorBySlug(slug: string): Author | null {
  return readAllAuthors()[slug] ?? null;
}

/** Published posts by a given author slug, newest first. Matches via
 * normalizeAuthors so this works whether a post's `author` field is a
 * single string or an array. */
export function getPostsByAuthor(authorSlug: string): PostSummary[] {
  return getLocalPosts().filter((post) =>
    normalizeAuthors(post.author).includes(authorSlug)
  );
}

/** Author slugs that both (a) have a profile file and (b) have at least
 * one published post — for generateStaticParams. */
export function getLocalAuthorSlugsWithPosts(): string[] {
  const authors = readAllAuthors();
  const slugsWithPosts = new Set<string>();

  for (const post of getLocalPosts()) {
    for (const slug of normalizeAuthors(post.author)) {
      if (authors[slug]) slugsWithPosts.add(slug);
    }
  }

  return Array.from(slugsWithPosts);
}
