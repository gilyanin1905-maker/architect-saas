# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Contact Form Accessibility and Focus Management
**Learning:** Linking labels to inputs via `htmlFor` and `id` is fundamental for accessibility. Additionally, managing focus programmatically after state changes (like form submission success or reset) ensures that users of assistive technologies are immediately aware of the new state and can continue their interaction seamlessly.
**Action:** Always connect `<label>` to `<input>`/`<textarea>` and use `role="status"` with programmatic focus for success/error feedback.
