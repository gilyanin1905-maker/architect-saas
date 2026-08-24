## 2026-07-28 - FAQ Drawer Modal Escape Key & Focus Management
**Learning:** Drawers and modals displaying text like "[ESC]" on close buttons must bind the Escape key event handler, manage focus automatically on mount/unmount, and provide standard ARIA dialog attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-expanded`, `aria-controls`).
**Action:** When implementing or updating drawer overlays, capture the trigger element in a ref, focus the close button upon opening, restore focus upon closing, and bind keydown listeners for Escape.
