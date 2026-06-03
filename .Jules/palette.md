## 2025-05-22 - [Form Success Focus Management]
**Learning:** In applications using state-driven UI (like React), replacing a form with a success message can disorient screen reader users if focus is not explicitly managed. The screen reader may lose its place or remain on a stale element.
**Action:** When a form submission is successful, programmatically shift focus to the success heading or message using a `ref` and `tabIndex={-1}`. This provides immediate confirmation of the action's result for assistive technology users.

## 2025-05-22 - [Label-Input Association]
**Learning:** Using implicit labels (wrapping input in label) is often not enough for all assistive technologies or complex layouts. Explicit association using `htmlFor` and `id` is the most robust method.
**Action:** Always ensure every form input has a unique `id` and a corresponding `<label htmlFor="...">` to maximize accessibility and improve touch target size.
