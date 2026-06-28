## 2025-05-22 - FAQ Drawer Accessibility & Keyboard Support
**Learning:** Implementing modal-like drawers requires more than just visual transitions. To meet accessibility standards, one must manage focus (move to close button on open, restore to trigger on close) and provide standard keyboard shortcuts (Escape key). Additionally, combining `aria-label` with `.sr-only` spans inside a button can lead to redundant announcements in screen readers.

**Action:** Use `useEffect` with `keydown` listeners for Escape support and `useRef` to manage focus. Stick to either `aria-label` OR `.sr-only` content for icon buttons, not both.
