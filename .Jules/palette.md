## 2026-07-01 - Keyboard Shortcut Hint Parity & Focus Management in Drawer Modals
**Learning:** Visual keyboard hints (e.g., `[ESC]`) without corresponding keyboard event handlers create accessible interaction gaps. Additionally, modal drawers require focus shift on open and restoration on close.
**Action:** Always pair visual keyboard shortcut indicators with active keydown listeners, and capture `document.activeElement` to restore focus when closing dialogs or drawers.
