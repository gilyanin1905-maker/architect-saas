# Palette's Journal

Welcome to Palette's Journal. Critical UX/Accessibility learnings will be recorded here.

## 2026-07-21 - Focus Management and State Transitions in Single-Page Forms
**Learning:** In a single-page interactive layout or snap-container layout, when form submissions change states (e.g., hiding inputs and rendering a success card/container), screen readers lose visual context and focus completely unless it is programmatically managed. Simply wrapping messages in live regions or role="status" is often not enough if the main interaction flow is broken. Dynamic visual exit transitions can also cause focus collisions or target element loss.
**Action:** Always shift focus programmatically to the newly rendered feedback container immediately upon state transition using `tabIndex={-1}` and `role="status"` combined with active `.focus()` calls via React `useRef` and `useEffect`. When transitioning back (resetting the form or starting a new action), restore the focus to the initial form field (e.g., Name input) to preserve a coherent keyboard tab order.
