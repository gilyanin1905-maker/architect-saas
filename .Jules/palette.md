# 🎨 Palette's UX Journal

## 2025-05-14 - Focus Management in State-Driven Forms
**Learning:** When a form transitions from an 'idle' to a 'success' state (or vice-versa), screen reader focus is often lost or remains on a stale element. This creates a confusing experience for keyboard and screen reader users who must manually find their place again.
**Action:** Use a combination of `useRef` and `useEffect` to programmatically move focus to the success message (using `role="status"` and `tabIndex={-1}`) upon submission, and return focus to the first input field when resetting the form.

## 2025-05-14 - Enhancing Form Autofill
**Learning:** Fields like 'Organization' or 'Telegram handle' are often overlooked for autofill. Providing semantic `autoComplete` values even for non-standard fields significantly reduces friction.
**Action:** Always include `autoComplete` attributes on form inputs. Use `organization` for company fields and `username` for social media handles (like Telegram) to leverage browser autofill capabilities.
