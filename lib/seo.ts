/**
 * Social-share metadata helper. Next.js does not deep-merge `openGraph` or
 * `twitter` between layouts and pages — a page that sets its own `title`
 * but no `openGraph` would inherit the root layout's og:title. Every page
 * with its own metadata should build it through pageMetadata() so the
 * share card's title/description/URL match the page.
 *
 * The share *image* comes from the nearest opengraph-image.tsx file
 * (app/opengraph-image.tsx sitewide, app/blog/... for blog routes) and is
 * merged in by Next automatically. Exception: in Next 14 a route segment
 * that defines its own `openGraph` without an opengraph-image.tsx of its
 * own can lose the inherited image, so those pages pass `image` (the path
 * of the opengraph-image route they should use) explicitly.
 */

import type { Metadata } from "next";

export const SITE_NAME = "Martech Insiders";

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image,
}: {
  title: string;
  description?: string;
  path: string;
  type?: "website" | "article";
  image?: string;
}): Metadata {
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: SITE_NAME }]
    : undefined;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_GB",
      type,
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images && { images }),
    },
  };
}
