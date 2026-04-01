
**PLAN-001**
**DEV ASKED:**
This is Daniel :
FOR BETA VERSION we are using no login    since   STABLE VERSION will be moved from GITHUB URL to  peptq.com         but lets already have this planned out  of the steps to be taken for STABLE VERSION  thats being worked on in PEPTQ DEMO  C:\Users\Lonewolf\Desktop\PEPTQ DEMO


**AI ANSWER**

# TO-DO Tasks (PEPTQ DEMO = Stable Version)

Context:
- Beta Version (this repo): GitHub Pages, no login, fast iteration, Google Sheets + Apps Script backend.
- Stable Version (PEPTQ DEMO at `C:\Users\Lonewolf\Desktop\PEPTQ DEMO`): will move to `peptq.com` with stronger controls, production deployment, and optional login/gating.

Goal:
- Keep Beta as a lightweight public preview.
- Build Stable as the production system on `peptq.com` with correct routing, better security, and long-term maintainability.

---

## Phase 0 - Owners + Access Checklist

- Confirm domain owner for `peptq.com` and DNS access.
- Confirm who owns the GitHub org/repo for Stable and who can deploy.
- Confirm who owns the Google Sheet + Apps Script project(s).
- Create a single "Source of Truth" spreadsheet for Stable (separate from beta if needed).
- Decide the Stable hosting provider (Vercel recommended for React/SPA + routing + previews).

Deliverable:
- A documented "who has access to what" list.

Additional owner-ops tasks (from client workflow):
- Decide the operational inbox for the business (example: `info@peptq.com`) and who can access it.
- Confirm the Google account identity used to own the Sheets/App Script project(s).
- Add the website owner as an Editor (or appropriate role) on the Stable Google Sheet(s).
- Set the notification recipient email in Apps Script so waitlist/support/request/preorder alerts go to the right inbox.
- Mobile email preference:
  - If the owner prefers Yahoo on mobile, set up forwarding from the Google inbox to their preferred mailbox.
  - Keep the Google account as the system owner (Sheets/App Script) even if the owner reads mail elsewhere.

---

## Phase 1 - Stable Hosting on peptq.com (No-Login Mode First)

Why:
- QR codes must point to a stable domain that always loads.
- GitHub Pages is fine for beta, but production needs better control and a real domain.

Tasks:
- Decide URL strategy:
  - Preferred: `https://peptq.com/` with real paths like `/coa`, `/apply`, `/preorder` (no hash).
  - Temporary compatible: `https://peptq.com/#/coa?...` until rewrites are set up.
- Configure SPA routing on the host:
  - All routes should return `index.html` (prevents 404 on refresh).
- Add environment separation:
  - Stable `.env` points to Stable backend endpoint(s).
  - Beta `.env.beta` stays pointing to Beta backend.
- Set up CI/CD:
  - Preview deploys per PR.
  - Production deploys from `main`.

Acceptance:
- `peptq.com` loads on desktop and mobile.
- Direct navigation to `/apply` and `/preorder` works (no 404).

---

## Phase 2 - Data Layer: Stable Google Sheets + Apps Script

Goal:
- Stable must not depend on ad-hoc sheet tabs or manual edits that can break the UI.

Tasks:
- Define Stable spreadsheet schema:
  - `Asset` tab for brand assets (light/dark/favicon/comingsoon).
  - `Catalog` (stable production catalog).
  - `CatalogBeta` may remain for beta/testing only.
  - `COA` (new): COA library mapping for QR scans.
- Lock headers (do not change without dev).
- Update Apps Script commands to support Stable use cases:
  - `GET_COA` (and optionally `LIST_COA`) for QR -> COA library.
  - Keep `GET_SITE_LAYOUT`, `GET_ASSETS`, `GET_CATALOG`, `SUBMIT_*` commands stable.
- Standardize email templates across all submission types (waitlist/support/request/preorder).

Acceptance:
- Stable frontend reads assets and catalog from the Stable sheet reliably.
- Changing `Asset.url` updates site assets without code changes.

---

## Phase 3 - COA Library (QR -> /coa)

Beta:
- No login in beta (public preview). The `/coa` landing page should never be blank.

Stable:
- Allow "view COA card" publicly if needed, but gate PDF download for members (recommended).

Tasks:
- Define QR format for printing:
  - Minimum: `https://peptq.com/coa?lot=LOT123&sku=HANDLE`
  - Optional: signed token later for anti-guessing.
- Create the `COA` sheet tab with headers:
  - `coa_id`, `product_handle`, `lot_id`, `pdf_url`, `status`, `created_at`
- Build Stable `COA` page:
  - If COA exists: show details + download.
  - If missing: show "COA not uploaded yet" + support/contact.
- Apps Script:
  - Implement `GET_COA` lookup by `lot_id + product_handle` (or `coa_id`).
  - Enforce download rules (member-gated in Stable).

Acceptance:
- Printing can start immediately because the link always loads.
- Missing COAs show a helpful message instead of blank page.

---

## Phase 4 - Login / Portal Gate (Stable Only)

Goal:
- Add membership gating for sensitive actions (downloads, member pricing, order workflows).

