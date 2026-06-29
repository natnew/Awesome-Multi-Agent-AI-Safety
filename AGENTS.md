# AGENTS.md

Operating protocol for AI coding agents working in this repository.

Claude Code should read `CLAUDE.md` first, then use this file as the shared repository contract. Other agents should start here. Follow repository-local guidance over generic awesome-list assumptions.

## Repository North Star

This is a public, maintained awesome list for **multi-agent AI safety**: securing systems of interacting AI agents. The `README.md` is the product: a durable, high-signal, navigable map of the field for readers, contributors, and AI agents. There is no application code; the validation scripts under `scripts/` exist only to keep the list consistent.

The list is curated, not accumulated. Each entry should help a reader understand the multi-agent safety stack, find a credible resource, or compare related work. Selectivity, durability, clear placement, and neutral description quality matter more than volume. A rejected mediocre entry is a good outcome.

## Agent Role

Agents may help with:

* `README.md` maintenance when explicitly asked
* New entry review against the scope rule
* Pull request review
* Issue triage, including the monthly resource-radar sweep
* Broken-link checks
* Duplicate detection
* Section placement
* Description tightening
* Maintainer comment drafts
* Small, safe cleanup edits when explicitly requested

Agents must not:

* Add speculative, low-signal, or single-agent entries
* Inflate claims or preserve promotional wording
* Reorganise the list without explicit instruction
* Run broad formatting sweeps
* Edit unrelated files
* Rewrite the maintainer's style unnecessarily
* Turn one contribution into a broad structural change
* Touch protected areas unless explicitly instructed
* Commit without running `npm run validate`

## Read Order

Before reviewing or editing, read in this order:

1. `README.md` — scope, taxonomy, section structure, entry format, and existing examples
2. `CONTRIBUTING.md` — inclusion criteria, what to avoid, and entry style
3. `CLAUDE.md` — the pointer to this file and the repository's key constraints
4. `.claude/agents/entry-reviewer.md` — the scope and inclusion checks applied to new entries
5. `.claude/skills/add-entry/SKILL.md` — the verified procedure for adding an entry
6. `.claude/skills/curation-sweep/SKILL.md` — the procedure for triaging the resource-radar issue
7. `.github/PULL_REQUEST_TEMPLATE.md` and `.github/copilot-instructions.md` — contributor and cross-tool expectations
8. Recent issues and merged PRs, where available, for maintainer precedent

Do not assume the generic awesome-list pattern overrides this repository's existing structure.

## Repository Facts

* The single deliverable is `README.md`: an intro, a badge row, a Contents table, the curated sections, Contributing, Related repositories, and Licence.
* The curated sections are: Foundations and framing; Threat models and attacks; Agent identity, trust, and interaction infrastructure; Oversight and control of agent populations; Multi-agent environments and simulation testbeds; Multi-agent frameworks and orchestration; Communities, organisations, and ongoing work.
* All curated sections use a single bullet style with the same entry format. Match it exactly.
* Each section opens with one line of explanatory text before its entries. Preserve it.
* The intro header carries a running entry count ("contain N entries"). `scripts/check-consistency.mjs` counts every `- **[` line in sections before "## Contributing" and fails if the header disagrees.
* Adding, renaming, or removing a section requires updating the Contents table; anchors are validated by the same script.
* Place each entry in the single best-fit section. Never duplicate an entry across sections.
* Prefer primary sources: official repositories, arXiv abstract pages (`https://arxiv.org/abs/<id>`), official documentation, benchmark sites, and organisation pages.
* New categories or category restructuring should be handled separately from single-entry additions.
* Commits use concise imperative messages (e.g. `Add SocioVerse to testbeds`).

## Scope Rules

The scope rule is the most important rule in this repository.

Belongs — resources about **multi-agent** AI safety:

* Interacting agent populations and their collective behaviour
* Inter-agent attack vectors: collusion, covert communication, prompt-infection propagation, cascading failure
* Agent identity, authentication, delegation, provenance, reputation, and interaction protocols
* Population-level oversight, control, attribution, and monitoring robust to evasion
* Multi-agent environments, simulations, and testbeds
* Multi-agent frameworks and orchestration with bounded, observable collaboration
* Papers, technical reports, datasets, benchmarks, and evaluation tools for the above
* Communities, labs, funders, and standards bodies doing relevant work

