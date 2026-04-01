# PEPTQ Beta Client Handoff (Deck + AI Readme)

This file contains a copy/paste prompt for generating a "Detailed Deck" slide deck and a recommended slide outline.

Use this when handing PEPTQ_BETA to a new website owner/client so they can understand:
- What the beta is
- What tech was used (frontend / backend / fullstack)
- How the Google Sheets backend controls catalog + assets
- What requires real developer work vs simple content changes
- What an AI assistant can and cannot do safely

Repo: `https://github.com/staylegitlonewolf/PEPTQ_BETA`
Beta Site: `https://staylegitlonewolf.github.io/PEPTQ_BETA/`
Apps Script Web App: `https://script.google.com/macros/s/AKfycbzt9KsxdP1C9Bw5qcizWmMK1vzfyig2XztVo-oNZC4Rpj0XwNWpOLkX5xdNBck0UzYX/exec`

---

## Copy/Paste Prompt (Detailed Deck)

Paste the prompt below into your slide generator.
Recommended settings: "Detailed Deck", language: English, length: Default.

PROMPT START

Create a "Detailed Deck" slide deck for a new website owner/client taking over the project:
"PEPTQ Institutional Research Portal (Beta)"

Audience:
- A non-technical business owner + their personal AI assistant.
- Secondary audience: a technical contractor who may be hired later.

Tone:
- Clear and professional.
- No hype. No fluff.
- Explain concepts in plain English first, then give technical details in speaker notes.

Deck Requirements:
- 14 to 18 slides.
- Each slide must have: a title, 3 to 6 bullet points, and speaker notes with extra detail.
- Include 1 simple architecture diagram slide (text-based is fine).
- Include 1 "What AI can/cannot do" slide with firm boundaries.
- Include a "How to request changes" slide that turns random client feedback into a safe task list.

Project Summary:
- This is a standalone Vite + React beta web app deployed on GitHub Pages.
- The frontend calls a Google Apps Script Web App backend.
- The backend reads/writes Google Sheets for: site layout, assets, catalog, waitlist, support, portal access requests, and preorders.
- The beta preorder catalog comes from the Google Sheet tab "CatalogBeta" and supports a boolean "status" field:
  status=TRUE shows on /preorder
  status=FALSE hides on /preorder
- The beta site uses hash routing on GitHub Pages (#/apply, #/preorder, etc.).

Frontend Tech (explain what this means):
- Vite build system
- React UI
- Hash routing for GitHub Pages
- CSS/Tailwind-style utility classes and component-based UI
- Deployment via GitHub Actions (Pages)

Backend Tech (explain what this means):
- Google Apps Script Web App (HTTP endpoint)
- Google Sheets as the database
- Commands pattern (example: command=GET_SITE_LAYOUT, command=GET_ASSETS, command=GET_CATALOG, command=SUBMIT_WAITLIST, command=SUBMIT_SUPPORT, command=SUBMIT_REQUEST, command=SUBMIT_PREORDER)

Fullstack Data Flow (explain end-to-end):
- User loads site -> frontend fetches layout/assets/catalog -> user submits forms -> frontend posts to Apps Script -> Apps Script writes to Sheets -> internal notification emails are sent.

How to Replace Assets (non-technical instructions + technical notes):
- Assets are controlled by the Google Sheet tab "Asset" with columns like asset_id and url.
- Example IDs used by the site: comingsoon, light, dark, favicon.
- URLs can be local paths (light.png) or external URLs (Drive/share links).
- The site also has fallback local images in /public as backup if sheet links break.

How to Replace Preorder Items (non-technical instructions + technical notes):
- Preorder items are controlled by Google Sheet tab "CatalogBeta".
- Required headers: product, strength, price_usd, purity_string, status.
- Only status=TRUE items show in /preorder.
- If a product is missing in /preorder, check status and headers first.

What Requires Developer Work (be explicit):
- Any Google Apps Script code changes, deployment changes, or new backend commands.
- Any new pages/routes or portal-gated pages (example: /coa).
- Any security changes, identity gating, member-only downloads, PDF access control.
- Any change that affects data schema or spreadsheet tab headers.

What An AI Assistant Can Help With (safe tasks):
- Writing a clear change request (what/where/why).
- Proposing copy updates, layout suggestions, and UX improvements.
- Drafting a task list and acceptance criteria.
- Drafting code snippets for review by a developer (but not pushing/deploying).

What An AI Assistant Must Not Do:
- Must not commit code, deploy the website, or redeploy Apps Script.
- Must not alter Google Sheets structure or Apps Script without explicit developer approval.
- Must not claim a change is live without the developer confirming deployment.

Include Example Client Questions (and how to answer):
1) "Remove the footer from Coming Soon page and use the global footer like other pages."
2) "Change the logo to this photo."
3) "Add a new page / remove an existing page."
4) "I want a QR code on product labels that opens /coa, portal-gated for members only, where they can download a PDF."

For the QR /coa feature, include a short plan:
- Frontend: add route + page + portal gate, handle deep-link from QR scan
- Backend: map product/lot -> PDF URL (likely Google Drive) with access control rules
- Data: Google Sheet tab for COA mappings (lot_id, product_handle, pdf_url, status)
- Security: member identity verification before allowing download

End with a "Next Steps" slide:
- Confirm who owns the Google Sheet + Apps Script deployments
- Confirm who owns GitHub repo + Pages settings
- Collect the first 10 to 20 change requests using a template

PROMPT END

---

## Recommended Slide Outline (if you build manually)

1. Title + What this beta is
2. Goals of the beta (what we are validating)
3. What the client controls vs what needs a dev
4. Frontend stack (Vite + React + routing)
5. Backend stack (Apps Script + Google Sheets)
6. Fullstack architecture diagram (frontend -> Apps Script -> Sheets -> email)
7. Deployment (GitHub Actions -> Pages)
8. Google Sheets overview (tabs + purpose)
9. Assets: how to replace logos/favicons/coming soon image
10. CatalogBeta: how to control preorder items (status TRUE/FALSE)
11. Forms: waitlist / support / apply / preorder (what gets written, what emails fire)
12. AI boundaries: can vs cannot (no commits, no deploys, no Apps Script changes)
13. How to request changes (template + acceptance criteria)
14. Example change requests (footer, logo, add page)
15. Roadmap concept: QR -> /coa -> gated PDF download
16. Next steps + owners + access checklist
