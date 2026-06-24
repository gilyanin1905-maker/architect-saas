## 2025-05-14 - Accessible Drawer Focus Management
**Learning:** For bottom drawers and modals, implementing focus management is critical for keyboard and screen reader accessibility. Capturing the active element before opening and restoring it on close prevents the user from losing their context. A small timeout (e.g., 100ms) ensures the element is mounted and ready to receive focus.
**Action:** Always implement a `previousFocus` ref to restore focus on close, and use `aria-modal="true"` with `role="dialog"` for drawer components.
