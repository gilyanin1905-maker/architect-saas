## 2026-07-09 - Enhanced Form Accessibility and Focus Management

**Learning:** When using conditional rendering for form states (e.g., success messages), screen reader users lose context if focus is not programmatically moved. Simply adding `role="status"` or `aria-live` is often insufficient for complex state transitions where the entire form disappears. Furthermore, returning to a "fresh" form state should ideally focus the first input to streamline the "try again" experience.

**Action:**
1. Use `useRef` to track state changes (like `status`) and `useEffect` to programmatically move focus to a heading or container with `tabIndex={-1}` when a success/error state is triggered.
2. Ensure success messages have `role="status"` and clear descriptive text.
3. When resetting a form, focus the first input element (e.g., `name` field) to provide an immediate starting point for the user.
4. Always link `<label>` elements to inputs using `htmlFor` and `id`, and provide `autoComplete` attributes to assist users with cognitive disabilities and speed up form completion.
