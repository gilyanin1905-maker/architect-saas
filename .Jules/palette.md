## 2025-05-14 - [Label-Input Connection and ARIA Labels]
**Learning:** Found a pattern of missing explicit connections between form labels and inputs/textareas, as well as missing ARIA labels on interactive icon-only buttons. This can significantly hinder screen reader accessibility.
**Action:** Always ensure <label> elements use htmlFor matching the input's id. Provide aria-label for buttons that contain only icons or minimal text to ensure their purpose is clear to all users.
