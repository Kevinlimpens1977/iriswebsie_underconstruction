# ACT 1 → ACT 2 TRANSITION — IMPLEMENTATION PLAN (ROUTE A: SMOKE MASK)

**Status:** Refinements Applied — Awaiting Final GO  
**Strategy:** Perceptual text obscuring via smoke layer  
**Created:** 2026-01-08 16:55  
**Updated:** 2026-01-08 16:57

---

## CORE PRINCIPLE

Text does NOT disappear through animation.
Text becomes **unreadable** through atmospheric smoke that **belongs to the scene**.

ACT 1 elements remain completely untouched.
All effects occur via temporary overlay layers.

---

## 1. LAYER ARCHITECTURE

### Layer 1: `smoke-obscure-layer`
- **Purpose:** Create perceptual text disappearance via atmospheric smoke
- **DOM Position:** Fixed overlay, z-index 100 (above all ACT 1 content, below transition overlay)
- **Visual Nature:** Semi-transparent purple smoke/mist that intensifies gradually
- **Lifecycle:**
  - Exists in DOM from page load (opacity: 0, visibility: hidden)
  - Activates at T+0.0s (trigger moment)
  - Reaches peak obscurity at T+2.0s
  - Remains active until transition complete
  - Removed/reset at T+5.0s

