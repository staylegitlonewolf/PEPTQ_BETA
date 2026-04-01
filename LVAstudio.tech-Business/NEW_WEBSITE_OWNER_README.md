# New Website Owner README (Presentation Agenda)

This document is meant to be read out loud while sharing the PEPTQ Beta and explaining the Stable roadmap.

Links you can share during the call:
- Beta site: `https://staylegitlonewolf.github.io/PEPTQ_BETA/`
- Repo: `https://github.com/staylegitlonewolf/PEPTQ_BETA`
- Backend (Apps Script): `https://script.google.com/macros/s/AKfycbzt9KsxdP1C9Bw5qcizWmMK1vzfyig2XztVo-oNZC4Rpj0XwNWpOLkX5xdNBck0UzYX/exec`

Related docs (in this folder):
- `HI_README.md` (paste into any AI assistant to stay in-bounds)
- `CHANGE_REQUEST_TEMPLATE.md` (how to submit changes)
- `TO-DO-TASKS.md` (Stable roadmap)
- `STABLE_HANDOFF_COA.md` (COA Plan A + Plan B)
- `TASKLOG.md` (active tasks + gated items)

---

## 0) Opening (60 seconds)

Goal for this call:
- Confirm what PEPTQ Beta is today.
- Confirm what PEPTQ Stable needs to be on `peptq.com`.
- Confirm the COA + QR workflow so label printing can start safely.
- Agree on a clean process for submitting changes.

Success at end of call:
- We confirm who owns access to GitHub, the domain, the Google Sheet, and the Apps Script project.
- We agree on the QR link format for labels.
- You leave with a single template to submit change requests.

---

## 1) What You're Looking At (Beta) (2 minutes)

Beta is:
- A standalone Vite + React site deployed on GitHub Pages.
- A no-login preview designed for speed and testing.
- Powered by Google Apps Script + Google Sheets for data and form submissions.

Beta is not:
- Final production hosting for label QR codes.
- The long-term authenticated portal (Stable will be).

---

## 2) Quick Live Tour (5 minutes)

Walk through:
- Home / Coming Soon: waitlist capture.
- Apply (`#/apply`): research account application intake.
- Preorder (`#/preorder`): SKU selection + cart + preorder request.
- Support (`#/support`): support intake.
- Terms / Policies: reference footer links and compliance language.

What to watch for during the tour:
- Mobile navigation is the primary UX baseline.
- Forms submit into Google Sheets and trigger internal notification emails.

---

## 3) Tech Stack (Plain English) (3 minutes)

Frontend:
- React UI, built with Vite.
- GitHub Pages deployment via GitHub Actions.
- Hash routes for reliability on Pages (ex: `#/apply`).

Backend:
- Google Apps Script Web App endpoint.
- Commands pattern (`GET_*`, `SUBMIT_*`).
- Google Sheets acts as the database.

---

## 4) Operations: How You Change Catalog + Assets (5 minutes)

Assets:
- Controlled by a Google Sheet tab `Asset` using `asset_id` + `url`.
- Common IDs: `light`, `dark`, `favicon`, `comingsoon`.
- The site includes local fallback images if sheet links break.

Preorder catalog:
- Beta reads from Google Sheet tab `CatalogBeta`.
- Uses `status=TRUE/FALSE` to show/hide items.

What this means:
- You can update logos/images and preorder items without touching code (as long as headers stay consistent).

---

## 5) COA + QR Codes (The Most Important Part) (7 minutes)

Problem:
- If labels ship with QR codes that lead to a blank page, it looks broken.

Solution (Plan A):
- Stable domain QR format: `https://peptq.com/coa?lot=<LOT_ID>&sku=<HANDLE>`
- `/coa` exists as a library/search page.
- QR deep-links directly to the matching COA detail.
- If COA is missing: show "COA not uploaded yet" + support link (never blank).

Plan B (if hosting or Apps Script is blocked):
- Still print a stable `peptq.com/coa?...` link that always loads.
- Use a minimal landing page + a COA library that can be populated over time.

Decisions needed today:
- Does the label always include BOTH `LOT` and `SKU/handle`?
- Should viewing be public and only downloads gated later? (recommended)

---

## 6) Stable Version Roadmap (peptq.com) (5 minutes)

Stable will:
- Move off GitHub Pages onto `peptq.com` hosting with proper SPA routing (no hash URLs).
- Keep Google Sheets + Apps Script, but with stronger controls and stable schemas.
- Add optional login/gating later (especially for downloads and sensitive features).

Reference: `TO-DO-TASKS.md`.

---

## 7) How To Request Changes (So Nothing Breaks) (3 minutes)

Rules:
- Every request goes through `CHANGE_REQUEST_TEMPLATE.md`.
- If you use an AI assistant, paste `HI_README.md` first so it stays in-bounds.

Example requests the process supports:
- Footer changes (Coming Soon page uses global footer).
- Replace logo (sheet asset change).
- Add/remove pages (frontend + deploy).
- QR -> `/coa` with member-gated PDF downloads (fullstack + deploy).

---

## 8) Ownership + Access Checklist (2 minutes)

Confirm who owns:
- `peptq.com` DNS
- Hosting/deployment for Stable
- GitHub repo access
- Google Sheet owner
- Apps Script project owner + deployment permissions

---

## 9) Next Actions (2 minutes)

We leave the call with:
- Final QR URL format decision.
- A created `COA` tab schema plan (or confirmed existing).
- First 10-20 change requests written using the template.
- A prioritized tasklog update (`TASKLOG.md`).

---

## 10) Q&A

Open questions to capture:
- Branding assets + file formats.
- Compliance language requirements.
- Who is responsible for adding COA PDFs over time (ops workflow).

