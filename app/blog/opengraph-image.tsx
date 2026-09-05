// OG image for the blog index. Generic — the index isn't about one tag
// or post, so uses accentIndex=0 (the first accent in the cycle).

import { renderOgImage, ogSize, ogContentType } from "@/lib/og/render";
import { martechInsidersOgConfig } from "@/lib/og/martechinsiders-config";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(martechInsidersOgConfig, {
    eyebrow: "Martech Insiders",
    title: "Blog",
  });
}
