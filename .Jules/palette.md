## 2026-07-06 - [Contact Form Accessibility]
**Learning:** Focus management in SPAs is critical for screen reader users when content updates dynamically (e.g., form success states). Simply showing a success message isn't enough; focus must be programmatically moved to the feedback container (marked with `role="status"`) to ensure it's announced. Additionally, when resetting the form, focus should return to the first logical input to maintain the user's flow.

**Action:** Always use `useRef` to track state transitions and move focus to a container with `tabIndex={-1}` and `role="status"` on success, and back to the primary input on reset.
