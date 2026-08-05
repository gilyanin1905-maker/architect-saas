# Palette's Journal

## 2026-07-20 - Drawer Focus and Keyboard Accessibility
**Learning:** Drawers and modals can isolate keyboard users if they do not receive initial focus or allow Escape to close, leaving the previous active element dangling. Proper focus management requires capturing the `activeElement`, focusing the drawer close button on mount, and restoring focus back when closed.
**Action:** Always capture `document.activeElement` on drawer open, shift focus to the primary interactive element (e.g., the close button) using a small timeout, capture Escape key events to close the drawer, and restore focus to the previously captured element on close.
