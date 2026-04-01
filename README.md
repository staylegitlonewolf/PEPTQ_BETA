# PEPTQ BETA

PEPTQ BETA is a public, no-login testing site used to validate the PEPTQ research portal experience before the stable release moves to `peptq.com`.

This beta is focused on:
- Confirming page layout, language switching (English/Español), and mobile usability
- Validating the catalog and preorder workflow driven by Google Sheets
- Validating form submissions and internal notification emails from Google Apps Script

## Pages & Flows

- **Catalog**: Browse the current beta catalog list.
- **Pre-Order**: Select SKUs and submit a preorder request for out-of-stock items.
- **Early Access**: Join the waitlist for portal access.
- **Apply**: Submit an institutional research account application.
- **Support**: Send a support request (portal access / help / questions).
- **About / Mission / Payment & Ordering / Terms**: Public policy + informational pages.

## Google Sheets Backend (Non-Technical)

This beta reads and writes to Google Sheets through a secured Google Apps Script web app:
- **CatalogBeta** controls what shows up in the Pre-Order catalog (live/not-live toggles).
- **Asset** controls website UI assets (logos, favicon, hero images) using either:
  - A simple file name (example: `light.png`)
  - Or a Google Drive link (recommended for hosted images)

If an asset is missing or a link is incorrect, the site falls back to local `/public` images.

## Deployment

This repo deploys to GitHub Pages using GitHub Actions.
In the GitHub repo settings: set **Pages → Source** to **GitHub Actions**.

## Project Docs

Operational handoff + change-management docs live in:
- `LVAstudio.tech-Business/`
