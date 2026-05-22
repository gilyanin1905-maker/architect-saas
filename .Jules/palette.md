# Palette's Journal - Critical UX & Accessibility Learnings

This journal tracks critical UX/accessibility learnings discovered during the development of this project.

## 2025-05-15 - Form Accessibility & Focus Management
**Learning:** Proper label-input association and focus management after state transitions significantly improve the form experience for both screen reader users and keyboard-only users.
**Action:** Always ensure <label> has 'htmlFor' matching input 'id', and use React refs to return focus to the beginning of the form after a reset or 'Send Again' action.
