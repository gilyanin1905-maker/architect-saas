# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-07-25 - Resetting Form State Focus Management & Accessible Feedback
**Learning:** When a form transitions to a success state, assistive technologies need an immediate announcement (e.g., via `role="status"` and `tabIndex={-1}`) along with a programmatic shift in focus so screen readers can read the updated context. When a form is reset back to idle from a success screen, focus must be returned to the first interactive field (such as the Name input) to maintain tab order flow. Using a "previous status" ref avoids unintended autofocus on initial component mounting.
**Action:** Always track form status transitions using a ref for `prevStatus` in React. Programmatically focus the success container upon submission success, and focus the first input field on reset, ensuring a smooth, predictable user experience for keyboard and screen reader users alike.
