/**
 * Display format for post dates: "27 OCT 2026". Day-month-year with a
 * spelled-out month avoids the US/UK ambiguity of numeric dates.
 * Frontmatter keeps ISO strings ("2026-10-27"); parsed as UTC so the day
 * never shifts with the build server's time zone.
 */
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export function formatPostDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
