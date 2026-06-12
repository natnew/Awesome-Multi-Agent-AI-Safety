// Consistency checks for README.md:
//  1. Entry count in the header line matches the actual number of entries.
//  2. Every Contents TOC link points at an existing section heading.
//  3. No URL appears in more than one entry.
// Exits non-zero with a message per failure so agents and CI get an objective signal.
import { readFileSync } from "node:fs";

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");
const lines = readme.split(/\r?\n/);
const failures = [];

// --- 1. Entry count -------------------------------------------------------
// Curated entries are `- **[` lines in sections before "## Contributing".
const contributingIdx = lines.findIndex((l) => l.startsWith("## Contributing"));
if (contributingIdx === -1) {
  failures.push('Could not find "## Contributing" heading.');
}
const entryLines = lines
  .slice(0, contributingIdx === -1 ? lines.length : contributingIdx)
  .filter((l) => /^- \*\*\[/.test(l));
const claimMatch = readme.match(/contain (\d+) entries/);
if (!claimMatch) {
  failures.push('Header line "contain N entries" not found.');
} else if (Number(claimMatch[1]) !== entryLines.length) {
  failures.push(
    `Entry count mismatch: header claims ${claimMatch[1]}, actual is ${entryLines.length}.`
  );
}

// --- 2. TOC anchors --------------------------------------------------------
const slug = (heading) =>
  heading
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
const headings = lines
  .filter((l) => /^## /.test(l))
  .map((l) => slug(l.slice(3)));
for (const line of lines) {
  const m = line.match(/^- \[([^\]]+)\]\(#([^)]+)\)$/);
  if (m && !headings.includes(m[2])) {
    failures.push(`TOC link "#${m[2]}" has no matching "## ${m[1]}" heading.`);
  }
}

// --- 3. Duplicate URLs -----------------------------------------------------
const seen = new Map();
for (const line of entryLines) {
  const m = line.match(/^- \*\*\[[^\]]+\]\(([^)]+)\)/);
  if (!m) continue;
  const url = m[1].replace(/\/$/, "");
  if (seen.has(url)) {
    failures.push(`Duplicate URL: ${url}`);
  }
  seen.set(url, true);
}

// --- Report ----------------------------------------------------------------
if (failures.length > 0) {
  console.error("Consistency check FAILED:");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(
  `Consistency check passed: ${entryLines.length} entries, ${headings.length} sections, no duplicate URLs.`
);
