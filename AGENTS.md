# AGENTS.md

Instructions for AI agents working in this repository.

## What this repository is

A curated awesome list about **multi-agent AI safety**: securing systems of interacting AI agents. The entire deliverable is `README.md`. There is no application code.

## Scope rule (most important)

Only resources about **multi-agent** AI safety belong in the list: interacting agent populations, inter-agent attacks, agent identity and trust infrastructure, population-level oversight and control, and multi-agent testbeds.

**Out of scope:** single-agent agentic safety — prompt-injection defence, guardrails, sandboxing, memory tooling, and benchmarks for individual agents. Do not add these, even if high quality. Point contributors to the lists under "Related repositories" instead.

## Entry format

```markdown
- **[Name](https://link)** - One-sentence description ending with a full stop. *tag / tag*
```

- One sentence, technically precise, neutral tone, en-GB spelling (behaviour, organisation).
- Two italic tags separated by ` / ` (e.g. `*Paper / red teaming*`).
- Place each entry in the single best-fit section; never duplicate an entry across sections.

## Hard requirements before adding any entry

1. **Verify the link is live** (fetch it). Never guess URLs or arXiv IDs. A broken or wrong link is worse than a missing entry.
2. **Check for duplicates** (`npm run check` detects duplicate URLs).
3. **Update the entry count** in the README header line ("contain N entries"). The count is every `- **[` line in sections before "## Contributing" — `npm run check` verifies it.
4. If you add or rename a section, update the Contents TOC; anchors are validated by `npm run check`.

## Validation commands

```bash
npm install        # once
npm run lint       # markdownlint over all markdown files
npm run check      # entry count vs header, TOC anchors, duplicate URLs
npm run validate   # both
```

Full link checking runs in CI (`.github/workflows/link-check.yml`, lychee) on every README change and weekly. The monthly `resource-radar.yml` workflow opens a curation-sweep issue.

## Repository-specific agents and skills

- `.claude/agents/entry-reviewer.md` — subagent that reviews proposed entries against the scope rule and inclusion criteria.
- `.claude/skills/add-entry/` — step-by-step skill for adding a verified entry.
- `.claude/skills/curation-sweep/` — skill for triaging the monthly resource-radar issue.

## Contribution and review expectations

- See `CONTRIBUTING.md` for inclusion criteria and what to avoid.
- Prefer primary sources: official repos, arXiv abstract pages (`https://arxiv.org/abs/<id>`), organisation pages.
- Curation over volume: a rejected mediocre entry is a good outcome.
- Run `npm run validate` before committing. Commits use concise imperative messages (e.g. `Add SocioVerse to testbeds`).
