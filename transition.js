/**
 * Iris — Scene Transition Logic (Act 1 -> Act 2)
 * CINEMATIC THREE-PHASE APPROACH
 * 
 * Layer order (initial):
 * 300 - transition-overlay (inactive)
 * 200 - smoke-obscure-layer (inactive)
 * 100 - ACT 1 (hero section, VISIBLE)
 * 50 - ACT 2 (door, present but BEHIND ACT 1)
 * 
 * CINEMATIC TIMELINE (Total: ~9 seconds):
 * 
 * PHASE 1: ATMOSPHERE (0.0s – 4.0s)
 *   0.0s–1.0s   Background + text fade in to 100%
 *   1.0s–4.0s   Atmosphere hold, smoke starts rising to 40%
 * 
 * PHASE 2: DISAPPEARANCE (4.0s – 6.5s)
 *   4.0s–6.5s   Text fades 100% → 0% (ease-in-out)
 *               Smoke thickens to 65%
 *               Background remains 100%
 *               Door REMAINS at 0% (INVISIBLE)
 * 
 * PHASE 3: REVEAL (6.5s – 8.5s)
 *   6.5s        Z-index swap (hidden by smoke)
 *               Background starts fade 100% → 0%
 *               Door starts fade 0% → 100% (ease-out, darker→brighter)
 *   8.5s–9.0s   Scene settles, smoke dissipates
 * 
 * HARD CONSTRAINT: Text opacity > 0 AND Door opacity > 0 NEVER OCCURS
 */

document.addEventListener('DOMContentLoaded', () => {
    const cta = document.getElementById('act1-cta');
    const smokeLayer = document.getElementById('smoke-obscure-layer');
    const overlay = document.getElementById('transition-overlay');
    const act1 = document.getElementById('hero');
    const act2 = document.getElementById('act2');

    // Safety check
    if (!cta || !smokeLayer || !overlay || !act1 || !act2) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // State
    let transitionTriggered = false;
    let interactionHandler = null;

    /**
     * CINEMATIC THREE-PHASE SEQUENCE
     * 
     * Phase 1: Atmosphere (0-4s)
     * - Background scene and text visible
     * - Smoke slowly rises
     * 
     * Phase 2: Disappearance (4-6.5s)
     * - Text fades out completely (ease-in-out)
     * - Smoke continues to thicken
     * - Door stays at opacity 0 (critical)
     * 
     * Phase 3: Reveal (6.5-8.5s)
     * - Z-swap happens
     * - Background fades out
     * - Door fades in (ease-out, darker to brighter)
     * - Smoke begins dissolving
     */
    const triggerTransition = () => {
        if (transitionTriggered) return;
        transitionTriggered = true;

        // Visual feedback
        document.body.style.cursor = 'default';

        // Remove interaction listener
        if (interactionHandler) {
            document.removeEventListener('pointerdown', interactionHandler);
            interactionHandler = null;
        }

        // T+0.0s: PHASE 1 - Atmosphere begins
        // Smoke starts with extended 11s duration (200% of original 5.5s)
        smokeLayer.classList.add('active');

        // T+0.0s: Start text fade-out immediately for Phase 2
        // This will be controlled by CSS animation starting at 4s into smoke animation
        act1.classList.add('text-fadeout');

        // T+6.5s: PHASE 3 - Z-INDEX SWAP (during peak smoke)
        // Text is now at 0%, door still at 0%
        setTimeout(() => {
            // Safety: Ensure Act 2 start state is clean 0% before swap to prevent flash
            act2.style.opacity = '0';

            act1.style.zIndex = '50';
            act2.style.zIndex = '100';

            // Apply door reveal animation (fade-in with darkening effect)
            act2.classList.add('door-reveal');

            // Background fade-out
            act1.classList.add('background-fadeout');
        }, 6500);

        // T+7.0s: Begin smoke dissolution (slower, more gradual)
        setTimeout(() => {
            smokeLayer.classList.remove('active');
            smokeLayer.classList.add('dissolving');
        }, 7000);

        // T+11.0s: Final cleanup
        setTimeout(() => {
            smokeLayer.classList.remove('dissolving');
            act1.classList.remove('text-fadeout', 'background-fadeout');
            act2.classList.remove('door-reveal');

            // Ensure Act 2 remains fully visible after animation class removal
            act2.style.opacity = '1';
        }, 11000);

        // T+11.5s: ACT 2 - DOOR OPENING SEQUENCE
        // 0.5s Hold (11.0-11.5) -> Open (11.5-14.5)
        setTimeout(() => {
            const doorClosedLayer = document.querySelector('.act2__closed');
            if (doorClosedLayer) {
                doorClosedLayer.classList.add('opening');
            }
        }, 11500);

        // T+14.5s: ACT 2A - INVITATION GESTURE
        // Door is open. Hand gesture plays.
        setTimeout(() => {
            const inviteLayer = document.querySelector('.act2__invitation');
            const inviteVideo = document.getElementById('invitation-video');

            if (inviteLayer && inviteVideo) {
                inviteLayer.classList.add('active');

                // Play video and chain ACT 2B
                inviteVideo.play().then(() => {
                    // When gesture completes
                    // When gesture completes (T+19.5s approx)
                    inviteVideo.onended = () => {
                        // Phase 5: Withdrawal (Hand fades into darkness)
                        // "Hand must be completely gone BEFORE POV begins"
                        inviteLayer.style.transition = 'opacity 1.5s ease-in-out';
                        inviteLayer.classList.remove('active');

                        // Phase 6: Hold & Enter
                        // Wait 1.5s (fade) + 0.3s (stillness) = 1.8s
                        setTimeout(() => {
                            // POV Entry: Move through the doorway (5.0s duration)
                            // Triggers scale(8.0) and light fill opacity
                            act2.classList.add('pov-entry');

                            // Phase 7: Resolution (Deep Purple + Message)
                            // Triggered after POV completes
                            setTimeout(() => {
                                act2.classList.add('resolve-charcoal');
                                // Trigger breathing background
                                const overlay = act2.querySelector('.act2__charcoal-overlay');
                                if (overlay) overlay.classList.add('active-breathe');
                            }, 12000);

                        }, 1800);
                    };
                }).catch(e => console.warn('Invitation video play failed:', e));
            }
        }, 14500);
    };

    /**
     * CTA Sequence:
     * T+0: Page load
     * T+5s: "Durf jij dichter bij te komen?"
     * T+8s: "Klik om dichterbij te komen" (Interactive via pointerdown)
     * T+14s: Auto Transition (if no interaction)
     */

    // IMMEDIATE: Allow Global Interaction
    // Any click anywhere starts the transition sequence
    interactionHandler = (e) => {
        // Prevent multiple triggers
        if (transitionTriggered) return;
        triggerTransition();
    };

    document.addEventListener('pointerdown', interactionHandler);

    // Step 1: Reveal Question (5s)
    setTimeout(() => {
        if (transitionTriggered) return;

        cta.textContent = "Durf jij dichter bij te komen?";
        cta.classList.add('visible');
    }, 5000);

    // Step 2: Make Interactive (8s)
    setTimeout(() => {
        if (transitionTriggered) return;

        // Update text
        cta.textContent = "Klik om dichterbij te komen";
        cta.classList.add('interactive');

        // Enable pointerdown interaction (immediate commitment feeling)
        document.body.style.cursor = 'pointer';

        // Fail-safe: Auto transition after 6s (T+14s total)
        setTimeout(() => {
            if (!transitionTriggered) {
                triggerTransition();
            }
        }, 6000);

    }, 8000);
});
