# Current Portfolio Visual Audit

## 1. Executive Summary

Jonathan's portfolio has been substantially rebuilt since the original visual analysis. The P0 items from the first audit have been largely addressed: the hero is now compact (3 rows instead of 5), project cards are integrated into the bento grid above the fold, screenshots are straight (not slanted), navigation uses standard links instead of filter pills, and the identity card includes clear CTAs. The cream-and-green design language is cohesive and the typography pairing (Manrope + Instrument Serif) remains a strength.

However, the **AI Agents Workflow page is the weakest point in the portfolio**. It reads like internal documentation rather than a technical case study. The workflow diagram is a row of identical glass cards with arrows — visually forgettable and offering no evidence of the system in action. The model selection section repeats the same card structure four times. The design principles and safety sections are plain bullet lists. There are no screenshots, no artefacts, no visual proof that this workflow actually exists and works. A visitor cannot understand the system's value in under 20 seconds.

The rest of the portfolio is solid but has room for refinement: the tech sphere remains decorative despite the original audit recommending its replacement, the Experience page is sparse with only two entries, and the Life page cards lack visual variety.

---

## 2. Portfolio-wide Assessment

### Visual Identity and Consistency

The cream-and-green palette is applied consistently across all pages. The `glass` and `glass-mint` card styles are used uniformly. The Instrument Serif italic for section headings ("Now", "Currently into", "Say Hi", "Featured projects", "Outside the terminal", "Experience", "Life") creates a distinctive editorial voice that ties the site together. The navigation bar is consistent across all routes with the same pill-style active state.

**Strength:** The design system is coherent. A visitor moving between pages experiences a unified visual language.

**Weakness:** The AI Agents Workflow page breaks the pattern by using `max-w-4xl` (narrower than the `max-w-6xl` used everywhere else) and a single-column layout that feels disconnected from the bento-grid identity of the rest of the site.

### Typography

