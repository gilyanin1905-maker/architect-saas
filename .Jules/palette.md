## 2026-06-30 - Focus Management on State Transitions
**Learning:** When transitioning between different UI states (e.g., from a form to a success message), programmatically shifting focus is crucial for screen reader users to maintain context.
**Action:** Use React refs to capture the success container and first form field, then use a `useEffect` hook to manage focus based on state changes.
