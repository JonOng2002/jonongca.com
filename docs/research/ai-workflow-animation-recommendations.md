# AI Workflow Animation Recommendations

## Design Audit Summary

The portfolio uses a cream-and-green palette (`#F7F5EF` background, `#0E2418` forest text, `#0FA36B` accent) with glass-morphism cards, Instrument Serif for section headings, and Manrope for body/display text. The existing animation infrastructure includes:

- Tailwind CDN with custom config (colors, fonts, keyframes for scroll/float)
- CSS custom properties for design tokens
- A `fadeUp` scroll-reveal animation with IntersectionObserver
- A `prefers-reduced-motion` media query that kills all animations
- Framer Motion for the homepage grid layout transitions

The AI Agents Workflow page is structurally sound but visually static. The workflow diagram is a horizontal row of 6 cards with arrows — it reads like a flowchart, not an experience. The headline uses `text-3xl md:text-4xl` serif italic, which is large but not memorable.

---

## 1. Typing/Keyboard Headline Animation

### What it does
Replaces the large serif italic headline with a smaller, terminal-style typewriter effect. The text "A specialised multi-agent development workflow where AI models handle research, planning, implementation, and verification — and a human makes every final decision." types out character by character with a blinking cursor, then the cursor fades. This creates an engineering-aesthetic moment that immediately signals "this person builds things."

### Where it goes
`AIWorkflowPage.tsx`, line 43 — the `<h2>` element containing `{aiWorkflow.hook}`.

### How to implement it

**CSS (add to `index.html` `<style>` block):**

```css
/* Typewriter headline */
.typewriter-headline {
  font-family: 'SF Mono', 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text);
  font-weight: 400;
  letter-spacing: -0.01em;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--accent);
  width: 0;
  animation:
    typing 3.5s steps(120, end) 0.5s forwards,
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: var(--accent); }
}

/* After typing completes, fade out the cursor */
.typewriter-headline.typing-done {
  animation:
    typing 3.5s steps(120, end) 0.5s forwards,
    blink-caret 0.75s step-end 5;
  border-right-color: transparent;
}

/* Mobile: wrap text, slower typing */
@media (max-width: 768px) {
  .typewriter-headline {
    font-size: 13px;
    white-space: normal;
    border-right: none;
    animation: none;
    opacity: 0;
  }
  .typewriter-headline.visible {
    opacity: 1;
    transition: opacity 0.8s ease 0.3s;
  }
}
```

**React component change (conceptual — do not implement):**

Wrap the headline in a container that adds the `typing-done` class after the animation completes, or use a simple `setTimeout` to swap the class. On mobile, fall back to a simple fade-in.

**Font size recommendation:** `14px` on desktop, `13px` on mobile. This is significantly smaller than the current `text-3xl md:text-4xl` (which is ~30-36px). The monospace font and typing effect compensate for the smaller size by creating visual interest.

**Duration and easing:**
- Typing: `3.5s` with `steps(120, end)` — the `steps()` function creates the discrete character-by-character reveal. 120 steps approximates the character count of the hook text.
- Cursor blink: `0.75s` with `step-end` — a crisp on/off blink, not a smooth fade.
- Delay: `0.5s` before typing starts (gives the page a moment to settle).

**Reduced-motion fallback:**
```css
@media (prefers-reduced-motion: reduce) {
  .typewriter-headline {
    animation: none !important;
    width: 100% !important;
    border-right: none !important;
    opacity: 1 !important;
    white-space: normal !important;
  }
}
```

**Priority: P0** — This is the single highest-impact change. It transforms the page's first impression from "generic portfolio section" to "engineer's terminal."

---

## 2. Project Card Hover — Name Pop-Out

### What it does
When hovering a project card, the project title lifts upward slightly, gains a subtle text shadow, and the card itself lifts with a soft shadow increase. The combination creates a "pop" effect that draws the eye to the project name.

