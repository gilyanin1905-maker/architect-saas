## 2026-07-06 - [A11y/UX] Accessibility for Interactive Components
**Learning:** Non-semantic interactive elements like 'motion.div' used for the Eva Robot are invisible to screen readers and keyboard users unless explicitly given roles and tab indices. Adding 'aria-label', 'role="button"', and 'tabIndex={0}' is essential, but must be paired with an 'onKeyDown' handler to truly support keyboard navigation.
**Action:** When making 'motion.div' or similar non-button elements interactive, always add 'role="button"', 'tabIndex={0}', 'onKeyDown' (supporting Enter/Space), and a clear 'aria-label'.

## 2026-07-06 - [A11y] Dynamic ARIA Labels for Toggle States
**Learning:** For toggleable elements like mobile menus, static ARIA labels (e.g., 'Menu') are insufficient. Users of assistive technologies need to know the current state (Open vs. Closed) via 'aria-expanded' and dynamic labels that reflect the action of the button (e.g., 'Open menu' vs. 'Close menu').
**Action:** Implement dynamic 'aria-label' and 'aria-expanded' on all toggle buttons. Use 'aria-controls' to link the toggle to the controlled container.
