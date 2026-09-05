// OG image for a single post. Respects ogImageSource/featuredImage —
// "featured" serves the featured image directly, anything else
// (including unset, which defaults to "generated") generates a card via
// renderOgImage. Ported from mediasurface's reference implementation
// (src/app/blog/[slug]/opengraph-image.tsx).

import fs from "fs";
import path from "path";
import { getLocalPost } from "@/lib/blog/local-content";
import { getPrimaryTag, accentIndexForTag } from "@/lib/blog/local-tags";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og/render";
import { martechInsidersOgConfig } from "@/lib/og/martechinsiders-config";

export const size = ogSize;
export const contentType = ogContentType;

const EXT_CONTENT_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getLocalPost(slug);

  if (!post) {
    return renderOgImage(martechInsidersOgConfig, { eyebrow: "Martech Insiders", title: "Blog" });
  }

  if (post.ogImageSource === "featured" && post.featuredImage) {
    const filePath = path.join(process.cwd(), "public", post.featuredImage);
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath).toLowerCase();
      const buffer = fs.readFileSync(filePath);
      return new Response(new Uint8Array(buffer), {
        headers: { "Content-Type": EXT_CONTENT_TYPES[ext] ?? "application/octet-stream" },
      });
    }
    // featuredImage path set but file missing — fall through to
    // generated rather than erroring.
  }

  const primaryTag = getPrimaryTag(post.tags);
  return renderOgImage(martechInsidersOgConfig, {
    eyebrow: primaryTag?.name ?? "Martech Insiders",
    title: post.title,
    accentIndex: accentIndexForTag(primaryTag?.slug),
  });
}
