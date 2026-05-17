## 2025-05-15 - Form Accessibility and Autofill
**Learning:** The contact form lacked explicit label-input associations and autocomplete attributes, which hinders screen reader accessibility and slows down user input.
**Action:** Always connect <label> elements to <input> or <textarea> elements using matching 'htmlFor' and 'id' attributes. Include 'autoComplete' attributes on form inputs (e.g., 'name', 'email', 'organization') to improve browser autofill UX.