Does not belong:

* Single-agent agentic safety: prompt-injection defence, guardrails, sandboxing, memory tooling, and benchmarks for individual agents — even when high quality. Point contributors to the lists under "Related repositories" instead.
* Generic AI tooling with no clear multi-agent safety or control relevance
* Thin wrapper or pure marketing pages with little technical substance
* Broken, inaccessible, duplicate, or near-duplicate resources
* Speculative entries and low-signal link farms
* Unsupported ranking, performance, adoption, or novelty claims
* Time-sensitive claims such as "latest", "best", "leading", "fastest", or "most advanced"
* Content outside multi-agent AI safety and the adjacent areas already represented in the README

## Quality Bar

An entry qualifies when all are true:

* It is clearly about multi-agent AI safety, not single-agent safety.
* The source is credible and useful to a technical reader.
* The link is canonical, durable, and reachable.
* The resource adds something distinct from existing entries.
* It fits an existing section without forcing a taxonomy change.
* The description is one neutral, concise, specific, non-promotional sentence.
* The formatting matches the surrounding entries, including the two italic tags.
* No duplicate or stronger existing equivalent is already present.

## README Formatting Rules

Infer format from the surrounding section before editing.

* Use the established entry format exactly:

  ```markdown
  - **[Name](https://link)** - One-sentence description ending with a full stop. *tag / tag*
  ```

* Preserve the heading structure, the `---` section separators, and the Contents anchors.
* Preserve badges, the intro, the entry-count line, Contributing, Related repositories, and Licence.
* Use HTTPS links and canonical names.
* Keep descriptions to one sentence; start with a capital letter and end with a full stop.
* Use two italic tags separated by ` / ` (e.g. `*Paper / red teaming*`).
* Do not use title case for descriptions.
* Do not start descriptions with "A" or "An".
* Do not perform broad formatting changes unless explicitly asked.

## Link Quality Rules

Verify before adding any entry — fetch the link, never guess URLs or arXiv IDs:

* The link resolves and points to the canonical source.
* Repository links point to the main project, not an arbitrary fork.
* Paper links prefer the arXiv abstract page, the official publisher page, or a DOI.
* Documentation links prefer official docs.
* Dataset and benchmark links prefer official pages or maintained repositories.
* URLs do not include avoidable tracking parameters.
* Login-gated and shortened links are avoided.
* A broken or wrong link is worse than a missing entry.

## Description Style

Descriptions should be:

* Neutral, factual, specific, and short
* One sentence, present tense where possible
* Focused on why the resource matters for multi-agent AI safety
* Free of hype and unsupported claims

Prefer:

* "Field-defining survey taxonomising threats across networks of decentralised agents."
* "Evaluation environment measuring whether agents pursue hidden sabotage goals while evading a monitor."
* "Open standard for secure communication and task delegation between agents from different vendors."
* "Simulator supporting up to one million LLM-driven agents for population-scale dynamics."

Avoid:

* "Powerful", "revolutionary", "cutting-edge", "best", "latest", "industry-leading", "game-changing", "fastest"
* Unsupported claims about performance, adoption, or maturity

## Section Placement Rules

1. Identify the closest existing section in the taxonomy above.
2. Compare the candidate with neighbouring entries.
3. Prefer the narrowest accurate section.
4. If two sections fit, choose the one where the resource is most actionable for readers.
5. Do not create a new section for a single item.
6. Do not move existing entries unless explicitly asked.
7. If placement is uncertain, state the trade-off and recommend one option.
8. New category proposals are separate from single-entry PRs.

## Duplicate Checking Rules

Before adding or approving, check for:

* Same URL (`npm run check` flags duplicate URLs)
* Same project or paper under a different URL
* Same organisation and product name, or a renamed repository
* An existing entry in a nearby section
* An existing issue or PR suggesting the same resource
* A stronger canonical source already listed

If a duplicate exists, recommend closing, editing, or redirecting rather than adding another entry.

