# Security Policy

This repository contains no executable application code; it is a curated list of links plus CI automation. Its security surface is:

- **Malicious or compromised linked resources.** If a resource linked from `README.md` becomes malicious, compromised, or starts redirecting somewhere harmful, please report it.
- **CI workflow integrity.** The GitHub Actions workflows in `.github/workflows/` (link checking, curation sweeps, validation).

## Reporting

- Preferred: open a [private security advisory](https://github.com/natnew/Awesome-AI-Safety-for-Agentic-Systems/security/advisories/new).
- For non-sensitive issues (e.g. a link now 404s or redirects oddly), a public issue is fine.

Please include the entry name, the URL, and what you observed. Reports are reviewed by the maintainer; confirmed-malicious links are removed immediately rather than waiting for the regular curation cycle.
