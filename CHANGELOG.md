# CHANGELOG

## [Unreleased]

### Added

- **`/privacy` page** (`app/privacy/page.tsx`): Static public Privacy Policy page styled to match OLIN brand identity (navy/gold palette, Playfair Display headings, Inter body text). Includes sticky header, anchor-linked table of contents sidebar, 11 structured sections, and a cross-linked footer.
- **`/data-deletion` page** (`app/data-deletion/page.tsx`): Static public Data Deletion Instructions page. Includes a step-by-step process block, "What gets deleted" data grid, a mailto CTA block, and a footer cross-linking to `/privacy`.

### Changed

- **`app/lib/olin-api.ts`**: Replaced hardcoded `https://app.olinhospitality.com` with `process.env.BASE_URL_OLIN_OPS_APP` env variable (falls back to production URL) for environment-aware API routing.

### Fixed

- **`app/actions/submit-lead.ts`**: The lead form now explicitly intercepts HTTP 409 Conflict errors from the ops-app API and displays a user-friendly toast message ("We already have your details! Our team is reviewing...") instead of a generic system failure error, while safely bypassing the Telegram failure alert so ops isn't pinged for back-to-back duplicate submissions.