### Where it goes
`ProjectMiniCard.tsx`, the `<h4>` element on line 45, and the outer `<div>` on line 27.

### How to implement it

**CSS (add to `index.html` `<style>` block):**

```css
/* Project card hover — name pop-out */
.project-card-hover {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(14, 36, 24, 0.08);
}

.project-card-hover:hover .project-title {
  transform: translateY(-2px);
  text-shadow: 0 1px 0 rgba(15, 163, 107, 0.15);
  color: var(--accent);
}

.project-title {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              color 0.2s ease,
              text-shadow 0.3s ease;
  display: inline-block;
}
```

**Apply to `ProjectMiniCard.tsx`:**
- Add `project-card-hover` class to the outer `<div>` (replacing or augmenting the existing `transition-all duration-200`)
- Add `project-title` class to the `<h4>` element

**Duration and easing:**
- Card lift: `0.3s` with `cubic-bezier(0.16, 1, 0.3, 1)` — a spring-like ease that feels snappy but not bouncy
- Title color shift: `0.2s ease` — slightly faster than the card lift, so the color change leads the movement
- Title lift: `0.3s` same easing as card

**Reduced-motion fallback:**
The existing `prefers-reduced-motion` rule in `index.html` already sets `transition-duration: 0.01ms !important`, which will collapse these transitions to near-instant. No additional rule needed.

**Priority: P0** — Directly addresses the user's request. The effect is subtle enough to feel professional but noticeable enough to feel intentional.

---

## 3. Workflow Diagram Micro-Animations

### 3a. Staggered Reveal on Viewport Entry

**What it does:** Each workflow step card fades in and slides up slightly, with a staggered delay so they appear sequentially (Input → Vision → Planning → Build → QA → Human Review). This reinforces the sequential nature of the workflow visually.

**Where it goes:** `AIWorkflowDiagram.tsx`, each step card `<div>`.

**How to implement it:**

```css
/* Workflow step stagger reveal */
.workflow-step {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.workflow-step.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays — applied via inline style or nth-child */
.workflow-step:nth-child(1) { transition-delay: 0.0s; }
.workflow-step:nth-child(2) { transition-delay: 0.1s; }
.workflow-step:nth-child(3) { transition-delay: 0.2s; }
.workflow-step:nth-child(4) { transition-delay: 0.3s; }
.workflow-step:nth-child(5) { transition-delay: 0.4s; }
.workflow-step:nth-child(6) { transition-delay: 0.5s; }
```

**Apply to `AIWorkflowDiagram.tsx`:**
- Add `workflow-step` class to each step card `<div>` (the Input label, the 4 agent cards, and the Human Review card)
- The existing IntersectionObserver in `index.html` already adds `.visible` to elements with `.animate-reveal`. Either reuse that class or add a small observer specifically for `.workflow-step` elements.

**Duration and easing:**
- Each card: `0.5s ease` for both opacity and transform
- Stagger: `100ms` between each card
- Total sequence: ~550ms from first to last card

**Reduced-motion fallback:**
```css
@media (prefers-reduced-motion: reduce) {
  .workflow-step {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

**Priority: P0** — Makes the diagram feel alive without changing its structure.

### 3b. Human Review Pulse Emphasis

**What it does:** The "Human Review" card has a very subtle, slow pulse on its border — a gentle glow that draws attention to the human-in-the-loop message without being distracting.

**Where it goes:** `AIWorkflowDiagram.tsx`, the Human Review card `<div>` (line 33).

**How to implement it:**

```css
/* Human Review subtle pulse */
.human-review-pulse {
  animation: human-pulse 4s ease-in-out infinite;
}

