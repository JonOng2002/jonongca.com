# FIGlet wordmark and progressive terminal flow research

## Findings

- `figlet` is published on npm and maintained in the `patorjk/figlet.js` repository.
- The package includes the ANSI Shadow font at `fonts/ANSI Shadow.flf` and an importable module at `importable-fonts/ANSI Shadow.js`.
- The implementation uses the importable font only in `scripts/generate-wordmark.mjs`, then stores the generated output in `src/data/jonongca-wordmark.ts`. The browser does not import the FIGlet runtime.
- ANSI Shadow output is rendered as decorative `<pre aria-hidden="true">` text. A screen-reader-only heading preserves Jonathan’s actual identity and role.

## Sources

- FIGlet.js repository: https://github.com/patorjk/figlet.js
- npm package metadata: https://registry.npmjs.org/figlet

## Product direction

- Sidebar and virtual filesystem selections should preview content in the terminal first.
- `cat` is terminal-only; `open` and an explicit full-profile action navigate to the mock Browser.
- Direct routes continue to reconstruct the Browser window.
- Large desktop uses side-by-side Terminal and Browser windows; compact widths use one focused application view.
