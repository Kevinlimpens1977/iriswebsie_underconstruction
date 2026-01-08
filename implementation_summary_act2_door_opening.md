# ACT 2 - Door Opening, Invitation & Entry Implementation

## ✅ Status: Implemented & Refined

The full Act 2 cinematic sequence is complete, flowing from a locked door to a personal entry and final resolution.

---

## 🎬 Narrative Timeline

### **Phase 1: Arrival (T+11.0s)**
- Act 1 transition completes.
- **Visual State**: Door is CLOSED.

### **Phase 2: The Hold (T+11.0s – T+11.5s)**
- **Duration**: 0.5 seconds.
- Stillness.

### **Phase 3: The Opening (T+11.5s – T+14.5s)**
- **Duration**: 3.0 seconds.
- **Action**: Closed door dissolves to Open door.

### **Phase 4: The Invitation (T+14.5s – T+19.5s approx)**
- **Duration**: 5.0 seconds (Asset Duration).
- **Action**: **Invitation Gesture** video plays.
- **Visual**: Hand beckons from the doorway.

### **Phase 5: The Withdrawal (T+19.5s – T+21.0s)**
- **Trigger**: Video Ends.
- **Action**: Hand fades into darkness (1.5s).
- **Narrative**: The guide steps back.

### **Phase 6: The Pause (T+21.0s – T+21.3s)**
- **Duration**: 0.3 seconds.
- **Action**: Empty doorway holds. The path is clear.
- **Constraint**: Hand is fully gone before movement begins.

### **Phase 7: POV Entry (T+21.3s – T+26.3s)**
- **Duration**: 5.0 seconds (Slower, intentional).
- **Action**: Viewer moves through the doorway.
- **Visual**:
  - `transform: scale(8.0)` pulls camera deep into the room.
  - `act2__fill-light` fades in (Warm radial gradient).
  - Screen becomes enveloped in warm light.

### **Phase 8: Resolution (T+26.3s+)**
- **Action**: Light transitions to calm structure.
- **Visual**:
  - `act2__charcoal-overlay` fades in (Refined dark blue/charcoal).
  - Final message "Iris — Website Under Construction" fades in.
- **Feel**: Reassuring, premium, settled.

---

## 🔧 Technical Structures

### **Layer Stack**
1.  **.act2__open** (Z:1) - Background
2.  **.act2__invitation** (Z:1) - Video Overlay
3.  **.act2__closed** (Z:2) - Initial Door (Fades out)
4.  **.act2__fill-light** (Z:10) - Warm POV Glow (Fades in)
5.  **.act2__charcoal-overlay** (Z:20) - Final Background
6.  **.final-message** (Inside Z:20) - Typography

### **Key Logic**
- Hand withdrawal logic strictly sequenced via `onended` + `setTimeout(1800)`.
- POV duration matches Light Fill transition (5s).
- Resolution logic chained 5s after POV start.
