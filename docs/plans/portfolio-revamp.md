# Portfolio Revamp — Active Implementation Plan

## Current State

Phases 1–12 are implemented. See `docs/plans/portfolio-revamp-completed.md` for the archive.

**Build baseline (verified):**
- `npm run build` — passes (448 modules)
- `npx tsc --noEmit` — 4 pre-existing errors in `components/TechSphere.tsx` (lines 89–92). These are expected and must not increase.

**Active scope:** Redesign the AI Agents Workflow page from documentation into a technical case study. Experience-page and Life-page improvements are backlog only.

**Supporting research:** `docs/research/current-portfolio-visual-audit.md` (Vision subagent audit)

## Approved Narrative Direction

```
Hook
  → Workflow
  → Visual evidence
  → Model-selection rationale
  → Control and human review
  → Limitations and future GitHub repository
```

The page must be described as a **human-in-the-loop, specialised multi-agent workflow with manual orchestration and cost-conscious model routing**. It is not autonomous. Do not overclaim.

## Design Constraints

Preserve:
- Cream-and-green palette (`#F7F5EF`, `#FDFCF9`, `#F2F8F4`, `#0E2418`, `#5A6B61`, `#0FA36B`)
- Typography pairing (Manrope + Instrument Serif)
- Card radius 20px, button radius 12px
- Card border/shadow tokens
- Nav pill style
- Accessibility (focus-visible, reduced-motion, semantic HTML, alt text, ≥44px touch targets)
- Human-in-the-loop positioning
- Honest model-selection explanations
- Existing `aiWorkflow.ts` data structure (extend, do not break)

Avoid:
- Generic AI gradients, glows, neon colors
- Fake terminal output
- Walls of model logos
- Fabricated productivity/autonomy claims
- Excessive animation
- Exposing private prompts or confidential information
- Visible "Screenshot coming soon" placeholders in production

**Asset rule:** Optional asset slots render their content only when a real asset path is non-empty. When no asset exists, the slot renders nothing. No placeholder text, no "coming soon" messaging.

## Files in Scope

| File | Change type | Purpose |
|---|---|---|
| `src/data/aiWorkflow.ts` | Modify | Add optional asset fields, restructure content for narrative |
| `components/AIWorkflowPage.tsx` | Rewrite | New narrative structure |
| `components/AIWorkflowDiagram.tsx` | Rewrite | Visual flow with hierarchy, differentiated human-review step |
| `components/AIWorkflowCard.tsx` | Modify (minor) | Update summary if needed; no structural change |
| `App.tsx` | No change | Nav and routing already wired |

## Implementation Phases

### Phase 13 — Narrative restructure & content reduction

**Objective:** Rewrite the AI Workflow page structure to follow the approved narrative arc and reduce text density. No new visual components in this phase — only restructure existing content.

**Files:** `src/data/aiWorkflow.ts`, `components/AIWorkflowPage.tsx`

**Tasks:**
1. Extend `aiWorkflow.ts` with optional asset fields: `heroScreenshot?: string`, `workflowScreenshot?: string`, `promptExample?: string`, `outputExample?: string`, `reviewScreenshot?: string`, `architectureDiagram?: string`. All default to empty string. Add a `hook` field (compelling one-liner) separate from `summary`.
2. Rewrite `AIWorkflowPage.tsx` into 6 sections matching the approved narrative:
   - **Hook:** `hook` headline + `summary` paragraph. No `h3` "Workflow" subheading above the fold.
   - **Workflow:** Embed `<AIWorkflowDiagram />` (redesigned in Phase 14).
   - **Visual evidence:** Container that maps over an `evidence` array (built from the optional asset fields). Each item renders only if its path is non-empty. If all are empty, the section renders nothing.
   - **Model-selection rationale:** Replace the 4 repetitive cards with a compact comparison format (table or matrix). Each model gets a one-sentence rationale (shorten existing `rationale` text). Full rationale moves to a `<details>` disclosure or is cut.
   - **Control & human review:** Merge the current "Human-in-the-Loop" section with the "Design Principles" list. Convert principles from a bullet list into 3–4 concise labelled annotations or small cards. Keep the "not autonomous" statement prominent.
   - **Limitations & future GitHub:** Merge safety notes + evolution note into a single concise "Implementation Notes" block. GitHub link renders only if `githubUrl` is non-empty.
3. Shorten the `evolutionNote` to one sentence.
4. Shorten each model `rationale` to ≤15 words for the compact view.
5. Change section headings from `font-bold text-xl` (Manrope) to `font-serif italic text-2xl text-forest-accent` to match the rest of the site's editorial style.
6. Change `max-w-4xl` to `max-w-5xl` to better match the site's `max-w-6xl` rhythm while keeping the page slightly narrower than the homepage.

