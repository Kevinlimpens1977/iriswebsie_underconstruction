# IMPLEMENTATION PLAN — ACT 1 REFINEMENT

**Status:** Awaiting Approval  
**Date:** 2026-01-08  
**Scope:** ACT 1 Only

---

## 1. Scope of Change

**What is adjusted:**
- `.hero__content` container (title, subtitle, accent text positioning)
- `.hero__headline` ("De Deur Wacht") typography constraints
- `.hero__subline` and `.hero__accent` contrast/color values
- `.act1-cta` positioning and visibility
- `.hero__portal-layer` (smoke video) positioning and masking
- `.hero__overlay` gradient to improve text contrast

**What is explicitly NOT touched:**
- ACT 2 (Door, Invitation, POV, End Screens) — completely isolated
- Transition logic (`transition.js`) — click-to-start behavior preserved
- Background image (`.hero__background`) — no changes
- HTML structure — no elements added or removed
- Text content — no words changed, shortened, or hidden

---

## 2. Title Handling Strategy

**Goal:** "De Deur Wacht" must always render on ONE line, even on 320px screens.

**Approach:**
- Apply `white-space: nowrap` to `.hero__headline` to prevent line breaks
- Use viewport-width-based font sizing: `font-size: clamp(1.4rem, 10vw, 3.5rem)`
  - Minimum: 1.4rem (~22px) fits "De Deur Wacht" on 320px with 8vw margins
  - Maximum: 3.5rem for large screens
- Remove any `max-width` constraints on the headline that could force wrapping
- Validate: At 320px viewport, title must fit within 84vw (8vw margin each side)

**Safety:**
- No truncation (`text-overflow: ellipsis` is NOT used)
- No hiding (`overflow: hidden` is NOT applied to text containers)

---

## 3. Vertical Layout & Hierarchy

**Goal:** Move title/subtitle block higher in the viewport for better visual balance.

**Current state:** Content block is vertically centered or slightly low.

**Approach:**
- Adjust `.hero__content` vertical positioning from `transform: translateY(-15vh)` to approximately `translateY(-25vh)` (or equivalent)
- Alternative: Use `top: 35%` with `transform: translateY(-50%)` for explicit control
- Ensure the content block sits in the upper-center third of the screen (approximately 30-40% from top)

**Visual balance:**
- Title occupies upper-center
- Subtitle sits directly below
- Accent text ("Binnenkort...") follows with natural spacing
- CTA remains in lower-center area (separate from content block)
- Smoke and artworks occupy bottom third

---

## 4. CTA Visibility & Interaction

**Goal:** CTA ("Durf jij dichter bij te komen?" / "Klik om dichterbij te komen") is always visible, readable, and tappable on mobile.

**Approach:**
- Position `.act1-cta` with fixed bottom offset: `bottom: 15vh` (or similar) to keep it above smoke
- Ensure minimum touch target: `min-height: 44px`, `padding: 12px 24px`
- Apply `z-index: 250` to guarantee CTA sits above smoke layer (z-index 200)
- Increase contrast: Off-white text with subtle text-shadow for readability over smoke

**Interaction safety:**
- `pointer-events: auto` on CTA container
- Smoke layer remains `pointer-events: none`
- Click handler in `transition.js` attaches to `document`, so any click triggers transition — CTA is visual guidance only

---

## 5. Text Readability Improvements

**Goal:** Increase text brightness/contrast while preserving elegant, mysterious mood.

**Approach:**
- Headline: Increase color from current off-white to `#F5F0F5` or `#FFFAF5` (warm bright)
- Subtitle: Increase opacity from ~0.7 to ~0.85
- Accent text: Increase opacity from ~0.6 to ~0.75
- CTA: Use `#FFF8F0` (warm white) with `text-shadow: 0 0 10px rgba(0,0,0,0.5)` for lift

