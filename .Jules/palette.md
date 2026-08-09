# Palette's Journal

🎨 Documenting micro-UX improvements and learnings.

## 2026-08-09 - Form Focus Recovery & Screen Reader Context
**Learning:** When submitting a dynamic form that transitions between active input and a success message, screen readers often lose context if focus isn't moved programmatically. Additionally, returning from success back to the idle form should restore focus directly to the first input to prevent redundant keyboard tab operations.
**Action:** Always link form label-input pairs explicitly, assign `role="status"` and `tabIndex={-1}` to dynamic success containers, and use React refs to programmatically direct focus to the success status container on submit, and back to the initial input when initiating a new submission.
