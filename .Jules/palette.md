## 2025-05-15 - [Accessible Forms & Async Feedback]
**Learning:** Semantic HTML (pairing labels with inputs via `htmlFor`/`id`) is the baseline, but for modern SPAs, ARIA live regions and dynamic button labels are critical to communicate asynchronous states (loading, success, error) to assistive technology users.
**Action:** Always ensure forms have `autoComplete` for UX and `aria-live` regions for status updates. Use `aria-busy` and `aria-label` on submit buttons during async transitions.
