# Slice 7 — Quality and accessibility

## Goal
Verify the guided TUI workspace across routes, keyboard navigation, mobile sizing, and Browser/Terminal handoff without changing the product direction.

## In scope
- Production build and TypeScript baseline checks.
- Route smoke tests for `/`, `/projects`, `/experience`, `/skills`, `/story`, and `/contact`.
- Confirm welcome commands and Browser navigation remain discoverable.
- Confirm the Browser preserves its maximised/windowed state across route changes.
- Mobile and keyboard review of the workspace shell.

## Out of scope
- Backend or live AI integration.
- Vercel deployment changes.
- New portfolio content or mascot work.
- Static prerendering/SEO migration.

## Definition of done
- `npm run build` passes.
- TypeScript errors do not increase beyond the known `TechSphere.tsx` errors.
- All internal routes load without page, console, or network errors.
- Welcome commands are visible and keyboard-focusable.
- Browser route navigation keeps the Browser in front and preserves bounds/state.
- No blocking mobile layout issue is found.

## Verification
- `npm run build` — passed during Slice 6 visual updates.
- Route smoke checks for `/`, `/projects`, `/experience`, `/skills`, `/story`, and `/contact` — passed.
- `npx tsc --noEmit` — failed only on the four known `TechSphere.tsx` `style`/`unknown` errors.

## Remaining human smoke test
Manually maximise the Browser, click `/projects`, `/experience`, and `/skills`, then confirm the Browser remains maximised and above the Terminal.
