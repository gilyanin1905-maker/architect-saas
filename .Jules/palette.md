## 2025-05-22 - Enhanced Form Accessibility and Focus Management
**Learning:** Proper form accessibility requires connecting labels to inputs via IDs and managing focus transitions, especially when form elements are conditionally rendered (e.g., success states). programmatic focus to a success message with `tabIndex={-1}` and `aria-live="polite"` ensures screen reader users are immediately aware of the result.
**Action:** Always use matching `htmlFor` and `id` for labels/inputs, and implement `useEffect` based focus management for multi-state forms.
