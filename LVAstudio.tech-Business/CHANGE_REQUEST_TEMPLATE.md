# Change Request Template (Client -> Developer)

Use this template for every change request. It helps your AI assistant produce safe, developer-ready tasks.

---

## Request Summary

- Request title:
- Priority: (Low / Medium / High)
- Desired outcome (1 sentence):

---

## Where Is The Change?

- Page/route (example: `#/preorder`, `#/apply`, `#/about`):
- Device scope: (Mobile / Desktop / Both)
- Language scope: (English / Espanol / Both)

---

## What Should Change?

Current behavior:

Desired behavior:

---

## Assets / Content (If Applicable)

- Provide any images/logos as attachments or links:
- If replacing brand assets, specify:
  - Light logo
  - Dark logo
  - Favicon
  - Coming soon image

---

## Data / Google Sheets (If Applicable)

- Which tab: (Asset / CatalogBeta / Members / Orders / etc.)
- Which columns/headers:
- What rows should be added/changed:
- Any new required fields:

Note: Do not change sheet headers without developer approval.

---

## Backend / Apps Script (If Applicable)

- What command is involved (if known):
- Does this require a new Apps Script deployment? (Yes/No/Unknown)

Note: AI assistants must not redeploy Apps Script.

---

## Acceptance Criteria

- [ ] The change works on mobile and desktop.
- [ ] No console errors introduced.
- [ ] The change works on GitHub Pages after deployment.
- [ ] If a form is involved, the submission saves correctly in Sheets.

Add 2 to 6 specific criteria:
- [ ]
- [ ]

---

## Risks / Notes

- Anything that could break:
- Compliance or access-control considerations:

