# PEPTQ Institutional Research Portal (Beta) - Changelog

## Links

- Repo: https://github.com/staylegitlonewolf/PEPTQ_BETA
- Beta site (GitHub Pages): https://staylegitlonewolf.github.io/PEPTQ_BETA/
- Apps Script web app (backend): https://script.google.com/macros/s/AKfycbzt9KsxdP1C9Bw5qcizWmMK1vzfyig2XztVo-oNZC4Rpj0XwNWpOLkX5xdNBck0UzYX/exec

---

## Current Focus (Beta)

- Keep beta stable while we validate: waitlist, support, apply, preorder.
- Beta catalog source: Google Sheet tab `CatalogBeta` with `status=TRUE/FALSE`.
- Email consistency: bring preorder alert styling in line with waitlist/support alerts (Apps Script update required).

---

## Changelog

### Version 0.2.0-beta

Date: 2026-03-31

Summary: Beta is now a standalone Vite/React site deployed via GitHub Pages + GitHub Actions, with a cleaned-up mobile UX and working `/apply` submissions.

Improvements:
- Standalone beta app with Vite + React, build output written to `BETA_WEBSITE_ONLY_FOLDER`.
- GitHub Pages deploy workflow added; Pages routing uses hash URLs (ex: `#/apply`, `#/preorder`).
- Mobile navigation upgraded with a drawer menu for tabs + language (English/Espanol).
- Preorder flow reorganized: SKU selection first, cart button pinned, form shown in a drawer.
- Catalog reads can target beta sheet mode (`catalog_source=BETA`) for `CatalogBeta`.
- Assets can be controlled by Google Sheet `Asset` entries, with local `public/*.png` fallbacks.

Fixes:
- Fixed GitHub Pages asset 404s by making local asset URLs base-aware.
- Fixed preorder cart to scroll after 5 items (instead of expanding too far).
- Reduced stale beta catalog behavior by disabling session cache for beta catalog reads.
- Fixed `/apply` submissions by sending `SUBMIT_REQUEST` to Apps Script (no more "Missing command").
- Apply forms now surface real backend errors instead of generic timeout text.

Release commits (newest first):
- `4a2697e` fix beta apply submission flow
- `9b959ad` adjust beta mobile nav controls
- `8c3f50b` refine preorder cart drawer flow
- `ce09c86` disable beta catalog session cache
- `70998fc` polish beta navigation and route scroll behavior
- `1c3b38b` fix beta mobile menu spanish label
- `acd68e2` add mobile beta menu and beta catalog source
- `4853295` fix beta pages asset base paths
- `884a544` tighten beta translate and preorder cart behavior
- `0800d65` switch beta asset fallbacks to local pngs
- `62e6cda` add scrollable preorder cart
- `9da2ef8` add github pages deployment workflow
- `91f4026` bootstrap standalone beta site

Notes:
- Apps Script preorder alert email styling requires updating the Apps Script project code (not done by this repo).
- Apps Script `/apply` backend is already compatible with `SUBMIT_REQUEST`; beta now sends that command.

**ENDOFFILE**

**FOR-DEVNOTES-DO-NOT-REMOVE-READ-ONLY**

The "Secret Sauce" you're looking for—the bridge between raw keywords and an actionable plan—is Ontological Mapping combined with Heuristic Intent Extraction.

In plain English? It’s the process of turning a "pile of bricks" (keywords) into a "blueprint" by understanding not just what the words are, but what they do in a functional system.

Here is the breakdown of that "Phase 3" logic you're sniffing out:

1. The Taxonomy Filter (Categories)
The agent doesn't just look at words; it assigns them to Functional Buckets.

Entities: The "Who" and "What" (e.g., CAS numbers, Merchant Accounts).

Actions: The "Verb" (e.g., Rewrite, Audit, Comply).

Constraints: The "Rules" (e.g., 2026 FDA RUO, 0.9% Chargeback rate).

2. The Relationship Mapping (Blueprint)
This is where the "Secret Sauce" thickens. The agent uses a Dependency Graph.

Example: If the keyword is "Zelle" and the category is "Transactional," the agent immediately links it to the constraint "STAY LEGIT Rule 4."

It creates a logic chain: If [Prohibited Method] -> Trigger [Compliance Error] -> Require [Merchant Account Solution].

3. The Recursive Simulation (Plan Phase)
Before the agent "summarizes," it runs a mental simulation of the execution:

Conflict Detection: Does "High-Risk Merchant Account" clash with "0.9% Chargeback rate"?

Path Optimization: What is the shortest path from the user's current mess to a "SYSTEM CHECK: All good to go" state?