@keyframes human-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(15, 163, 107, 0.08);
    border-color: rgba(15, 163, 107, 0.1);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(15, 163, 107, 0.04);
    border-color: rgba(15, 163, 107, 0.2);
  }
}
```

**Apply to `AIWorkflowDiagram.tsx`:**
- Add `human-review-pulse` class to the Human Review card `<div>`

**Duration and easing:**
- `4s ease-in-out infinite` — very slow, barely perceptible. The border color shifts from `rgba(15, 163, 107, 0.1)` to `rgba(15, 163, 107, 0.2)` and a 6px soft shadow pulses in and out.

**Reduced-motion fallback:**
```css
@media (prefers-reduced-motion: reduce) {
  .human-review-pulse {
    animation: none !important;
    box-shadow: 0 0 0 0 rgba(15, 163, 107, 0.08) !important;
    border-color: rgba(15, 163, 107, 0.1) !important;
  }
}
```

**Priority: P1** — Nice emphasis on the key differentiator (human review), but not essential.

### 3c. Arrow Draw-In Animation

**What it does:** The arrows between workflow steps draw themselves in (stroke-dashoffset animation) as each step appears, reinforcing the flow direction.

**Where it goes:** `AIWorkflowDiagram.tsx`, the arrow `<svg>` elements (line 78-94).

**How to implement it:**

```css
/* Arrow draw-in */
.workflow-arrow {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  transition: stroke-dashoffset 0.4s ease;
}

