## 2025-05-15 - Programmatic Label Association for Forms

**Learning:** Relying on visual proximity or placeholders for form labels is insufficient for accessibility. Using `htmlFor` on `<label>` elements and matching `id` on `<input>` elements is critical for screen reader users and increases the clickable area for all users.

**Action:** Always ensure every form input has a programmatically associated label. Use unique prefixed IDs (e.g., `contact-name`) to avoid collisions on pages with multiple sections.
