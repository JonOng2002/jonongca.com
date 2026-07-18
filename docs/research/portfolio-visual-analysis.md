# Portfolio Visual Analysis

## 1. Executive Summary

Jonathan's current portfolio has a solid foundation: a warm cream-and-green palette, a friendly personal photograph, and a bento-inspired card layout that separates professional and personal content. However, the homepage suffers from several structural issues that weaken its impact:

- The hero row (Identity + Photo) consumes approximately 40% of the first-screen real estate while communicating only name, four keywords, and one sentence. This is a low information-to-space ratio.
- Project credibility is pushed below the fold. A recruiter scanning the page sees the name, a photo, a tech sphere, a "Now" card, and a "Currently Into" card before encountering any actual project work.
- The 3D rotating tech sphere is visually noisy and communicates little of substance. It reads as decoration rather than proof of capability.
- The slanted project screenshots with heavy hover effects feel more like a product designer's portfolio than an engineering portfolio. The visual treatment obscures the screenshots rather than clarifying them.
- The custom cursor, while subtle, adds a layer of interaction that serves no functional purpose and may feel gimmicky.

The three references each demonstrate distinct strengths. Janani excels at personal warmth and modular content that reveals personality. Yan excels at project-first hierarchy with large, clear visual previews. Marco (ref-3) excels at editorial minimalism with a strong voice. None of these should be copied wholesale, but each offers specific mechanisms worth borrowing.

The recommended direction is a **restrained editorial bento** that keeps the cream-and-green identity, sharpens the first-screen hierarchy to surface project credibility earlier, replaces decorative elements with purposeful content cards, and adopts a cleaner image treatment that lets project work speak for itself.

---

## 2. Current Site Audit

### First Impression

**Observation:** The page opens with a large identity card (4-column span, 5-row height) containing only a name, four keywords, and one sentence. Adjacent is a full-bleed personal photo (2-column span, 5-row height). Together they occupy roughly 40% of the above-the-fold area.

**Why it matters:** Recruiters and hiring managers spend an average of 6-10 seconds on an initial portfolio scan. The first screen should communicate who Jonathan is, what he does, and offer a reason to keep scrolling. The current hero communicates identity but not substance.

**Recommendation:** Reduce the hero's vertical footprint. The identity statement should be concise (name + positioning + one sentence). The photo should be smaller or integrated differently. Project evidence should appear within the first scroll.

**Supporting reference:** Yan's hero is a single paragraph with a strong positioning statement, immediately followed by project cards. Marco's hero is one sentence ("Marco is building Turf.") with philosophical text below.

**Priority: P0**

### Recruiter Scanability

**Observation:** A recruiter looking for project evidence must scroll past the identity row, the "My tech stack" sphere, the "Now" card, the "Currently into" card, and the "Say Hi" card before reaching the "Featured projects" section. This is approximately 2-3 screen heights of non-project content.

**Why it matters:** Recruiters need to quickly assess technical capability. Delaying project visibility increases the chance of a bounce.

**Recommendation:** Move at least one project card into the above-the-fold grid, or restructure the grid so that project evidence appears in row 2 or 3, not as a separate section below the grid.

**Supporting reference:** Yan places project cards immediately after the hero paragraph. Janani places a "Currently shaping" card (professional context) in the second row.

**Priority: P0**

### Personal Identity

**Observation:** The identity card uses a large type scale (text-6xl for the name) with a green accent tagline and a muted supporting sentence. The photo card is a full-bleed portrait. The combination is warm and approachable.

**Why it matters:** Personal identity is well-handled. The photo is friendly and genuine. The typography pairing (Manrope + Instrument Serif) is distinctive.

**Recommendation:** Keep the identity treatment but reduce its size. The name does not need to be 6xl. A 3xl-4xl range would be sufficient and would free space for more content.

**Supporting reference:** The current site's identity card is strong. Janani's identity card is smaller but includes a descriptive tagline ("Designer, Strategist, Birder, Dreamer") that adds personality.

**Priority: P1**

### Information Hierarchy

**Observation:** The current hierarchy is: Identity → Photo → Tech Stack → Now → Currently Into → Say Hi → Featured Projects → Outside the Terminal. This prioritizes personal and ambient content over project evidence.

**Why it matters:** The hierarchy should reflect the site's dual purpose: establishing professional credibility first, then revealing personality. The current order inverts this.

**Recommendation:** Reorder to: Identity → Photo → Now (professional context) → Featured Projects (2-3 cards) → Tech Stack → Currently Into → Say Hi → Outside the Terminal.

**Supporting reference:** Yan's hierarchy is Identity → Projects → Personal. Janani's is Identity → Bio/Current → Projects → Personal.

**Priority: P0**

### Content Density

**Observation:** The identity card has low content density (3 lines of text in a large card). The tech sphere has zero text content. The photo card has zero text. The "Say Hi" card has moderate density. The "Currently into" card has moderate density. The "Now" card has moderate density.

**Why it matters:** Low-density cards waste space. High-density cards communicate more per pixel. A balanced mix is ideal.

**Recommendation:** Increase the information density of the hero row. Add a concise positioning sentence or a key achievement. Replace the tech sphere with a denser, more informative card.

**Supporting reference:** Marco's left column is dense with text (philosophy statements). Janani's "Watch, Read, Ponder List" is dense with curated content.

**Priority: P1**

### Navigation

**Observation:** The top navigation bar contains filter pills (Home, Projects, Experience, Life), an About toggle, and a Resume link. The filter pills use react-grid-layout to rearrange cards, which is an unusual interaction pattern for a portfolio.

**Why it matters:** Filter-based navigation is uncommon for portfolios and may confuse visitors who expect standard page navigation. The grid rearrangement animation can be disorienting.

**Recommendation:** Replace filter pills with standard navigation links to dedicated pages (Projects, Experience, Life, About). Keep Resume as a prominent CTA. If filtering is retained, make it a secondary control, not the primary navigation.

**Supporting reference:** Janani uses standard nav (Projects, About, Resume). Yan uses minimal nav (Home, About, Contact). Marco uses standard nav (Home, About, Work, Contact).

**Priority: P1**

### Hero Section

**Observation:** The hero consists of a 4-column identity card and a 2-column photo card. The identity card contains: name (6xl), tagline (base, green accent), supporting sentence (lg, muted). The photo is full-bleed.

**Why it matters:** The hero is the most important real estate on the page. It should communicate identity, positioning, and a reason to engage. The current hero communicates identity but lacks a clear call to action or project preview.

**Recommendation:** Condense the hero to a single row with identity (left) and photo (right), but reduce the row height. Add a primary CTA (e.g., "View Projects" or "Download Resume") and a secondary CTA (e.g., "About Me"). Consider adding a brief positioning sentence that differentiates Jonathan.

**Supporting reference:** Yan's hero is a single paragraph with no photo, followed immediately by projects. Janani's hero includes identity + photo + a "Watch, Read, Ponder List" in the same row, creating a denser, more informative first screen.

**Priority: P0**

### Project Visibility

**Observation:** Featured projects appear as a separate section below the bento grid, with three cards using slanted screenshots. The project modal opens on click with more detail. The RAG chatbot project is not featured on the homepage despite being relevant to Jonathan's AI engineering focus.

**Why it matters:** Projects are the primary evidence of technical capability. They should be prominent, clearly described, and easy to explore.

**Recommendation:** Integrate 2-3 project cards into the bento grid itself, not as a separate section below. Use straight (non-slanted) screenshots with clear labels. Include the RAG project or another AI-focused project. Ensure each card communicates the problem, role, stack, and outcome concisely.

**Supporting reference:** Yan's project cards are large, straight screenshots with bold titles and concise descriptions. Janani's project cards are wide with large screenshots and descriptive text below.

**Priority: P0**

