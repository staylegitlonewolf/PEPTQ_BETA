# Stable Handoff: COA + QR (Plan A + Plan B)

This is a direct handoff document for any developer/agent implementing the Stable `/coa` workflow.

Do not claim completion until all acceptance checks pass.

---

## Goal (What Must Be True)

1) Scanning a label QR code must never show a blank page.
2) There must be a COA library landing page (`/coa`) and a direct deep-link for a specific lot.
3) COA mapping must be controlled from Google Sheets (so operations can keep uploading COAs over time).
4) Beta stays no-login. Stable can optionally gate PDF downloads later.
5) QR codes must ultimately point to `peptq.com` (stable domain) before labels are printed.

---

## Plan A (Preferred): Stable SPA + Sheets + Apps Script Commands

### A1) URL Contract

Print on labels (final):
- `https://peptq.com/coa?lot=<LOT_ID>&sku=<PRODUCT_HANDLE>`

Temporary fallback (if Stable host routing is not ready):
- `https://peptq.com/#/coa?lot=<LOT_ID>&sku=<PRODUCT_HANDLE>`

### A2) Google Sheets Contract

Create/ensure a `COA` tab exists with headers exactly:
- `coa_id`
- `product_handle`
- `lot_id`
- `pdf_url`
- `status`
- `created_at`

Rules:
- `status=TRUE` = active/visible
- `status=FALSE` = disabled/hidden

### A3) Backend Contract (Apps Script)

Add commands:
- `GET_COA` (required)
- `LIST_COA` (optional, for library/recent items)

`GET_COA` inputs:
- `lot` (or `lot_id`)
- `sku` (or `product_handle`)

`GET_COA` outputs:
- Found: `{ status:"success", code:"SUCCESS_COA_FOUND", coa:{ product_handle, lot_id, pdf_url, status } }`
- Missing: `{ status:"success", code:"SUCCESS_COA_NOT_FOUND", message:"COA not uploaded yet." }`
- Disabled: `{ status:"success", code:"SUCCESS_COA_DISABLED", message:"COA is not available." }`

Stable-only security (later):
- Allow the COA page to render publicly.
- Gate only the PDF download (members only).

### A4) Frontend Contract (Stable)

Add:
- Route `/coa` (library/search)
- Deep-link handling for `?lot=...&sku=...`

Behavior:
- If params present:
  - call `GET_COA`
  - if found: show COA card + Download button + "Open product" link (by `product_handle`)
  - if missing/disabled: show message + search UI + support link (never blank)
- If no params:
  - show library/search UI
  - optionally show recent items via `LIST_COA`

### A5) Acceptance Checks

- Known COA loads correct PDF.
- Unknown COA shows "not uploaded yet" UI (not blank).
- Disabled COA shows "not available" UI (not PDF).
- `/coa` loads with no params (search UI).
- Mobile + desktop layout OK.
- No console errors.
- Stable routing works (non-hash) or hash fallback is documented.

---

## Plan B (If Plan A Is Blocked)

Use Plan B if any of these blockers happen:
- Stable hosting cannot support SPA rewrites quickly (so `/coa` 404s).
- Apps Script changes cannot be deployed in time.
- COA PDFs cannot be stored reliably behind Drive permissions yet.

### B1) Plan B Strategy: Always-Working COA Landing + Minimal Backend

Goal:
- Labels can be printed now with a working link.
- COA library can be populated gradually.
- No blank scans even before full stable stack is ready.

Implementation:
- Make `peptq.com/coa` a simple landing page that always renders:
  - "Enter LOT" search box
  - "COA not uploaded yet" fallback message
  - Support contact link
- The page can initially be a static page or a minimal hosted app.

Data:
- Use the same `COA` tab in Google Sheets.
- If Apps Script is not ready, export a periodic JSON snapshot from Sheets (manual or scheduled) and have the landing page query that.

Routing:
- Keep it simple: `https://peptq.com/coa?lot=<LOT_ID>` must always load.
- If `sku` is not available on labels yet, Plan B can match by `lot_id` only, with a "Confirm product" step.

Security:
- No gating initially.
- When stable portal gating is ready, gate only the download button (members only).

### B2) Plan B Acceptance Checks

- `peptq.com/coa` loads from any phone.
- `peptq.com/coa?lot=...` never blank; always shows either:
  - COA found + download, or
  - missing message + support

---

## Gated Tasklog Workflow (Other Agent Must Maintain)

Assign a separate "Client Liaison" agent to run the tasklog while the implementing developer codes.

### Tasklog Rules

- Every request becomes a task with an ID.
- Every task has:
  - Scope (Frontend / Backend / Sheets / Deploy)
  - Owner (Dev / Client Liaison)
  - Status (Backlog / In Progress / Blocked / Done)
  - Acceptance criteria
  - Links (sheet tab, route, command name)
- If the task is gated (login, download security, Apps Script deploy), the liaison must mark it:
  - `GATED: DEV REQUIRED`
  - and record what proof is needed (deployment version ID, URL test)

### Tasklog File Locations

- Primary: `LVAstudio.tech-Business/TASKLOG.md`
- Template: `LVAstudio.tech-Business/TASKLOG_TEMPLATE.md`

### Output Standard (for each update)

Timestamp:
Task ID:
Change request summary:
Classification:
Next action:
Blockers:
Proof required before "Done":

