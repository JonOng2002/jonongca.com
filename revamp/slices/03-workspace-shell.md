# Slice 3 — Workspace shell and window styling

## Status

Approved by Jonathan. Implementing on branch `revamp`.

## Goal

Replace the root route's bento-grid presentation with the first desktop workspace shell: a dark canvas, centred terminal window, Useful Commands HUD, and keyboard-reachable dock. This slice establishes window mechanics and visual language; command execution and routed Browser content remain later slices.

## In scope

- Root route renders the workspace shell instead of the current bento grid.
- Terminal window with static recruiter-facing landing content.
- Shared `AppWindow` chrome and Mac-like traffic-light controls on the title bar's left.
- Focus/z-index management.
- Maximised state hides the HUD to avoid collision.
- Pointer drag from title bars with viewport bounds.
- Pointer resize with minimum dimensions.
- Minimise, maximise, restore, and close behaviour.
- Useful Commands HUD.
- Window dock with Terminal, Browser, and Résumé entries.
- Mobile full-screen fallback without free-form drag/resize.
- Reduced-motion-friendly CSS transitions.

## Out of scope

- Parsing or executing terminal commands.
- Virtual filesystem interaction beyond the visible static rows.
- Opening routed content in Browser windows.
- Browser history synchronisation.
- Replacing or expanding all page content.
- Railway/Vercel/deployment changes.

## Proposed files

- `components/workspace/WorkspaceShell.tsx`
- `components/workspace/AppWindow.tsx`
- `components/workspace/TerminalWindow.tsx`
- `components/workspace/CommandHUD.tsx`
- `components/workspace/WindowDock.tsx`
- `App.tsx`
- `index.html`

## Interfaces

- `AppWindow`: title, app type, bounds, state, focus, drag, resize, and window controls.
- `WorkspaceShell`: owns window state and dispatches focus/bounds/state transitions.
- `TerminalWindow`: presentation-only static landing surface for this slice.
- `CommandHUD`: clickable-looking but non-executing command hints until Slice 4.
- `WindowDock`: focus/restore controls; résumé opens `/resume.pdf`.

## Data and error behaviour

- Window state is in-memory only.
- Bounds are clamped to the workspace viewport.
- Terminal cannot be closed into an empty workspace; close minimises it.
- Browser dock entry is a non-content placeholder until Slice 5.
- No command input is executed in this slice.

## Checks

- `npm run build`.
- `npx tsc --noEmit`; existing `TechSphere.tsx` errors must remain unchanged.
- Manual desktop drag, resize, focus, minimise, maximise, restore, close.
- Verify the red/yellow/green title-bar controls are the interactive controls.
- Manual mobile full-screen fallback.
- Keyboard tab-through of title-bar controls and dock.
- Reduced-motion visual check.

## Risks

- Existing Tailwind CDN styling is temporary and will be replaced in the quality slice.
- Keeping the old homepage components compiled increases bundle size temporarily.
- Pointer interactions must not interfere with normal content focus.

## Definition of done

At `/`, the terminal is the visually dominant object. It can be moved, resized, focused, minimised, maximised, restored, and keyboard-accessed on desktop. On mobile it becomes a full-screen surface. Existing routed pages continue to load unchanged.
