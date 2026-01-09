# IMPLEMENTATION PLAN — ACT 2: The Threshold

**Status:** ✅ Approved for Implementation  
**Date:** 2026-01-09  
**ACT 1:** 🔒 LOCKED (immutable)

---

## 1. Narrative Intent

**What ACT 2 represents emotionally:**

ACT 2 is the moment of commitment. The user has seen the door, felt the invitation, and now stands at the edge. This is not observation — this is decision. The emotional arc shifts from *curiosity* to *intention*.

The feeling is: **"I choose to enter."**

**What changes for the user:**

| Before (ACT 1) | After (ACT 2) |
|----------------|---------------|
| Observer | Participant |
| Invited | Committed |
| Outside | Crossing |
| "What is this?" | "I'm going in." |

---

## 2. Core Interaction

**What the user does:**

A single, deliberate action: **sustained contact**.

The user must press and hold (or maintain focus) on the threshold point. This is not a click — it is a commitment. The action requires patience. It cannot be rushed or accidentally triggered.

**Duration:** ~4–5 seconds of sustained contact.

**How it differs from ACT 1:**

In ACT 1, any click triggers the transition (low commitment). In ACT 2, the user must *actively sustain* their decision.

---

## 3. Visual Structure

**What is present:**

- The door (threshold) — central, dominant
- Subtle interior light — suggesting what lies beyond
- Darkness surrounding — no distractions
- Organic progress indicator (door opening, light growing)

**What is intentionally absent:**

- Text (no instructions, no labels)
- UI controls (no buttons, no progress bars)
- Background elements (no smoke, no decorative layers)
- Multiple focal points

---

## 4. Motion & Timing

**Tempo:**

- **Slow** — Nothing happens quickly
- **Deliberate** — Each motion feels earned
- **Restrained** — Less is more

**Key motion moments:**

1. **Initiation:** Door begins to respond
2. **Continuation:** Response deepens with sustained contact
3. **Completion:** Transition becomes irreversible

---

## 5. Transition Logic

**Transition sequence:**

1. Door fully opens (or dissolves)
2. Interior light expands to fill frame
3. Dark edges collapse inward
4. Scene resolves into ACT FINAL state

**Irreversibility:**

- User cannot go back
- No reverse animation
- The action itself is the entry

---

## 6. Constraints & Guardrails

**Must NOT add:**

- Skip button
- Progress bar
- Text instructions
- Sound effects
- Particle effects
- Multiple interaction options

**Risks to avoid:**

- Frustration (unclear interaction)
- Ambiguity (not discoverable)
- Cheapness (feels like CSS trick)
- Spectacle (demo over experience)

---

## 7. Validation Criteria

| Checkpoint | Success Indicator |
|------------|-------------------|
| Discovery | User understands action within 3 seconds |
| Commitment | User sustains action without frustration |
| Transformation | Transition feels earned |
| Irreversibility | User does not attempt to go back |
| Emotional shift | User feels they have "entered" |

---

## Implementation Status

- [x] Plan approved
- [x] HTML structure created (threshold zone added)
- [x] CSS styling applied (threshold visual feedback)
- [x] JS interaction logic implemented (press-and-hold 4s)
- [x] Transition to ACT FINAL connected
- [ ] Validation complete
