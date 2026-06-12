# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - Form Submission Focus & Feedback
**Learning:** When a form is replaced by a success message, screen readers might lose context or stay on a stale element. Programmatic focus shift to the success message, combined with `aria-live="polite"`, ensures the user knows their action was successful.
**Action:** Always include a `useRef` on the success container and use a `useEffect` to trigger `.focus()` when the `submitted` state becomes true.

## 2025-05-15 - Interactive State Transparency
**Learning:** Mobile menu toggles (hamburger icons) are often invisible to screen readers in terms of their current state.
**Action:** Implement `aria-expanded` and dynamic `aria-label` (e.g., "Open menu" vs "Close menu") to provide immediate feedback on the state of the navigation drawer.

## 2025-05-15 - Form UX with Autocomplete
**Learning:** Modern browsers and password managers rely heavily on the `autoComplete` attribute to assist users in filling out forms. Missing these attributes increases friction.
**Action:** Standardize the use of `autoComplete` for common fields like `name`, `email`, `organization`, and `username` (for Telegram/Social handles).
