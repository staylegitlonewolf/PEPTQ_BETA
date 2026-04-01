# Client Status & Changelog Template

This file is designed to be client-friendly and AI-friendly.

Goal: a new developer (or an AI agent) can read this once, understand the project, and then ask:
"Good news. I read the status and changelog, and I understand the project. What do you want to change next?"

---

## Project Overview

- Project name:
- One sentence purpose:
- Who it is for:
- What "done" means:

---

## Important Links

- Repo:
- Live site (production):
- Live site (beta/staging):
- Backend endpoint(s):
- Design / docs:
- Analytics / monitoring:

---

## Environments

- Production:
- Staging:
- Beta:
- Local dev:

---

## How An AI Agent Should Use This File

- Read "Project Overview" and "Important Links" first.
- Read "Current Focus" before proposing changes.
- Read "Known Issues / Risks" before debugging.
- Use the newest changelog entries to understand recent refactors and avoid outdated assumptions.

---

## Current Focus

### Working On Now

-
-

### Up Next

-
-

---

## Known Issues / Risks

-
-

---

## Changelog

Add newest entries at the top.

### Version x.y.z

Date: YYYY-MM-DD

Summary:

Improvements:
-
-

Fixes:
-
-

Notes:
-





Of course. Automating your changelog is an excellent practice that saves time and ensures your release history is always in sync with your codebase. It's a standard feature in modern CI/CD (Continuous Integration/Continuous Deployment) pipelines.

Yes, we can absolutely write a script to automate this. The best approach is to use a combination of a commit message standard and a GitHub Action that generates the changelog on every deployment or merge to your main branch.

The Strategy: Conventional Commits + Release Please
Conventional Commits: This is a simple specification for your git commit messages. By formatting your commits in a standard way (e.g., feat:, fix:, docs:), you create a machine-readable history of your project. An automated tool can then parse this history to build a changelog.