### Experience Visibility

**Observation:** Experience is accessible via the "Experience" filter pill, which rearranges the grid. There is no dedicated experience section on the default "Home" view.

**Why it matters:** Professional experience is critical for recruiters. Hiding it behind a filter interaction reduces its visibility.

**Recommendation:** Include a "Now" or "Current Role" card in the default grid (already present). Consider adding a condensed experience timeline or a "Recent Experience" card that links to a full experience page.

**Supporting reference:** Janani includes a "Currently shaping Indic Voice AI @ Navana.ai" card in the main grid. Marco includes "prev @vercel @v0 @figma @diagram" in a social card.

**Priority: P1**

### Calls to Action

**Observation:** The primary CTAs are: Resume link (in nav), GitHub/LinkedIn/Email (in "Say Hi" card and hero), and project cards (click to open modal). There is no single primary CTA that stands out.

**Why it matters:** A clear primary CTA guides the visitor toward the desired action (e.g., viewing projects, downloading resume, contacting).

**Recommendation:** Establish a clear primary CTA. For a portfolio, this is typically "View Projects" or "Download Resume." Make it visually distinct (filled button, prominent placement). Secondary CTAs (GitHub, LinkedIn, Email) should be smaller and grouped.

**Supporting reference:** Yan has no explicit CTA but the project cards themselves act as CTAs. Janani has a "Say Hi" card with social links. Marco has "Read mid tweets" as a secondary CTA.

**Priority: P1**

### Typography

**Observation:** The site uses Manrope (sans-serif) for display and body text, and Instrument Serif (italic) for section headings. The type scale ranges from text-9px (tags) to text-6xl (name). The serif italic headings ("Currently into", "Now", "Featured projects", "Outside the terminal") create a distinctive editorial voice.

**Why it matters:** The typography is a strength. The Manrope + Instrument Serif pairing is warm and distinctive. However, the type scale has too many sizes, creating visual noise.

**Recommendation:** Rationalize the type scale to 5-6 sizes. Keep the serif italic for section headings. Ensure consistent use of font weights (avoid mixing font-bold, font-semibold, font-extrabold without clear hierarchy).

**Supporting reference:** The current site's typography is strong. Janani uses a similar serif + sans pairing with warm tones. Marco uses a very restrained type scale with strong weight contrast.

**Priority: P2**

### Colour and Contrast