**Dependencies:** None (content-only restructure).

**Acceptance criteria:**
- Page has exactly 6 sections in the approved narrative order
- No bullet lists for principles (converted to cards/annotations)
- Model selection uses a non-repetitive format (not 4 identical cards)
- Safety + evolution notes are in a single bottom section
- Section headings use serif italic (site-consistent)
- All optional asset fields exist in `aiWorkflow.ts` but render nothing when empty
- `npm run build` passes; `npx tsc --noEmit` errors unchanged (4 in TechSphere)

**Validation:** `npm run build`; `npx tsc --noEmit`; manual read-through for tone (no autonomy claims, no hype)

**Risk:** Low (content restructure; no new components)

---

### Phase 14 — Workflow visualisation redesign

**Objective:** Redesign the `AIWorkflowDiagram` to have visual hierarchy, differentiate the human-review step, and fix the responsive cut-off bug.

**Files:** `components/AIWorkflowDiagram.tsx`

**Tasks:**
1. Replace the row of identical glass cards with a visual flow that differentiates steps:
   - Agent steps (Vision, Planning, Build, QA) use the standard `.glass` card style.
   - The Input step is a minimal label (no card) — it's context, not an agent.
   - The Human Review step is visually distinct: use `.glass-mint` background, a human icon, and slightly larger size or a border emphasis.
2. Add a one-line annotation under each agent card (5–8 words) describing what it does (e.g., "Analyses screenshots", "Reads codebase", "Implements plan", "Verifies output"). Pull from `step.description` but shortened.
3. Fix the responsive bug: the current `min-w-[140px]` on 6 cards causes horizontal overflow. Reduce to `min-w-[120px]` and use `flex-wrap` on tablet, or switch to a 2-row layout on medium screens.
4. Arrows: keep the chevron SVG but make them subtler (`text-forest/15`). On mobile (vertical stack), rotate arrows 90°.
5. Preserve the `sr-only` `<ol>` text alternative for screen readers.
6. Ensure the diagram container does not use `overflow-x-auto` as a crutch — the layout should fit without horizontal scrolling at all breakpoints ≥375px.

**Dependencies:** Phase 13 (data structure may have shortened descriptions).

**Acceptance criteria:**
- Human Review step is visually distinct from agent steps
- Input step is minimal (not a full card)
- Each agent card has a one-line annotation
- No horizontal scroll at 375px width
- No horizontal scroll at any breakpoint ≥375px
- `sr-only` text alternative preserved
- `npm run build` passes; `npx tsc --noEmit` errors unchanged

**Validation:** DevTools at 375/768/1024/1440; `npm run build`; `npx tsc --noEmit`

**Risk:** Medium (responsive layout is the main risk; may need iteration)

---

### Phase 15 — Optional asset integration

**Objective:** Wire the optional asset slots from Phase 13 so that real screenshots/diagrams render when provided, and render nothing when absent. No placeholder content.

**Files:** `components/AIWorkflowPage.tsx`, `src/data/aiWorkflow.ts`

**Tasks:**
1. Create an `EvidenceCard` sub-component (inline in `AIWorkflowPage.tsx` or as a small component within the file) that takes `{ src, alt, caption }` and renders a `.glass` card with the image and caption. If `src` is empty, render `null`.
2. Wire each optional asset field from `aiWorkflow.ts` to an `EvidenceCard`:
   - `heroScreenshot` → renders in the Hook section (right side on desktop, below text on mobile)
   - `workflowScreenshot` → renders in the Visual Evidence section
   - `promptExample` → renders in the Visual Evidence section
   - `outputExample` → renders in the Visual Evidence section
   - `reviewScreenshot` → renders in the Control & Human Review section
   - `architectureDiagram` → renders in the Workflow section (below the diagram)
3. The Visual Evidence section title (`<h2>`) renders only if at least one evidence asset is non-empty.
4. All images use descriptive `alt` text.
5. All images use `loading="lazy"`.
6. Add an `onError` handler that hides broken images gracefully (sets state to hide the card).

**Dependencies:** Phase 13 (asset fields exist in data).

**Acceptance criteria:**
- When all asset fields are empty, the page renders no evidence section and no broken images
- When an asset path is provided, it renders in a `.glass` card with caption and alt text
- Broken image paths are hidden gracefully (no broken-image icon)
- Visual Evidence section heading appears only when evidence exists
- All images are lazy-loaded
- `npm run build` passes; `npx tsc --noEmit` errors unchanged

