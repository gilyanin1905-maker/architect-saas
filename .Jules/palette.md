## 2026-08-06 - Accessible Form State & Focus Management

**Learning:** When switching a form's UI from an active editing state to a success state, assistive technology users (like screen readers) can completely lose context unless focus is explicitly managed. Simply rendering a success container isn't enough; we need to programmatically direct focus to the status block so that the result is immediately read. Conversely, when resetting the form (e.g., from success back to idle), focus must be restored to the first interactive field to facilitate re-entry.

**Action:**
1. Assign `tabIndex={-1}`, `role="status"`, and `aria-live="polite"` attributes to the success status container.
2. Use a React ref pointing to the success status container to programmatically trigger `.focus()` within an effect loop triggered by form status updates.
3. Use a secondary ref to check the previous status to avoid accidental auto-focusing on mount, ensuring that returning focus to the first input only occurs on transitioning from 'success' back to 'idle'.