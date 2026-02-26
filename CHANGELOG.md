# CHANGELOG

## [Unreleased]

### Added

- **`/privacy` page** (`app/privacy/page.tsx`): Static public Privacy Policy page styled to match OLIN brand identity (navy/gold palette, Playfair Display headings, Inter body text). Includes sticky header, anchor-linked table of contents sidebar, 11 structured sections, and a cross-linked footer.
- **`/data-deletion` page** (`app/data-deletion/page.tsx`): Static public Data Deletion Instructions page. Includes a step-by-step process block, "What gets deleted" data grid, a mailto CTA block, and a footer cross-linking to `/privacy`.

### Changed

- **`app/lib/olin-api.ts`**: Replaced hardcoded `https://app.olinhospitality.com` with `process.env.BASE_URL_OLIN_OPS_APP` env variable (falls back to production URL) for environment-aware API routing.
