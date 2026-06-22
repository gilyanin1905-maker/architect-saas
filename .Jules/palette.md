## 2025-05-14 - Accessible Form Feedback
**Learning:** When providing form feedback, use `role="status"` on success or error containers to ensure messages are immediately announced by screen readers. For full context, programmatically shift focus to the feedback container using a `ref` and `tabIndex={-1}`.
**Action:** Always implement programmatic focus management for state transitions (like form submission success) to provide immediate context to assistive technology users.
