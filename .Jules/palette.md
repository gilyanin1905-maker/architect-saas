## 2025-05-15 - Programmatic Focus Management in Form State Transitions

**Learning:** When a form transitions between states (e.g., from a success message back to the input fields), screen reader users can lose their place in the document. While `role="status"` helps announce the success message, resetting the form to its initial state often leaves the focus on a non-existent element or reverts it to the body.

**Action:** Implement programmatic focus restoration. When the user clicks "Send Again" (or similar reset actions), explicitly move focus back to the first logical input field (e.g., the Name field) using a React ref. This provides a seamless and predictable experience for keyboard and screen reader users.
