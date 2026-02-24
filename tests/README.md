# Integration & E2E Test Documentation (Agent Instructions)

## Overview

This document serves as the single source of truth and instructions for developers and AI agents creating End-to-End and Integration tests for the `olin-website` project. It aims to standardize Playwright utilization across the Opal workspace.

## Agent Instructions: How to Handle Testing

- **Read First**: Always refer directly to this document when instructed to write E2E or Integration tests.
- **Location**: Place all Playwright tests within this `tests/` directory.
- **Naming**: Tests should follow the `.spec.ts` naming convention. (e.g. `tests/lead-flow.spec.ts`)
- **Isolation**: Focus on small verifiable workflows instead of massive monolithic tests to avoid flakiness.
- **Port Matching**: Remember that `olin-website` runs on `http://localhost:8000`! This is already configured in `playwright.config.ts`.

## Test Framework

- **Framework**: Playwright Test
- **Running Tests Locally**: `npm run test:e2e`
- **UI Mode**: `npm run test:e2e:ui`
- **Headed Mode**: `npm run test:e2e:headed`
- **Code Coverage/Unit**: Separate from Playwright, `vitest` unit tests live near the modules they test and run with `npm test`.

## Configuration Details

The `playwright.config.ts` handles:

- **Base URL**: `http://localhost:8000`
- **Auto-spawning server**: Tests automatically run `npm run dev` before execution avoiding manual environment setup.
- **CI Consistency**: Parallelization and retry logic is inherently aware of CI pipelines.

## Writing New Tests

```typescript
import { test, expect } from "@playwright/test";

test("should load the landing page and have the lead form", async ({
  page,
}) => {
  await page.goto("/");
  // Agent instructions: keep locators simple using role-based accessibility locators where possible.
  await expect(page).toHaveTitle(/Olin/);
});
```
