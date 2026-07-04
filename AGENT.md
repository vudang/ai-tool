# AGENT.md

## Mission

Build and maintain a Vietnamese static reference page for AI tools used in daily coding workflows. The product is not a generic landing page. It is a practical operator dashboard for one developer.

## What matters most

1. Fast comprehension
2. Practical commands
3. Clean structure for future agent handoff
4. Minimal maintenance overhead

## Repo map

- `index.html`: page shell and section anchors
- `src/data/tools.js`: canonical content source for tools, workflow steps, and docs cards
- `src/main.js`: rendering, filtering, search, copy actions
- `src/styles.css`: complete visual system
- `scripts/dev-server.mjs`: zero-dependency local server
- `README.md`: project overview and maintenance guide
- `DESIGN.md`: visual source of truth for layout, tokens, and component behavior
- `CLAUDE.md`: Claude-specific working notes
- `AGENTS.md`: mirror for hosts that prefer plural naming

## Working rules

- Read `README.md` and `src/data/tools.js` before editing.
- Read `DESIGN.md` before making visual changes.
- Default to small, surgical changes.
- Keep the app static unless a real product need justifies more moving parts.
- Preserve Vietnamese UI copy unless the user explicitly asks otherwise.
- Keep tool names and commands in their original language.

## Content rules

- Each tool entry should stay useful for daily work.
- Prefer concise summaries over marketing language.
- Highlight real capabilities, not vague claims.
- Cheatsheet commands should be memorable and actionable.
- If a command is host-specific or contextual, explain that in the note.

## Design rules

- Keep the current bright editorial-tech direction.
- Do not drift into purple SaaS aesthetics.
- Do not flatten everything into repetitive equal cards.
- Headings should stay strong and expressive.
- Code snippets must remain easy to scan and easy to copy.

## Implementation rules

- Keep data in `src/data/tools.js`.
- Keep render logic in `src/main.js`.
- Keep design tokens and layout behavior in `src/styles.css`.
- Do not introduce a framework or build system without explicit approval.

## Update flow for future agents

1. Add or edit tool data in `src/data/tools.js`.
2. Run the local server.
3. Verify search, filters, copy buttons, and responsive layout.
4. Update docs if operating assumptions changed.

## QA checklist

- Desktop layout holds
- Mobile layout holds
- Search returns expected tools
- Category filters work
- Copy buttons work
- External source links still look sensible
- Docs remain aligned with actual repo structure

## Definition of done

A task is done when the page still runs locally, the updated content is correct and easy to scan, and the docs remain accurate enough for another agent to continue without guessing.
