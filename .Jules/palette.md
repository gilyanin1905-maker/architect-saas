## 2025-05-15 - [Accessible Form State Management]
**Learning:** Linking labels to inputs via `htmlFor`/`id` is foundational, but for interactive forms, focus management is critical for screen reader users to understand state transitions (e.g., from 'sending' to 'success'). Without it, users may be left in a "dead zone" on the page.
**Action:** Always implement focus management on the first relevant element when resetting or changing significant form states, and use `aria-live` to announce status changes.

## 2025-05-15 - [Form Autofill UX]
**Learning:** Browser autofill relies heavily on `autoComplete` attributes. For business-oriented forms, specifying `organization` alongside `name` and `email` significantly reduces friction.
**Action:** Include 'autoComplete' attributes on all standard form inputs to improve browser autofill UX.