Tasks:
- Decide auth method:
  - Continue current email/PIN model, or
  - Upgrade to a full auth provider later.
- Define gating rules:
  - Public: marketing pages, help pages, COA landing (optional).
  - Member-only: COA PDF download, order placement, inventory details.
- Add audit logging for gated downloads (who/when/what).

Acceptance:
- Non-members can browse allowed pages.
- Members can access gated actions without friction.

---

## Phase 5 - Product/Order Hardening (Stable)

Tasks:
- Confirm preorder logic vs real ordering:
  - Beta preorder remains "reservation request".
  - Stable ordering adds invoices/payment terms and compliance flow.
- Add admin workflows (owner dashboard) for:
  - Approving requests
  - Managing COA library
  - Catalog/inventory updates

Acceptance:
- Stable has clear admin workflows and fewer manual steps.

---

## Notes / Guardrails

- Beta stays no-login and can keep hash routing (fast + simple).
- Stable moves to `peptq.com` and should use real paths (no hash) when ready.
- Any Apps Script changes require a new Apps Script deployment.
- AI assistants must not deploy or modify Apps Script/Sheets without developer approval.



**PLAN-002**
**DEV ASKED:**
What about Catalog  PreorderCatlog       and Google Sheets   Etc worrys do we need to know  with workflow  when we inlucde COA   when entering portal gate    would COA be on the side menu  and wehn click goes to  all   /coa    to view and download PDF / open prodcut thats linked in catlog     or  have the qr code be scan  in   /coa/   here- all that good shit   .....   so its   direct     there    ?


**AI ANSWER**

Here’s the clean way to think about it so Catalog / PreorderCatalog / COA all fit one workflow without surprises.

**1) Catalog vs PreorderCatalog (Google Sheets)**
- `Catalog` = your “main/stable” product list (what the business considers real inventory/catalog).
- `CatalogBeta` (or `PreorderCatalog`) = a curated subset just for beta preorder flow.
- For Stable, I’d keep **one authoritative `Catalog`**, then control preorder visibility with either:
  - Option A (simplest): add columns to `Catalog` like `preorder_enabled` and `preorder_status`.
  - Option B (clean separation): keep a `PreorderCatalog` tab that references `Catalog` by `product_handle` + `lot_id`.

**2) COA should be its own library table**
Add a `COA` tab (library) that maps what the label QR knows to a PDF:
- Required: `product_handle`, `lot_id`, `pdf_url`, `status`
- Optional: `coa_id`, `created_at`, `notes`

This stays independent from preorder, but it *links back* to catalog using `product_handle` (and optionally `lot_id`).

**3) URL structure: do both “library” + “direct QR deep link”**
Yes, COA should be in the side menu as a library, and QR should deep-link directly.

Recommended routes:
- Library: `/coa` (shows search + recent + “enter lot / scan result”)
- Detail: `/coa/<lot_id>` or `/coa?lot=...&sku=...`

QR should point to the **detail** route, not just the library:
- Example: `https://peptq.com/coa?lot=MIC1026-01&sku=mic-lipo-b12-10ml`

Then behavior:
- If match found: show COA card + Download PDF (or View PDF).
- If not found: show “COA not uploaded yet” + fallback to library search + support link (never blank).

**4) Portal gate workflow (Stable)**
For beta (no login): `/coa` and `/coa?...` can be public.
For stable: you have two good choices:
- Gate only the **Download PDF** button (recommended for user experience).
- Gate the entire COA page (stricter, more friction).

**5) Should COA open the product page too?**
Yes—best UX is COA detail page includes:
- “Open product” link back to `/catalog/<handle>` (or whatever your product route is)
- Lot info + purity string + download link(s)

So: side menu `COA` goes to `/coa` (library), QR goes to `/coa?...` (direct).

If you tell me what the label will always include (just `LOT`, or `LOT + SKU/handle`), I’ll lock the exact QR URL format and the exact `COA` sheet headers so printing can start without redoing labels later.


**PHASE3**
What do u suggest ?

**AGENT_ANSWERED**
I suggest this setup (it’s the least risky and works even if COAs aren’t ready yet):

Keep Catalog as the single source of truth for products, and add preorder_enabled (TRUE/FALSE) + optional preorder_status columns so you don’t have to maintain a separate “PreorderCatalog” forever.
Create a separate COA sheet tab as a library keyed by lot_id + product_handle, with columns: product_handle, lot_id, pdf_url, status, created_at (optional coa_id).
Add COA to the side menu as a library route /coa (search + recent), and make QR codes deep-link to the detail route: https://peptq.com/coa?lot=MIC1026-01&sku=mic-lipo-b12-10ml.
For beta: no login, page is public, but never blank (shows “not uploaded yet” if missing).
For stable: gate only the Download PDF button (members only), while still letting the COA page load.
This gives you: one catalog to manage, a COA library that’s easy to populate over time, and QR labels that are safe to print immediately.


**PHASE4**
is that what the screeshots asked for

**AGENT_ANSWERED**
Yes — your screenshots are asking for exactly this:

