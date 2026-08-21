## 2026-08-21 - FAQ Drawer Focus Management & ARIA Attributes

**Learning:** Bottom drawer panels acting as context/detail modals (like the FAQ answer terminal) need explicit `role="dialog"`, `aria-modal="true"`, dynamic `aria-controls` / `aria-expanded` attributes on trigger buttons, and focus management (focusing close button on open, restoring focus on close) to be accessible to screen reader and keyboard-only users.
**Action:** When adding or modifying interactive drawers or modal panels, always record `document.activeElement` before opening, focus the primary close action, handle `Escape` key events, and restore focus upon closing.
