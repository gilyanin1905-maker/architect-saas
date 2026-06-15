## 2026-06-15 - Form Transition Focus Management
**Learning:** When a form transitions from a 'success' state back to 'idle' (e.g., "Send Again"), programmatically returning focus to the first input field ensures a smooth experience for keyboard and screen reader users, preventing focus from being lost in the DOM.
**Action:** Use a combination of `useRef` and a small `setTimeout` (to account for re-rendering) to restore focus to the primary input field when resetting form states.
