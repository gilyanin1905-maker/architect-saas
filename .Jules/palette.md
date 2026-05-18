## 2025-05-14 - [Semantic IDs and Section Anchors]
**Learning:** In landing pages with snap-scroll navigation, IDs (like `#contact`) are often used as both JS scroll targets and HTML anchors. Moving these IDs or changing the tag from `<section>` to `<div>` can break navigation and accessibility landmarks.
**Action:** Always verify anchor link functionality after modifying component root tags or IDs. Keep IDs on the most semantic container that encompasses the target area.

## 2025-05-14 - [Localized ARIA Labels]
**Learning:** Adding ARIA labels to provide feedback (like "Sending...") must respect the application's localization system. Hardcoding these strings breaks the multi-language experience.
**Action:** Check `constants.ts` or similar translation files before adding any user-visible strings, including those for screen readers.
