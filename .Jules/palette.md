## 2025-05-15 - [Accessible Form State Transitions]
**Learning:** In React apps with conditional rendering for success states, screen readers often lose context when the form disappears. Connecting labels to inputs via `htmlFor` and `id` is the baseline, but programmatic focus management is required to guide users to the success message or back to the form.
**Action:** Always use a React ref to shift focus to success messages (with `tabIndex={-1}`) or back to the first input when a form is reset.
