/**
 * Iris — Accent Text Reveal Animation
 * 
 * Looping letter-by-letter reveal for "Binnenkort..."
 * Respects prefers-reduced-motion
 */

(function() {
    'use strict';

    // Timing configuration (in milliseconds)
    const CONFIG = {
        initialDelay: 1500,      // Wait before first reveal
        letterStagger: 100,      // Time between each letter
        visibleDuration: 800,    // How long text stays fully visible
        hiddenPause: 300,        // Pause between cycles (hidden)
        fadeOutStagger: 30       // Stagger for fade out (faster than fade in)
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Get all character elements
    const chars = document.querySelectorAll('.hero__accent .char');

    if (!chars.length) return;

    // If reduced motion is preferred, show all characters immediately
    if (prefersReducedMotion) {
        chars.forEach(char => char.classList.add('visible'));
        return;
    }

    /**
     * Reveal characters one by one
     */
    function revealLetters(callback) {
        chars.forEach((char, index) => {
            setTimeout(() => {
                char.classList.add('visible');
                
                // After last letter, trigger callback
                if (index === chars.length - 1 && callback) {
                    setTimeout(callback, CONFIG.visibleDuration);
                }
            }, index * CONFIG.letterStagger);
        });
    }

    /**
     * Hide all characters (with subtle stagger)
     */
    function hideLetters(callback) {
        chars.forEach((char, index) => {
            setTimeout(() => {
                char.classList.remove('visible');
                
                // After last letter, trigger callback
                if (index === chars.length - 1 && callback) {
                    setTimeout(callback, CONFIG.hiddenPause);
                }
            }, index * CONFIG.fadeOutStagger);
        });
    }

    /**
     * Run one complete cycle: reveal → stay → hide → pause
     */
    function runCycle() {
        revealLetters(() => {
            hideLetters(() => {
                // Start next cycle
                runCycle();
            });
        });
    }

    // Start the animation after initial delay
    setTimeout(runCycle, CONFIG.initialDelay);

})();
