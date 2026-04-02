# PEPTQ BETA Website Client Handoff

Updated: 2026-04-02 (America/New_York)
Repo folder: `C:\Users\Lonewolf\Desktop\BETA_VERSION`
Live site (GitHub Pages): `https://staylegitlonewolf.github.io/PEPTQ_BETA/`

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

### Privacy / Shipping / Refund / Contact Pages (Created)
New routes/pages were added (matching the existing site tone):
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

### Disclaimer (Replaced With Client Text + Placed In Required Areas)
Updated disclaimer to the required text:
"All products are intended strictly for laboratory research purposes only. Products are not for human or veterinary use and are not intended to diagnose, treat, cure, or prevent any disease. By accessing this site or purchasing from PEPTQ, you acknowledge and agree that materials will be used solely in compliance with applicable research regulations."

Placed in:
- Footer
- Terms page
- Access/application flow messaging
- Invoice/payment communication (Pro-forma invoice HTML)

### Application Form Note (Added)
Added the required note:
"Submission does not guarantee approval. All applications are subject to compliance review and institutional verification."

### FAQ Wording Cleanup (Added + Protected)
Updated the PDF-specified FAQ wording, including:
- ACH/Zelle line updated to: "Payments are processed via approved invoice methods (ACH or Zelle) following account verification and compliance approval."
- International orders line: "International orders are reviewed on a case-by-case basis subject to regulatory compliance and logistics feasibility."

Important: if FAQs are overridden via Owner settings, we also normalize/guard these two lines so the PDF language stays correct.

## Accessibility Update (New Request From Daniel)

Added a Fullscreen toggle inside Accessibility Quick Settings:
- Visible only when the device/browser supports the Fullscreen API (Android Chrome and similar).
- Hidden on devices that cannot toggle fullscreen (notably iPhone/iOS).
- Can toggle fullscreen ON and OFF from the same switch.

Location: Accessibility floating button (top-right) -> "Accessibility (Quick)" panel -> "Fullscreen" switch.

## Verification Steps (Quick)

1. Open the live site.
2. Scroll to footer and confirm the exact link list and the disclaimer text.
3. Open each policy page:
   - `/terms`, `/privacy`, `/shipping`, `/refund`, `/payment-policy`, `/contact`
4. Confirm Terms contains the exact required line.
5. Confirm Payment & Ordering contains the payment confirmation line.
6. Android: open Accessibility panel and verify Fullscreen toggle appears and works.
7. iPhone: verify Fullscreen toggle does not appear.

## Deploy Notes

Local build check used before pushing:
`npm run build:beta`

Latest commits on `main` include:
- PDF implementation and policy pages creation
- Nav label alignment (Terms & Conditions) + FAQ safeguards
- Accessibility fullscreen toggle + this handoff doc

## Known Local Workspace Items (Not Part Of Client Update)

These files may exist locally but were intentionally not included in the client update commits:
- `README.md` (contains internal planning text)
- `CLIENT_MESSAGE.MD` (local/untracked notes)

