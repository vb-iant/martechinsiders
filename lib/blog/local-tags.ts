/**
 * Local filesystem loader for tags — ported from mediasurface's reference
 * implementation (src/lib/blog/local-tags.ts). content/tags.json is a flat
 * JSON array, unlike authors which are one file per author.
 *
 * A post's `tags` field is an array of slugs into this entity.
 */

import fs from "fs";
import path from "path";
import type { Tag } from "@/lib/storage/schema";

const TAGS_PATH = path.join(process.cwd(), "content/tags.json");

let tagsCache: Tag[] | null = null;

export function getAllTags(): Tag[] {
  if (tagsCache) return tagsCache;
  if (!fs.existsSync(TAGS_PATH)) {
    tagsCache = [];
    return tagsCache;
  }
  tagsCache = JSON.parse(fs.readFileSync(TAGS_PATH, "utf-8")) as Tag[];
  return tagsCache;
}

export function getTagBySlug(slug: string): Tag | null {
  return getAllTags().find((t) => t.slug === slug) ?? null;
}

/** A tag's position in content/tags.json order — used to cycle OG-image
 * and tag-pill accent colors, so a given tag always renders with the same
 * accent regardless of which post or page it appears on. Returns 0 if the
 * slug doesn't resolve to a known tag. */
export function accentIndexForTag(tagSlug: string | undefined): number {
  if (!tagSlug) return 0;
  const index = getAllTags().findIndex((t) => t.slug === tagSlug);
  return index === -1 ? 0 : index;
}

/** The post's first tag, resolved to a Tag entity, or null. Used for the
 * single pill shown on post cards and the post detail hero — not every
 * tag, just the first. */
export function getPrimaryTag(tagSlugs: string[] | undefined): Tag | null {
  const firstSlug = tagSlugs?.[0];
  return firstSlug ? getTagBySlug(firstSlug) : null;
}

/** All of a post's tags, resolved to Tag entities. Unresolvable slugs are
 * silently dropped rather than rendered as raw slugs. */
export function getResolvedTags(tagSlugs: string[] | undefined): Tag[] {
  if (!tagSlugs) return [];
  const all = getAllTags();
  return tagSlugs
    .map((slug) => all.find((t) => t.slug === slug))
    .filter((t): t is Tag => Boolean(t));
}
