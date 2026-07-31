# Palette's Journal

## 2026-07-01 - Contact Form Accessibility and Focus Management
**Learning:** Screen reader users can lose context when a form submission succeeds or resets dynamically. Associating labels via `htmlFor`/`id`, using autocomplete, and programmatically shifting focus to the success status container (`tabIndex={-1}` and `role="status"`) and back to the first field on reset greatly enhances micro-UX.
**Action:** Always map labels to unique IDs, implement autocomplete attributes, and use a transition ref to manage focus gracefully without page jumps.
