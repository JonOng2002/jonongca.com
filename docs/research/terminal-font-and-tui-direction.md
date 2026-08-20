# Terminal font and TUI direction

## Research date

2026-08-20

## Sources reviewed

- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) — JetBrains describes it as a free, open-source typeface designed for developers.
- [IBM Plex repository](https://github.com/IBM/plex) — IBM’s open typeface family, including IBM Plex Mono.
- [Iosevka repository](https://github.com/be5invis/Iosevka) — a highly configurable code typeface.
- [Pi theme reference](https://github.com/nivinvysakh/astro-tui-portfolio) and the provided terminal screenshots — visual references for a black terminal, muted text, amber emphasis, and a narrow navigation rail.

## Decision

Use **IBM Plex Mono** for the workspace and terminal UI.

Rationale:

- It has a recognisable terminal/code texture without relying on heavy ligatures or novelty styling.
- It is open-source and can be loaded as a web font without a paid license.
- Its proportions suit both compact sidebar labels and longer recruiter-readable command output.
- It is less visually branded than JetBrains Mono, leaving the Jonathan Ong identity to the wordmark, copy, palette, and content.
- Iosevka remains a later alternative if the terminal needs a narrower, denser layout.

## Visual direction

- Black-metal background and surfaces.
- Warm amber/yellow as the primary active colour.
- Muted gray for secondary output.
- Persistent desktop sidebar for Experience, Projects, Skills, Story, and Contact.
- Central command/file interface.
- Mobile collapses the sidebar into a Sections control.
- Use `Welcome to jonongca.com!` as the welcome line rather than copying a third-party CLI logo or mascot.
- Defer the cat mascot until the interaction and content model are stable.
