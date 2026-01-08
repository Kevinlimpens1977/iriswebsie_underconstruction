# ACT 2 - Door Opening, Invitation & Entry Implementation

## ✅ Status: Implemented & Refined (Final Transition: Purple Drift)

The full Act 2 cinematic sequence is complete. The viewer is never forced through the door but is instead dissolved into the interior purple light.

---

## 🎬 Narrative Timeline

### **Phase 1: Arrival (T+11.0s)**
- **Visual State**: Door is CLOSED.

### **Phase 2: The Hold (T+11.0s – T+11.5s)**
- **Duration**: 0.5 seconds.
- Stillness.

### **Phase 3: The Opening (T+11.5s – T+14.5s)**
- **Duration**: 3.0 seconds.
- **Action**: Closed door dissolves to Open door.

### **Phase 4: The Invitation (T+14.5s – T+19.5s)**
- **Duration**: 5.0 seconds.
- **Action**: **Invitation Gesture** video plays.

### **Phase 5: The Withdrawal (T+19.5s – T+21.0s)**
- **Trigger**: Video Ends.
- **Action**: Hand fades into darkness (1.5s).

### **Phase 6: The Pause (T+21.0s – T+21.3s)**
- **Duration**: 0.3 seconds.
- **Action**: Empty doorway holds.

### **Phase 7: POV Drift (T+21.3s – T+33.3s)**
- **Duration**: **12.0 seconds** (Extremely Slow Drift).
- **Movement**: `scale(3.0)` (Subtle forward drift).
- **Effect**: The viewer drifts towards the light but is absorbed before reaching the threshold.
- **Visual**:
  - `act2__fill-light` fades in (Purples: `#E9D5FF` -> `#9333EA` -> `#581C87`).
  - Screen becomes enveloped in intense interior purple light.

### **Phase 8: Resolution (T+33.3s+)**
- **Action**: Light transitions to Deep Dark Purple structure.
- **Visual**:
  - `act2__charcoal-overlay` fades in over 4.0s (Deep Dark Purple `#180828`).
  - Final message "Iris — Website Under Construction" fades in **after** color settles (4.0s delay).
- **End State**: A calm, premium, deep purple field.

---

## 🔧 Technical Structures

### **Layer Stack**
1.  **.act2__open** (Z:1)
2.  **.act2__invitation** (Z:1)
3.  **.act2__closed** (Z:2)
4.  **.act2__fill-light** (Z:10) - Purple Gradient
5.  **.act2__charcoal-overlay** (Z:20) - Deep Purple Background
6.  **.final-message** (Inside Z:20) - Typography

### **Key Logic**
- POV duration extended to 12s.
- Resolution logic chained 12s after POV start.
