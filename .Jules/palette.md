## 2026-06-10 - [Focus Management in Form State Transitions]
**Learning:** When a form transitions from a 'success' state back to 'idle' (reset), programmatically shifting focus to the first input field improves UX for keyboard and screen reader users by providing a clear starting point. Using a `useRef` to track the *previous* state prevents unwanted autofocus on initial component mount.
**Action:** Implement a 'previousState' ref and check it against current state inside `useEffect` to trigger focus shifts only on specific transitions (e.g., success -> idle).
