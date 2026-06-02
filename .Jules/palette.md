# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - [Linting constraints]
**Learning:** The project's linting command (`pnpm lint`) enforces zero warnings (`--max-warnings 0`), and there are several pre-existing warnings in files like `App.tsx` and `ChatInterface.tsx`. This means any new changes must be perfectly clean, but the build might still fail if global linting is run.
**Action:** Always run `pnpm lint` before submitting and ensure new changes don't add to the warnings. Be aware that pre-existing warnings might need to be addressed if they block the PR.

## 2025-05-14 - [Contact Form Accessibility]
**Learning:** Form fields without associated labels and autocomplete attributes significantly hinder screen reader users and browser autofill efficiency. Proper `htmlFor`/`id` pairing and `autoComplete` attributes are essential.
**Action:** Implement a standard accessibility checklist for all forms, including programmatic focus management for state transitions (e.g., success messages).