## Validation

Run before committing any change to the list:

```bash
npm install        # once
npm run lint       # markdownlint over README, CONTRIBUTING, and .github markdown
npm run check      # entry count vs header, Contents anchors, duplicate URLs
npm run validate   # lint + check
```

Full link checking runs in CI (`.github/workflows/link-check.yml`, lychee) on every README change and weekly. `.github/workflows/validate.yml` runs lint and check on pull requests. The monthly `.github/workflows/resource-radar.yml` workflow opens a curation-sweep issue.

## Decision Matrix

| Decision           | Use when                                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| Accept as-is       | In scope, canonical link, correct placement, matching format, neutral description, no duplicate.          |
| Edit as maintainer | Strong resource needing small fixes: wording, punctuation, canonical URL, placement, tags, or formatting. |
| Request changes    | May fit but evidence, link quality, multi-agent relevance, or placement is materially unclear.            |
| Close              | Out of scope, single-agent only, duplicate, promotional, or broken with no durable replacement.           |
| Park               | Promising but immature, or not yet supported by the taxonomy and needing maintainer judgement.            |

## Issue-to-Entry Workflow

For suggestion issues:

1. Check the scope rule first — single-agent content is out of scope.
2. Check source quality.
3. Check link quality by fetching the link.
4. Check duplicates.
5. Identify the best section.
6. Draft a neutral entry in the repository format only if the resource qualifies.
7. Recommend accept, maintainer edit, request changes, close, or park.
8. Keep the maintainer comment concise.

For broken-link issues:

1. Verify the reported link.
2. Search for a canonical replacement, preferring official sources over mirrors.
3. Preserve the entry if a durable replacement exists.
4. Recommend removal only when no credible replacement exists.
5. State the action clearly.

## Pull Request Review Workflow

1. Read the PR title, description, and diff.
2. Confirm it changes only relevant files.
3. Fetch and check each added or changed link.
4. Check the scope rule and source quality.
5. Check duplicates.
6. Check section placement.
7. Check the entry format, tags, and en-GB spelling.
8. Confirm the entry-count header and Contents anchors are updated if needed.
9. Neutralise description language where required.
10. Decide: accept, maintainer edit, request changes, close, or park, and draft a concise maintainer comment.

Minimise contributor friction. If the resource is clearly suitable and the issue is minor, recommend a maintainer edit rather than asking the contributor to revise.

## Stop and Ask

Stop and ask the maintainer before:

* Creating, renaming, or removing a section
* Reordering large parts of the README
* Changing the Contents structure
* Editing the badge row or Related repositories
* Changing contribution rules
* Removing multiple entries
* Making judgement-heavy scope changes
* Editing files unrelated to the stated task

## Protected Areas

Do not edit unless explicitly instructed:

* Badges and the badge row
* The intro and entry-count line (update the count only as a direct result of an entry change)
* The Contents table
* Related repositories
* Licence text and `LICENSE`
* `.github/` workflows, templates, and `CODEOWNERS`
* `scripts/` validation tooling
* Repository configuration unrelated to the task
* Private, local, draft, or scratch files

## Maintainer Comment Style

Comments should be warm, concise, respectful, and decision-oriented.

Prefer:

* "Thank you for the suggestion. This is in scope, the link is canonical, and I would place it under Threat models and attacks with a shorter neutral description."
* "Thank you — useful resource. I would accept this with a small maintainer edit to remove the ranking claim."
* "Thank you for raising this. I would close it as a duplicate, since the resource already appears under Multi-agent environments and simulation testbeds."
* "Thank you — this is strong single-agent safety work, but it sits outside our multi-agent scope; the lists under Related repositories are a better home."

Avoid long explanations, harsh or defensive wording, and asking contributors for trivial edits the maintainer can safely make.

## Final Response Pattern

When finishing a task, summarise:

* What was reviewed
* The decision or recommended decision
* What changed, if anything
* Validation status (`npm run validate`)
* Any risks or uncertainties
* Suggested maintainer comment, if relevant
* Follow-up needed, if any

Do not modify `README.md` or other files unless explicitly asked.
