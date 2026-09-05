/**
 * Per-site OG-image template config — ported from mediasurface's reference
 * implementation (src/lib/og/types.ts). Everything that varies between
 * sites is a VALUE here (a color-variable name, a single glyph, a font
 * URL), not a JSX/SVG structure.
 *
 * Colors are referenced by CSS custom-property NAME (e.g. "--color-accent"),
 * not by hex value — resolved at render time via readThemeColors() against
 * this site's own app/globals.css @theme block. Change a color there, the
 * OG image follows automatically.
 */
export interface OgTemplateConfig {
  /** Site name shown next to the badge. */
  siteName: string;
  /** Single character shown in the small circular badge. */
  badgeInitial: string;
  /** Single character rendered large and low-opacity as a background
   *  watermark. */
  watermarkGlyph: string;
  /** CSS custom-property name for the card's background color. */
  backgroundVar: string;
  /** CSS custom-property name for the primary text color. */
  foregroundVar: string;
  /** CSS custom-property names for the accent cycle, in order. Cycled by
   *  a tag's position in getAllTags(). */
  accentVars: string[];
  /** Optional: real font files to embed via next/og's ImageResponse
   *  (Satori requires embedded fonts for anything beyond its built-in
   *  fallback). */
  fontUrls?: { bold: string; medium: string };
  fontFamily?: string;
}
