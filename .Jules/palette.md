## 2026-07-16 - Modal Drawer Accessibility & Focus Restoration

**Learning:** Slide-out drawers and dialog overlays require `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-expanded`/`aria-controls` on triggers to communicate state to screen readers. Additionally, global `Escape` key handling and restoring focus back to the triggering button (`triggerRef.current?.focus()`) when closed prevents focus loss and improves keyboard navigation flow.

**Action:** When implementing drawers or modal popups, capture the trigger element reference before opening, attach an `Escape` key listener during mount, and return focus to the trigger upon modal unmount/close.
