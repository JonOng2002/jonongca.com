# Portfolio Revamp — Completed Work

This document records all phases that have been implemented. The active plan (`docs/plans/portfolio-revamp.md`) contains only remaining work.

## Verified Build Baseline

| Command | Result |
|---|---|
| `npm run build` | ✅ Passes (448 modules, ~830ms) |
| `npx tsc --noEmit` | 4 pre-existing errors in `components/TechSphere.tsx` (lines 89–92, `Property 'style' does not exist on type 'unknown'`). Unchanged from `main` branch. Not introduced by any revamp phase. |

**Note:** No `typecheck` script exists in `package.json`. Run TypeScript checks with `npx tsc --noEmit`. The 4 TechSphere errors are expected and must not increase.

## Completed Phases

### Phase 0 — Foundation & tooling
**Status: Partially complete.** The `typecheck` script was never added to `package.json`. Baseline TS errors were captured (4 in TechSphere). Unused component inventory was completed during Phase 11. This phase is considered closed; adding the script remains an optional backlog item.

### Phase 1 — Design-system tokens & global styles
**Status: Complete.** Added `--radius-card: 20px`, type-scale CSS variables, `:focus-visible`, `@media (prefers-reduced-motion: reduce)`, and removed the custom cursor script + CSS. File: `index.html`.

### Phase 2 — Navigation restructure
**Status: Complete.** Replaced filter pills with standard nav links using `currentPage` state (SPA, Option B — no router). Files: `App.tsx`.

### Phase 3 — Hero redesign
**Status: Complete.** Reduced hero from `h:5` to `h:3`; name type scale `text-3xl sm:text-4xl`; added primary CTA (View Projects) + secondary (Resume) via new `Button` component; copy updated to "Building distributed systems for data and AI." Files: `App.tsx`, `components/IdentityCard.tsx`, `components/Button.tsx` (new).

### Phase 4 — Projects above fold + straight screenshots
**Status: Complete.** Rewrote `ProjectMiniCard` with straight 16:9 images; added 3 project cards to bento grid rows 2–3; removed duplicate projects section from Home. Files: `App.tsx`, `components/ProjectMiniCard.tsx`.

### Phase 5 — TechSphere replacement
**Status: Cancelled by user decision.** The user chose to keep the TechSphere in the bento grid. This phase will not be implemented.

### Phase 6 — Unify card styles + simplify SayHi hover
**Status: Complete.** Changed `rounded-[2rem]` → `rounded-[20px]` across 8 components; removed `rotate(8deg)`/`translateY` hover from SayHiCard; standardized hover to border/shadow only.

### Phase 7 — Responsive & mobile ordering
**Status: Complete.** Added `initialMd` (4-col) and `initialSm` (1-col) layout arrays; reduced NowCard tags from 5 to 3 to fit `h:3`; mobile order: Identity → Photo → Now → Projects → TechSphere → CurrentlyInto → SayHi. Files: `App.tsx`, `components/NowCard.tsx`.

### Phase 8 — Accessibility polish
**Status: Complete.** Section headings → `<h2>`; accent contrast fixed (IdentityCard tagline `text-base md:text-lg`, NowCard company `text-lg`, ProjectMiniCard subtitle `text-forest/50`); `aria-label` added to external links.

