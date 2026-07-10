## 2026-07-06 - Accessible FAQ Drawer
**Learning:** Drawers and modals in this design system (like the FAQ component) often lack keyboard navigation and focus management, which are critical for accessibility. Specifically, users should be able to close a drawer using the Escape key, and focus should be restored to the triggering button upon closing to maintain context.

**Action:** When implementing or enhancing drawer-like components:
1. Use a ref to capture the `document.activeElement` before the drawer opens.
2. Add a `useEffect` to listen for the `Escape` key and close the drawer.
3. Set focus to the primary interactive element (e.g., the close button) when the drawer opens.
4. Restore focus to the captured trigger element when the drawer closes.
5. Ensure the container has `role="dialog"`, `aria-modal="true"`, and appropriate `aria-labelledby` or labels.
