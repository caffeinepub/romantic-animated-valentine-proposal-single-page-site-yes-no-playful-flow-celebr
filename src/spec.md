# Specification

## Summary
**Goal:** Build a single-page, fully responsive animated Valentine proposal experience with a dreamy romantic aesthetic, playful YES/NO interaction, and a celebration scene.

**Planned changes:**
- Create a two-scene single-page UI (Proposal → Celebration) with consistent pastel palette, glow/sparkle styling, romantic cursive headline + modern body typography, and smooth transitions.
- Implement continuous animated floating-hearts background on both scenes, with subtle sparkle/glow accents.
- Proposal scene: render the exact headline/subtext and two buttons ("YES 💖" primary with glow/animation; "NO 💔" secondary).
- Add “NO” evasive behavior plus rotating teasing messages so the user cannot reach Celebration without clicking “YES 💖”.
- Add global Proposal interactions: clicks/taps anywhere except YES trigger cute messages plus a short heart burst without blocking the YES button.
- YES flow: trigger heart confetti and transition into the Celebration scene.
- Celebration scene: render the exact top/bottom text and show a centered circular photo with glowing border and subtle breathing/zoom animation.
- Add cursor/touch-following heart particle effects and occasional floating love emojis; reduce/disable motion when prefers-reduced-motion is enabled.
- Add optional background music from a bundled audio asset with unobtrusive play/pause and mute controls; persist state across the scene transition.
- Add lightweight preloading of key assets (fonts/images/audio) and keep code modular (separate components for scenes/background/effects).

**User-visible outcome:** Users can experience a polished Valentine proposal page with playful interactions, must click “YES 💖” to proceed, then see a celebratory scene with animated effects, a central photo, and optional music controls.
