# Slice 5 — Conversational terminal and Browser handoff

## Status

Planned after Slice 4 smoke feedback. Jonathan selected: deterministic conversation, fixed commands, no live AI backend.

## Goal

Make the centre panel feel like a calm agent-style workspace without pretending to be an AI service. The sidebar becomes the primary navigation rail; the centre becomes a transcript and command prompt with a persistent virtual path and visible cursor.

## In scope

- Remove the default root `README.md`, `experience/`, `projects/`, and `skills/` listing from the centre panel when the sidebar is visible.
- Keep the sidebar as the primary top-level access surface.
- Add a conversation/transcript presentation for command results and Jonathan-specific guidance.
- Keep the virtual path visible at all times in the terminal status/prompt.
- Add a visible block/text cursor to the command prompt with reduced-motion-safe behaviour.
- Keep fixed command parsing and read-only virtual filesystem safety.
- Replace development placeholder copy such as “Browser window integration arrives in the next slice.”
- Connect successful `open`, sidebar, and selected-row actions to the mock Browser window.
- Synchronise the Browser window with the real route.
- Keep the address bar read-only and internal.

## Out of scope

- Live LLM responses or arbitrary natural-language chat.
- Server/backend changes.
- Mascot design.
- Arbitrary shell commands or host filesystem access.
- Multiple independent Browser windows beyond the planned reuse policy.

## Interaction model

A user can type fixed commands or supported aliases. The UI may respond in a conversational tone, but every response comes from deterministic local JavaScript and the typed content manifest. Free-form unsupported questions receive a helpful command suggestion rather than an AI-generated answer.

## Acceptance criteria

- Sidebar remains the clear top-level navigation.
- Centre panel opens with a clean transcript and prompt rather than duplicate filesystem navigation.
- Prompt always shows the current virtual path.
- Cursor is visible and respects reduced motion.
- `projects`, clicking Projects, and selecting a project all open the same Browser route.
- Browser content uses the existing plain routed page source.
- No development-only “next slice” text appears to visitors.
- No live AI/backend dependency is introduced.
