## 2026-07-24 - Syncing UI Hints with Functionality
**Learning:** UI components may include visual cues for keyboard shortcuts (like `[ESC]`) that are decorative rather than functional, leading to user frustration when the expected behavior fails.
**Action:** Always audit components for visual shortcut hints and ensure the corresponding event listeners are implemented and correctly scoped (e.g., using `useEffect` for global listeners).
