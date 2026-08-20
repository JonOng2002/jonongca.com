# Slice 6 — Welcome command UI

## Status

Approved by Jonathan. Implementing on branch `revamp`.

## Goal

Make the workspace friendly to recruiters who do not know terminal conventions while preserving the developer-like interface. The main terminal becomes a guided console with slash commands, clickable Quick Start actions, hover states, and a persistent prompt.

## First-visit visual reference

Use the provided Claude Code welcome-screen reference as an interaction/layout reference, not as branding. The first terminal view should have:

- A bordered welcome panel near the top of the terminal.
- Jonathan-specific title and welcome copy instead of “Claude Code”.
- A compact identity/status area: role, location/availability, and current virtual path.
- A right-side “Getting started” / “Quick commands” column with visible clickable actions.
- A clean prompt directly below the panel with a visible block cursor.
- Empty space below the prompt rather than an immediately expanded filesystem listing.
- Recent activity only when the visitor has actually performed an action.
- A restrained mascot slot reserved for a later cat design; no placeholder mascot now.

Borrow the information hierarchy and prompt placement. Do not copy the Claude logo, wording, model/billing metadata, or product chrome.

## In scope

- Welcome panel inside the terminal.
- `/start`, `/help`, `/projects`, `/experience`, `/skills`, `/resume`, `/github`, and `/email`.
- Clickable and keyboard-accessible Quick Start commands.
- `/help` output/panel for available commands.
- Internal commands open the same Browser routes as sidebar navigation.
- GitHub and email actions are labelled external actions.
- Remove remaining development-only copy.

## Out of scope

- Live AI or arbitrary natural-language conversation.
- Cat mascot.
- Backend changes.
- Arbitrary shell commands.

## Definition of done

A first-time visitor can understand what to do within five seconds, click a visible action or type a slash command, and reach Projects, Experience, Skills, GitHub, email, or résumé without needing to understand the virtual filesystem.
