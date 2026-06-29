## 2025-05-14 - Programmatic Focus Management in SPAs
**Learning:** In Single Page Applications (SPAs), when a form state changes from 'success' back to 'idle' or vice-versa, screen readers may lose context if focus isn't managed. Programmatically moving focus to the success message (with role="status") ensures it's announced, and returning focus to the first input when resetting the form provides a seamless experience for keyboard users.
**Action:** Always implement focus management for dynamic state transitions in forms, using React refs and useEffect to shift focus when state changes.
