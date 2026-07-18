# Palette's Journal

## 2026-07-18 - Drawer Focus Management & Keyboard Dismissal
**Learning:** Dynamic slide-out drawer components triggered from button lists often fail screen-reader context transfers. Without programmatically moving focus to the close button on mount and restoring focus to the original triggering element upon unmount, keyboard users are stranded at the bottom of the DOM or must tab through the entire layout. Furthermore, intercepting the `Escape` key is highly critical for a native, app-like drawer experience.
**Action:** When creating toggleable slide-out or overlay elements, use standard React refs to track both the triggering element and the drawer's primary interaction node (e.g., the close button). Use an effect to focus the close button after drawer animations/mount, bind a global `keydown` event listener for the `Escape` key, and clean it up on unmount while restoring focus to the stored trigger ref.