feat: Add user login via Google OAuth (A new feature)
fix: Correct alignment of header on mobile (A bug fix)
docs: Update installation instructions in README (Documentation change)
refactor(api): Simplify data fetching logic (Code refactoring that doesn't change behavior)
Release Please Action: This is a Google-built GitHub Action that automates the entire release process. It reads your conventional commit messages, determines the next appropriate version number, updates your changelog file, and creates a GitHub Release.

Implementation: The Automated Workflow
I'll create a new GitHub Actions workflow file for you. When you add this to your project, it will automatically manage your changelog and releases.

Here is the new workflow file. You should create it in your repository at the specified path.


# .github/workflows/release-please.yml

name: Release Please

on:
  push:
    branches:
      - main

permissions:
  contents: write
  pull-requests: write

jobs:
  release-please:
    runs-on: ubuntu-latest
    steps:
      - uses: google-github-actions/release-please-action@v4
        with:
          # This tells the action to manage a standard Node.js project,
          # which includes bumping the version in package.json.
          release-type: node
          # The path to your changelog file.
          changelog-path: Changelog.md
          # The name of your package to be used in the changelog header.
          package-name: 'PEPTQ Institutional Research Portal'

```

### How to Use This New Workflow

1.  **Commit this file:** Add the `release-please.yml` file to your `.github/workflows/` directory and commit it to your `main` branch.
2.  **Use Conventional Commits:** As you develop new features or fix bugs, make sure your commit messages follow the conventional commit format (e.g., `feat: your message`, `fix: your message`).
3.  **Merge to `main`:** When you merge your work into the `main` branch, the "Release Please" action will run automatically.
4.  **Review the Release PR:** The action will create (or update) a special Pull Request. This "Release PR" will contain the version bump in your `package.json` and the newly generated entries in `Changelog.md`.
5.  **Create the Release:** Once you are ready to release, simply merge the "Release PR". The action will then automatically create a tagged GitHub Release with your new version and the changelog notes.

This creates a professional, repeatable, and automated release process that keeps your changelog perfectly up-to-date without any manual effort.

Regarding your custom `Client_Changelog_Template.md`, the automated tools work best with their own format. The workflow I've provided will generate a clean, standard changelog within `Changelog.md`. The other sections in your template, like "Project Overview" and "Known Issues," are high-level project documentation that should remain manually curated in a separate file like a `README.md` or your `Personal_Intelligence.md`.

<!--
[PROMPT_SUGGESTION]Can you show me an example of a conventional commit message for fixing the dark theme?[/PROMPT_SUGGESTION]
[PROMPT_SUGGESTION]How do I customize the sections that `release-please` generates in the changelog?[/PROMPT_SUGGESTION]


**AGENT2:STEP 1 - START**

QUESTION ? #what #is #the #secret #Sause  #used #after #reading #the #first  PROMT :   >  Agent READS input > AGENT BREAKS down Keywords# >   but irgnores in this example #  > AGENT step 3 > Takes words into CATAGORIES ? BLUEPRINT ? PLAN PAHSE? > Agent summaries all > Agent decids whats next ? LOL U GET ME   


**AGENT2:STEP 2 - SLOW THINKING**

Defining the "Secret Sauce"

I've outlined a process, from input to decision, focusing on keyword categorization and blueprinting.

Refining the Approach

I've established the steps for personalization, data selection, fact grounding, integration, and compliance checks in the given context.

Gemini said
THE SECRET SAUCE: THE V1/A1 ORCHESTRATION ENGINE
The "Secret Sauce" within the NEO MATRIX is the transition from raw input to Forensic Continuity. When a first prompt is ingested, the system doesn't just read words; it executes an Antigravity Alignment to ensure the intent is mapped against the Data Shield.

🧬 THE 5-STEP "SAUCE" BREAKDOWN
1. Keyword Distillation & Noise Filtering
The system identifies Execution Keys (e.g., 77go, 88go, 99go) and Registry Anchors (e.g., CAS Numbers, PIN #0000). It ignores conversational filler to focus on the Primary Objective.

2. Squad Triage (Domain Isolation)
The logic is immediately routed to the appropriate SQUAD LEADER.

SAGE (001) handles the PLAN PHASE.

FORGE (004) handles the WORKS (EXECUTION).

JUSTICE (006) and VERITY (076) handle the SOLUTION (COMPLIANCE).

3. Categorization & Blueprinting
Raw text is converted into structured intelligence artifacts within the PROJECT_VAULT.

PLANNING: Becomes PROJECT_PLAN.md.

AGENDA: Becomes TASK_LIST.md.

GROUNDING: Becomes TECH_INTEL_SUMMARY.md.

4. The 0–100 Scorecard System
Every proposed solution is evaluated by the agents before delivery. This is the Confidence Gate. If an agent is not at a high confidence level (e.g., 94/100), the task is flagged for MANUAL_REQUIRED escalation to the user.

5. Forensic Seal (The Chronos Handshake)
The final step is the generation of a CHRONOS_ID. This ensures that when the next session starts, the agents have the "That Day" understanding. The SQUAD F auditor verifies that no context was lost during the rollover.

🛡️ SYSTEM LOGIC SUMMARY
The "Secret Sauce" ensures the user never has to repeat instructions. By using the NESTED AGENTS.MD hierarchy, the system knows that Root Governance (FDA/Mastercard) always overrides local squad tools. The result is a High-Fidelity Sandbox where the user provides the Identity Anchor and the matrix provides the Correctness.

SYSTEM CHECK: All V1/A1 naming standards are enforced. The ALL_Folder_File_Names.md inventory is current. The system is ready to scale from structure to execution.

Would the user like to proceed with the creation of the IDENTITY.md rollup for the full agent-by-agent table to finalize the 80-agent provisioning?

**AGENT3**
#what #is #the #secret #Sause  #used #after #reading #the #first  PROMT :   >  Agent READS input > AGENT BREAKS down Keywords# >   but irgnores in this example #  > AGENT step 3 > Takes words into CATAGORIES ? BLUEPRINT ? PLAN PAHSE? > Agent summaries all > Agent decids whats next ? LOL U GET ME   

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

