# PEPTQ BETA Website Client Handoff

Updated: 2026-04-02 (America/New_York)
Live site (GitHub Pages): `https://staylegitlonewolf.github.io/PEPTQ_BETA/`

## Summary

All requested updates from the client revision document have been fully implemented, including:
- Legal/policy page creation and alignment
- Footer restructuring
- Required compliance language additions
- FAQ and payment wording updates
- Navigation label alignment (VERIFY | MENU | ACCESS | CATALOG)
- Disclaimer consolidation (full disclaimer in footer only)
- Accessibility enhancement (Fullscreen toggle on supported Android devices)

The site is now aligned with the requested structure and ready for client review.

## What I Read (Client Request)

Document: `PEPTQ_Developer_Revision_Steps_Updated.pdf`
Goal: implement the client-requested legal/policy + structure upgrades while keeping the existing premium / institutional design language.

## What I Implemented (Per PDF)

### Footer (Exact Link List)
Footer links were updated to exactly:
- Terms & Conditions (`/terms`)
- Privacy Policy (`/privacy`)
- Shipping Policy (`/shipping`)
- Refund Policy (`/refund`)
- Payment & Ordering (`/payment-policy`)
- Contact (`/contact`)

Also ensured the Research Use Only disclaimer remains prominent in/near the footer.

### Terms & Conditions Page (Upgraded From Framework To Full Page)
`/terms` now includes:
- the required section structure (Research Use Only Agreement, Eligibility, Orders & Payment Terms, Liability, Indemnification, Compliance Responsibility, Communications & Data Use, Modifications)
- the exact required line:
  "By accessing this site or completing a purchase, you agree that all materials are for research use only and not for human or veterinary use."
  - This line is shown once at the top of the page (duplicates removed).

### Privacy / Shipping / Refund / Contact Pages (Created)
New routes/pages were added (designed to match the existing institutional tone of the site):
- `/privacy` Privacy Policy
- `/shipping` Shipping Policy
- `/refund` Refund Policy
- `/contact` Contact page (support email + response window)

### Payment & Ordering Page (Upgraded)
`/payment-policy` includes the required additions:
- All payments are final and non-reversible
- No chargebacks or reversals
- Orders released only after cleared payment
- Incomplete payment may cancel allocation

Also added the required Payment Confirmation line:
"By completing payment, you agree to PEPTQ's Terms & Conditions and confirm that all materials are being purchased for research use only."

### Disclaimer Consolidation (Launch Polish)
To reduce redundancy, the full disclaimer is now shown in the footer only.

All other locations use the short version:
"All materials are intended for laboratory research use only."

### Application Form Note (Added)
Added the required note:
"Submission does not guarantee approval. All applications are subject to compliance review and institutional verification."

### FAQ Wording Cleanup (Added + Protected)
Updated the PDF-specified FAQ wording, including:
- ACH/Zelle line updated to: "Payments are processed via approved invoice methods (ACH or Zelle) following account verification and compliance approval."
- International orders line: "International orders are reviewed on a case-by-case basis subject to regulatory compliance and logistics feasibility."

Important: if FAQs are overridden via Owner settings, we also normalize/guard these two lines so the PDF language stays correct.

### Navigation Label (Launch Polish)
Beta bottom navigation label updated from BETA -> VERIFY so the beta nav reads:
VERIFY | MENU | ACCESS | CATALOG

### Shipping/Refund Link Text (Launch Polish)
Updated link wording:
- "Open Shipping" -> "View Shipping Policy"
- "Open Refund" -> "View Refund Policy"

### Access Page Email Field (Launch Polish)
Apply page email placeholder updated to:
"you@institution.edu or verified business email"

And the form blocks common free email domains to encourage institutional/business emails.

## Accessibility Update (New Request From Daniel)

Added a Fullscreen toggle inside Accessibility Quick Settings:
- Visible only when the device/browser supports the Fullscreen API (Android Chrome and similar).
- Hidden on devices that cannot toggle fullscreen (notably iPhone/iOS).
- Can toggle fullscreen ON and OFF from the same switch.
- Does not change or disable other accessibility settings (contrast, reduced motion, font size) and is never auto-enabled; it only runs on explicit user tap.

Location: Accessibility floating button (top-right) -> "Accessibility (Quick)" panel -> "Fullscreen" switch.

## Verification Steps (Quick)

1. Open the live site.
2. Confirm bottom nav shows: VERIFY | MENU | ACCESS | CATALOG
3. Scroll to footer and confirm the exact link list and the full disclaimer text.
4. Confirm other pages show only the short disclaimer line (not the full paragraph).
5. Open each policy page: `/terms`, `/privacy`, `/shipping`, `/refund`, `/payment-policy`, `/contact`
6. Confirm Terms contains the exact required line (shown once at the top).
7. Confirm Payment & Ordering contains the payment confirmation line.
8. Android: open Accessibility panel and verify Fullscreen toggle appears and works.
9. iPhone: verify Fullscreen toggle does not appear.
10. Confirm no restricted or non-compliant language appears across product, FAQ, or policy pages.

## Deploy Notes

Local build check used before pushing:
`npm run build:beta`

Latest commits on `main` include:
- PDF implementation and policy pages creation
- Nav label alignment (Terms & Conditions) + FAQ safeguards
- Accessibility fullscreen toggle + this handoff doc

## Known Local Workspace Items (Not Part Of Client Update)

These internal files may exist in the development environment but are not part of the client deliverable:
- `README.md` (contains internal planning text)
- `CLIENT_MESSAGE.MD` (local/untracked notes)