The type scale is well-rationalized. The Manrope display font at 3xl-4xl for the name, the Instrument Serif italic at 2xl for section headings, and the 14-16px body text create clear hierarchy. The green accent (#0FA36B) is used consistently for taglines, active nav states, and section headings.

**Concern:** On the AI Agents Workflow page, the section headings ("Workflow", "Model Selection", "Human-in-the-Loop") use `font-bold text-xl` in Manrope, which is visually heavier than the serif italic headings used elsewhere. This creates a tonal shift — the page feels more like a technical document than part of the portfolio.

### Spacing and Rhythm

The 16px grid gap and 20px border radius are consistent. Card internal padding varies between `p-5` and `p-6`/`p-8` depending on the component, which is acceptable given different content densities. The `mt-8` section spacing on the homepage creates clear visual separation.

**Concern:** The AI Agents Workflow page uses `mb-10` between every section, creating a very tall, scroll-heavy page with lots of whitespace between text blocks. This amplifies the "documentation" feel.

### Card Variety

The portfolio uses three card styles:
1. **`glass`** — cream background, subtle border, subtle shadow (used for most cards)
2. **`glass-mint`** — mint background, same border/shadow (used for Say Hi, Human-in-the-Loop)
3. **Life widget cards** — custom backgrounds with floating images (used for Backloggd, Goodreads, etc.)

This is a reasonable variety. The life widget cards are the most visually distinctive element on the site.

### Image Usage

Project screenshots are now straight (not slanted), which is a significant improvement. The All-In-One dashboard screenshot, the Menswear e-commerce screenshot, and the Internship Tracker Lambda/Notion graphic are all clear and legible. The personal photo is warm and genuine.

**Gap:** The AI Agents Workflow page has zero images beyond the workflow diagram (which is itself just styled cards). There are no screenshots of the workflow in action, no prompt examples, no output samples, no architecture diagrams.

### Mobile Responsiveness (from screenshot evidence)

The screenshots show desktop views only. The code indicates responsive breakpoints at lg (1024px), md (768px), and sm (640px). The AI Workflow diagram uses `flex-col md:flex-row`, which means on mobile the workflow steps stack vertically — this is appropriate. The `overflow-x-auto` on the diagram container suggests horizontal scrolling on narrow screens, which is a reasonable fallback.

**Concern:** The AI Workflow page's `max-w-4xl` constraint means on mobile the content will have narrow margins, which is fine, but the diagram cards have `min-w-[140px]` which may cause horizontal scrolling on very small screens.

### Accessibility

The site has `prefers-reduced-motion` support in the CSS. Focus-visible styles are defined. The AI Workflow diagram has `sr-only` text alternatives for screen readers. Alt text is present on images.

**Concern:** The tech sphere animation runs continuously and may be distracting for motion-sensitive users. The `prefers-reduced-motion` media query disables animations but the sphere component itself does not check this preference — it relies on the CSS override, which may not fully stop the `requestAnimationFrame` loop.

---

## 3. Route-by-route Analysis

### 3.1 Homepage

**First impression:** Strong. The identity card is compact and information-dense. The name, tagline, supporting sentence, and two CTAs fit comfortably in a 4-column × 3-row card. The personal photo is warm and approachable. The "Now" card immediately communicates current professional context. The three project cards are visible above the fold (rows 2-3 of the grid).

**Visual hierarchy:** The reading order is logical: Identity → Photo → Now + Project 1 → Project 2 + Project 3 → Tech Stack + Currently Into → Say Hi → AI Workflow highlight → Outside the Terminal. This follows the recommended structure from the original audit.

**What works well:**
- The hero is compact and communicates identity + positioning + CTAs efficiently
- Project evidence appears in row 2, not below the fold
- The "Now" card provides immediate professional context
- The AI Workflow highlight card is a nice addition that bridges the homepage to the dedicated page
- The "Outside the terminal" section adds personality without overwhelming the professional content

**What needs improvement:**
- The tech sphere is still present and still decorative. The original audit recommended replacing it with a concise tech stack list. It occupies a full card (3 columns × 3 rows) with minimal informational value.
- The "Currently into" card is good but could be denser — the three items (Reading, Running, Goal) have generous spacing that makes the card feel light.
- The "Say Hi" card spans full width (6 columns) which is appropriate for its 2×2 grid of links, but the white sub-cards inside feel visually disconnected from the rest of the site's card style.

### 3.2 Projects

**First impression:** Clean and professional. Three project cards in a 3-column grid, each with a straight screenshot, title, subtitle, description, and tech tags. The screenshots are large and legible.

**What works well:**
- Straight screenshots are clear and readable
- The card structure is consistent: image → title → subtitle → description → tags
- The descriptions are concise and outcome-focused ("Owned deployment for a 6-person team", "Synced 50+ records, eliminated manual entry")
- The tech tags provide quick stack identification

**What needs improvement:**
- The page is sparse — only three projects with significant whitespace below. This is acceptable for a curated selection but could benefit from a "More projects on GitHub" link or a note about additional work.
- The project cards on this page are identical in structure to the homepage grid cards, which is fine for consistency but means the dedicated Projects page doesn't offer more depth than the homepage.

### 3.3 Experience

**First impression:** Sparse. Two experience cards side by side, each with a company logo, company name, role, period, and a truncated description. The page feels incomplete.

**What works well:**
- The card structure is clean and scannable
- Company logos add visual credibility
- The role titles are clear and specific

**What needs improvement:**
- Only two experiences are shown. The About page shows three (IRAS, YTL PowerSeraya, Global Enterprise Mobility), but the Experience page only shows two. This inconsistency is confusing.
- The descriptions are truncated with "..." which suggests there is more content but no way to see it. The cards should either show full descriptions or link to a detail view.
- The page lacks visual variety — two identical card structures side by side with no distinguishing elements.
- There is no timeline visualization, no skills summary, and no sense of progression or growth.

### 3.4 Life

**First impression:** Visually the most interesting page. Six life widget cards in a 3-column grid, each with a unique background color, floating images, and an icon. The cards cover Backloggd, Goodreads, Running, Photos, Ask Me Anything, and Notes.

**What works well:**
- The floating image treatment is distinctive and adds visual personality
- Each card has a unique background color that creates variety
- The icons provide quick visual identification
- The subtitles are concise and specific ("Games I've played, paused, or still think about", "Weekly distance & training log")

**What needs improvement:**
- The floating images are partially obscured and may not be legible on all screens
- Some cards (Ask Me Anything, Notes) have no floating images, creating visual inconsistency
- The "Ask Me Anything" card is vague — it's unclear what this links to or what format it takes
- The page could benefit from a brief introductory sentence explaining the purpose of this section

### 3.5 About

**First impression:** A two-column layout with "My journey" text on the left and life widgets on the right. The "Hello! I'm Jonathan" heading uses mixed typography (sans-serif "Hello! I'm" + serif italic "Jonathan") which is a nice touch. The experience timeline is clean and scannable.

**What works well:**
- The mixed typography heading is distinctive and personal
- The "My journey" section is well-written and specific
- The experience timeline is clean and easy to scan
- The life widgets on the right provide visual balance
- The "Connect" section at the bottom provides clear contact options

**What needs improvement:**
- The "Beyond work" paragraph is a bit meta — it explains the purpose of the portfolio rather than revealing something personal about Jonathan
- The experience timeline on the About page shows three entries while the Experience page shows only two — this inconsistency should be resolved
- The right column of life widgets duplicates content from the Life page, which is fine for cross-linking but could be more concise

### 3.6 AI Agents Workflow (detailed)

This is the primary concern and receives the most detailed analysis.

#### Opening Section

The page opens with a serif italic title ("AI-Assisted Development Workflow") and a one-sentence summary. This is appropriate for a section heading but does not immediately communicate value. A visitor who lands here does not know why this workflow matters, what problem it solves, or what makes it distinctive.

**Problem:** The opening is descriptive but not compelling. It tells the visitor what the page is about but not why they should care.

**Comparison:** Yan's portfolio opens each project with a bold positioning statement ("Making cash loans easier to understand and nicer to use"). Marco opens with a strong voice statement ("Marco is building Turf."). The AI Workflow page opens with a label.

#### Workflow Diagram

The diagram is a horizontal row of six glass cards connected by arrows:
1. Input (References & Requirements)
2. Vision (Qwen 3.6 Plus)
3. Planning (GLM-5.2)
4. Build (DeepSeek Flash High)
5. QA (DeepSeek Flash High, read-only)
6. Human Review (Jonathan)

**Problems:**
- The cards are visually identical — same size, same style, same information density. There is no visual hierarchy to distinguish the human review step (which is the most important) from the input step (which is the least).
- The last card (Human Review) is partially cut off on the right edge of the viewport, indicating a responsive issue.
- The diagram is abstract — it shows the structure of the workflow but not what the workflow actually does. There are no screenshots of the workflow in action, no examples of inputs or outputs, no sense of scale or complexity.
- The arrows are simple SVG chevrons with no animation or visual interest.
- The diagram is the most important visual element on the page, but it is the least visually distinctive.

#### Model Selection

Four cards in a 2×2 grid, each with a model name, role label, and rationale paragraph. The cards are structurally identical to the workflow diagram cards but larger.

**Problems:**
- The repetition is monotonous. Four cards with the same structure, same padding, same typography hierarchy.
- The rationale paragraphs are dense and text-heavy. Each card has approximately 40-50 words of body text.
- There is no visual differentiation between the models. A visitor cannot quickly see which model does what without reading each card.
- The "DeepSeek Flash High" appears twice (Build agent and QA agent), which is correct but visually confusing — two cards with the same model name look like a mistake.

#### Human-in-the-Loop

A single mint-colored card with a paragraph explaining that every change is reviewed by a human. This is an important message but is presented as a block of text in a colored box.

**Problem:** This is the most important design principle of the workflow (human oversight), but it is presented as a footnote rather than a central theme.

#### Design Principles

Seven bullet points in a plain list. Each point is a single sentence describing a design principle.

**Problem:** This is the most text-dense section on the page and the least visually engaging. Seven bullet points of abstract principles with no visual support.

#### Safety & Validation

Four bullet points with shield icons in a glass card. Each point describes a safety measure.

**Problem:** Similar to the design principles — a list of text items with minimal visual support. The shield icons are a nice touch but do not compensate for the text-heavy presentation.

#### Overall Assessment

The AI Agents Workflow page has the following fundamental problems:

1. **No visual evidence.** There are no screenshots of the workflow running, no prompt examples, no output samples, no architecture diagrams, no code snippets. The page describes a system but does not show it.

2. **Too much text above the fold.** The opening summary, workflow diagram, and model selection section all appear before the visitor has seen any visual proof of the system.

3. **Repetitive card structures.** The workflow diagram cards, model selection cards, and bullet lists all use the same visual pattern. There is no variety to maintain visual interest.

4. **No sense of engineering judgement.** The page lists models and roles but does not explain why these choices were made, what alternatives were considered, or what trade-offs were evaluated.

5. **Documentation tone.** The page reads like internal documentation rather than a technical case study. It describes what the system is but not why it matters or how it was built.

6. **Missing narrative.** There is no story arc. The page presents information in a flat structure without a beginning, middle, or end.

---

## 4. AI Agents Workflow Content Classification

For each section of the AI Agents Workflow page, the content is classified into one of seven categories:

### 4.1 Opening Title and Summary

**Content:** "AI-Assisted Development Workflow" + "A multi-agent OpenCode workflow for repository-aware software development with human review at every phase."

**Classification: 1 — Keep as visible body copy**

This is the page's positioning statement. It should remain visible but could be strengthened with a more compelling opening line that communicates value before description.

### 4.2 Workflow Diagram (6 steps)

**Content:** Six cards showing Input → Vision → Planning → Build → QA → Human Review, each with agent name, role, and model.

**Classification: 3 — Convert into labels, captions, or visual annotations**

The diagram should be redesigned as a visual flow with annotations rather than a row of text-heavy cards. The agent names and models should be labels on a visual diagram, not the primary content of each card. The descriptions should be moved to a detail section below the fold or converted into hover/click tooltips.

### 4.3 Model Selection (4 cards)

**Content:** Four cards with model name, role, and rationale paragraph.

**Classification: 2 — Shorten significantly**

The rationale paragraphs are too long for card-based presentation. Each rationale should be reduced to a single sentence (10-15 words) that captures the key differentiator. The full rationale can be moved to a detail section or a GitHub README.

Alternatively, the model selection could be converted into a visual comparison table or a diagram that shows which model serves which phase, reducing the need for repetitive card structures.

### 4.4 Evolution Note

**Content:** "Model selection may evolve as new models become available. The durable capability is designing the workflow, prompts, permissions, handoffs, and validation process — not the specific models."

**Classification: 5 — Move below the fold**

This is an important caveat but does not need to be immediately visible. It should appear after the main content, perhaps as a footnote or in a "Notes" section.

### 4.5 Human-in-the-Loop

**Content:** "Every change produced by this workflow is reviewed by a human before it ships. The agents propose, plan, implement, and verify — but a human decides what to accept, reject, or revise. This is not an autonomous system."

**Classification: 1 — Keep as visible body copy (but reposition)**

This is a critical message that should be prominent. However, it should be repositioned as a central theme rather than a section between model selection and design principles. It could be integrated into the workflow diagram as a visual element (e.g., a human icon at the end of the flow with emphasis).

### 4.6 Design Principles (7 bullet points)

**Content:** Seven principles covering agentic workflow design, prompt engineering, model selection, separation of concerns, repository-aware development, human-in-the-loop, and validation.

**Classification: Mix of 2, 3, and 5**

- "Agentic workflow design" → **3** — Convert into a visual annotation on the workflow diagram
- "Prompt engineering" → **5** — Move below the fold or to a GitHub README
- "Model selection by task suitability" → **3** — Already covered by the model selection section; convert into a caption
- "Separation of planning, implementation, and verification" → **3** — Convert into a visual annotation on the workflow diagram
- "Repository-aware development" → **2** — Shorten to a single sentence
- "Human-in-the-loop review" → **1** — Already covered by the Human-in-the-Loop section; remove as redundant
- "Validation and scope control" → **5** — Move below the fold or integrate into the safety section

### 4.7 Safety & Validation (4 bullet points)

**Content:** Four safety measures covering API keys, private paths, agent permissions, and GitHub repository contents.

**Classification: 5 — Move below the fold**

These are important but are implementation details that do not need to be prominently displayed on the portfolio page. They should be moved to a "Notes" or "Implementation Details" section below the fold, or to a GitHub README. The portfolio page should focus on the workflow's design and value, not its security configuration.

### 4.8 GitHub Link

**Content:** "View agent configurations" button linking to GitHub.

**Classification: 1 — Keep as visible body copy**

This is an appropriate CTA. It should remain visible but could be repositioned to appear after the main content rather than at the very bottom.

---

## 5. Proposed Redesign Direction

### Design Direction Statement

**A technical case study that uses visual evidence to tell the story of a multi-agent development workflow, reducing text density while preserving all key information, and making the workflow tangible and memorable.**

### Core Principles

1. **Show, don't tell.** Replace text descriptions with visual evidence: screenshots of the workflow in action, prompt examples, output samples, and architecture diagrams.

2. **Visual hierarchy over uniform cards.** The workflow diagram should be the visual centerpiece, with model selection and principles as supporting content. Not every section needs the same card structure.

3. **Narrative arc.** The page should have a clear story: problem → solution → how it works → why it matters → evidence. Currently it has no narrative — just a flat list of sections.

4. **Preserve the cream-and-green identity.** The redesign should use the existing design tokens (colors, typography, border radius, spacing) without introducing new visual elements that break consistency.

5. **Avoid generic AI aesthetics.** No gradients, glows, fake terminals, or logo walls. The visual language should be clean, editorial, and engineering-focused.

### Specific Recommendations

#### 5.1 Opening Section

Replace the current opening with a two-part structure:

- **Headline:** A compelling one-liner that communicates value, not just description. For example: "A development workflow where AI agents handle the heavy lifting and humans make the decisions."
- **Supporting paragraph:** The current summary sentence, kept as-is.
- **Visual anchor:** A small screenshot or diagram that immediately shows the workflow in context (e.g., a terminal window showing the workflow running, or a simplified architecture diagram).

#### 5.2 Workflow Diagram

Redesign as a visual flow diagram rather than a row of cards:

- Use a horizontal or vertical flow with distinct visual elements for each step.
- Differentiate the Human Review step visually (e.g., a different color, a human icon, or a larger card).
- Add annotations that explain what happens at each step (e.g., "Analyses screenshots" for Vision, "Reads codebase" for Planning).
- Include a small screenshot or code snippet as visual evidence for at least one step.
- Fix the responsive issue where the last card is cut off.

#### 5.3 Model Selection

Replace the four repetitive cards with a visual comparison:

- Option A: A table or matrix showing which model serves which phase, with brief rationale.
- Option B: A visual diagram that maps models to workflow steps, with rationale as captions.
- Option C: Keep the cards but reduce the rationale to a single sentence and add visual differentiation (e.g., icons, color coding, or size variation).

#### 5.4 Human-in-the-Loop

Elevate this from a section to a theme:

- Integrate the human review concept into the workflow diagram as a visual element.
- Add a brief quote or statement from Jonathan about why human oversight matters.
- Consider a small visual (e.g., a screenshot of a review interface or a diff view) to make the concept tangible.

#### 5.5 Design Principles

Convert from a bullet list to a visual format:

- Option A: Integrate principles into the workflow diagram as annotations.
- Option B: Use a grid of small cards with icons, each showing one principle in 5-10 words.
- Option C: Remove the section entirely and integrate the principles into the narrative text.

#### 5.6 Safety & Validation

Move below the fold:

- Create a "Implementation Notes" or "Technical Details" section at the bottom of the page.
- Include safety notes, evolution note, and any other implementation details.
- Keep this section concise and scannable.

#### 5.7 Visual Evidence

Add the following visual assets (see Section 7 for details):

- A screenshot of the workflow running in a terminal or IDE
- A prompt example showing how an agent is instructed
- An output example showing what an agent produces
- An architecture diagram showing the system's structure
- A diff or review screenshot showing the human-in-the-loop process

---

## 6. Recommended Page Narrative Structure

The AI Agents Workflow page should follow this narrative structure:

### Section 1: Hook (above the fold)

- **Headline:** A compelling one-liner that communicates value
- **Supporting paragraph:** Current summary sentence
- **Visual anchor:** A screenshot or diagram that immediately shows the workflow

**Goal:** Communicate what the workflow is and why it matters in under 10 seconds.

### Section 2: The Workflow (above or just below the fold)

- **Visual flow diagram:** The redesigned workflow diagram with visual differentiation between steps
- **Annotations:** Brief explanations of what happens at each step
- **Human-in-the-loop emphasis:** Visual distinction for the human review step

**Goal:** Show how the workflow works visually, not just describe it.

### Section 3: Model Selection (below the fold)

- **Visual comparison:** A table, matrix, or diagram showing which model serves which phase
- **Brief rationale:** One sentence per model explaining the selection criteria

**Goal:** Explain the model choices without repetitive card structures.

### Section 4: Visual Evidence (below the fold)

- **Screenshot 1:** The workflow running in a terminal or IDE
- **Screenshot 2:** A prompt example or output sample
- **Screenshot 3:** A diff or review showing the human-in-the-loop process

**Goal:** Provide tangible proof that the workflow exists and works.

### Section 5: Design Principles (below the fold)

- **Integrated annotations:** Principles embedded in the workflow diagram or presented as a concise grid
- **No bullet lists:** Convert all principles into visual or concise formats

**Goal:** Communicate the design thinking without text-heavy lists.

### Section 6: Implementation Notes (bottom of page)

- **Safety measures:** Brief list of security considerations
- **Evolution note:** Brief note about model selection evolving
- **GitHub link:** CTA to view agent configurations

**Goal:** Provide technical details for interested visitors without cluttering the main narrative.

---

## 7. Asset Requirements

The following visual assets should be created or captured to support the AI Agents Workflow page redesign.

**Asset rule (corrected):** Optional asset slots in the page render their content only when a real asset path is non-empty. When no asset exists, the slot renders nothing. No "Screenshot coming soon" placeholder text, no mockups, no fake terminal output in production.

### 7.1 Workflow Screenshot

**What:** A screenshot of the workflow running in a terminal, IDE, or OpenCode interface.

**Why:** Provides immediate visual proof that the workflow exists and is actively used. This is the single most important missing asset.

**How:** Capture a terminal window or IDE showing the workflow in action. Blur or redact any sensitive information (file paths, API keys, internal system names). Add a subtle border or shadow to match the site's card style.

**When absent:** The slot renders nothing. The page remains complete without it.

### 7.2 Prompt Example

**What:** A screenshot or styled code block showing an example prompt used to instruct one of the agents.

**Why:** Demonstrates the prompt engineering aspect of the workflow. Shows the level of detail and specificity in the agent instructions.

**How:** Capture a prompt from the agent configuration files. Redact any sensitive information. Style it as a code block or a card with a monospace font.

**When absent:** The slot renders nothing.

### 7.3 Output Example

**What:** A screenshot or styled block showing an example output from one of the agents (e.g., a planning document, a code diff, or a verification report).

**Why:** Demonstrates what the agents actually produce. Shows the quality and format of the output.

**How:** Capture an output from the workflow. Redact any sensitive information. Style it as a card or code block.

**When absent:** The slot renders nothing.

### 7.4 Architecture Diagram

**What:** A diagram showing the system's architecture — how the agents, models, and human review interact.

**Why:** Provides a high-level overview of the system's structure. Helps visitors understand the workflow at a glance.

**How:** Create a simple diagram using a tool like Excalidraw, Mermaid, or a design tool. Use the site's color palette (cream, green, forest). Keep it simple and legible.

**When absent:** The slot renders nothing. The workflow diagram (Phase 14) serves as the primary visual.

### 7.5 Human-in-the-Loop Screenshot

**What:** A screenshot showing the human review process — e.g., a diff view, a review interface, or a terminal showing the review step.

**Why:** Makes the human-in-the-loop concept tangible. Shows that this is not an autonomous system.

**How:** Capture a screenshot of the review process. Redact any sensitive information. Add annotations to highlight key elements.

**When absent:** The slot renders nothing. The human-review step in the workflow diagram provides the visual emphasis.

### 7.6 Model Comparison Visual

**What:** A visual comparison of the models used in the workflow — e.g., a table, matrix, or diagram.

**Why:** Replaces the repetitive model selection cards with a more efficient visual format.

**How:** Create a simple table or diagram showing which model serves which phase, with brief rationale. Use the site's color palette.

**When absent:** Built as a styled HTML table/matrix in Phase 13 (no image asset required).

### Asset Priority

| Asset | Priority | Effort | Impact |
|-------|----------|--------|--------|
| Workflow screenshot | P0 | Low (capture existing) | High |
| Architecture diagram | P0 | Medium (create) | High |
| Prompt example | P1 | Low (capture existing) | Medium |
| Output example | P1 | Low (capture existing) | Medium |
| Human-in-the-loop screenshot | P1 | Low (capture existing) | Medium |
| Model comparison visual | P2 | Low (built in code) | Low |

---

## 8. Design Constraints to Preserve

The following elements should be preserved in any redesign:

1. **Cream-and-green color palette.** The background (#F7F5EF), card cream (#FDFCF9), card mint (#F2F8F4), forest text (#0E2418), muted text (#5A6B61), and accent green (#0FA36B) should remain unchanged.

2. **Typography pairing.** Manrope for display and body text, Instrument Serif italic for section headings. The type scale (12/14/16/20/24/32/40px) should be preserved.

3. **Card border radius.** 20px for all cards. This is a distinctive element of the site's visual identity.

4. **Card border and shadow.** 1px solid rgba(14, 36, 24, 0.06) border with 0 2px 12px rgba(14, 36, 24, 0.03) shadow. Hover states should darken the border and deepen the shadow.

5. **Navigation style.** The pill-style navigation bar with the dark green active state should remain consistent across all pages.

6. **Footer.** The minimal footer with copyright text should remain.

7. **Accessibility.** All accessibility features (focus-visible, reduced-motion, semantic HTML, alt text) should be preserved and extended to new elements.

8. **Honesty and credibility.** The page should not overstate the workflow's capabilities. The human-in-the-loop message should remain prominent. The evolution note should remain (though moved below the fold).

---

## 9. Anti-patterns to Avoid

The following design patterns should be avoided in the AI Agents Workflow page redesign:

1. **Generic AI aesthetics.** No gradients, glows, neon colors, fake terminals, or logo walls. The visual language should be clean, editorial, and engineering-focused.

2. **Repetitive card structures.** Not every section needs the same card layout. Vary the visual format to maintain interest and communicate hierarchy.

3. **Text-heavy sections.** Avoid bullet lists and dense paragraphs. Convert text into visual formats where possible.

4. **Over-engineering the diagram.** The workflow diagram should be clear and legible, not a complex technical diagram that requires explanation.

5. **Hiding the human element.** The human-in-the-loop concept is central to the workflow's design. It should be visually prominent, not buried in text.

6. **Showing confidential information.** No API keys, tokens, credentials, private paths, or proprietary prompts should be visible in any screenshot or artefact.

7. **Overstating capabilities.** The workflow is a development aid, not an autonomous system. The page should be honest about its limitations and the role of human oversight.

8. **Breaking consistency.** New visual elements should use the existing design tokens (colors, typography, spacing, border radius). Do not introduce new colors, fonts, or styles that break the site's visual identity.

9. **Ignoring mobile.** The workflow diagram and any new visual elements should be responsive and legible on mobile devices.

10. **Adding decorative elements.** Every visual element should serve a communication purpose. Do not add decorative animations, icons, or graphics that do not convey information.

---

## 10. Implementation Priorities

### P0: Essential for the Redesign

| Requirement | Rationale | Effort |
|-------------|-----------|--------|
| Capture workflow screenshot | Provides immediate visual proof of the system | Low |
| Create architecture diagram | Provides high-level overview of the system | Medium |
| Redesign workflow diagram | Current diagram is visually forgettable and has a responsive bug | Medium |
| Shorten model selection content | Current cards are repetitive and text-heavy | Low |
| Move safety and evolution notes below the fold | These are implementation details, not core narrative | Low |

### P1: Important Enhancement

| Requirement | Rationale | Effort |
|-------------|-----------|--------|
| Capture prompt example | Demonstrates prompt engineering aspect | Low |
| Capture output example | Shows what agents actually produce | Low |
| Capture human-in-the-loop screenshot | Makes the concept tangible | Low |
| Create model comparison visual | Replaces repetitive cards with efficient format | Low |
| Strengthen opening headline | Current opening is descriptive but not compelling | Low |
| Integrate design principles into visual format | Current bullet list is text-heavy | Medium |

### P2: Optional Polish

| Requirement | Rationale | Effort |
|-------------|-----------|--------|
| Add scroll-reveal animations | Enhances the narrative flow | Low |
| Add interactive diagram elements | Allows visitors to explore the workflow | High |
| Create a video walkthrough | Provides the most comprehensive visual evidence | High |
| Add a "Lessons Learned" section | Shows reflection and growth | Low |

### Recommended Implementation Order

1. **Capture workflow screenshot** (P0, Low effort, High impact) — This is the single most impactful change. A screenshot of the workflow in action immediately transforms the page from documentation to case study.

2. **Redesign workflow diagram** (P0, Medium effort, High impact) — Fix the responsive bug and create a more visually distinctive diagram.

3. **Create architecture diagram** (P0, Medium effort, High impact) — Provides a high-level overview that complements the workflow diagram.

4. **Shorten model selection content** (P0, Low effort, Medium impact) — Reduce text density and eliminate repetitive card structures.

5. **Move safety and evolution notes below the fold** (P0, Low effort, Low impact) — Quick win that improves the page's narrative flow.

6. **Capture prompt and output examples** (P1, Low effort, Medium impact) — Additional visual evidence that strengthens the case study.

7. **Strengthen opening headline** (P1, Low effort, Medium impact) — Improves the first impression.

8. **Integrate design principles into visual format** (P1, Medium effort, Medium impact) — Eliminates the text-heavy bullet list.