**Observation:** The palette is cream (#F7F5EF background), forest green (#0E2418 text), green accent (#0FA36B), and card cream (#FDFCF9). Text contrast is generally good. The muted text (#5A6B61) may be borderline on the cream background.

**Why it matters:** Good contrast ensures readability. The cream-and-green palette is warm and distinctive.

**Recommendation:** Keep the palette. Verify that all text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text). The muted text (#5A6B61 on #F7F5EF) has a contrast ratio of approximately 4.7:1, which passes AA for normal text but is close to the threshold.

**Supporting reference:** The current palette is appropriate. Janani uses a warm peach palette. Yan uses white/light gray. Marco uses white/light gray.

**Priority: P2**

### Spacing

**Observation:** Cards use rounded-[2rem] corners with p-6 to p-10 padding. The grid uses 16px margins. Section spacing is mt-8. The spacing is generous but consistent.

**Why it matters:** Consistent spacing creates visual rhythm. The current spacing is adequate but could be tightened to increase content density.

**Recommendation:** Reduce card padding to p-5 or p-6 consistently. Reduce grid margins to 12px. Reduce section spacing to mt-6. This will increase content density without feeling cramped.

**Supporting reference:** Janani uses tighter card spacing. Yan uses generous spacing but with larger cards. Marco uses very generous spacing with minimal content.

**Priority: P2**

### Card Proportions

**Observation:** The identity card is 4 columns × 5 rows. The photo card is 2 columns × 5 rows. The "Currently into" and "Now" cards are 3 columns × 4 rows. The "Learning" and "Say Hi" cards are 3 columns × 3 rows. The proportions are asymmetrical but create an interesting bento composition.

**Why it matters:** Card proportions affect visual balance. The current proportions are reasonable but the identity card is too tall for its content.

**Recommendation:** Reduce the identity card to 4 columns × 3 rows. Reduce the photo card to 2 columns × 3 rows. This frees 2 rows of vertical space for additional content.

**Supporting reference:** Janani's identity card is approximately 2 columns × 2 rows. Yan's hero is a single wide card. Marco's hero is a wide card with text.

**Priority: P1**

### Image Treatment

**Observation:** The personal photo is full-bleed in a rounded card. Project screenshots are slanted (rotate-7deg) with a hover effect that straightens them. The slanted treatment is visually interesting but obscures the screenshots and makes them harder to read.

**Why it matters:** Project screenshots should be clear and legible. The slanted treatment prioritizes visual flair over clarity.

**Recommendation:** Use straight (non-slanted) screenshots for project cards. Add a subtle border or shadow for depth. On hover, consider a slight scale-up or overlay effect that doesn't distort the image.

**Supporting reference:** Yan uses straight, large screenshots with no rotation. Janani uses straight screenshots with a subtle background treatment.

**Priority: P0**

### Consistency

**Observation:** The site is generally consistent in its use of rounded corners, glass-morphism cards, and the cream-and-green palette. However, the "Featured projects" section uses a different card style (slanted images with hover effects) than the bento grid cards. The "Outside the terminal" section uses yet another card style (colored backgrounds with floating images).

**Why it matters:** Consistency creates a cohesive visual language. Multiple card styles can feel fragmented.

**Recommendation:** Unify the card styles. Use the same rounded corner radius, border treatment, and hover behavior across all cards. Differentiate sections through content and layout, not through different card styles.

**Supporting reference:** Janani uses consistent card styles throughout. Yan uses consistent card styles. Marco uses consistent card styles.

**Priority: P1**

### Responsiveness

**Observation:** The site uses react-grid-layout with breakpoints at lg (1024px), md (768px), and sm (640px). On mobile, the grid collapses to a single column. The navigation pills stack horizontally. The project cards stack vertically.

**Why it matters:** Mobile responsiveness is critical. The current mobile layout stacks cards in the order they appear in the grid, which may not reflect content priority.

**Recommendation:** Define a mobile-specific card order that prioritizes: Identity → Now (professional context) → Featured Projects → Tech Stack → Currently Into → Say Hi → Outside the Terminal. Ensure touch targets are at least 44px.

**Supporting reference:** The current mobile behavior is adequate but the card order should be intentional, not arbitrary.

**Priority: P1**

### Accessibility

**Observation:** The site uses semantic HTML (h1, h3, p, a). The custom cursor is hidden on mobile and touch devices. The grid layout uses divs with motion.div wrappers. Alt text is present on images. The "Say Hi" card links have titles.

**Why it matters:** Accessibility ensures the site is usable by all visitors. The current implementation has some gaps.

**Recommendation:** Add visible focus states for keyboard navigation. Ensure all interactive elements have aria-labels where needed. Verify that the grid layout is navigable by keyboard. Add reduced-motion support for the tech sphere animation.

**Supporting reference:** The current accessibility is adequate but could be improved.

**Priority: P1**

### Perceived Technical Credibility

**Observation:** The tech sphere is the most prominent technical element on the homepage, but it is a decorative 3D animation that communicates little of substance. The project cards below the fold use slanted screenshots that obscure the actual work. The "Now" card lists current work topics but without context or outcomes.

**Why it matters:** Technical credibility is established through clear communication of projects, skills, and outcomes. Decorative elements do not contribute to credibility.

**Recommendation:** Replace the tech sphere with a card that communicates technical capabilities more directly (e.g., a concise stack list, a recent achievement, or a project highlight). Ensure project cards clearly communicate the problem, role, stack, and outcome.

**Supporting reference:** Yan's project cards communicate credibility through large, clear screenshots and concise descriptions. Marco's credibility comes from the text ("prev @vercel @v0 @figma @diagram") and the Notion workspace screenshot.

**Priority: P0**

---

## 3. Reference Analysis

### 3.1 Janani

**Layout System:**
Janani uses a CSS Grid-based bento layout with asymmetrical card sizes. The first row has three cards: an identity card (left, ~2 columns), a photo (center, ~1 column), and a "Watch, Read, Ponder List" (right, ~1 column, tall). The second row has a large bio card (left, ~2 columns, tall), a "Currently shaping" card (center-top, ~1 column), and a "Say Hi" card (center-bottom, ~1 column). The right column extends down as a single tall card. This creates a dynamic, magazine-like composition.

**Visual Hierarchy:**
The hierarchy is: Name/identity → Photo → Current role → Bio → Interests list → Projects (on scroll). The "Watch, Read, Ponder List" is a standout element that reveals personality through curated content. The hierarchy is personal-first, professional-second.

**Spacing Rhythm:**
Cards have consistent rounded corners (~12px) and generous internal padding. The gap between cards is approximately 16px. The overall spacing is warm and inviting, not tight or cramped.

**Typography Approach:**
Uses a serif font for headings and a sans-serif for body text. The serif headings are warm and editorial. The body text is clean and readable. The type scale is moderate, with clear distinction between headings and body.

**Image Usage:**
The personal photo is a warm, candid portrait in a rounded card. Project screenshots are large, straight, and clearly visible. The images are treated with subtle backgrounds and borders, not heavy effects.

**Information Distribution:**
Each card has a clear purpose: identity, photo, interests, bio, current role, contact. No card is filler. The "Watch, Read, Ponder List" is a unique element that adds personality without being unprofessional.

**Why It Feels Cohesive:**
The warm peach/cream palette, consistent rounded corners, serif headings, and modular card composition create a cohesive, personal feel. The layout is asymmetrical but balanced.

**What Jonathan Should Borrow:**

- The "Watch, Read, Ponder List" concept (adapted as "Currently Reading/Listening/Learning")
- The modular card approach where each card reveals something meaningful
- The warm, personal visual identity
- The balance between professional and personal content

**What Jonathan Should Not Borrow:**

- The peach/cream color palette (Jonathan's green is more appropriate for an engineering portfolio)
- The specific card proportions (Janani's layout is optimized for her content, not Jonathan's)
- The heavy use of decorative icons (keep icons minimal and purposeful)

**What Would Be Inappropriate:**

- The "Designer, Strategist, Birder, Dreamer" tagline style is too design-focused for an engineering portfolio. Jonathan's tagline should be more technically grounded.
- The "Say Hi" card with social icons is fine, but the specific icon style (orange line icons) may not match Jonathan's aesthetic.

### 3.2 Yan

**Layout System:**
Yan uses a CSS Grid-based bento layout with a strong project-first hierarchy. The hero is a single wide card with a positioning statement. Below it, project cards are arranged in a grid with varying sizes. Primary projects are larger (2 columns), secondary projects are smaller (1 column). The layout is clean and structured.

**Visual Hierarchy:**
The hierarchy is: Identity/positioning → Primary projects → Secondary projects → Personal (podcast, etc.). Projects are the dominant content. The hierarchy is professional-first, personal-second.

**Spacing Rhythm:**
Cards have consistent rounded corners (~16px) and generous internal padding. The gap between cards is approximately 16px. The overall spacing is clean and structured, not warm or cozy.

**Typography Approach:**
Uses a bold sans-serif font for headings and a regular sans-serif for body text. The type scale is large and bold, with strong contrast between headings and body. The typography is clean and modern.

**Image Usage:**
Project screenshots are large, straight, and clearly visible. Phone mockups are used for mobile app projects. The images are treated with subtle shadows and borders, not heavy effects. The images are the primary visual element.

**Information Distribution:**
Each project card has a clear purpose: show the project visually, communicate the problem/solution concisely, and link to more detail. Personal cards (podcast, etc.) are smaller and secondary.

**Why It Feels Cohesive:**
The white/light gray palette, consistent rounded corners, bold typography, and project-first layout create a cohesive, professional feel. The layout is structured and clean.

**What Jonathan Should Borrow:**

- The project-first hierarchy
- The large, clear project screenshots (straight, not slanted)
- The concise project descriptions
- The distinction between primary and secondary projects

**What Jonathan Should Not Borrow:**

- The white/light gray palette (Jonathan's cream-and-green is warmer and more distinctive)
- The heavy use of phone mockups (not all of Jonathan's projects are mobile apps)
- The bold, large typography (Jonathan's typography should be more restrained)

**What Would Be Inappropriate:**

- The project descriptions are very concise and marketing-oriented. Jonathan's project descriptions should be more technically detailed.
- The layout is very project-heavy with minimal personal content. Jonathan's portfolio should balance professional and personal content.

### 3.3 Marco (ref-3)

**Layout System:**
Marco uses a CSS Grid-based layout with two columns. The left column is a wide card with philosophical text ("i design things.", "i think design can change things.", etc.). The right column has a Notion workspace screenshot, a social card, and project screenshots. The layout is editorial and text-heavy.

**Visual Hierarchy:**
The hierarchy is: Identity/philosophy → Current project (Turf) → Tools/workspace → Social → Projects. The hierarchy is personal-first, with philosophy and voice as the primary content.

**Spacing Rhythm:**
Cards have consistent rounded corners (~24px) and generous internal padding. The gap between cards is approximately 24px. The overall spacing is very generous, creating an airy, editorial feel.

**Typography Approach:**
Uses a clean sans-serif font for all text. The type scale is moderate, with strong weight contrast between headings and body. The typography is minimal and editorial.

**Image Usage:**
Images are used sparingly. The Notion workspace screenshot is a key visual element. Project screenshots are used as supporting content. The images are treated with subtle borders and shadows.

**Information Distribution:**
The left column is dense with text (philosophy statements). The right column has a mix of images and text. Each element has a clear purpose.

**Why It Feels Cohesive:**
The white/light gray palette, consistent rounded corners, minimal typography, and editorial layout create a cohesive, sophisticated feel. The layout is text-heavy but balanced with images.

**What Jonathan Should Borrow:**

- The editorial text treatment (concise, voice-driven copy)
- The use of workspace/tool screenshots as visual elements
- The minimal, sophisticated aesthetic
- The strong personal voice

**What Jonathan Should Not Borrow:**

- The white/light gray palette (Jonathan's cream-and-green is warmer)
- The heavy text focus (Jonathan's portfolio should be more visual)
- The specific philosophical style (Jonathan's voice should be different)

**What Would Be Inappropriate:**

- The "i think..." philosophical style is too abstract for an engineering portfolio. Jonathan's copy should be more concrete and technically grounded.
- The layout is very text-heavy with minimal project evidence. Jonathan's portfolio should prioritize project visibility.

---

## 4. Comparative Matrix

| Dimension                      | Jonathan (Current)                                         | Janani                                         | Yan                                         | Marco                                             |
| ------------------------------ | ---------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------- | ------------------------------------------------- |
| **Identity**             | Strong (name + photo + tagline)                            | Strong (name + photo + descriptive tagline)    | Moderate (positioning statement only)       | Strong (name + philosophy + current project)      |
| **Hero Effectiveness**   | Weak (low info-to-space ratio)                             | Strong (dense, informative first screen)       | Strong (clear positioning, project-first)   | Strong (editorial, voice-driven)                  |
| **Project Prominence**   | Weak (below fold, slanted images)                          | Moderate (second screen, clear images)         | Strong (above fold, large clear images)     | Weak (secondary to text)                          |
| **Personality**          | Moderate (photo, "Currently into", "Outside the terminal") | Strong (photo, interests list, warm tone)      | Low (project-focused, minimal personal)     | Strong (philosophy, voice, workspace)             |
| **Content Density**      | Low (large empty cards)                                    | High (dense, curated content)                  | Moderate (balanced text and images)         | High (text-dense, editorial)                      |
| **Navigation**           | Weak (filter pills, non-standard)                          | Strong (standard nav: Projects, About, Resume) | Strong (minimal nav: Home, About, Contact)  | Strong (standard nav: Home, About, Work, Contact) |
| **Visual Rhythm**        | Moderate (inconsistent card styles)                        | Strong (consistent, warm, modular)             | Strong (consistent, clean, structured)      | Strong (consistent, minimal, editorial)           |
| **Recruiter Usefulness** | Low (projects hidden, no clear CTA)                        | Moderate (projects visible, clear nav)         | High (projects prominent, clear hierarchy)  | Low (projects secondary, text-heavy)              |
| **Mobile Adaptability**  | Moderate (single column, arbitrary order)                  | Strong (responsive grid, intentional order)    | Strong (responsive grid, intentional order) | Moderate (two columns stack to one)               |
| **Accessibility Risk**   | Moderate (custom cursor, grid navigation)                  | Low (standard patterns)                        | Low (standard patterns)                     | Low (standard patterns)                           |

---

## 5. Recommended Design Direction

### Design Direction Statement

**A restrained editorial bento portfolio that surfaces technical credibility early, communicates personality through curated content, and maintains a warm, distinctive cream-and-green visual identity.**

### Guiding Design Principles

1. **Project evidence first, personality second.** The first screen should communicate who Jonathan is and what he builds. Personality content (interests, life, writing) should appear below project evidence.
2. **Clarity over decoration.** Every visual element should serve a communication purpose. Remove decorative animations (tech sphere, custom cursor, slanted images) that do not convey information.
3. **Dense but breathable.** Cards should have high information density but generous internal padding. Avoid large empty cards. Use whitespace to separate content, not to fill space.
4. **Consistent visual language.** Use one card style throughout (rounded corners, border treatment, hover behavior). Differentiate sections through content and layout, not through different card styles.
5. **Warm but technically credible.** The cream-and-green palette should remain, but the overall feel should lean toward engineering credibility (clear project screenshots, concise technical descriptions) rather than design portfolio aesthetics.

### Desired Emotional Impression

Visitors should feel that Jonathan is:

- Technically competent (clear project evidence, concise technical descriptions)
- Personable and genuine (friendly photo, curated personal content)
- Thoughtful and intentional (restrained design, purposeful content)
- Approachable (warm palette, clear navigation, friendly copy)

### Balance Between Technical Proof and Personality

- **Above the fold (first screen):** 70% technical proof (identity, positioning, current role, 1-2 project cards), 30% personality (photo, brief personal note).
- **Below the fold (second screen):** 50% technical proof (more projects, tech stack), 50% personality (interests, life, writing).
- **Third screen and beyond:** 30% technical proof (experience, resume), 70% personality (life, writing, contact).

### What Should Remain Recognisably Jonathan

- The cream-and-green color palette
- The friendly personal photograph
- The Manrope + Instrument Serif typography pairing
- The "Currently into" and "Outside the terminal" content concepts
- The modular card approach

### What Should Be Substantially Improved

- The hero section (reduce size, increase information density)
- Project visibility (move above fold, straighten images)
- Navigation (replace filter pills with standard nav)
- Card consistency (unify card styles)
- Technical credibility (replace tech sphere with substantive content)

### What Should Be Removed or Avoided

- The 3D rotating tech sphere
- The custom cursor
- The slanted project screenshots
- The filter-pill navigation
- Large empty cards
- Heavy hover animations on project cards

---

## 6. Homepage Information Architecture

### Recommended Structure and Visual Reading Order

**Row 1: Identity + Photo (above the fold)**

- **Purpose:** Establish identity and positioning immediately.
- **Priority:** P0 (essential)
- **Content:** Name (3xl-4xl), positioning tagline (Data Engineering · AI Engineering · MLOps · Cloud), one-sentence supporting statement, personal photo (smaller, not full-bleed), primary CTA (View Projects or Download Resume).
- **Visual weight:** Medium (compact, dense)
- **Destination:** Identity card links to About page. Photo is decorative. CTA links to Projects section or Resume PDF.

**Row 2: Now + Featured Project 1 (above the fold)**

- **Purpose:** Communicate current professional context and showcase primary project.
- **Priority:** P0 (essential)
- **Content:** "Now" card with current role, company, and 3-4 key focus areas. Featured Project 1 card with straight screenshot, title, concise description, tech tags, and link to project detail.
- **Visual weight:** Medium-high (project card should be visually prominent)
- **Destination:** Now card links to Experience page. Project card links to project detail page.

**Row 3: Featured Project 2 + Featured Project 3 (above or just below fold)**

- **Purpose:** Showcase additional projects to establish breadth of capability.
- **Priority:** P0 (essential)
- **Content:** Two project cards with straight screenshots, titles, concise descriptions, tech tags, and links to project details. Include at least one AI/ML project.
- **Visual weight:** Medium (consistent with Row 2)
- **Destination:** Each card links to its project detail page.

**Row 4: Tech Stack + Currently Into (below the fold)**

- **Purpose:** Communicate technical capabilities and personal interests.
- **Priority:** P1 (important)
- **Content:** Tech Stack card with a concise, categorized list of technologies (not a 3D sphere). Currently Into card with reading, running, and goal of the month.
- **Visual weight:** Low-medium (supporting content)
- **Destination:** Tech Stack card may link to a full skills page. Currently Into card is informational.

**Row 5: Say Hi + Outside the Terminal (below the fold)**

- **Purpose:** Provide contact options and personal content.
- **Priority:** P1 (important)
- **Content:** Say Hi card with Resume, GitHub, LinkedIn, Email links. Outside the Terminal section with 2-3 life widget cards (photos, notes, volunteering, etc.).
- **Visual weight:** Low (secondary content)
- **Destination:** Say Hi links go to external sites or Resume PDF. Life widget cards link to their respective pages.

### ASCII Wireframe (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Nav: Home  Projects  Experience  Life  About]        [Resume ↓]           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────────────────┐  ┌──────────────┐                        │
│  │                              │  │              │                        │
│  │  Jonathan Ong                │  │   [Photo]    │                        │
│  │  Data Eng · AI Eng · MLOps   │  │              │                        │
│  │  I build reliable systems    │  │              │                        │
│  │  across data, AI and cloud.  │  │              │                        │
│  │                              │  │              │                        │
│  │  [View Projects] [Resume]    │  │              │                        │
│  │                              │  │              │                        │
│  └──────────────────────────────┘  └──────────────┘                        │
│                                                                             │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐        │
│  │  NOW                         │  │  FEATURED PROJECT 1          │        │
│  │  AI & Data Eng Intern        │  │  [Straight Screenshot]       │        │
│  │  @ IRAS Singapore            │  │  All-In-One                  │        │
│  │  • SAS-to-PySpark            │  │  Team Collaboration Tool     │        │
│  │  • Data Validation           │  │  AWS Amplify · CI/CD         │        │
│  │  • Azure ML                  │  │  [Tags]                      │        │
│  │                              │  │                              │        │
│  └──────────────────────────────┘  └──────────────────────────────┘        │
│                                                                             │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐        │
│  │  FEATURED PROJECT 2          │  │  FEATURED PROJECT 3          │        │
│  │  [Straight Screenshot]       │  │  [Straight Screenshot]       │        │
│  │  Menswear                    │  │  Internship Tracker          │        │
│  │  Microservices E-commerce    │  │  Python · Notion API         │        │
│  │  AWS ECS/Fargate             │  │  FastAPI · AWS Lambda        │        │
│  │  [Tags]                      │  │  [Tags]                      │        │
│  └──────────────────────────────┘  └──────────────────────────────┘        │
│                                                                             │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐        │
│  │  TECH STACK                  │  │  CURRENTLY INTO              │        │
│  │  Data: PySpark, SQL, Pandas  │  │  📖 Reading: DDIA            │        │
│  │  ML: Azure ML, pytest        │  │  🏃 Running: 12km this week  │        │
│  │  Cloud: Azure, AWS, Docker   │  │  🎯 Goal: PySpark Cert       │        │
│  │  DB: MongoDB, PostgreSQL     │  │                              │        │
│  └──────────────────────────────┘  └──────────────────────────────        │
│                                                                             │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐        │
│  │  SAY HI                      │  │  OUTSIDE THE TERMINAL        │        │
│  │  [Resume] [GitHub]           │  │  [Photos] [Notes]            │        │
│  │  [LinkedIn] [Email]          │  │  [Volunteering]              │        │
│  └──────────────────────────────┘  └──────────────────────────────┘        │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  © Jonathan Ong 2026                                                  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Semantic Reading Order (Independent of Visual Grid)

1. **Nav:** Home, Projects, Experience, Life, About, Resume
2. **Identity:** Name, positioning tagline, supporting sentence, CTAs
3. **Photo:** Personal photograph (decorative, no semantic content)
4. **Now:** Current role, company, focus areas
5. **Featured Project 1:** Title, description, tech tags, link
6. **Featured Project 2:** Title, description, tech tags, link
7. **Featured Project 3:** Title, description, tech tags, link
8. **Tech Stack:** Categorized technology list
9. **Currently Into:** Reading, running, goal
10. **Say Hi:** Resume, GitHub, LinkedIn, Email links
11. **Outside the Terminal:** Life widget cards
12. **Footer:** Copyright

---

## 7. Desktop Wireframe

See Section 6 for the ASCII wireframe. The wireframe shows a 6-column grid layout with the following structure:

- **Row 1:** Identity card (4 columns) + Photo card (2 columns)
- **Row 2:** Now card (3 columns) + Featured Project 1 (3 columns)
- **Row 3:** Featured Project 2 (3 columns) + Featured Project 3 (3 columns)
- **Row 4:** Tech Stack (3 columns) + Currently Into (3 columns)
- **Row 5:** Say Hi (3 columns) + Outside the Terminal (3 columns)
- **Footer:** Full-width copyright

The grid uses a maximum content width of approximately 1200px (max-w-6xl in Tailwind). Card gaps are 16px. Card padding is 24px (p-6). Card border radius is 20px (rounded-[20px] or rounded-3xl).

---

## 8. Project Presentation Strategy

### Homepage Project Cards

Homepage project cards should be visually concise but information-rich. Each card should include:

- **Straight screenshot** (not slanted) with a subtle border or shadow
- **Project title** (bold, 16-18px)
- **One-line description** (14px, muted) that communicates the problem or user need
- **Tech tags** (small, pill-style) showing the core stack
- **Hover state** that reveals a "View Project" link or arrow

The homepage card should NOT include:

- Detailed architecture diagrams
- Full technical descriptions
- Outcome metrics (save these for the project detail page)

### Project Detail Pages

Project detail pages should provide stronger technical depth:

- **Problem or user need:** What problem does this project solve? Who is it for?
- **Jonathan's role:** What did Jonathan specifically contribute? (e.g., "Led end-to-end deployment", "Built CI/CD pipeline")
- **Technical architecture or stack:** What technologies were used and why? Include an architecture diagram if available.
- **Meaningful contribution:** What was the impact? (e.g., "Cut release time 70%", "Eliminated 100% of manual entry")
- **Engineering challenges:** What was difficult? How was it solved?
- **Outcome or learning:** What was the result? What did Jonathan learn?
- **Repository, demo, or case-study links:** Where can the visitor see more?

### Balancing Conciseness and Depth

The homepage should remain visually concise by:

- Limiting to 3 featured projects
- Using one-line descriptions
- Showing only core tech tags (3-5)
- Using straight, clear screenshots

The project detail pages should provide depth by:

- Using a structured layout with clear sections
- Including architecture diagrams and code snippets where relevant
- Providing full technical descriptions
- Linking to repositories and demos

### Recommended Project Selection

For the homepage, select 3 projects that demonstrate:

1. **Cloud/DevOps capability:** All-In-One (AWS Amplify, CI/CD, Terraform)
2. **Microservices/Architecture capability:** Menswear (AWS ECS/Fargate, multi-database)
3. **AI/Automation capability:** Internship Tracker (Python, Notion API, AWS Lambda) or RAG Chatbot (RAG, Llama, VectorDB)

Consider replacing one project with the RAG Chatbot to strengthen the AI engineering positioning.

---

## 9. Visual System Recommendations

### Colour Roles

| Role                   | Current Value              | Recommendation                                        |
| ---------------------- | -------------------------- | ----------------------------------------------------- |
| Background             | #F7F5EF (warm cream)       | Keep. Warm and distinctive.                           |
| Card background        | #FDFCF9 (card cream)       | Keep. Subtle contrast with background.                |
| Card accent background | #F2F8F4 (mint)             | Keep for accent cards (Say Hi, Currently Into).       |
| Primary text           | #0E2418 (forest green)     | Keep. Strong contrast on cream.                       |
| Secondary text         | #5A6B61 (muted green-gray) | Keep but verify contrast (4.7:1 on cream, passes AA). |
| Accent                 | #0FA36B (green)            | Keep. Use for CTAs, links, and highlights.            |
| Border                 | rgba(14, 36, 24, 0.06)     | Keep. Subtle, warm border.                            |
| Border hover           | rgba(14, 36, 24, 0.12)     | Keep. Subtle hover state.                             |

### Typography Roles

| Role           | Font             | Size    | Weight          | Usage                                    |
| -------------- | ---------------- | ------- | --------------- | ---------------------------------------- |
| Display (name) | Manrope          | 36-48px | 800 (extrabold) | Hero name                                |
| Heading 1      | Manrope          | 24-28px | 700 (bold)      | Section headings                         |
| Heading 2      | Manrope          | 18-20px | 700 (bold)      | Card titles                              |
| Heading 3      | Manrope          | 16px    | 600 (semibold)  | Subheadings                              |
| Body           | Manrope          | 14-16px | 400-500         | Body text                                |
| Small          | Manrope          | 12-13px | 500             | Tags, labels                             |
| Serif heading  | Instrument Serif | 20-24px | 400 (italic)    | Section labels ("Currently into", "Now") |

### Type Scale

Use a modular type scale based on a 1.25 ratio:

- 12px (small)
- 14px (body small)
- 16px (body)
- 20px (heading 3)
- 24px (heading 2)
- 32px (heading 1)
- 40px (display)

Avoid intermediate sizes (e.g., 13px, 15px, 18px) unless necessary for specific components.

### Border Radius Strategy

- **Cards:** 20px (rounded-3xl or rounded-[20px]). Consistent across all cards.
- **Buttons/CTAs:** 12px (rounded-xl). Slightly tighter than cards.
- **Tags/pills:** 9999px (rounded-full). Fully rounded.
- **Images:** 16px (rounded-2xl). Slightly tighter than cards.
- **Avoid:** Mixing radius sizes within the same component type.

### Card Spacing

- **Internal padding:** 24px (p-6) for all cards. Consistent.
- **Gap between cards:** 16px. Consistent.
- **Section spacing:** 24px (mt-6) between rows. Consistent.
- **Avoid:** Varying padding or gaps between cards.

### Grid and Gap Strategy

- **Desktop:** 6-column grid, max-width 1200px (max-w-6xl).
- **Tablet:** 4-column grid, max-width 800px.
- **Mobile:** 1-column grid, full-width with 16px side padding.
- **Gap:** 16px between cards at all breakpoints.

### Maximum Content Width

- **Desktop:** 1200px (max-w-6xl). Centered.
- **Tablet:** 800px. Centered.
- **Mobile:** Full-width with 16px side padding.

### Image Aspect Ratios

- **Personal photo:** 3:4 (portrait). Cropped to fit card.
- **Project screenshots:** 16:9 (landscape). Straight, not slanted.
- **Life widget images:** Varies by content. Use object-cover.

### Icon Style

- **Style:** Minimal, line or filled icons. Consistent stroke width (1.5-2px).
- **Source:** Use a single icon library (e.g., Lucide, Heroicons). Avoid mixing sources.
- **Size:** 16-20px for inline icons, 24px for standalone icons.
- **Color:** Inherit from parent text color. Use accent color for interactive icons.

### Border and Shadow Usage

- **Border:** 1px solid rgba(14, 36, 24, 0.06) on all cards. Subtle, warm.
- **Shadow:** 0 2px 12px rgba(14, 36, 24, 0.03) on all cards. Very subtle.
- **Hover border:** 1px solid rgba(14, 36, 24, 0.12). Slightly darker.
- **Hover shadow:** 0 4px 24px rgba(14, 36, 24, 0.05). Slightly deeper.
- **Avoid:** Heavy shadows, multiple shadow layers, or shadow on hover only.

### Hover and Focus States

- **Card hover:** Slight border darkening + shadow deepening. No scale or translate.
- **Button hover:** Background color change (e.g., accent to darker accent). No scale.
- **Link hover:** Underline or color change. No scale.
- **Focus state:** Visible outline (2px solid accent color) for keyboard navigation.
- **Avoid:** Scale transforms, rotate transforms, or heavy animations on hover.

### Motion Principles

- **Duration:** 200-300ms for hover states, 400-500ms for page transitions.
- **Easing:** ease-out for hover states, ease-in-out for page transitions.
- **Reduced motion:** Respect prefers-reduced-motion. Disable all non-essential animations.
- **Avoid:** Continuous animations (e.g., rotating sphere), parallax effects, or scroll-triggered animations that are not essential.

---

## 10. Responsive Behaviour

### Large Desktop (1440px+)

- **Layout:** 6-column grid, max-width 1200px, centered.
- **Card order:** As per wireframe (Identity → Photo → Now → Projects → Tech Stack → Currently Into → Say Hi → Outside the Terminal).
- **Navigation:** Horizontal nav bar with all links visible.
- **Images:** Full-resolution screenshots. No cropping.

### Standard Laptop (1024px - 1439px)

- **Layout:** 6-column grid, max-width 1200px, centered. Same as large desktop.
- **Card order:** Same as large desktop.
- **Navigation:** Horizontal nav bar. May wrap if screen is narrow.
- **Images:** Full-resolution screenshots. No cropping.

### Tablet (768px - 1023px)

- **Layout:** 4-column grid, max-width 800px, centered.
- **Card order:**
  - Row 1: Identity (4 cols)
  - Row 2: Photo (2 cols) + Now (2 cols)
  - Row 3: Featured Project 1 (4 cols)
  - Row 4: Featured Project 2 (2 cols) + Featured Project 3 (2 cols)
  - Row 5: Tech Stack (2 cols) + Currently Into (2 cols)
  - Row 6: Say Hi (2 cols) + Outside the Terminal (2 cols)
- **Navigation:** Horizontal nav bar. May collapse to hamburger if needed.
- **Images:** Screenshots may be cropped to fit. Use object-cover.

### Mobile (320px - 767px)

- **Layout:** 1-column grid, full-width with 16px side padding.
- **Card order (intentional, not arbitrary):**
  1. Identity (name, tagline, supporting sentence, CTAs)
  2. Now (current role, company, focus areas)
  3. Featured Project 1
  4. Featured Project 2
  5. Featured Project 3
  6. Tech Stack
  7. Currently Into
  8. Say Hi
  9. Outside the Terminal
  10. Footer
- **Navigation:** Hamburger menu or horizontal scrollable nav. Resume link should be prominent.
- **Images:** Screenshots cropped to 16:9. Personal photo cropped to 1:1 or 3:4.
- **Touch targets:** Minimum 44px height for all interactive elements.
- **Text sizes:** Minimum 14px for body text. Minimum 16px for headings.

### Decorative Elements to Remove on Mobile

- Custom cursor (already hidden on mobile)
- Tech sphere animation (replace with static list)
- Heavy hover effects (simplify to color change only)
- Slanted images (use straight images on all breakpoints)

---

## 11. Accessibility and Usability

### Text Contrast

- **Primary text (#0E2418 on #F7F5EF):** Contrast ratio ~15:1. Passes AAA.
- **Secondary text (#5A6B61 on #F7F5EF):** Contrast ratio ~4.7:1. Passes AA for normal text.
- **Accent text (#0FA36B on #F7F5EF):** Contrast ratio ~3.5:1. Fails AA for normal text. Use only for large text (18px+) or decorative elements.
- **Recommendation:** Ensure all body text meets AA (4.5:1). Use accent color only for large text or decorative elements.

### Keyboard Navigation

- **Current state:** The grid layout uses react-grid-layout, which may not be fully keyboard-navigable.
- **Recommendation:** Ensure all interactive elements (cards, links, buttons) are focusable and navigable by keyboard. Add visible focus states (2px solid accent color outline).

### Visible Focus States

- **Current state:** No visible focus states are defined.
- **Recommendation:** Add `:focus-visible` styles for all interactive elements. Use a 2px solid accent color outline with 2px offset.

### Semantic Headings

- **Current state:** Uses h1 for name, h3 for section headings. This is reasonable.
- **Recommendation:** Ensure heading hierarchy is logical (h1 → h2 → h3). Use h2 for section headings ("Featured Projects", "Outside the Terminal") instead of h3.

### Link Clarity

- **Current state:** Links are styled with color changes on hover. Some links open in new tabs without indication.
- **Recommendation:** Add visual indication for external links (e.g., external link icon). Ensure all links have clear, descriptive text.

### Alternative Text

- **Current state:** Alt text is present on images but may be generic (e.g., "Jonathan Ong" for the photo).
- **Recommendation:** Use descriptive alt text for meaningful images (e.g., "Jonathan Ong smiling outdoors in winter clothing"). Use empty alt text for decorative images.

### Reduced-Motion Support

- **Current state:** The tech sphere has a continuous animation. The custom cursor is hidden on mobile.
- **Recommendation:** Respect `prefers-reduced-motion`. Disable the tech sphere animation, custom cursor, and all non-essential animations when reduced motion is preferred.

### Touch Targets

- **Current state:** Navigation pills and card links may be smaller than 44px on mobile.
- **Recommendation:** Ensure all interactive elements have a minimum touch target of 44px × 44px.

### Readability

- **Current state:** Body text is 14-16px with good line height.
- **Recommendation:** Maintain 14-16px body text with 1.5-1.6 line height. Ensure line length is 45-75 characters for optimal readability.

### Decorative vs. Meaningful Imagery

- **Current state:** The personal photo is meaningful. Project screenshots are meaningful. The tech sphere is decorative.
- **Recommendation:** Keep meaningful imagery. Remove or replace decorative imagery (tech sphere) with substantive content.

---

## 12. Content and Copy Guidance

### Hero Wording Assessment

**Current:** "Jonathan Ong" + "Data Engineering · AI Engineering · MLOps · Cloud" + "I build reliable systems across data, AI and cloud."

**Assessment:** The current hero wording is clear but generic. It communicates what Jonathan does but not what makes him distinctive. The supporting sentence ("I build reliable systems...") is a common phrase that does not differentiate.

**Recommendation:** Keep the name and tagline. Revise the supporting sentence to be more specific and distinctive. For example: "Information Systems undergraduate building data pipelines, ML systems, and cloud infrastructure. Currently focused on SAS-to-PySpark migration and Azure ML at IRAS Singapore."

### Job-Positioning Structure

- **Primary positioning:** Data Engineering · AI Engineering · MLOps · Cloud (keep as-is)
- **Supporting sentence:** One sentence that communicates current focus, education status, and a distinctive element.
- **Avoid:** Generic phrases like "passionate about", "enthusiastic", or "love building".

### Supporting Sentence's Role

The supporting sentence should:

- Communicate current status (undergraduate, intern)
- Highlight current focus or project
- Provide a reason to keep reading
- Be specific and concrete

### Primary and Secondary Calls to Action

- **Primary CTA:** "View Projects" (links to Projects section or page). Visually distinct (filled button, accent color).
- **Secondary CTA:** "Download Resume" (links to Resume PDF). Less prominent (outline button or text link).
- **Tertiary CTAs:** GitHub, LinkedIn, Email (grouped in Say Hi card).

### Amount of Hero Copy

- **Name:** 1 line
- **Tagline:** 1 line
- **Supporting sentence:** 1-2 lines
- **CTAs:** 2 buttons
- **Total:** 4-5 lines maximum

### How Personal Copy Can Sound Genuine

- Use specific details (e.g., "Reading Designing Data-Intensive Applications" instead of "Reading technical books")
- Use active voice (e.g., "Building data pipelines" instead of "Interested in data pipelines")
- Avoid clichés (e.g., "passionate about", "love building", "always learning")
- Use concrete numbers where appropriate (e.g., "12km this week" instead of "Running regularly")

### Where Writing and Learning Should Appear

- **Homepage:** Brief "Currently into" card with 2-3 items (reading, running, goal). Link to a full Learning or Writing page.
- **Dedicated page:** Full list of technical notes, monthly writing, certifications, and current learning.

### Homepage vs. Dedicated Pages

- **Homepage:** Identity, positioning, current role, 3 featured projects, tech stack summary, currently into, contact links.
- **Projects page:** Full list of projects with detailed descriptions, architecture diagrams, and links.
- **Experience page:** Full work history with detailed descriptions, achievements, and skills.
- **Life page:** Full list of interests, hobbies, volunteering, photos, and personal content.
- **About page:** Longer bio, education, philosophy, and personal story.
- **Resume:** PDF download link.

---

## 13. Keep, Change, Remove

### Keep

| Item                                   | Rationale                                                          |
| -------------------------------------- | ------------------------------------------------------------------ |
| Cream-and-green color palette          | Warm, distinctive, and appropriate for an engineering portfolio.   |
| Personal photograph                    | Friendly and genuine. Adds personality.                            |
| Manrope + Instrument Serif typography  | Distinctive pairing. Serif italic headings create editorial voice. |
| "Currently into" card concept          | Reveals personality through curated content.                       |
| "Outside the terminal" section concept | Shows life outside coding.                                         |
| "Now" card concept                     | Communicates current professional context.                         |
| "Say Hi" card concept                  | Clear contact options.                                             |
| Modular card approach                  | Flexible and visually interesting.                                 |
| Project modal detail pattern           | Allows concise homepage cards with detailed project pages.         |

### Change

| Item                                   | Rationale                                                                          |
| -------------------------------------- | ---------------------------------------------------------------------------------- |
| Hero size and content density          | Too large for the amount of content. Reduce size, increase density.                |
| Project visibility and image treatment | Projects are below fold with slanted images. Move above fold, use straight images. |
| Navigation pattern                     | Filter pills are non-standard. Replace with standard nav links.                    |
| Tech sphere                            | Decorative, communicates little. Replace with substantive content.                 |
| Custom cursor                          | Gimmicky, serves no functional purpose. Remove.                                    |
| Card style consistency                 | Multiple card styles create fragmentation. Unify card styles.                      |
| Mobile card order                      | Arbitrary stacking order. Define intentional mobile order.                         |
| Hover animations                       | Heavy animations (slant, scale, rotate) are distracting. Simplify.                 |

### Remove or Avoid

| Item                        | Rationale                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------- |
| 3D rotating tech sphere     | Decorative, no substance. Replaced by concise tech stack list.                      |
| Custom cursor               | Gimmicky, accessibility concern. Removed entirely.                                  |
| Slanted project screenshots | Obscures content, prioritizes flair over clarity. Replaced by straight screenshots. |
| Filter-pill navigation      | Non-standard, confusing. Replaced by standard nav links.                            |
| Large empty cards           | Wastes space, low information density. Replaced by denser cards.                    |
| Heavy hover animations      | Distracting, may cause motion sickness. Simplified to color/border changes.         |
| Generic hero copy           | Does not differentiate. Replaced by specific, concrete copy.                        |
| Multiple card styles        | Creates visual fragmentation. Unified to one card style.                            |

---

## 14. Prioritised Requirements

### P0: Essential for the Redesign

| Requirement                                                   | Rationale                                                 | Acceptance Criteria                                                                                                          | Dependencies             | Relevant Page/Component          | Reference                     |
| ------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------- | ----------------------------- |
| Reduce hero row height and increase information density       | Current hero uses 40% of first screen for minimal content | Hero row is 3 rows tall (not 5). Contains name, tagline, supporting sentence, photo, and 2 CTAs                              | None                     | IdentityCard, PhotoCard, App.tsx | Yan hero, Marco hero          |
| Move project cards into the bento grid (above fold)           | Projects are currently below fold, reducing visibility    | At least 2 project cards appear in rows 2-3 of the grid                                                                      | Project card redesign    | App.tsx, ProjectMiniCard         | Yan projects, Janani projects |
| Replace slanted project screenshots with straight screenshots | Slanted images obscure content and are hard to read       | Project screenshots are straight (no rotation). Hover effect is subtle (border/shadow change only)                           | ProjectMiniCard redesign | ProjectMiniCard                  | Yan project images            |
| Replace tech sphere with concise tech stack list              | Tech sphere is decorative and communicates little         | Tech Stack card shows categorized technology list (Data, ML, Cloud, DB) with 3-4 items per category                          | TechSphere replacement   | TechSphere or new component      | Marco tools section           |
| Replace filter-pill navigation with standard nav links        | Filter pills are non-standard and confusing               | Nav bar has standard links: Home, Projects, Experience, Life, About, Resume                                                  | Nav redesign             | App.tsx nav                      | Janani nav, Yan nav           |
| Establish clear primary CTA                                   | No single CTA stands out, reducing conversion             | Primary CTA ("View Projects") is visually distinct (filled button, accent color). Secondary CTA ("Resume") is less prominent | Hero redesign            | IdentityCard                     | Yan CTAs                      |

### P1: Important Enhancement

| Requirement                                                 | Rationale                                                                    | Acceptance Criteria                                                                                                                           | Dependencies           | Relevant Page/Component       | Reference                 |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------- | ------------------------- |
| Unify card styles across all sections                       | Multiple card styles create visual fragmentation                             | All cards use the same border radius (20px), border (1px solid rgba(14,36,24,0.06)), and hover behavior (border darkening + shadow deepening) | None                   | All card components           | Janani cards, Yan cards   |
| Define intentional mobile card order                        | Current mobile order is arbitrary (grid stacking order)                      | Mobile card order is: Identity → Now → Projects → Tech Stack → Currently Into → Say Hi → Outside the Terminal                           | Responsive grid config | App.tsx breakpoints           | Janani mobile, Yan mobile |
| Add visible focus states for keyboard navigation            | No focus states defined, reducing accessibility                              | All interactive elements have visible focus state (2px solid accent color outline with 2px offset)                                            | CSS updates            | index.html styles             | WCAG 2.4.7                |
| Revise hero copy to be more specific and distinctive        | Current copy is generic and does not differentiate                           | Supporting sentence includes specific details (education status, current focus, company). Avoids clichés.                                    | Copy revision          | IdentityCard                  | Marco copy                |
| Reduce card padding and gaps to increase content density    | Current spacing is generous but reduces content density                      | Card padding is 24px (p-6). Grid gap is 16px. Section spacing is 24px (mt-6).                                                                 | CSS updates            | All card components           | Janani spacing            |
| Add reduced-motion support for animations                   | Tech sphere and other animations may cause issues for motion-sensitive users | All non-essential animations are disabled when prefers-reduced-motion is true                                                                 | CSS updates            | index.html styles, TechSphere | WCAG 2.3.3                |
| Replace "Say Hi" card hover animations with simpler effects | Current hover animations (rotate, translate) are distracting                 | Hover effect is color change only (no rotate, no translate). Duration is 200-300ms.                                                           | SayHiCard update       | SayHiCard                     | Janani Say Hi             |

### P2: Optional Polish

| Requirement                            | Rationale                                                    | Acceptance Criteria                                                                                          | Dependencies          | Relevant Page/Component   | Reference             |
| -------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | --------------------- | ------------------------- | --------------------- |
| Rationalize type scale to 5-6 sizes    | Current type scale has too many sizes, creating visual noise | Type scale uses 6 sizes: 12px, 14px, 16px, 20px, 24px, 32px, 40px. No intermediate sizes.                    | CSS updates           | index.html styles         | Marco typography      |
| Add external link indicators           | External links open in new tabs without indication           | External links have a visual indicator (external link icon or text).                                         | Link component update | All link components       | Standard pattern      |
| Improve alt text for images            | Current alt text may be generic                              | All meaningful images have descriptive alt text. Decorative images have empty alt text.                      | Image updates         | All image components      | WCAG 1.1.1            |
| Add project detail pages               | Current project modals are limited                           | Each featured project has a dedicated detail page with problem, role, stack, challenges, outcome, and links. | New pages             | ProjectModal or new pages | Yan project pages     |
| Add Learning/Writing page              | Currently no dedicated page for learning content             | Dedicated page lists technical notes, monthly writing, certifications, and current learning.                 | New page              | New page                  | Janani interests list |
| Verify all text meets WCAG AA contrast | Some text may be borderline                                  | All body text has contrast ratio >= 4.5:1. All large text has contrast ratio >= 3:1.                         | Color verification    | index.html styles         | WCAG 1.4.3            |

---

## 15. Risks and Anti-patterns

### Copying One Reference Too Closely

**Risk:** The portfolio may lose Jonathan's distinctive identity and feel like a clone of Janani, Yan, or Marco.
**Mitigation:** Use references for specific mechanisms (e.g., Yan's project-first hierarchy, Janani's interests list, Marco's editorial voice), not for overall layout or aesthetic.

### Producing a Generic Bento Template

**Risk:** The portfolio may feel like a template with Jonathan's content plugged in, lacking personality.
**Mitigation:** Ensure each card has a clear communication purpose. Avoid filler cards. Use specific, concrete content (not generic placeholders).

### Making the Site Look Like a Product Designer Portfolio

**Risk:** Heavy use of visual effects (slanted images, 3D animations, custom cursor) may make the site feel like a design portfolio rather than an engineering portfolio.
**Mitigation:** Prioritize clarity over decoration. Use straight screenshots, concise technical descriptions, and minimal visual effects.

### Hiding Technical Substance Behind Decorative Cards

**Risk:** The tech sphere and other decorative elements may obscure the actual technical content.
**Mitigation:** Replace decorative elements with substantive content (e.g., tech stack list, project highlights). Ensure every card communicates something meaningful.

### Excessive Animations

**Risk:** Continuous animations (rotating sphere, custom cursor, heavy hover effects) may be distracting, cause motion sickness, or reduce performance.
**Mitigation:** Limit animations to hover states (200-300ms). Respect prefers-reduced-motion. Remove continuous animations.

### Too Many Card Styles

**Risk:** Using different card styles for different sections creates visual fragmentation.
**Mitigation:** Use one card style throughout (same border radius, border, shadow, hover behavior). Differentiate sections through content and layout.

### Weak Mobile Ordering

**Risk:** Stacking desktop cards in arbitrary order on mobile may bury important content (e.g., projects) below less important content (e.g., personal interests).
**Mitigation:** Define an intentional mobile card order that prioritizes: Identity → Now → Projects → Tech Stack → Currently Into → Say Hi → Outside the Terminal.

### Poor Colour Contrast

**Risk:** The accent color (#0FA36B) may not meet WCAG AA contrast requirements for normal text.
**Mitigation:** Verify all text meets WCAG AA (4.5:1 for normal text, 3:1 for large text). Use accent color only for large text or decorative elements.

### Oversized Empty Hero Areas

**Risk:** The current hero uses 40% of the first screen for minimal content, reducing information density.
**Mitigation:** Reduce hero row height. Increase information density with specific, concrete content.

### Overloading the Homepage with Every Detail

**Risk:** Trying to include all content on the homepage may create a cluttered, overwhelming experience.
**Mitigation:** Keep the homepage concise (identity, current role, 3 projects, tech stack, currently into, contact). Move detailed content to dedicated pages.

### Publishing Confidential Work Information

**Risk:** The "Now" card or project descriptions may expose confidential internship information, internal systems, or proprietary details.
**Mitigation:** Review all content for confidential information. Use generic descriptions for internal projects (e.g., "Internal AI tool" instead of specific system names). Avoid screenshots of internal systems.

---

## 16. Assumptions and Open Questions

### Assumptions

1. **Jonathan is an undergraduate seeking internships or entry-level roles.** The portfolio should prioritize project evidence and technical credibility to appeal to recruiters and hiring managers.
2. **The cream-and-green palette is intentional and should be preserved.** It is warm, distinctive, and appropriate for an engineering portfolio.
3. **The bento card layout is the desired structural approach.** It provides flexibility for mixing professional and personal content.
4. **Project screenshots are available and can be used.** The current site has screenshots for All-In-One, Menswear, and Internship Tracker. Additional screenshots may be needed for other projects.
5. **The site is built with React, Tailwind CSS, and react-grid-layout.** Recommendations assume this tech stack will be retained.
6. **The personal photograph is appropriate and should be kept.** It is friendly, genuine, and adds personality.
7. **Jonathan's internship at IRAS Singapore is current and should be highlighted.** The "Now" card communicates this effectively.

### Open Questions

1. **Should the RAG Chatbot project be featured on the homepage?** It is relevant to Jonathan's AI engineering focus but may not have a polished screenshot.
2. **Should there be a dedicated Learning/Writing page?** The current site has a "Currently into" card but no dedicated page for technical notes or monthly writing.
3. **Should the "Outside the terminal" section include more personal content?** The current life widgets (photos, notes, volunteering) are good but may need expansion.
4. **Should the navigation include a Blog or Writing link?** If Jonathan plans to publish monthly technical writing, a dedicated link may be appropriate.
5. **Should the resume be a PDF download or a dedicated page?** The current site links to a PDF. A dedicated page may provide more flexibility.
6. **Should the site include a dark mode?** The current site has some dark mode styles but they are not fully implemented. Dark mode may be a nice enhancement but is not essential.
7. **Should the site include analytics or tracking?** This is a personal decision but may be relevant for understanding visitor behavior.
8. **Should the site be deployed on a custom domain with HTTPS?** The current site is on jonongca.com, which is good. Ensure HTTPS is enabled.