.workflow-arrow.visible {
  stroke-dashoffset: 0;
}
```

**Apply to `AIWorkflowDiagram.tsx`:**
- Add `workflow-arrow` class to each arrow `<svg>`
- The arrow becomes visible (stroke draws in) when the preceding step card becomes visible

**Duration and easing:**
- `0.4s ease` — quick enough to feel connected to the card reveal, slow enough to be noticeable

**Reduced-motion fallback:**
```css
@media (prefers-reduced-motion: reduce) {
  .workflow-arrow {
    stroke-dashoffset: 0 !important;
    transition: none !important;
  }
}
```

**Priority: P1** — Adds polish but requires coordinating arrow visibility with step visibility.

### 3d. Agent Card Hover Lift

**What it does:** Individual agent cards in the workflow diagram lift slightly on hover, with a subtle shadow increase. This makes the diagram interactive and encourages exploration.

**Where it goes:** `AIWorkflowDiagram.tsx`, each agent card `<div>`.

**How to implement it:**

```css
/* Agent card hover */
.agent-card {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.agent-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(14, 36, 24, 0.06);
}
```

**Apply to `AIWorkflowDiagram.tsx`:**
- Add `agent-card` class to each agent card `<div>` (Vision, Planning, Build, QA, Human Review)

**Duration and easing:**
- `0.25s cubic-bezier(0.16, 1, 0.3, 1)` — snappy, consistent with the project card hover

**Reduced-motion fallback:** Covered by existing `prefers-reduced-motion` rule.

**Priority: P1** — Nice micro-interaction that rewards cursor exploration.

---

## 4. Page-Level Life

### 4a. Section Fade-Up on Scroll

**What it does:** Each major section (Workflow, Model Selection, Control & Human Review, Implementation Notes) fades up as it enters the viewport. This gives the page a sense of progression as the user scrolls.

**Where it goes:** `AIWorkflowPage.tsx`, each section `<div>` wrapper.

**How to implement it:**

The existing `animate-reveal` class in `index.html` already does this. Simply add `animate-reveal` to each section wrapper:

```html
<div className="mb-12 animate-reveal">
```

The existing IntersectionObserver (line 244-252 in `index.html`) will handle the rest.

**Duration and easing:**
- Already defined: `0.6s ease` with `translateY(20px)` → `translateY(0)`

**Reduced-motion fallback:** Already handled by the existing `prefers-reduced-motion` rule.

**Priority: P0** — Zero code changes needed, just add a class. Highest ROI.

### 4b. Card Hover Lift (Global)

**What it does:** All glass cards on the page lift slightly on hover with a shadow increase. This is already partially implemented via the `.glass:hover` rule in `index.html` (line 139-142), but the shadow increase is minimal.

**Where it goes:** `index.html`, the `.glass` and `.glass-mint` rules.

**How to implement it:**

Enhance the existing hover rules:

```css
.glass {
  background: var(--card-cream);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.glass-mint {
  background: var(--card-mint);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-mint:hover {
  border-color: rgba(15, 163, 107, 0.15);
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}
```

**Duration and easing:**
- `0.3s cubic-bezier(0.16, 1, 0.3, 1)` for transform — consistent spring-like ease
- `0.3s ease` for shadow and border — standard ease

**Reduced-motion fallback:** Covered by existing rule.

**Priority: P0** — One-line change to existing CSS that improves every card on the site.

### 4c. Subtle Background Texture

**What it does:** A very faint dot-grid or crosshatch pattern on the background adds depth without being distracting. This is a common technique in premium portfolios (see: Linear, Vercel, Stripe).

**Where it goes:** `index.html`, the `body` rule.

**How to implement it:**

```css
body {
  background: var(--bg);
  background-image: radial-gradient(circle, rgba(14, 36, 24, 0.03) 1px, transparent 1px);
  background-size: 24px 24px;
  color: var(--text);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
```

This creates a 24px-spaced dot grid with 3% opacity dots — barely visible but adds texture.

**Reduced-motion fallback:** Not applicable (static pattern, no animation).

**Priority: P1** — Adds polish but is purely decorative. Some recruiters may not notice it consciously.

### 4d. Table Row Hover Highlight

**What it does:** In the Model Selection table, hovering a row highlights it with a subtle mint background. This makes the table feel interactive and helps the eye track across rows.

**Where it goes:** `AIWorkflowPage.tsx`, the `<tr>` elements in the Model Selection table (line 105).

**How to implement it:**

```css
/* Table row hover */
.model-table-row {
  transition: background-color 0.2s ease;
}

.model-table-row:hover {
  background-color: rgba(15, 163, 107, 0.04);
}
```

**Apply to `AIWorkflowPage.tsx`:**
- Add `model-table-row` class to each `<tr>` in the Model Selection table

**Duration and easing:**
- `0.2s ease` — quick, snappy

**Reduced-motion fallback:** Covered by existing rule.

**Priority: P1** — Nice touch for the table, but low visual impact.

### 4e. GitHub Link Arrow Slide

**What it does:** The "View agent configurations" GitHub link has its arrow icon slide right on hover, creating a subtle "go" affordance.

**Where it goes:** `AIWorkflowPage.tsx`, the GitHub link `<a>` (line 183-195).

**How to implement it:**

The existing code already has `group-hover:gap-2` on the link text. Enhance it:

```css
/* GitHub link arrow slide */
.github-link-arrow {
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.github-link:hover .github-link-arrow {
  transform: translateX(3px);
}
```

**Apply to `AIWorkflowPage.tsx`:**
- Add `github-link` class to the `<a>` element
- Add `github-link-arrow` class to the `<svg>` inside

**Duration and easing:**
- `0.2s cubic-bezier(0.16, 1, 0.3, 1)` — snappy

**Reduced-motion fallback:** Covered by existing rule.

**Priority: P1** — Small but satisfying micro-interaction.

---

## 5. Implementation Notes

### CSS Architecture
All animations should be added to the existing `<style>` block in `index.html`. Do not create a separate CSS file — the project uses a single-file approach with Tailwind CDN + inline CSS.

### Class Naming Convention
Use descriptive, scoped class names:
- `.typewriter-headline` — headline typing effect
- `.project-card-hover` / `.project-title` — project card interactions
- `.workflow-step` / `.workflow-arrow` / `.agent-card` / `.human-review-pulse` — diagram animations
- `.model-table-row` — table interaction
- `.github-link` / `.github-link-arrow` — link micro-interaction

### Tailwind Integration
Where possible, use Tailwind's `group` and `group-hover` utilities instead of custom CSS. For example, the project card hover can use:
```html
<div className="glass rounded-[20px] group ...">
  <h4 className="... group-hover:-translate-y-0.5 group-hover:text-forest-accent transition-all ...">
```

However, the typewriter effect and stagger delays require custom CSS keyframes.

### Performance Considerations
- All animations use `transform` and `opacity` only — these are GPU-composited and won't trigger layout/paint
- No `will-change` properties needed for these subtle effects
- The typewriter animation uses `steps()` which is efficient (no per-frame interpolation)
- The dot-grid background uses `radial-gradient` which is a single paint operation

### Browser Compatibility
- `steps()` timing function: supported in all modern browsers (Chrome 26+, Firefox 23+, Safari 7+)
- `cubic-bezier(0.16, 1, 0.3, 1)`: supported in all modern browsers
- `prefers-reduced-motion`: supported in all modern browsers
- CSS custom properties: supported in all modern browsers

---

## 6. Reduced-Motion Strategy

The existing `prefers-reduced-motion` rule in `index.html` (lines 178-193) is comprehensive and handles most cases:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .animate-reveal,
  .animate-reveal.visible {
    animation: none !important;
    opacity: 1 !important;
  }
}
```

**Additional rules needed for new animations:**

```css
@media (prefers-reduced-motion: reduce) {
  /* Typewriter: show full text immediately */
  .typewriter-headline {
    animation: none !important;
    width: 100% !important;
    border-right: none !important;
    opacity: 1 !important;
    white-space: normal !important;
  }

  /* Workflow steps: show immediately */
  .workflow-step {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }

  /* Arrows: show immediately */
  .workflow-arrow {
    stroke-dashoffset: 0 !important;
    transition: none !important;
  }

  /* Human Review pulse: static state */
  .human-review-pulse {
    animation: none !important;
    box-shadow: 0 0 0 0 rgba(15, 163, 107, 0.08) !important;
    border-color: rgba(15, 163, 107, 0.1) !important;
  }
}
```

**Key principle:** For users with reduced motion preferences, all animated content should appear in its final state immediately. No fade-ins, no typing, no pulses. The page should be fully readable and functional without any animation.

---

## 7. Priority Summary

| Priority | Animation | Impact | Effort |
|----------|-----------|--------|--------|
| **P0** | Typewriter headline | Transforms first impression | Medium (CSS + small React change) |
| **P0** | Project card name pop-out | Direct user request | Low (CSS only) |
| **P0** | Section fade-up on scroll | Makes page feel alive | Zero (add existing class) |
| **P0** | Global card hover lift | Improves all cards | Low (enhance existing CSS) |
| **P0** | Workflow step stagger reveal | Reinforces workflow sequence | Low (CSS + class addition) |
| **P1** | Human Review pulse | Emphasizes key differentiator | Low (CSS only) |
| **P1** | Arrow draw-in | Polishes diagram flow | Medium (coordinate with steps) |
| **P1** | Agent card hover lift | Interactive diagram | Low (CSS only) |
| **P1** | Background dot-grid | Adds depth/texture | Low (one CSS property) |
| **P1** | Table row hover | Interactive table | Low (CSS + class) |
| **P1** | GitHub link arrow slide | Satisfying micro-interaction | Low (CSS + class) |

### Recommended Implementation Order

1. **Phase 1 (P0 items):** Typewriter headline, project card pop-out, section fade-up, global card hover lift, workflow step stagger. These five changes address all user requests and transform the page's feel.

2. **Phase 2 (P1 items):** Human Review pulse, agent card hover, background texture. These add polish without risk.

3. **Phase 3 (optional P1):** Arrow draw-in, table row hover, GitHub link arrow. These are nice-to-have refinements.

### What NOT to Do

- **No neon glows or gradient animations** — the cream-and-green palette is sophisticated; don't cheapen it
- **No parallax scrolling** — overdone and can cause motion sickness
- **No auto-playing carousels** — recruiters want to scan, not wait
- **No sound effects** — obviously
- **No Lottie or SVG animation libraries** — keep it CSS-only
- **No changing the font size of the headline to be larger** — the user explicitly requested smaller
