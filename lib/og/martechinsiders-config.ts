/**
 * Martech Insiders' own OG template config — the config-driven part of
 * the reference OG system (see lib/og/render.tsx). Colors are referenced
 * by CSS custom-property name and resolved against app/globals.css's
 * @theme block at render time (see lib/og/theme-colors.ts), so a color
 * change in the stylesheet is picked up automatically.
 *
 * accentVars cycles [accent, cobalt, void] by tag position — the same
 * three colors used for PostCard's top-border cycle, so a tag's color
 * identity is consistent between the post grid and its OG image.
 */

import type { OgTemplateConfig } from "./types";

export const martechInsidersOgConfig: OgTemplateConfig = {
  siteName: "Martech Insiders",
  badgeInitial: "M",
  watermarkGlyph: "M",
  backgroundVar: "--color-paper",
  foregroundVar: "--color-void",
  accentVars: ["--color-accent", "--color-cobalt", "--color-void"],
  fontUrls: {
    bold: "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksg.woff",
    medium:
      "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7aUUsg.woff",
  },
  fontFamily: "Space Grotesk",
};