**Color Palette:**
- Base: Deep purple (#3D2A4F, #4A335D)
- Mid-tones: Purple-grey (#5A4A6B)
- No neon, no cyan, no bright magenta
- Must harmonize with existing purple light accents in scene

**Visual Treatment:**
- ✏️ **Opacity starts at 0, peaks at 0.65–0.75** (reduced for subtlety)
- ✏️ **Blend mode: `soft-light` (primary), fallback to `multiply` if needed**
- Texture: Organic, soft-edged, billowing (not solid block)
- Light interaction: Catches and diffuses existing ambient light only
- ✏️ **Movement: Max 3–4vh total drift, extremely subtle, no visible acceleration**

---

### Layer 2: `transition-overlay`
- **Purpose:** Full-scene atmospheric veil for final transition
- **DOM Position:** Fixed overlay, z-index 999 (above smoke layer)
- **Visual Nature:** Deep anthracite with subtle texture
- **Lifecycle:**
  - Exists in DOM from page load (opacity: 0)
  - Activates at T+2.5s (after smoke peaks)
  - Reaches full opacity at T+3.8s
  - Holds at peak for 300–400ms (suspense)
  - Fades out at T+4.5s
  - Returns to hidden at T+6.0s

**Visual Treatment:**
- Color: #1A1D23 (deep anthracite)
- Opacity: 0 → 1 → 0
- ✏️ **Vertical drift: 0 → -3vh (reduced, subtle upward motion during fade-in only)**
- Texture: 2% noise grain (optional, fallback to gradient)

---

### Layer 3: `scene2-layer` (ACT 2)
- **Purpose:** Door scene reveal
- **DOM Position:** Fixed, z-index 50 (below overlays, above ACT 1)
- **Lifecycle:**
  - Exists in DOM from load (display: none)
  - Becomes visible at T+3.8s (behind overlay at peak)
  - Fully revealed at T+6.0s
- **Behavior:** Static background, no animation

---

## 2. VISUAL BEHAVIOR — SMOKE LAYER

### Color Transition
- **Phase 1 (0–1.0s):** Light grey-purple, low opacity (0 → 0.25)
- **Phase 2 (1.0–2.0s):** Deepens to rich purple, medium opacity (0.25 → 0.7)
- **Phase 3 (2.0–2.5s):** Holds at peak, text fully unreadable

### Opacity Progression (Refined)
| Time | Opacity | Blur | Read State |
|------|---------|------|------------|
| T+0.0s | 0.0 | 0px | Fully readable |
| T+0.5s | 0.15 | 1px | Still readable |
| T+1.0s | 0.35 | 2px | Slightly difficult |
| T+1.5s | 0.55 | 3px | Difficult |
| T+2.0s | 0.70 | 4px | **Unreadable** |

### Blend Mode Strategy
- ✏️ **Primary:** `soft-light` — integrates organically, preserves light interaction
- ✏️ **Fallback:** `multiply` — if soft-light insufficient for contrast suppression
- **No overlay mode**

### Light Interaction
- Smoke should catch existing light sources (portal glow, ambient light)
- No new light sources introduced
- Edges soft, no hard boundaries
- ✏️ **Movement: Subtle organic drift, max 3–4vh total displacement, no acceleration curves**

---

## 3. TIMING & SEQUENCING

### Complete Timeline

| Time | Event | Element | State |
|------|-------|---------|-------|
| **T+0.0s** | User pointerdown or timeout | Trigger | — |
| **T+0.0s** | Smoke layer activates | `smoke-obscure-layer` | opacity: 0 → 0.7 (2.0s) |
| **T+1.0s** | Text readability significantly reduced | — | Perceptual |
| **T+2.0s** | Text fully obscured by smoke | `smoke-obscure-layer` | Peak opacity 0.7 |
| **T+2.5s** | Transition overlay begins | `transition-overlay` | opacity: 0 → 1 (1.3s) |
| ✏️ **T+3.3s** | **ACT 1 hidden** (overlay ≥ 0.8) | `#hero` | `display: none` |
| **T+3.8s** | Overlay at peak, ACT 2 loads behind | `scene2-layer` | Visible (hidden by overlay) |
| **T+3.8s–4.2s** | Suspense hold | `transition-overlay` | Hold at opacity: 1 |
| **T+4.5s** | Overlay fade-out begins | `transition-overlay` | opacity: 1 → 0 (1.5s) |
| **T+6.0s** | ACT 2 fully revealed | Complete | — |

### ✏️ ACT 1 Hiding Logic
- **Condition 1:** Text must be fully unreadable (smoke opacity ≥ 0.65, T ≥ 2.0s)
- **Condition 2:** Overlay opacity must be ≥ 0.8 (approximately T+3.3s)
- **Action:** Set `#hero { display: none }`
- **Rationale:** Ensures no visual pop or flicker

### Phase Overlaps
- **0.0s–2.5s:** Smoke obscures text perceptually
- **2.5s–3.8s:** Overlay fades in while smoke still active
- **3.3s:** ACT 1 safely hidden behind combined layers
- **3.8s–4.2s:** Peak darkness, door loads silently
- **4.5s–6.0s:** Overlay fades, door revealed

---

## 4. INTERACTION TRIGGERS

### Primary Trigger
- **Event:** `pointerdown` on `document.body` or `#hero`
- **Timing:** Available when CTA becomes interactive (T+8s from page load)
- **Feel:** Immediate commitment, sensual pressure

### Guard Mechanism
- **Flag:** `transitionTriggered` boolean
- **Behavior:** Set to `true` immediately on trigger
- Early return in all callbacks if flag is true

### Fallback Timeout
- **Trigger:** 6 seconds after CTA interactive (T+14s total)
- **Condition:** Only if `transitionTriggered === false`
- **Cleanup:** Remove pointerdown listener before executing

---

## 5. NON-DESTRUCTIVE GUARANTEES

### ACT 1 Elements — COMPLETELY UNTOUCHED

✅ `.hero__background` — No changes  
✅ `.hero__overlay` — No changes  
✅ `.hero__symbol-mark` — No changes  
✅ `.hero__portal-layer` — No changes  
✅ `.hero__portal-presence` — No changes  
✅ `.hero__headline` — No changes, no cloning, no animation  
✅ `.hero__subline` — No changes, no cloning, no animation  
✅ `.hero__accent` — No changes, no cloning, no animation  
✅ `.act1-cta` — No changes, no cloning, no animation  

### Isolation Method
- **ACT 1 hiding:** Only via `#hero { display: none }` at T+3.3s (after overlay ≥ 0.8)
- **Text obscuring:** ONLY via smoke layer covering text, not modifying text
- **No DOM manipulation:** Text elements never touched, cloned, split, or wrapped

---

## 6. IMPLEMENTATION FILES

### Modified Files
1. **`styles.css`**
   - Add `.smoke-obscure-layer` styles
   - Add smoke animation keyframes (max 3–4vh drift)
   - Modify `.transition-overlay` timing and drift

2. **`transition.js`**
   - Add smoke layer orchestration
   - Update timing to match new sequencing
   - Change trigger to `pointerdown`
   - Add conditional ACT 1 hide (only when overlay ≥ 0.8)

3. **`index.html`**
   - Add `<div class="smoke-obscure-layer"></div>` if not present

### Asset Requirements
- **Optional:** `smoke-texture.png` (semi-transparent purple smoke overlay)
- **Fallback:** CSS-only gradient with blur filter

---

## 7. ACCESSIBILITY & EDGE CASES

### Reduced Motion
- **Behavior:** Instant overlay fade (200ms max), no smoke animation
- **Check:** `prefers-reduced-motion: reduce`
- **Smoke:** Immediate opacity jump (0 → 0.7 in 100ms)

### Mobile Performance
- **GPU Acceleration:** Use `will-change: opacity, transform` on smoke layer
- **Cleanup:** Remove smoke layer from DOM after transition complete
- **Texture:** Use lighter-weight texture or pure CSS on low-end devices

---

## REFINEMENTS APPLIED

✅ Smoke peak opacity reduced to 0.65–0.75 range  
✅ Primary blend mode: `soft-light`, fallback: `multiply`  
✅ Smoke movement limited to max 3–4vh, extremely subtle  
✅ ACT 1 hidden only after text unreadable AND overlay ≥ 0.8  

---

## APPROVAL STATUS

**⏳ AWAITING FINAL GO**

All requested refinements have been applied.
This plan ensures:
- ✅ No text animation or manipulation
- ✅ Perceptual disappearance via atmospheric smoke
- ✅ Brand-aligned purple smoke ("i-catching" identity)
- ✅ Cinematic, mysterious, sensual pacing
- ✅ Complete preservation of ACT 1 structure
- ✅ Refined opacity, blend mode, movement, and timing

**No code will be written until explicit GO is given.**