**Validation:** Test with empty assets (current state); test with one fake path to verify `onError`; `npm run build`; `npx tsc --noEmit`

**Risk:** Low (conditional rendering; no layout risk)

---

### Phase 16 — Responsive & accessibility refinement

**Objective:** Verify and fix all responsive and accessibility issues on the redesigned AI Workflow page.

**Files:** `components/AIWorkflowPage.tsx`, `components/AIWorkflowDiagram.tsx`

**Tasks:**
1. Verify the page at 375px, 768px, 1024px, and 1440px widths.
2. Verify the workflow diagram fits without horizontal scroll at all breakpoints.
3. Verify the model-selection comparison (table/matrix) is legible on mobile — may need to switch to a stacked layout at <768px.
4. Verify all touch targets are ≥44px.
5. Verify heading hierarchy: single `<h2>` for the page title, `<h3>` for section subheadings within the page.
6. Verify `prefers-reduced-motion` disables any transitions added during the redesign.
7. Verify keyboard navigation: tab through all interactive elements; focus-visible rings appear.
8. Verify the `sr-only` workflow step list is still present and accurate.

**Dependencies:** Phases 13, 14, 15.

**Acceptance criteria:**
- No horizontal scroll at 375px
- Model comparison is legible on mobile
- All touch targets ≥44px
- Heading hierarchy is logical (h2 → h3)
- Focus-visible rings appear on all interactive elements
- Reduced-motion respected
- `npm run build` passes; `npx tsc --noEmit` errors unchanged

**Validation:** DevTools at 375/768/1024/1440; keyboard tab-through; reduced-motion OS toggle; `npm run build`; `npx tsc --noEmit`

**Risk:** Low (verification and minor fixes)

---

### Phase 17 — Final QA

**Objective:** Final consistency and polish check across the AI Workflow page and its connection to the rest of the portfolio.

**Files:** All AI Workflow files + `components/AIWorkflowCard.tsx`

**Tasks:**
1. Verify the homepage `AIWorkflowCard` summary matches the redesigned page's hook headline.
2. Verify nav active state works for "AI Agents Workflow".
3. Verify the page tone: human-in-the-loop, not autonomous; no hype; no fabricated claims.
4. Verify no API keys, tokens, credentials, private paths, or proprietary prompts appear anywhere in the data or rendered output.
5. Verify `githubUrl` renders nothing when empty.
6. Run `npm run build` and `npx tsc --noEmit` as final gates.
7. Visual diff: compare the redesigned page against the Vision audit's recommendations to confirm the main weaknesses are addressed.

**Dependencies:** Phases 13–16.

**Acceptance criteria:**
- Homepage card summary aligns with page hook
- Nav active state works
- No autonomy claims; no hype
- No secrets in any artifact
- `githubUrl` empty → no link rendered
- `npm run build` passes
- `npx tsc --noEmit` errors unchanged (4 in TechSphere)

**Validation:** `npm run build`; `npx tsc --noEmit`; manual tone review; grep for forbidden tokens (key, token, secret, password, credential) in AI Workflow files

**Risk:** Low (review phase)

### Phase 18 — AI Workflow page refinements + About page profile photo

**Objective:** Reduce text on the AI Workflow page, reposition the workflow diagram, rename sections for clarity, and add the personal photo to the About page heading.

**Files:** `components/AIWorkflowPage.tsx`, `src/data/aiWorkflow.ts`, `components/AboutModal.tsx`

**Tasks:**

#### A. AI Workflow page — text reduction and diagram repositioning

1. **Remove the summary paragraph** from the Hook section. Currently the Hook renders:
   - `> ` typewriter headline (keep)
   - `<p>{aiWorkflow.summary}</p>` — the "A multi-agent OpenCode workflow for repository-aware software development with human review at every phase." paragraph (REMOVE this `<p>` element entirely)
   - The `hook` field in `aiWorkflow.ts` already communicates the full message; the `summary` is redundant alongside it.

2. **Rename "Workflow" section to "Evidence".** The section currently headed `<h3>Workflow</h3>` contains the `<AIWorkflowDiagram />` and optional architecture diagram. Rename the heading to "Evidence" so the visual diagram is framed as proof of the system, not just a description.

3. **Reposition the workflow diagram.** Currently the diagram sits in Section 2 (below the hook). Move it so it appears immediately after the typewriter headline — ideally within or directly below the Hook section — so visitors see the visual flow right after the typing animation finishes. The section structure becomes:
   - Hook (typewriter `>` + diagram directly below)
   - Visual Evidence (conditional screenshots — currently Section 3)
   - Model Routing
   - Control & Review
   - Safety

