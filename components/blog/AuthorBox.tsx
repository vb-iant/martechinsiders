// Author box — shown at the bottom of a post, above the tag list. Ported
// from mediasurface's reference implementation
// (src/components/blog/AuthorBox.tsx, commit 515f970) and restyled to
// MI's tokens: a square bordered box (border-hairline, no rounded-*) with
// accent/cobalt in place of mediasurface's slate/blue-600, and the same
// bigger square accent-bordered avatar used in the post hero.
//
// Accepts the same `author: string | string[]` shape as AuthorByline and
// resolves the same way (normalizeAuthors + getAuthorBySlug), so it's
// author-count-agnostic rather than assuming single-author.
//
// Renders nothing for a slug with no matching profile — no name, bio, or
// link exists to show, so there's nothing worth a box for (unlike
// AuthorByline, which falls back to the raw slug in a byline context).

import Link from "next/link";
import { getAuthorBySlug } from "@/lib/blog/local-authors";
import { normalizeAuthors } from "@/lib/storage/schema";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";

export function AuthorBox({ author }: { author: string | string[] }) {
  const authors = normalizeAuthors(author)
    .map((slug) => getAuthorBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => a !== null);

  if (authors.length === 0) return null;

  return (
    <div className="my-11 flex flex-col gap-6">
      {authors.map((a) => (
        <div key={a.slug} className="flex items-start gap-5 border-[1.5px] border-hairline p-7">
          <AuthorAvatar author={a} size={64} />
          <div>
            <h3 className="mb-1 font-display text-[1.05rem] font-semibold">
              <Link href={`/blog/author/${a.slug}`} className="hover:text-cobalt">
                {a.name}
              </Link>
            </h3>
            {a.role && (
              <div className="mb-2 font-mono text-[0.7rem] tracking-wide text-cobalt">{a.role}</div>
            )}
            {a.bio && <p className="mb-2 text-[0.95rem] leading-relaxed text-muted">{a.bio}</p>}
            {a.linkedin && (
              <a
                href={a.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.7rem] tracking-wide text-cobalt hover:underline"
              >
                Follow {a.name.split(" ")[0]} on LinkedIn &rarr;
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
