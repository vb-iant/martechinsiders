// Sitewide default OG image — used by the homepage, /contact,
// /privacy-policy and any route without its own opengraph-image.tsx.
// Blog routes override this with their own cards.

import { renderOgImage, ogSize, ogContentType } from "@/lib/og/render";
import { martechInsidersOgConfig } from "@/lib/og/martechinsiders-config";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Martech Insiders — independent advice for marketing technology buyers and vendors";

export default async function Image() {
  return renderOgImage(martechInsidersOgConfig, {
    eyebrow: "Martech Insiders",
    title: "Independent advice for marketing technology buyers and vendors",
  });
}
