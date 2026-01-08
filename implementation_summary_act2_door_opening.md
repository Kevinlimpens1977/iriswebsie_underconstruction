# ACT 2 - Door Opening, Invitation & Entry Implementation

## ✅ Status: Implemented & Refined (Final Concept: "The Door Remains Open")

The full Act 2 cinematic sequence is complete. The viewer is absorbed into the light and arrives at a poetic, breathing final state.

---

## 🎬 Narrative Timeline

### **Phase 1-6** (Unchanged)
- Arrival, Door Opening, Invitation, Withdrawal, Hold.

### **Phase 7: POV Drift (T+21.3s – T+33.3s)**
- **Duration**: **12.0 seconds** (Extremely Slow Drift).
- **Movement**: `scale(3.0)` (Subtle forward drift).
- **Effect**: Absorb into intense Purple Light (`act2__fill-light`).

### **Phase 8: Resolution (T+33.3s+)**
- **Trigger**: 12s after POV start.
- **Background**: Deep Dark Purple (`#180828`) fades in (4s).
- **Animation**: Background "breathes" (slow radial gradient pulse).
- **Content Reveal**: Staggered, poetic sequence.

### **Phase 9: The Poem (Staggered)**
- **T+1.0s (after Res)**: **Logo** (Soft Glow) fades in.
- **T+3.0s**: **"De deur is open."** (Large, Calm).
- **T+6.0s**: **"Wat daarachter ontstaat, maken we samen."** (Italic, Soft).
- **T+9.0s**: **Description** (Latex, Interior, Custom).
- **T+12.0s**: **Contact** (Whispered: Name, Phone, Email).
- **T+14.0s**: **Footer** (Building/Possibilities).

---

## 🔧 Technical Structures

### **Final Overlay (`.act2__charcoal-overlay`)**
- `background-image`: Radial gradient breathing.
- `animation`: 12s infinite alternate loop.

### **Typography**
- **Primary**: Cormorant Garamond (Heading).
- **Secondary**: Open Sans (Body), Poppins (Contact).
- **Colors**: Soft Off-White (`#E8E3E8`), Warm Gold Accents (`#FFF5E1`).