### Phase 9 — Content & data extraction
**Status: Complete.** Created `src/data/projects.ts`, `src/data/experience.ts`; removed inline data from `App.tsx`; fixed tracker `architectureUrl` (removed — file didn't exist); created `public/site.webmanifest` (was missing).

### Phase 10 — Project detail page
**Status: Complete.** Created `components/ProjectDetailPage.tsx` (back nav, title, preview, description, architecture diagram, tech stack, GitHub link); wired cards to `selectedDetailProject` state; detail page takes render priority. Files: `components/ProjectDetailPage.tsx` (new), `App.tsx`.

### Phase 11 — Dead-code audit & cleanup
**Status: Complete.** Removed 26 unused components (40 → 17 remaining). All 17 are actively used. Build passes; tsc errors unchanged.

### Phase 12 — AI Engineering Workflow showcase
**Status: Implemented; being redesigned (Phases 13–17).** Created `src/data/aiWorkflow.ts`, `AIWorkflowCard.tsx`, `AIWorkflowPage.tsx`, `AIWorkflowDiagram.tsx`; added "AI Agents Workflow" nav item between Projects and Experience; added homepage highlight card. The Vision audit (`docs/research/current-portfolio-visual-audit.md`) identified the page as reading like documentation rather than a technical case study. Phases 13–17 redesign it.

## Current Architecture

### Component inventory (17 files, all used)

| Component | Used by | Purpose |
|---|---|---|
| `AboutModal.tsx` | App.tsx | About page (`AboutSection` export) |
| `AIWorkflowCard.tsx` | App.tsx | Homepage AI workflow highlight |
| `AIWorkflowDiagram.tsx` | AIWorkflowPage.tsx | Workflow flow diagram (being redesigned) |
| `AIWorkflowPage.tsx` | App.tsx | AI workflow dedicated page (being redesigned) |
| `BlogModal.tsx` | App.tsx | Imported but never triggered (candidate for removal) |
| `Button.tsx` | IdentityCard.tsx | Reusable primary/secondary button |
| `CurrentlyIntoCard.tsx` | App.tsx | Reading/running/goal card |
| `ExperienceModal.tsx` | App.tsx | Experience detail modal |
| `IdentityCard.tsx` | App.tsx | Hero identity card |
| `LifeWidgetCard.tsx` | App.tsx | Life widget cards |
| `NowCard.tsx` | App.tsx | Current role card |
| `PhotoCard.tsx` | App.tsx | Personal photo card |
| `ProjectDetailPage.tsx` | App.tsx | Project detail full-page view |
| `ProjectMiniCard.tsx` | App.tsx | Project card (grid + list) |
| `ProjectModal.tsx` | App.tsx | Project modal (fallback) |
| `SayHiCard.tsx` | App.tsx | Contact links card |
| `TechSphere.tsx` | App.tsx | 3D tech sphere (kept by user decision) |

### Data files (4 files)

| File | Purpose |
|---|---|
| `src/data/aiWorkflow.ts` | AI workflow data (6 steps, 4 models, 7 principles, 4 safety notes, evolution note, empty `githubUrl`) |
| `src/data/experience.ts` | Experience data (2 entries: YTL, GEM) |
| `src/data/lifeWidgets.ts` | Life widget data (6 widgets) |
| `src/data/projects.ts` | Project data (4 projects) |

### Navigation

Home → Projects → AI Agents Workflow → Experience → Life → About → Resume (external)

### Design system

| Token | Value |
|---|---|
| Background | `#F7F5EF` |
| Card cream | `#FDFCF9` |
| Card mint | `#F2F8F4` |
| Primary text | `#0E2418` |
| Muted text | `#5A6B61` |
| Accent | `#0FA36B` |
| Card radius | `20px` |
| Button radius | `12px` |
| Card border | `1px solid rgba(14, 36, 24, 0.06)` |
| Card shadow | `0 2px 12px rgba(14, 36, 24, 0.03)` |
| Type scale | 12 / 14 / 16 / 20 / 24 / 32 / 40px |
| Fonts | Manrope (display/body), Instrument Serif (section headings) |

### Key user decisions

1. **Routing:** SPA with conditional state (Option B) — no router dependency.
2. **TechSphere:** Kept by user decision; Phase 5 cancelled.
3. **Tailwind:** CDN approach retained (no build-time Tailwind config).
4. **Hero copy:** "Building distributed systems for data and AI."
5. **AI Workflow nav label:** "AI Agents Workflow", positioned between Projects and Experience.
6. **AI Workflow `githubUrl`:** Empty — renders nothing until a public repo is created (KIV).
7. **Drag-and-drop grid:** Still enabled (not disabled).
