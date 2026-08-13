## 2026-07-22 - [Contact Form Accessibility & Focus Restoration]
**Learning:** Proper focus management is critical in forms with modal-like or replacement state layouts (e.g. replacing a form with a success message). When a form is successfully submitted, screen reader users can lose their reading/interaction context unless focus is explicitly moved to the success container. Moving the focus to an element that has `tabIndex={-1}`, `role="status"`, and `aria-live="polite"` ensures assistive technologies immediately announce the new state. Additionally, when a user resets the form (e.g., clicking "Send Again"), focus should be programmatically restored to the first interactive field (the Name input) to re-establish the correct entry point.

**Action:**
1. Always pair form success states with a wrapper div that has `tabIndex={-1}`, `role="status"`, and `aria-live="polite"`.
2. Use a React Ref-based effect to focus the success screen immediately on mount.
3. Track the previous submission status using a `useRef` to safely target and focus the first input field ONLY when transitioning back from a success state to an idle form state, avoiding unintended focus or scroll jumps on initial mount.
