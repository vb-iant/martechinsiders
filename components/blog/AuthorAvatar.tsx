// Author avatar — renders the real photo (Author.avatar) when set,
// falling back to initials otherwise. Ported from mediasurface's
// reference implementation (src/components/blog/AuthorAvatar.tsx), but
// styled square with a thin accent border rather than circular, matching
// the existing team-photo treatment on the homepage (app/page.tsx) — MI's
// design system deliberately uses no rounded-* utilities anywhere.

import type { Author } from "@/lib/storage/schema";

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function AuthorAvatar({
  author,
  size = 24,
}: {
  author: Author | null;
  size?: number;
}) {
  const dimension = `${size}px`;

  if (author?.avatar) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={author.avatar}
        alt={author.name}
        width={size}
        height={size}
        style={{
          width: dimension,
          height: dimension,
          border: "1.5px solid var(--color-accent)",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: dimension,
        height: dimension,
        background: "var(--color-void)",
        color: "var(--color-paper)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: Math.max(9, Math.round(size * 0.36)),
        fontWeight: 600,
        flexShrink: 0,
      }}
    >
      {author ? initials(author.name) : "?"}
    </div>
  );
}
