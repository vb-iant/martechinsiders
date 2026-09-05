/**
 * Reads CSS custom properties (`--name: value;`) out of this site's own
 * app/globals.css, so OG-image generation pulls colors from the same
 * single source of truth as the rest of the site's styling. Ported from
 * mediasurface's reference implementation (src/lib/og/theme-colors.ts),
 * repointed at this repo's actual globals.css path (no src/ dir here).
 *
 * Since the Tailwind v4 migration, app/globals.css's `@theme` block
 * already emits `--color-accent`, `--color-cobalt`, `--color-void`,
 * `--color-paper` etc. as real custom properties — nothing further to
 * duplicate here.
 *
 * Deliberately a simple regex reader, not a real CSS parser — reading a
 * small, known, hand-written file for named custom properties, not
 * arbitrary CSS. First declaration of a given `--name` wins.
 */

import fs from "fs";
import path from "path";

const GLOBALS_CSS_PATH = path.join(process.cwd(), "app/globals.css");

let cache: Record<string, string> | null = null;

export function readThemeColors(): Record<string, string> {
  if (cache) return cache;

  const result: Record<string, string> = {};
  if (fs.existsSync(GLOBALS_CSS_PATH)) {
    const css = fs.readFileSync(GLOBALS_CSS_PATH, "utf-8");
    const pattern = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(css)) !== null) {
      const [, name, value] = match;
      const key = `--${name}`;
      if (!(key in result)) {
        result[key] = value.trim();
      }
    }
  }

  cache = result;
  return result;
}
