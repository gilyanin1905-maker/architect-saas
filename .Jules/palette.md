# Palette's Journal

Critical UX/accessibility learnings and insights.

## 2026-07-15 - Dynamic Focus and Autocomplete UX in Snap-Scrolling Contact Forms
**Learning:** In highly interactive, single-page scrolling applications (using snap scroll and Framer Motion layout triggers), dynamic state transitions in forms (such as switching from an input form to a success container or resetting back to idle) can leave the user's focus stranded or cause unexpected screen reader silence. Associating `<label>` elements via `htmlFor`/`id`, specifying standard browser `autoComplete` attributes, and managing programmatic focus (directing screen readers to the status container upon success, and returning to the first input element upon reset) significantly improves accessibility and prevents confusing UX.
**Action:** Always link form labels to their inputs using `htmlFor` and `id`, provide context-aware `autoComplete` attributes, and handle programmatic focus transitions explicitly when states toggle or forms reset. Ensure feedback/success containers use `role="status"` and `aria-live="polite"` so state changes are immediately announced.