4. **Merge the current "Evidence" section (Section 3, conditional screenshots) into the renamed diagram section.** If the `workflowScreenshot` or other evidence assets exist, they render below the diagram in the same section. This eliminates a standalone "Evidence" heading and keeps all visual proof in one place.

#### B. About page — profile photo beside heading

5. **Remove the generic person SVG icon** from `AboutModal.tsx` (lines 9–11 — the `w-16 h-16 rounded-2xl` box with the SVG). This is the "PFP logo" the user wants removed.

6. **Add the personal photo** (`/images/pfp.jpeg`) beside the "Hello! I'm Jonathan" heading, positioned on the right. Restructure the heading area as a flex row:
   ```
   [Hello! I'm Jonathan]    [photo]
   [SMU Information Systems · Data Engineering, AI & Cloud]
   ```
   - Photo: `w-20 h-20` or `w-24 h-24`, `rounded-[20px]` (matching card radius), `object-cover`, placed to the right of the heading text
   - On mobile: photo stays on the right but smaller (`w-16 h-16`)
   - Keep the existing heading typography (`text-4xl md:text-5xl font-extrabold` + serif italic "Jonathan")
   - Keep the subtitle below the heading

**Dependencies:** Phases 13–15 (AI Workflow page structure exists), Phase 12 (About page exists).

**Acceptance criteria:**
- AI Workflow page Hook section shows only the typewriter headline + diagram (no summary paragraph)
- "Workflow" section heading renamed to "Evidence"
- Workflow diagram appears immediately after the typewriter headline (not in a separate section below)
- Conditional evidence screenshots (if any) render in the same section as the diagram
- About page: no generic person SVG icon
- About page: personal photo (`/images/pfp.jpeg`) appears on the right of "Hello! I'm Jonathan"
- Photo uses `rounded-[20px]`, `object-cover`, responsive sizing
- `npm run build` passes; `npx tsc --noEmit` errors unchanged

**Validation:** `npm run build`; `npx tsc --noEmit`; visual check at 375/768/1024/1440

**Risk:** Low (content and layout adjustments; no new components)

## Validation Commands

```bash
npm run build        # Production build — must pass
npx tsc --noEmit     # TypeScript check — 4 pre-existing TechSphere errors expected; must not increase
```

## Backlog (not in active scope)

These items are documented for future work but are **not** part of the current AI Workflow redesign:

| Item | Rationale | Dependencies |
|---|---|---|
| ~~Experience page: add IRAS entry~~ | ✅ **Implemented** — IRAS added to `src/data/experience.ts` with 3 recruiter-facing bullets. | None |
| Experience page: expand truncated descriptions | Cards show "..." with no way to see full text. | None |
| Experience page: add visual variety (timeline, current-role differentiation) | Two identical card structures. | None |
| Life page: add introductory heading | No context for the section. | None |
| Life page: fix floating-image inconsistency | Some cards have floating images, some don't. | None |
| Life page: clarify or remove "Ask Me Anything" card | Vague purpose, unclear link. | None |
| Life page: verify all cards have valid links | Some cards may lack `href`. | None |
| BlogModal: remove if unused | Imported but never triggered. | None |
| Phase 0: add `typecheck` script to `package.json` | Never added; run via `npx tsc --noEmit` instead. | None |
| Mobile refinement: all pages | Beyond AI Workflow page. | AI redesign complete |
| Final visual QA: entire portfolio | Cross-route consistency after AI redesign. | AI redesign complete |

## Unresolved Decisions

1. **AI Workflow hook headline** — ✅ Implemented. Hook reads: "A specialised multi-agent development workflow where AI models handle research, planning, implementation, and verification — and a human makes every final decision."
2. **Model-selection format** — ✅ Implemented. Terminal-style `$ model → role # rationale` lines (not a table).
3. **AI Workflow assets** — `workflowScreenshot` is set to `/images/ai-agents/agents-workflow.png`. Other asset fields remain empty (render nothing). Assets can be added later by setting paths in `aiWorkflow.ts`.
4. ~~Experience page IRAS entry~~ — ✅ Implemented. IRAS added with 3 bullets covering data engineering, AI/vector-search, and MLOps/quality.
5. **BlogModal** — Backlog item. Remove or keep for future use? Not blocking.
6. **Phase 18 diagram repositioning** — Should the workflow diagram move into the Hook section (directly below the typewriter), or stay as its own section with a renamed "Evidence" heading? Plan recommends: move into Hook section, remove standalone "Workflow" heading.
