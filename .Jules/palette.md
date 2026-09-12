## 2026-07-28 - FAQ Modal Drawer Accessibility & Focus Management
**Learning:** Drawers and modal overlays dynamically created in React need explicit focus capture on open, keyboard listeners (like `Escape`), and focus restoration back to the trigger element on close to remain accessible to screen readers and keyboard-only users.
**Action:** Always store `document.activeElement` in a ref on open, shift focus to the primary action inside the dialog after mounting, listen for `Escape` key events, and restore focus to the stored ref on unmount/close.