- A QR code that links to `peptq.com` (stable domain).
- A COA experience that **never shows nothing** even if not all COAs are uploaded yet.
- A “COA library” landing page people can always reach, plus the ability for each label to go **directly** to the right lot’s COA.

So the plan “`/coa` library in the side menu + QR deep-link to `/coa?lot=...&sku=...`” matches what they described.


**PHASE5**
Daniel Asked :
now what would be the final  .md promt  you would give to yourself  to want to read how to do those tasks  and being able to read and understand directly without having to be confused and look everywhere ..  How would you want to read it if a developer was passing you over those task to do and they are asking  in a direct way    . this is what you need to do first and then you need to do that and make sure this is good and before even telling me your done  you made sure  it was too good that you  would be fired !

**AGENT_ANSWERED**

Here’s the exact “final prompt” I’d want a developer to hand me so I can execute the whole /coa + QR + Sheets + Apps Script workflow with zero ambiguity (copy/paste as a single .md block):



**PHASE6**
Daniel Asked :
yes and give me  PLAN B  handoff  if this dosnt work  try this  and tell the other agent to take gated tasklogs as they conotnue


**AGENT_ANSWERED**

Added a full **Plan B handoff** and the “gated tasklog” workflow so the next agent/dev can keep moving without losing structure.

- `LVAstudio.tech-Business/STABLE_HANDOFF_COA.md` now includes:
  - Plan A (preferred): Stable SPA `/coa` + Sheets `COA` tab + Apps Script `GET_COA` (optional `LIST_COA`) + deep-link QR format
  - Plan B (fallback): always-working `peptq.com/coa` landing page + minimal backend/JSON snapshot option so labels can print even if rewrites/Apps Script aren’t ready
  - A gated tasklog SOP (how the liaison agent keeps logging gated work)
- `LVAstudio.tech-Business/TASKLOG_TEMPLATE.md` gives the exact format the other agent must use.
- `LVAstudio.tech-Business/TASKLOG.md` is pre-seeded with the COA + hosting tasks so work can continue immediately.

These files are ready to commit when you run git from your normal user session (sandbox still can’t write to `.git/objects`).



Added the extra “owner ops” items from that screenshot into the Stable workflow docs:

- Updated `LVAstudio.tech-Business/TO-DO-TASKS.md:1` Phase 0 with an “owner-ops” checklist:
  - operational inbox (ex: `info@peptq.com`)
  - who owns the Google account for Sheets/App Script
  - add the owner to Stable Sheets
  - set Apps Script notification recipient correctly
  - optional forwarding to Yahoo for easier mobile use (without changing system ownership)
- Added `LVAstudio.tech-Business/TASKLOG.md:1` `TASK-003` to track this as a gated item with proof required (permissions + test email).



**DANIEL ASK**
whicin one of these tasks can be done in our beta   https://github.com/staylegitlonewolf/PEPTQ_BETA


In PEPTQ_BETA (GitHub Pages, no-login), we can do these now without waiting for peptq.com:

Add a COA item to the side menu that goes to a new #/coa library page (public).
Implement the QR deep-link route in beta: #/coa?lot=...&sku=... with “COA not uploaded yet” fallback (never blank).
Add a beta-only COA lookup that reads from a Google Sheet COA tab (same schema we planned), via Apps Script commands (GET_COA, optional LIST_COA) once you paste/deploy those backend changes.
Add “Open product” link from the COA page back to the catalog item by product_handle.
Update Coming Soon footer to match the global footer layout (Terms/Privacy/Shipping/Refund/Payment/Contact).
Document + enforce the change-request process (HI_README.md, CHANGE_REQUEST_TEMPLATE.md, TASKLOG.md) — already done.
These cannot be fully completed in beta (they’re Stable/ops/deploy dependent):

Printing final label QRs pointing to https://peptq.com/coa... (needs peptq.com live).
Stable non-hash routing (/coa without #) and production hosting/CI.
Member-gated PDF downloads (requires stable auth/gating decisions and backend enforcement).
Owner ops tasks like adding the client to Google Sheets and setting info@peptq.com notification routing (that’s Google admin work, not a beta code change).

ok and if we do this for BETA   version we would be able to  eventulaylly merge our version with  the demo version  ...  SINCE BETA VERSION is becoming more stronger     DEMO version is still strong with catlog and prodcut  profiel page  and owner dashbord ...   just making sure



Yes — doing the COA library + QR deep-links in BETA now will merge cleanly into PEPTQ DEMO later, as long as we keep the integration points the same:

Keep the COA feature behind stable contracts: same route shape (/coa + deep-link params), same sheet headers (COA tab), same Apps Script command names (GET_COA, optional LIST_COA).
Build it in BETA as UI + command calls only (no hardcoded data), so DEMO can reuse the same components and just point to the Stable backend/sheet.
DEMO can keep its stronger parts (catalog/product profile/owner dashboard) and we only “lift” the COA page + routing + data contract from BETA into DEMO.
The only real risk is if BETA invents a different schema or different command names. If we stick to the planned COA sheet + GET_COA command contract, the merge is basically copy/paste of the UI and wiring the env vars to the DEMO backend.


**END**