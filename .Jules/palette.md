# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - Enhancing Form Context & Flow
**Learning:** In interactive forms with dynamic state changes (like success messages), failing to manage focus leaves screen reader users in a "dead zone" where their current position no longer exists or is irrelevant. Shifting focus to the success message or back to the start of a reset form is essential for maintaining context.
**Action:** Always use React refs to programmatically shift focus to success messages or the first input field after a state-altering action (submission or reset).

## 2025-05-15 - The Power of Invisible UX (Autofill & ARIA)
**Learning:** Micro-attributes like `autoComplete` and `aria-busy` significantly reduce friction. `autoComplete` saves time for all users, while `aria-busy` coupled with a dynamic `aria-label` provides the necessary "pulse" for assistive technologies during async operations.
**Action:** Include `autoComplete` on all standard inputs and ensure buttons with loading states use both `aria-busy` and a descriptive, state-aware `aria-label`.
