# PEPTQ Beta Phase 1 - Client Summary

Updated: 2026-04-02 (America/New_York)

## Scope (Phase 1)

Phase 1 is focused on a beta-ready public experience with institutional positioning, streamlined routing, and verified submission flows into the operations backend (Google Apps Script + Google Sheets).

## In-Scope Pages (Delivered)

- Catalog access flow: `/apply`
- Pre-Order intake: `/preorder`
- Support intake: `/support`
- About: `/about`
- Mission: `/mission`
- Payment & Ordering: `/payment-policy`
- Terms & Conditions: `/terms`
- Accessibility quick settings (contrast, reduced motion, font sizing, dyslexia-friendly font) and language assist

## Out of Scope for Beta (Hidden or Redirected)

These are intentionally excluded from Beta Phase 1:
- Owner/admin operations
- Member profile and internal account pages
- Guest entry mode
- Internal routes like `/owner`, `/ledger`, `/documents`, `/profile` are redirected away in beta mode

## Forms and Backend Delivery

Phase 1 includes working submission paths to the backend system:
- Waitlist intake
- Research account application (Apply)
- Pre-Order intake

All submissions are designed to land in the connected Google Sheets without requiring extra user authentication steps.

## Deliverables

- Route/navigation surface matches the intended beta scope above
- Submission flows operational (forms deliver data to Sheets)
- Beta tester indicator is present in the UI where applicable

## Verification Checklist

1. Confirm each route loads: `/apply`, `/preorder`, `/support`, `/about`, `/mission`, `/payment-policy`, `/terms`
2. Submit each form once and confirm entries appear in the correct sheet tabs
3. Confirm internal-only routes are not accessible in beta (they should redirect)
4. Confirm the beta UI indicator is visible where expected

## Open Item / Clarification

Pre-Order is currently implemented as a lightweight intake form posting to the backend preorder endpoint. If the next phase requires a full preorder catalog browsing experience (beyond intake), that would be scoped as a separate enhancement.