4. The Decision Engine (What's Next?)
The "Agent decides what's next" step is governed by Priority Weighting. In your specific environment, the weights usually look like this:

Security/Compliance (Is it "Legit"?)

Schema Integrity (Does it match the snake_case rules?)

Efficiency (Can we use an Execution Key like 77go?)

The "Secret Sauce" Summary
The sauce is Contextual Grounding. Most AIs just predict the next word. An "Agent" uses your specific Execution Keys and Operating Principles as a compass to ensure the "Next Step" isn't just a logical guess, but a direct move toward your specific "Identity Anchor."

Are we moving into the Blueprint phase for a specific script, or are we still refining the logic of the Agent itself?


This is a high-level architectural play. You’ve essentially built a **Dual-Engine SWE (Software Engineering) Agent**: one for high-touch UI management (the Dashboard) and one for "ghost-in-the-machine" automation (the GitHub Action).

Given the **STAY LEGIT** operating principles (2026 compliance, zero-shortcut deployment), here is how we bridge these two repos to ensure the `PEPTQ_BETA` client project is handled securely and according to the "Secret Sauce" logic.

### 1. The Strategy: "The Dashboard is the Brain, the Action is the Muscle"
Since `PEPTQ_BETA` is unfinished on purpose, you want to use the **AI-Coding-Agent** to fill the gaps without manual coding.

* **Dashboard Role:** Used by you (Daniel) or Dave (CEO) to visualize the file tree, prompt complex refactors, and approve logic shifts before they hit the main branch.
* **Action Role:** Handles the "grunt work." If you label an issue in the `PEPTQ_BETA` repo as `ai-fix`, the Action triggers, writes the code, and opens a PR.

---

### 2. Integration Checklist (The "Blueprint")
To make these work together for your client, apply this setup:

| Component | Logic / Requirement | STAY LEGIT Compliance |
| :--- | :--- | :--- |
| **Auth** | NextAuth + GitHub OAuth | Must use `member_email` (snake_case) for session identity. |
| **Secrets** | `CODEX_API_KEY` (OpenAI) | Keep server-side in Vercel; never leak to client-side JS. |
| **Deployment** | Vercel (Root: `/dashboard`) | Ensure M-24-08 Accessibility Score is 100/100 for the UI. |
| **Action** | `action.yml` in `PEPTQ_BETA` | Must include `99go` equivalent for a full debug pass. |

---

### 3. Execution Path: Connecting the Agent to PEPTQ_BETA

#### Step A: The Dashboard Hook
In your Dashboard's `api/chat` route, ensure the prompt injection includes your **Operating Principles**. 
> **Secret Sauce Tip:** When the agent generates code for `PEPTQ_BETA`, the "System Prompt" must force it to lead with **CAS Registry Numbers** for any chemical entities to avoid the "Branded Names" violation (Rule 1).

#### Step B: The "Ghost" Committer (GitHub Action)
To activate the autonomous side in the client's repo:
1.  Copy the `dist/index.js` (from the Agent repo) into `.github/workflows/ai-agent.yml` in `PEPTQ_BETA`.
2.  Set the Trigger: 
    ```yaml
    on:
      issues:
        types: [labeled] # Trigger when you label an issue "88go"
    ```
3.  **The Result:** You label an issue "Add payment_status logic to Header," and the agent pushes the code automatically.

---

### 4. Safety & "Legit" Guardrails
Since you are the CTO and sole executor, keep these "Identity Anchors" in mind:
* **Schema Check:** The Agent *must* be told to strictly follow your `Header Schema Rules` (e.g., `invoice_id` vs `InvoiceID`). A mismatch here triggers your "Schema Mismatch Error."
* **Chargeback Shield:** If the agent is writing code for the payment gateway in `PEPTQ_BETA`, ensure it defaults to **Underwritten High-Risk Merchant** logic (Rule 4).

**Do you want me to write the specific `.github/workflow` file for the PEPTQ_BETA repo that pulls from your Agent's architecture?**


so that would be useful for  https://github.com/staylegitlonewolf/PEPTQ_BETA   since i just sent the client  the beta they are going to watn to do 12 changes for example  ..  so the goal is to create a perefect layout promot that would allow her agent to understand the  .md   and   as  the client explains  . the agent will check  https://github.com/staylegitlonewolf/PEPTQ_BETA



NotebookLM is the ideal environment for bridging the gap between the high-level engineering in the **PEPTQ_BETA** repository and a client's non-technical change requests. By grounding the client’s AI agent in the repository's `.md` documentation, the agent acts as a **Structural Shield**, preventing the client from requesting changes that break the core logic or violate the **STAY LEGIT** governance (FDA RUO/Mastercard compliance).

The following "Master Handshake Prompt" is designed for the client to provide to their AI assistant. This prompt ensures the assistant understands its role as a liaison between the user (Daniel) and the client’s vision.

---

### 🛡️ THE MASTER HANDSHAKE PROMPT: PEPTQ_BETA LIAISON

**Instruction to the Client’s AI:**
> "You are the **Client-Side Project Liaison** for the **PEPTQ_BETA** platform. Your mission is to assist the client in articulating changes while maintaining the structural integrity of the project developed by the CTO, Daniel Fortier.
>
> **YOUR SOURCE OF TRUTH:**
> You are grounded in the `.md` files from the `PEPTQ_BETA` repository. Every suggestion you make must be verified against these documents. 
>
> **YOUR OPERATING LOGIC:**
> 1. **Listen & Distill:** When the client requests a change (e.g., 'Change this to blue' or 'Add a login gate'), break the request into **Keywords**.
> 2. **Verification:** Check the `PEPTQ_BETA` documentation. Does this change conflict with the **STAY LEGIT** laws (Research Use Only, No Branded Names, Mastercard 0.9% Chargeback rules)?
> 3. **Categorization:** Classify the request as:
>    * **AUTOMATED:** A simple CSS or text change the agent can plan immediately.
>    * **MANUAL REQUIRED:** A change requiring the CTO's technical intervention (e.g., Database schema or API shifts).
> 4. **The Scorecard:** Provide a confidence rating (0-100) on how well the request fits the existing tech stack.
>
> **YOUR BOUNDARIES:**
> * Do not suggest code or deployment steps.
> * Do not violate the 'Folders and Markdown Only' guardrail.
> * If a request is ambiguous, ask the client for details before presenting the plan to the CTO."

---

### 🧬 WORKFLOW: HANDLING THE "12 CHANGES"

When the client begins the feedback loop, NotebookLM allows the agent to organize the chaos into a structured **Task Queue**. This prevents "Prompt Waste" and ensures the user (Daniel) only sees the finalized, logical requirements.



| Phase | Agent Action | Result |
| :--- | :--- | :--- |
| **Ingestion** | Agent reads the client's raw feedback. | Mapped Keywords. |
| **Cross-Reference** | Agent checks `Alignment_Status.md` and `System.md`. | Conflict Report. |
| **Drafting** | Agent creates a `CHANGE_REQUEST_LOG.md`. | Organized Agenda. |
| **Escalation** | Agent flags "Manual Intervention" tasks for the CTO. | Automation Email Triggered. |

### 🏆 THE GOAL: ZERO-FRICTION DELIVERY
By using this layout, the client feels heard because their agent can explain the "How" and "Why" immediately. Meanwhile, the user (the developer) receives a perfectly formatted **TASK_LIST.md** that is ready for execution, rather than 12 unorganized emails.

This method preserves the **Forensic Continuity** of the **PEPTQ_BETA** project. Every change is logged, timestamped, and assigned a **CHRONOS_ID**, ensuring that the "That Day" understanding remains intact throughout the beta testing phase.

Should the next step be the generation of a **CHANGE_REQUEST_TEMPLATE.md** for the client’s vault to standardize how these 12 changes are tracked?



Yes, generating a **`CHANGE_REQUEST_TEMPLATE.md`** is the ideal next step. Creating a standardized template perfectly aligns with your goal of maintaining "Forensic Continuity" and leveraging NotebookLM as a restricted, no-code AI agent that strictly follows a narrow set of rules and acts as a single source of truth. 

By standardizing how the 12 changes are tracked, you ensure the AI agent extracts and processes the client's raw feedback consistently, preventing hallucinations and guesswork. 

Drawing from standard Change Management Operating Procedures and your **STAY LEGIT** compliance requirements, here is how you should structure your `CHANGE_REQUEST_TEMPLATE.md`:

### 1. Essential Change Management Fields
To ensure the user (the CTO, Daniel) receives an executable task, the template should force the AI to categorize the technical requirements. Standard change management protocols require defining the following for any structural change:
*   **Target of Change:** What is being altered (e.g., Hostname, UI element, Database schema, API shift).
*   **Exact Steps Required:** A clear breakdown of the requested change.
*   **Impact & Duration:** What systems will be impacted during the change and for how long.
*   **Testing & Rollback Plan:** How the change will be tested for success and how to revert the system if the change fails.

### 2. The "STAY LEGIT" Compliance Checklist
Because the AI is acting as a **Structural Shield**, the template must include a mandatory verification section where the agent explicitly cross-references the request against your governance rules:
*   **FDA RUO (Research Use Only) Check:** The agent must verify that the requested change does not introduce "instructions for clinical interpretation," discussions of clinical significance, or claims that the product can be used for clinical diagnostic purposes. The interface must remain strictly aligned with the required label: *"For Research Use Only. Not for use in diagnostic procedures"*.
*   **Mastercard Compliance Check:** If the change involves the billing interface, the agent must verify it does not increase the risk of entering the Excessive Chargeback Program (ECP) or Excessive Fraud Merchant (EFM) program. For instance, it must ensure subscription changes maintain clear cancellation instructions on electronic receipts and employ proper billing descriptors to help keep chargeback ratios strictly below the 1.5% and 100-chargeback thresholds.

### 3. Forensic Continuity & CHRONOS_ID
To maintain the "That Day" understanding you mentioned, the template should log the change as an "Information Asset". This ensures the digital continuity of the project's evolution. The template should map:
*   **CHRONOS_ID:** A unique identifier for the request.
*   **Timestamp & Sponsor:** When the request was made and who requested it. 
*   **Categorization:** Stating whether it is AUTOMATED (e.g., simple CSS) or MANUAL REQUIRED (e.g., technical intervention by Daniel).

**Why this matters for your NotebookLM setup:**
By feeding this blank `CHANGE_REQUEST_TEMPLATE.md` into NotebookLM as a source document alongside your `Alignment_Status.md` and `System.md`, you instruct the AI on exactly how to format its "Organized Agenda" output. When the client makes a request, the AI can simply fill in the markdown template, run its conflict report, and hand the CTO a perfectly formatted, pre-vetted task. 

Would you like to proceed with drafting the actual Markdown template using these parameters?



### 🤖 AUTO_FILL_INSTRUCTION.md (V1.0)
**Target:** AGENT_030_CLIENT_ADVOCATE (NotebookLM)
**Purpose:** Standard Operating Procedure for processing raw, ambiguous client feedback and safely filling the `CHANGE_REQUEST_TEMPLATE.md` without prompt waste or hallucination.

**🛑 CORE DIRECTIVE: THE LIAISON MANDATE**
You are the technical project liaison for the PEPTQ_BETA platform. Your primary function is to act as a bridge between non-technical business stakeholders and the technical execution team. You must translate raw, often vague business needs into precise technical specifications while strictly maintaining the **STAY LEGIT** governance. 

**📂 PHASE 1: SEQUENTIAL INGESTION & LOGIC BUILDING**
1. **Read in Sequential Order:** To successfully build a logic rather than a simple, scattered synthesis, you must process the project documents (`System.md`, `Alignment_Status.md`, etc.) in their carefully numbered and named sequential order.
2. **Strict Source Adherence:** You are a "self-contained" AI. The documents uploaded to your vault are your absolute priority and sole foundation. You must ground every response strictly in these provided materials.
3. **The Adversarial Check:** Before processing the client's request, cross-reference it against your adversarial rules—the explicit list of actions, deployments, or suggestions you must *never* do or say.

**⚖️ PHASE 2: TRANSLATION & THE CLARIFICATION LOOP**
When a client submits a vague request (e.g., "Make the dashboard better" or "Change the billing flow"):
1. **Do Not Hallucinate:** If the target of the requested change does not exactly match an existing directory in the `1_AGENTS` or `PROJECT_VAULT` structure, you must explicitly report that it falls outside your knowledge base. **Do not guess, infer, or hallucinate folder names, code, or technical steps**.
2. **Assess Confidence:** Calculate your Confidence Score (0-100) based on how perfectly the client's request maps to the existing PEPTQ_BETA architecture and compliance rules.
3. **Trigger the Clarification Loop:** If the request lacks specific detail, or if your Confidence Score is **below 90/100**, **DO NOT** generate the final task list for the CTO. Instead, you must act as a translator and problem solver. Pause the template generation and ask the client targeted, clarifying questions to resolve the ambiguity before proceeding.

**✅ PHASE 3: DRAFTING & SECONDARY VERIFICATION**
1. **Draft the Template:** Once the client clarifies their intent, break down the complex request into the structured, actionable technical steps required by the `CHANGE_REQUEST_TEMPLATE.md`.
2. **Run the Verification Prompt:** Before presenting the final document to the CTO, you must execute a secondary internal check. Run the drafted document back against your source materials to verify that it is 100% faithful to the architecture, fully comprehensive for its intended purpose, and contains zero hallucinations. Only present the finalized `TASK_LIST.md` once this verification passes.


