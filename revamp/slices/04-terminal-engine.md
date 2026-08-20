# Slice 4 — Terminal engine

## Status

Approved by Jonathan. Implementing on branch `revamp`.

## Goal

Turn the Slice 3 terminal presentation into a deterministic, keyboard-and-mouse-accessible terminal engine backed by the existing read-only virtual filesystem.

## In scope

- Fixed command parser and alias map.
- `help`, `pwd`, `ls`, `tree`, `cd`, `cat`, `open`, `clear`.
- Safe path resolution using `src/lib/virtual-fs.ts`.
- Terminal prompt and current virtual path.
- Command history and output.
- Black-metal/amber visual treatment inspired by the provided terminal reference.
- Persistent desktop navigation sidebar for Experience, Projects, Skills, Story, and Contact; collapsible on mobile.
- Jonathan-specific product identity in place of Claude Code branding.
- Up/Down selection, Left/Right navigation, Enter activation.
- Clickable semantic filesystem rows.
- Unknown-command suggestions.
- `aria-live` output and predictable focus.

## Out of scope

- Creating the mock Browser window.
- Browser route/history synchronisation.
- Drag/resize changes.
- Real shell execution, `eval`, dynamic import, or server access.
- Terminal persistence between visits.

## Proposed files

- `src/lib/commands.ts`
- `components/workspace/TerminalWindow.tsx`
- `components/workspace/WorkspaceShell.tsx`
- `revamp/slices/04-terminal-engine.md`

## Interfaces

- `parseCommand(input): ParsedCommand`.
- `executeCommand(command, context): CommandResult`.
- `TerminalWindow` receives cwd, output, selection, command value, and interaction callbacks.
- Sidebar selections reuse the same virtual filesystem/command actions as terminal rows.
- `WorkspaceShell` owns terminal state and applies command results.

## Safety

The command map is fixed. Input is only used to resolve virtual paths. It never reaches a shell, `eval`, dynamic import, API endpoint, or host filesystem.

## Checks

- `npm run build`.
- Existing TypeScript baseline remains unchanged.
- Manual command, alias, path traversal, unknown command, keyboard, mouse, and screen-reader checks.
- `tree projects` and clickable Projects rows expose the same ordered hierarchy.

## Definition of done

A visitor can navigate the read-only portfolio filesystem with commands, arrow keys, Enter, sidebar selections, and mouse clicks. The desktop shell has a left navigation rail and an amber-on-black Jonathan identity; mobile collapses the rail. All paths stay within `~/portfolio`; errors remain inside the terminal; Browser opening is represented as a deterministic pending action for Slice 5.
