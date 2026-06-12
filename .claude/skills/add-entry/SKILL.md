---
name: add-entry
description: Add a new resource to the Awesome Multi-Agent AI Safety list with full verification. Use when asked to add a paper, tool, benchmark, testbed, or organisation to the list.
---

# Add an entry to the list

Follow these steps in order. Do not skip verification.

## 1. Scope gate

Confirm the resource's primary subject is **multi-agent** AI safety (interacting agents, inter-agent attacks, agent trust infrastructure, population oversight, multi-agent testbeds). If it is single-agent safety content, stop and tell the user it is out of scope per AGENTS.md — do not add it.

For borderline cases, launch the `entry-reviewer` agent and follow its verdict.

## 2. Verify the link

- Fetch the URL (WebFetch) and confirm it resolves to the claimed resource.
- Never guess URLs or arXiv IDs. For papers, link the arXiv abstract page (`https://arxiv.org/abs/<id>`), not the PDF.
- If the user supplied no URL, find the canonical one via WebSearch and verify it.

## 3. Check for duplicates

Grep README.md for the URL (and obvious variants) and the resource name.

## 4. Write the entry

```markdown
- **[Name](https://link)** - One-sentence description ending with a full stop. *tag / tag*
```

- One sentence, technically precise, neutral, en-GB spelling.
- Tags: two, lowercase apart from proper nouns, separated by ` / ` (e.g. *Paper / covert communication*, *Environment / cooperation*).
- Say what the resource *is and does*, not why it is impressive.

## 5. Place it

Insert into the single best-fit section, matching the ordering convention of that section (foundational/survey works first, then specific work).

## 6. Update the count and validate

1. Increment the "contain N entries" number in the README header.
2. Run `npm run validate` — it checks lint, the count, TOC anchors, and duplicate URLs. Fix anything it reports.

## 7. Report

Tell the user: the entry line as added, the section, the new total count, and that validation passed.
