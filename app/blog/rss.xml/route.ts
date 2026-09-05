// RSS 2.0 feed for the blog. Ported from mediasurface's reference
// implementation (src/app/blog/rss.xml/route.ts). Base URL is hardcoded
// to the live domain rather than read from a shared site-config module —
// this repo doesn't have one (mediasurface's version does, since it hosts
// multiple sites' configs). Author resolution uses normalizeAuthors() so
// a multi-author post emits one <dc:creator> per author.
//
// Reads content/blog off the local filesystem via getLocalPosts() — no
// GitHub API dependency.

import { getLocalPosts } from "@/lib/blog/local-content";
import { getAuthorBySlug } from "@/lib/blog/local-authors";
import { normalizeAuthors } from "@/lib/storage/schema";

const BLOG_URL = "https://www.martechinsiders.com/blog";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getLocalPosts();

  const items = posts
    .map((post) => {
      const url = `${BLOG_URL}/${post.slug}`;
      const authorNames = normalizeAuthors(post.author)
        .map((slug) => getAuthorBySlug(slug)?.name)
        .filter((name): name is string => Boolean(name));
      const pubDate = new Date(post.date).toUTCString();
      const creators = authorNames
        .map((name) => `\n      <dc:creator>${escapeXml(name)}</dc:creator>`)
        .join("");
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>${creators}${
        post.excerpt ? `\n      <description>${escapeXml(post.excerpt)}</description>` : ""
      }
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Martech Insiders Blog</title>
    <link>${BLOG_URL}</link>
    <atom:link href="${BLOG_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Independent perspective on martech, CMS and DXP strategy from the Martech Insiders team.</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