**Overlay adjustment:**
- Darken `.hero__overlay` gradient in the CENTER (where text sits) to create contrast pocket
- Keep overlay lighter/transparent at bottom where smoke obscures anyway

**Validation:**
- Test on low-brightness mobile screens
- Ensure WCAG AA contrast ratio (4.5:1) for body text

---

## 6. Smoke & Background Control

**Goal:** Constrain smoke to LOWER portion of screen only. Artworks at bottom must remain visible.

**Current state:** `.hero__portal-layer` video covers full viewport.

**Approach:**
- Apply CSS mask or clip-path to `.hero__portal-layer`:
  - `clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%)` — smoke visible only in bottom 40%
  - OR use `mask-image: linear-gradient(to top, black 40%, transparent 60%)` for soft fade
- Reduce smoke opacity in active state from 0.12 to 0.08 to ensure visibility of elements behind
- Ensure smoke layer does not interfere with text (text sits above 40% line)

**Artwork visibility:**
- If artworks exist in `.hero__background`, ensure smoke gradient allows them to show
- If artworks are separate elements, ensure their `z-index` is above smoke layer

**Critical:** Smoke must NEVER rise into the title/subtitle area.

---

## 7. Mobile-First Validation

**Viewport targets:**
- 320px × 568px (iPhone SE / smallest common)
- 375px × 667px (iPhone 8)
- 390px × 844px (iPhone 12/13/14)

**Validation checklist:**
1. Title "De Deur Wacht" fits on single line at 320px
2. Title + subtitle + accent visible without scrolling
3. CTA visible and tappable without being obscured by smoke
4. Smoke remains in bottom 40% only
5. No text overlap, truncation, or ellipsis
6. Touch targets meet 44px minimum

**If space is limited:**
- Font sizes scale down via `clamp()` — never truncate
- Vertical spacing reduces proportionally via `vh` units
- Smoke area shrinks proportionally (percentage-based constraint)

---

## 8. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Title wraps on very narrow screens | `white-space: nowrap` + aggressive `clamp()` minimum |
| CTA hidden behind smoke | `z-index: 250` for CTA, smoke capped at z-index 200 |
| Smoke interferes with title | Smoke constrained to bottom 40% via `clip-path` or `mask` |
| Text too bright, breaks mood | Use warm-white tones, not pure white; test in context |
| Transition behavior breaks | No changes to `transition.js` logic; only CSS adjustments |
| ACT 2 affected | All changes scoped to `.hero` and `.hero__*` selectors only |
| Artworks obscured | Smoke opacity reduced; mask ensures visibility in lower region |

---

## Summary

This plan refines ACT 1 through **CSS-only adjustments** to:
- Force single-line title via `nowrap` + responsive `clamp()`
- Elevate content block via `translateY()` adjustment
- Boost text contrast via brighter color values and overlay tweaks
- Constrain smoke to bottom 40% via `clip-path` or `mask`
- Guarantee CTA visibility via z-index and positioning

**No JavaScript changes. No HTML changes. No ACT 2 impact.**

---

## Approval

- [x] Plan approved for implementation
- [x] Implementation completed (2026-01-08 23:46)

---

## Changes Applied

| Target | Change |
|--------|--------|
| `.hero__overlay` | Contrast pocket gradient (darker in center, lighter at bottom) |
| `.hero__portal-layer` | Smoke confined to bottom 40% via `mask-image`, opacity increased to 0.08 |
| `.hero__content` | Repositioned to `top: 35%` with `transform: translate(-50%, -50%)` |
| `.hero__headline` | Added `white-space: nowrap`, font-size `clamp(1.4rem, 10vw, 4.2rem)`, color `#F5F0F5` |
| `.hero__subline` | Removed truncation rules, increased contrast, color `#F5F0F5`, opacity 0.85 |
| `.hero__accent` | Opacity increased to 0.80, added text-shadow |
| `.act1-cta` | Moved to `bottom: 15vh`, `z-index: 250`, touch target 44px, warm white color |
