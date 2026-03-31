PEPTQ BETA PHASE 1 – IMPLEMENTATION NOTES (READ CAREFULLY)

STARTING POINT
- Codebase root: C:\Users\Lonewolf\Desktop\PEPTQ DEMO
- Beta build output: C:\Users\Lonewolf\Desktop\PEPTQ DEMO\BETA_VERSION\BETA_WEBSITE_ONLY_FOLDER

IN-SCOPE PAGES (KEEP)
- Catalog → routes to /apply (no guest entry)
- Pre-Order (simple preorder intake) → /preorder
- Access/Apply form → /apply
- Support → /support
- About → /about
- Mission → /mission
- Payment & Ordering → /payment-policy
- Terms → /terms
- Notice, light/dark theme toggle, accessibility, language assist, support notes

EXCLUDED (REMOVE/REDIRECT)
- Owner page, Member page
- Login / profile pages
- Enter as Guest
- Any /owner, /ledger, /documents, /profile routes (redirect away in beta)

WORKFLOW REQUIREMENTS
- Sidebar/nav: no Login/Profile; Catalog item points to /apply; include Pre-Order tab.
- Forms must submit to Google Apps Script + Sheets:
  - Waitlist intake
  - Research Account Application (Apply)
  - Pre-Order (new simple intake)
- Email automation: use testing inbox `lvastudio.ops@gmail.com`.
- Add small pin text bottom-left: “YOU ARE A BETA TESTER”.

GOOGLE APPS SCRIPT / SHEETS
- Existing endpoints: Waitlist, Research Account, Preorder (SUBMIT_PREORDER) stay wired; ensure submissions land in Sheets without auth friction.

DELIVERABLES
- Beta build (vite build --mode beta) copied into BETA_VERSION/BETA_WEBSITE_ONLY_FOLDER.
- Navigation/route surface matches the above.
- Visual indicator “YOU ARE A BETA TESTER” present.

DONE
- Beta nav/route trims owner/member/login; Catalog→/apply; profile/owner routes redirected; guest entry removed.
- Beta badge added (sidebar + mobile).

TODO (today)
- Build beta bundle and place in BETA_WEBSITE_ONLY_FOLDER.
- Smoke-test /apply, /preorder, /support forms for Sheet delivery.

QUESTION FROM PM
- New “Pre-Order” tab: provide simple preorder catalog view; current implementation is a lightweight preorder form posting to SUBMIT_PREORDER.
