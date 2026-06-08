## 2026-06-08 - [Contact Form Accessibility and Focus Management]
**Learning:** Programmatic focus management on form success states is crucial for screen reader accessibility to signal content changes. Centralized UI text (UI_TEXT) should be used for all ARIA labels to maintain localization.
**Action:** Always include 'ref' and 'tabIndex={-1}' on success message containers and call '.focus()' in a useEffect hook triggered by the success state.
