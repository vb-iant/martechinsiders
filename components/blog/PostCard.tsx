// Post card for the grid index — ported from mediasurface's reference
// implementation (src/components/blog/PostCard.tsx: accent border cycling
// by index, tag pill, title, excerpt, byline) but restyled with MI's own
// brand tokens and square-corner convention instead of mediasurface's
// unbranded rounded-pill demo styling.
//
// The tag pill's color cycles by the tag's own position in
// content/tags.json (accentIndexForTag), not the card's grid position, so
// a given tag always renders in the same color wherever it appears —
// matching the same [accent, cobalt, void] cycle used for OG-image
// accents (lib/og/martechinsiders-config.ts).

import Link from "next/link";
import type { PostSummary } from "@/lib/storage/schema";
import { getPrimaryTag, accentIndexForTag } from "@/lib/blog/local-tags";
import { AuthorByline } from "@/components/blog/AuthorByline";

const ACCENT = [
  { border: "border-t-accent", pill: "border-accent text-accent hover:bg-accent hover:text-paper" },
  { border: "border-t-cobalt", pill: "border-cobalt text-cobalt hover:bg-cobalt hover:text-paper" },
  { border: "border-t-void", pill: "border-void text-void hover:bg-void hover:text-paper" },
];

export function PostCard({ post, index }: { post: PostSummary; index: number }) {
  const primaryTag = getPrimaryTag(post.tags);
  const accent = ACCENT[index % ACCENT.length];
  const tagAccent = ACCENT[accentIndexForTag(primaryTag?.slug) % ACCENT.length];

  return (
    <div className={`border-t-4 pt-6 ${accent.border}`}>
      {primaryTag && (
        <Link
          href={`/blog?tag=${primaryTag.slug}`}
          className={`mb-4 inline-block border-[1.5px] px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wide transition-colors ${tagAccent.pill}`}
        >
          {primaryTag.name}
        </Link>
      )}
      <h2 className="mb-2 font-display text-[1.15rem] font-semibold leading-snug">
        <Link href={`/blog/${post.slug}`} className="hover:text-cobalt">
          {post.title}
        </Link>
      </h2>
      {post.excerpt && (
        <p className="mb-4 font-manrope text-[0.95rem] leading-relaxed text-muted">{post.excerpt}</p>
      )}
      <div className="font-mono text-[0.76rem] text-muted">
        <AuthorByline author={post.author} /> · {post.date}
      </div>
    </div>
  );
}
