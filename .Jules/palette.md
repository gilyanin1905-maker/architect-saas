# Palette's Journal

## 2026-07-26 - Contact Form Accessibility and Autofill Enhancements
**Learning:** Contact form labels and inputs in this codebase were styled but completely disconnected semantically, preventing screen reader users from associating form labels with their corresponding inputs and missing out on browser autofill benefits. Furthermore, transition to success state leaves screen readers unaware of the successful submission because there's no dynamic announcement container.
**Action:** Always connect form `<label>` and `<input>`/`<textarea>` elements using matching `htmlFor` and `id` attributes, add `autoComplete` attributes to standard contact fields, and use `role="status"` with `aria-live="polite"` on feedback or success containers to ensure screen readers announce submission status immediately.
