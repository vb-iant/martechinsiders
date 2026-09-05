// Shared author-byline renderer — a post's `author` field is a slug (or
// array of slugs) into the Author entity (content/authors/*.md), not a
// display name. Resolves via getAuthorBySlug and links to
// /blog/author/[slug], falling back to the raw slug (unlinked) if no
// profile matches. Ported from mediasurface's reference implementation
// (src/components/blog/AuthorByline.tsx), restyled to MI's cobalt link
// color instead of blue-600.

import Link from "next/link";
import { getAuthorBySlug } from "@/lib/blog/local-authors";
import { normalizeAuthors } from "@/lib/storage/schema";
import type { Author } from "@/lib/storage/schema";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";

export function AuthorByline({
  author,
  showAvatar = true,
  avatarSize = 20,
}: {
  author: string | string[];
  showAvatar?: boolean;
  avatarSize?: number;
}) {
  const slugs = normalizeAuthors(author);
  return (
    <>
      {slugs.map((slug, i) => {
        const resolved: Author | null = getAuthorBySlug(slug);
        return (
          <span key={slug} className="inline-flex items-center gap-1.5 align-middle">
            {i > 0 && <span>,&nbsp;</span>}
            {showAvatar && <AuthorAvatar author={resolved} size={avatarSize} />}
            {resolved ? (
              <Link href={`/blog/author/${resolved.slug}`} className="text-cobalt hover:underline">
                {resolved.name}
              </Link>
            ) : (
              slug
            )}
          </span>
        );
      })}
    </>
  );
}
