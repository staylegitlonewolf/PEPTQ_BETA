# TASKLOG (PEPTQ Stable + Beta)

This tasklog is maintained by the Client Liaison agent during the project.
Add newest tasks at the top.

---

## Active Tasks

### [TASK-003] Owner Ops: Google Sheets Access + Email Workflow

Timestamp: 2026-04-01
Owner: Dev
Status: Backlog
Scope: Sheets | Deploy
Gated: YES (requires Google account access)

Restated:
Confirm the operational inbox (`info@peptq.com` or equivalent), add the owner to the Stable Google Sheet(s), and ensure Apps Script notifications route to the correct inbox (with optional forwarding if the owner prefers Yahoo on mobile).

Acceptance criteria:
- Website owner has the correct permissions on the Stable Google Sheet(s).
- Apps Script notification recipient is correct for waitlist/support/request/preorder alerts.
- If forwarding is required, the owner can read alerts on mobile without breaking system ownership.

Proof required before Done:
- Screenshot or confirmation of Sheet share permissions.
- Confirmed notification recipient setting (and a test email received).

---

### [TASK-001] COA Library + QR Deep Links (Plan A)

Timestamp: 2026-04-01
Owner: Dev
Status: Backlog
Scope: Fullstack
Gated: YES (Stable domain + optional member gating)

Restated:
Build `/coa` library + deep-link workflow so label QR scans always load and allow COA PDF downloads when available.

Acceptance criteria:
- `peptq.com/coa` always loads (never blank).
- `peptq.com/coa?lot=...&sku=...` shows found/missing/disabled states.
- COA mappings are controlled from Google Sheets `COA` tab.

Proof required before Done:
- Working URLs on mobile.
- Sheet tab headers present.
- Backend command responses verified.
- Deployment/Version IDs recorded.

---

### [TASK-002] Stable Planning: Routing + Hosting

Timestamp: 2026-04-01
Owner: Dev
Status: Backlog
Scope: Deploy
Gated: YES (DNS/hosting access)

Restated:
Move Stable from GitHub Pages to `peptq.com` with SPA routing and CI/CD.

Acceptance criteria:
- Direct routes like `/coa` and `/apply` do not 404 on refresh.

Proof required before Done:
- Live production URL tests.
- Hosting configuration recorded.

---
