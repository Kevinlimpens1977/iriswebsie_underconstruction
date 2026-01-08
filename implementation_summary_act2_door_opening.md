# ACT 2 - Door Opening, Invitation & Entry Implementation

## ✅ Status: Implemented & Refined (Final Regie)

The full Act 2 cinematic sequence is complete, featuring a slow, synchronized 10-second entry into warm light.

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
- **Narrative**: The guide steps back.

### **Phase 6: The Pause (T+21.0s – T+21.3s)**
- **Duration**: 0.3 seconds.
- **Action**: Empty doorway holds. The path is clear.

### **Phase 7: POV Entry (T+21.3s – T+31.3s)**
- **Duration**: **10.0 seconds** (Gentle Glide).
- **Action**: Viewer moves through the doorway.
- **Visual**:
  - `transform: scale(9.0)` pulls camera deep into the room.
  - `act2__fill-light` fades in (Warm Interior Gold: `#FFF5E1` -> `#EDC967` -> `#935430`).
  - Screen becomes enveloped in warm light, synced exactly with forward movement.

### **Phase 8: Resolution (T+31.3s+)**
- **Action**: Light transitions to calm structure.
- **Visual**:
  - `act2__charcoal-overlay` fades in over 4.0s (Refined dark blue/charcoal).
  - Final message "Iris — Website Under Construction" fades in **after** color settles (4.0s delay).
- **Feel**: Immersive, intentional, reassuring.

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
- POV duration matches Light Fill transition (10s).
- Resolution logic chained 10s after POV start.
