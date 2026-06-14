## 2025-05-15 - Form Focus Management and Accessibility

**Learning:** Programmatic focus management on form success and reset states significantly improves the experience for keyboard and screen reader users by providing immediate context. Using a `prevStatus` ref within a `useEffect` is an effective way to trigger focus changes only on specific state transitions, avoiding unintended autofocus on initial component mount.

**Action:** Implement focus management for all state-dependent UI containers (success messages, modals, drawers) to maintain user context. Always pair `aria-live` with programmatic focus for critical status updates.
