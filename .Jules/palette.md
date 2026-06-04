## 2026-06-04 - [Contact Form Accessibility and Interaction]
**Learning:** In a "snap-container" layout, traditional scrolling might not always bring elements into the viewport reliably for automated tests, and focus management is crucial when state changes (like showing a success message) to ensure screen readers follow the flow.
**Action:** Use explicit scroll-into-view and wait for animations in tests. Ensure 'aria-busy' and 'aria-live' are used for dynamic form states to maintain accessibility.
