# Palette's UX Journal

## 2026-07-20 - Contact Form Focus Transitions & State Reset Management
**Learning:** Programmatic focus shifts are critical for screen readers to announce success states immediately. However, when forms are resettable (e.g., from 'success' to 'idle'), blindly focusing the first field on state changes can cause unwanted autofocus and page jumps on initial component mount. Utilizing a `prevStatusRef` to track state transitions allows us to identify the exact reset action, keeping the focus transition clean, intuitive, and safe from unexpected shifts on load.
**Action:** Always employ a `prevStatusRef` or a transition-tracking hook to differentiate between the initial render/mount and user-triggered state changes when implementing programmatic focus restoration.
