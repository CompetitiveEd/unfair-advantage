import { useState, useRef, useEffect } from "react";

// ─── PROMPT DATABASE ───────────────────────────────────────────────
const PROMPTS = [
  {
    id: "G-01",
    title: "THE DYNAMIC ACCOUNT PLANNER v2.0 — Macro Business Intel",
    phase: "GATHER",
    phaseNum: "01",
    category: "RESEARCH",
    folder: "02_Processed_Intel",
    savePattern: "G-01_Macro_Intel_[Target_Company].md",
    variables: [
      { key: "Target_Company", label: "Target Company", placeholder: 'e.g. "Accenture"' },
      { key: "Seller_Company", label: "Your Company/Solution", placeholder: 'or type "None"' },
      { key: "Focus_Area", label: "Focus Area / Domain", placeholder: 'e.g. "End User Environment" or "None"' },
      { key: "Data_Source", label: "Data Source & Human Signal", placeholder: '"Search the web autonomously" or paste data' },
      { key: "Buyer_Awareness", label: "Buyer Awareness Level", placeholder: "Unaware / Problem Aware / Solution Aware / Product Aware / Most Aware / Unknown" },
    ],
    prompt: `# G-01 — THE DYNAMIC ACCOUNT PLANNER v2.0 — Macro Business Intel

> **Phase:** 01 — Company Intelligence | **Data Class:** Public | **Category:** RESEARCH  
> **Status:** UPGRADED | **Frameworks:** Minto, Cialdini, NLP, Blue Ocean, Case Method, Schwartz, Dunford, Taleb, Gawande  
> **GAIN Drivers:** Safety, Order, Power, Achievement

---

## PROMPT CODE

TARGET COMPANY: {{Target_Company}}
SELLER COMPANY: {{Seller_Company}}
FOCUS AREA / DOMAIN: {{Focus_Area}}
DATA SOURCE & HUMAN SIGNAL: {{Data_Source}}
BUYER AWARENESS LEVEL: {{Buyer_Awareness}}

## OUTPUT DIRECTIVE
Output strictly as a Markdown block. At the very top, BEFORE the intelligence begins, output:
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`G-01_Macro_Intel_{{Target_Company}}.md\` → \`02_Processed_Intel/\`

## ROLE & OBJECTIVE
Act as a Tier-1 Management Consultant and OSINT Analyst. Conduct a multi-stage deep research sweep.
**OBJECTIVE ANALYSIS PROTOCOL:** Do not parrot the company's biased Annual Report. Autonomously deduce their industry and state it explicitly. Cross-reference corporate claims against domain intelligence (Bloomberg, trade journals) and Glassdoor employee sentiment. Find the friction where the CEO says "Transformation" but the risk register says "Supply Chain Debt." Find the Narrative Gap.
**CATEGORY AWARENESS (Dunford):** Before writing any pitch angles, explicitly state what competitive category this company would place a new vendor in. If that category disadvantages us, flag it and suggest the category we should force instead.

## AWARENESS ROUTING (Schwartz)
Before executing, assess the buyer's awareness level and adapt output tone:
* If UNAWARE → Lead with the undeniable industry shift (Raskin). Do NOT mention solutions. Build problem consciousness.
* If PROBLEM AWARE → Lead with the Bleeding Necks. Prove you understand their pain better than they do.
* If SOLUTION/PRODUCT/MOST AWARE → Lead with differentiation, competitive category reframing, and forensic evidence.

## EXECUTION ROUTING
* PATH A: CORPORATE STRATEGY ANALYST (Focus Area is "None") → Research the company holistically across all domains.
* PATH B: DOMAIN SPECIALIST (Focus Area provided) → Research through the lens of that specific domain. What is the company's posture, spend, risk, and opportunity in that domain?

## PHASE 1: CORPORATE IDENTITY (not what they say — what they ARE)
1. Autonomously deduce the industry and sub-vertical.
2. State the company's actual strategic posture: Growth / Consolidation / Transformation / Survival.
3. Identify their "Compelled Event" — the external force that makes inaction dangerous (regulatory, competitive, market shift).

## PHASE 2: THE BLEEDING NECKS (Top 3 Business Pressures)
For each: THE PAIN | THE EVIDENCE (public source) | THE OWNER (C-level title) | SEVERITY (Critical/High/Medium)
**RULE:** At least one Bleeding Neck must be deduced from cross-referencing, not just stated in the Annual Report.

## PHASE 3: THE NARRATIVE GAP
Find the gap between what the company SAYS (Annual Report, CEO keynotes) and what the DATA shows (financials, Glassdoor, analyst reports). This gap is your entry point.

## PHASE 4: COMPETITIVE LANDSCAPE SNAPSHOT
Top 3 competitors. For each: THEIR BET (strategic direction) | OUR ANGLE (how the target company's gap creates our opportunity)

## PHASE 5: THE DOMAIN LENS (PATH B ONLY)
Deep analysis of the Focus Area: current maturity, known vendors, recent RFPs, technology stack signals, and the specific transformation pressure in this domain.

## PHASE 6: FORENSIC CHECKLIST (Gawande)
□ Industry deduced independently, not copied from company website
□ At least one Bleeding Neck is cross-referenced, not self-reported
□ Narrative Gap has specific contradictory evidence on both sides
□ Competitive landscape uses public evidence, not speculation
□ Category awareness is explicitly stated

## PHASE 7: THE OPERATOR LOOP
Ask the operator: *"Which Bleeding Neck resonates most with what you're hearing on the ground? And do you have a specific contact at this company — or should we profile their likely decision-maker next via G-03?"*
**NEXT MOVES:** → G-02 (Financial Forensics) → G-03 (Profile Decision Maker) → G-04 (Battle Card)`,
  },
  {
    id: "G-02",
    title: "FINANCIAL FORENSICS v2.0 — Finding the Money",
    phase: "GATHER",
    phaseNum: "01",
    category: "FORENSICS",
    folder: "02_Processed_Intel",
    savePattern: "G-02_Financial_Forensics_[Target_Company].md",
    variables: [
      { key: "Target_Company", label: "Target Company", placeholder: 'e.g. "Accenture"' },
      { key: "Seller_Company", label: "Your Company/Solution", placeholder: 'or type "None"' },
      { key: "G01_Context", label: "G-01 Context", placeholder: "Paste G-01 output here" },
    ],
    prompt: `# G-02 — FINANCIAL FORENSICS v2.0 — Finding the Money

> **Phase:** 01 — Company Intelligence | **Data Class:** Public | **Category:** FORENSICS  
> **Status:** UPGRADED | **Frameworks:** Timme, Minto, MEDDIC, Maister, Kegan, Gawande  
> **GAIN Drivers:** Safety, Order, Achievement

---

## PROMPT CODE

TARGET COMPANY: {{Target_Company}}
SELLER COMPANY: {{Seller_Company}}
G-01 CONTEXT: {{G01_Context}}

## OUTPUT DIRECTIVE
Output strictly as a Markdown block. At the very top, output:
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`G-02_Financial_Forensics_{{Target_Company}}.md\` → \`02_Processed_Intel/\`

## ROLE & OBJECTIVE
Act as a Senior Financial Analyst and CFO Advisor. Identify "Boring But Expensive" problems — cost centers visible to the CFO, reliant on manual labour, hidden in G-01 Context. Speak exclusively in P&L and balance sheet language (Timme). No product jargon. No feature lists. Revenue protection, OPEX reallocation, EBITDA impact only.

## EXECUTION ROUTING
* PATH A: FORENSIC ACCOUNTANT (Seller is "None") → Find leaks, estimate FTE cost. Pure objectivity.
* PATH B: REALLOCATION ATTACKER (Seller provided) → Map leaks to Seller and write the Reallocation Argument.

## PHASE 1: FINANCIAL LEAK EXTRACTION
Search for waste across these 5 domains. For EACH leak found, output:
| THE LEAK | THE EVIDENCE | THE COST (£/FTE estimate) | THE OWNER (Job Title) | CONFIDENCE (High/Med/Low) |
1. Manual Processes — repetitive human tasks that software could eliminate
2. Integration Friction — data moving between systems via spreadsheets or manual re-entry
3. Compliance Burden — regulatory overhead that could be automated or streamlined
4. Vendor Dependency — over-reliance on a single vendor creating switching-cost traps
5. Technical Debt — legacy systems draining maintenance budget that could fund transformation

## PHASE 2: THE IMMUNITY SCAN (Kegan)
For the top leak identified: Who is the budget owner? What is their UNCONSCIOUS competing commitment that prevents them from fixing this?
Example: "The IT Director knows the manual process wastes £400K/year but fixing it means admitting the system they championed 3 years ago was the wrong choice."
**Output:** The hidden fear that keeps this leak alive, and the specific language that neutralises it.

## PHASE 3: THE REALLOCATION ARGUMENT (PATH B ONLY)
Present the "Boring But Expensive" leak as the specific budget source to fund the Seller's solution:
1. THE SOURCE: Which leak funds this?
2. THE MATH: Simple before/after calculation (FTE hours × cost = reallocation)
3. THE BOARD SENTENCE: One sentence a CFO would use to justify this to the Board.

## PHASE 4: FORENSIC CHECKLIST (Gawande)
□ Every cost estimate has a stated methodology (FTE × rate, % of revenue, analyst benchmarks)
□ Budget owner is identified by job title, not guessed by name
□ The Kegan immunity is based on evidence, not speculation
□ No leak is generic — each is specific to THIS company's context from G-01
□ The Reallocation Argument uses CFO language, not sales language

## PHASE 5: THE OPERATOR LOOP
Ask: *"Which leak surprised you most? And do you know who specifically owns that budget line — or should we profile them next via G-03?"*
**NEXT MOVES:** → G-03 (profile the budget owner) → G-04 (synthesise into Battle Card)`,
  },
  {
    id: "G-03",
    title: "EXECUTIVE INTELLIGENCE v2.0 — Decoding the Human",
    phase: "GATHER",
    phaseNum: "02",
    category: "HUMINT",
    folder: "02_Processed_Intel",
    savePattern: "G-03_Profile_[FirstName_LastName].md",
    variables: [
      { key: "FirstName_LastName", label: "Target Executive (Name & Title)", placeholder: 'e.g. "Jane_Smith"' },
      { key: "Target_Company", label: "Target Company", placeholder: 'or type "None"' },
      { key: "Data_Source", label: "Data Source", placeholder: "Paste LinkedIn scrapes, articles, transcripts" },
      { key: "Relational_Context", label: "Relational Context", placeholder: 'Line Manager profile, known peers, or "None"' },
      { key: "CRM_Signal", label: "Internal CRM Signal", placeholder: 'Past meeting notes, QBRs, or "None"' },
    ],
    prompt: `# G-03 — EXECUTIVE INTELLIGENCE v2.0 — Decoding the Human

> **Phase:** 02 — People Intelligence | **Data Class:** Private | **Category:** HUMINT  
> **Status:** UPGRADED | **Frameworks:** Voss, NLP, Kahneman, Cialdini, MEDDIC, Sphere of Influence, Kegan, Ferrazzi, Schwartz, Camp  
> **GAIN Drivers:** ALL 6 — Safety, Order, Power, Achievement, Affiliation, Sustainability

---

## PROMPT CODE

TARGET EXECUTIVE: {{FirstName_LastName}}
TARGET COMPANY: {{Target_Company}}
DATA SOURCE: {{Data_Source}}
RELATIONAL CONTEXT: {{Relational_Context}}
INTERNAL CRM SIGNAL: {{CRM_Signal}}

## OUTPUT DIRECTIVE
Output strictly as a Markdown block. At the very top, output:
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`G-03_Profile_{{FirstName_LastName}}.md\` → \`02_Processed_Intel/\`

## ROLE & OBJECTIVE
Act as an Advanced HUMINT Profiler and Behavioral Psychologist.
**THE DEEP SEARCH PROTOCOL:** Leave no stone unturned. Use their specific job title to dictate where you search. Do not regurgitate their resume. Decode what they actually *do* and how they make decisions.

## EXECUTION ROUTING LOGIC
* PATH A (Company & Relational Context Provided): Execute all phases, mapping psychology to corporate strategy.
* PATH B (Context is "None"): Skip hierarchical mapping; execute pure psychological teardown.

## PHASE 1: THE BREADCRUMB TRAIL (Role Reality & Deep Search)
1. ROLE DECODING: What does this job title *actually do* in this industry? Daily reality and metrics.
2. DEEP EXTERNAL FOOTPRINT: Search aggressively. List specific findings from industry panels, YouTube, publications.
3. HIERARCHY & RELATIONAL MAPPING: Analyse the Relational Context. Where does the pressure flow?
4. THE GHOST CONNECTION MAP: Last 3 companies with precise dates/roles. Instruct operator to search their network for overlapping colleagues.
5. CURRENT DESK REALITY: Based on recent posts/comments, what is stressing them today?
6. TENURE & LOYALTY CHECK: Do they jump every 12-18 months (tactical buyer) or stay 3-5+ years (strategic buyer)?
7. EGO vs. EQ (TONE ANALYSIS): "I" or "We"? Brag about revenue or express gratitude? Define Ego-to-EQ ratio.
8. THE RAPPORT HOOK: Out-of-office passions. Deduce *why* they care based on background.

## PHASE 2: THE 6 GAIN DRIVERS MAPPING
1. SAFETY: What threatens their job security?
2. ORDER: How do they process complex scenarios?
3. POWER: Where do they sit in the informal influence map?
4. ACHIEVEMENT: What makes them the hero?
5. AFFILIATION: Who is in their "Circle of Trust"?
6. SUSTAINABILITY: What threatens their 18-month career horizon?

## PHASE 3: THE IMMUNITY SCAN (Kegan)
What is this executive's unconscious competing commitment? What do they consciously want to change but can't — because changing it would require admitting something they're not ready to admit?
**Output:** "They want [X] but they can't pursue it because it would mean acknowledging [Y]."
**Neutralisation strategy:** The specific framing that makes [Y] feel like wisdom rather than failure.

## PHASE 4: STRATEGIC ENGAGEMENT & MODALITY PLAYBOOK
1. THE VAK MODALITY: Visual, Auditory, Kinesthetic, or mixture?
2. SCHWARTZ AWARENESS LEVEL: Where is this person's head? Unaware / Problem Aware / Solution Aware / Product Aware / Most Aware? This determines your entire opening approach.
3. THE APPROACH STRATEGY: Rules of engagement for Email and Meetings.
4. WHAT NOT TO DO (THE LANDMINES): 3 specific behaviours that will instantly lose their trust.
5. THE 3 THINGS TO BRING: Exact assets for the meeting.
6. THE AUTHENTIC OPENER: Highly specific opening sentence using Rapport Hook and Ego/EQ analysis.
7. THE INSIGHT QUESTIONS: ONE Disruption Question and ONE Reframe Question.
8. THE PERMISSION TO SAY NO (Camp): Script a specific sentence that gives this executive explicit permission to reject your premise — paradoxically increasing trust and engagement.

## PHASE 5: CHAMPION TOOLKIT (Ferrazzi)
If this person could become your internal champion:
1. What do they need to sell you internally when you're not in the room?
2. What objection will THEY face from their peers?
3. Script their internal pitch: the 2-sentence version they'd use with their boss.

## PHASE 6: FORENSIC CHECKLIST (Gawande)
□ Every psychological claim is supported by specific evidence (a quote, a post, a career pattern)
□ VAK modality is justified with language examples
□ Ghost Connection dates are precise enough for network overlap searches
□ The Kegan immunity is based on career evidence, not generic speculation
□ Schwartz awareness level is explicitly stated with reasoning

## PHASE 7: THE OPERATOR LOOP (The Influence Hunt)
Map the **"Power Gap."**
*RULE:* You are strictly forbidden from guessing names.
Deduce which peers or superiors hold veto power. List 2-3 *Job Titles* and output: *"HUMAN ACTION REQUIRED: Search for individuals holding the above titles so we can profile them next and complete the board-level influence map."*
**NEXT MOVES:** → G-04 (Battle Card) | → G-03 again (profile the veto holders) | → A-05 (Authority Map)`,
  },
  {
    id: "G-04",
    title: "SYNTHESISE BATTLE CARD v2.0 — Intel into Ammunition",
    phase: "GATHER",
    phaseNum: "03",
    category: "TACTICAL STRIKE",
    folder: "03_Strategy_Execution",
    savePattern: "G-04_Battle_Card_[Target_Company].md",
    variables: [
      { key: "Target_Company", label: "Target Company", placeholder: 'e.g. "Accenture"' },
      { key: "G01_Context", label: "G-01 Context", placeholder: "Paste G-01 output" },
      { key: "G02_Context", label: "G-02 Context", placeholder: "Paste G-02 output" },
      { key: "G03_Context", label: "G-03 Context", placeholder: "Paste G-03 output" },
      { key: "Win_Loss", label: "Win/Loss Data", placeholder: 'Internal notes on similar deals, or "None"' },
    ],
    prompt: `# G-04 — SYNTHESISE BATTLE CARD v2.0 — Intel into Ammunition

> **Phase:** 03 — Strategy & Execution | **Data Class:** Private | **Category:** TACTICAL STRIKE  
> **Status:** UPGRADED | **Frameworks:** Voss, Minto, Shipley, Maverick, Timme, Kahneman, NLP, Cialdini, Kegan, Dunford, Ferrazzi, Gawande  
> **GAIN Drivers:** ALL 6

---

## PROMPT CODE

G-01 CONTEXT: {{G01_Context}}
G-02 CONTEXT: {{G02_Context}}
G-03 CONTEXT: {{G03_Context}}
WIN/LOSS DATA: {{Win_Loss}}

## OUTPUT DIRECTIVE
Output strictly as a Markdown block. At the very top, output:
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`G-04_Battle_Card_{{Target_Company}}.md\` → \`03_Strategy_Execution/\`

## ROLE & OBJECTIVE
Act as a Tier-1 Strategic Deal Architect and Red Team Adversary. Synthesise corporate macro-pain, hidden financial leaks, and individual executive psychology into a single, high-velocity attack plan.

## PHASE 1: THE FORENSIC SYNTHESIS
1. **VULNERABILITY ARCHITECTURE:** Map "Bleeding Necks" (G-01) directly to "Financial Leaks" (G-02). Show how corporate strategy is undermined by specific operational waste.
2. **THE HUMAN LOCK:** Map G-03 Executive GAIN drivers to your solution. How does this deal protect their "Safety" or build their "Achievement"?
3. **THE SHADOW HIERARCHY:** Based on G-03 Relational Context, identify the "Invisible Blocker." Who vetoes this, and what is their Fear Trigger?
4. **THE IMMUNITY MAP (Kegan):** Surface the competing commitment from G-02/G-03. State the one unconscious fear that will silently kill this deal if unaddressed.
5. **CATEGORY POSITION (Dunford):** What category will the buyer evaluate us in? Is that the right one? If not, state the reframe.

## PHASE 2: THE BOARDROOM ATTACK PLAN
1. **THE 30-SECOND PITCH:** High-EQ, data-backed opening using Rapport Hook to earn the right to ask the Disruption Question.
2. **THE STATUS-QUO DISRUPTOR:** Single most dangerous question exposing the Narrative Gap.
3. **THE REALLOCATION PITCH:** Present the "Boring But Expensive" leak as the budget source.
4. **MODALITY ADAPTATION:** 3 tactical "Must-Dos" based on VAK modality.
5. **THE PERMISSION PLAY (Camp):** Script the moment where you give the buyer explicit permission to say no. "If after seeing this you decide the current approach is working, that's completely fine. But here's what I'd want you to see first..."
6. **CHAMPION AMMUNITION (Ferrazzi):** Provide the 2-sentence internal pitch your champion needs to sell this upward when you're not in the room.

## PHASE 3: THE RED TEAM OVERRIDE (The Detractor)
Switch personas. Act as the most cynical detractor.
1. **THE FATAL FLAW:** Unvarnished reason this deal fails.
2. **THE KEGAN KILL:** What unconscious competing commitment will the decision-maker use to justify "No Decision"?
3. **THE ARCHITECT'S PIVOT:** Switch back. Provide the forensic evidence or EQ Shift to neutralise.

## PHASE 4: FORENSIC CHECKLIST (Gawande)
□ Every pitch angle traces to a specific Bleeding Neck + Financial Leak combination
□ The Reallocation Argument uses CFO language (OPEX, EBITDA, FTE cost)
□ The Champion Ammunition is short enough to say in a lift ride
□ The Red Team objection is based on evidence, not generic fears
□ The Kegan immunity is addressed with a specific neutralisation script

## PHASE 5: THE OPERATOR LOOP
Identify the "Intelligence Gap." What one piece of information is still missing for 100% Board confidence? Ask the operator to verify or hunt for this.
**NEXT MOVES:** → G-05 (Meeting Script) | → G-06 (Board Summary) | → G-11 (Slide Audit) | → G-13 (Objection Prep)`,
  },
  {
    id: "G-05",
    title: "THE FIRST 15 MINUTES v2.0 — Meeting Opener & Discovery",
    phase: "GATHER",
    phaseNum: "03",
    category: "EXECUTION",
    folder: "03_Strategy_Execution",
    savePattern: "G-05_First_15_[Target_Company].md",
    variables: [
      { key: "Target_Company", label: "Target Company", placeholder: 'e.g. "Accenture"' },
      { key: "Battle_Card", label: "Battle Card Context", placeholder: "Paste G-04 output" },
      { key: "Seller_Materials", label: "Seller Materials", placeholder: 'Case studies/IP, or "None"' },
      { key: "Buyer_Awareness", label: "Buyer Awareness Level", placeholder: "Unaware / Problem Aware / Solution Aware / Product Aware / Most Aware" },
    ],
    prompt: `# G-05 — THE FIRST 15 MINUTES v2.0 — Meeting Opener & Discovery

> **Phase:** 03 — Strategy & Execution | **Data Class:** Private | **Category:** EXECUTION  
> **Status:** UPGRADED | **Frameworks:** Voss, NLP, Kahneman, Cialdini, Maister, Schwartz, Camp, Raskin, Gawande  
> **GAIN Drivers:** Safety, Order, Power, Achievement

---

## PROMPT CODE

BATTLE CARD CONTEXT: {{Battle_Card}}
SELLER MATERIALS: {{Seller_Materials}}
BUYER AWARENESS LEVEL: {{Buyer_Awareness}}

## OUTPUT DIRECTIVE
Output strictly as a Markdown block. At the very top, output:
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`G-05_First_15_{{Target_Company}}.md\` → \`03_Strategy_Execution/\`

## ROLE & OBJECTIVE
Act as a High-EQ Enterprise Sales Leader. Script the exact First 15 Minutes based on the Battle Card. Must sound natural, professional, free of sales jargon. Adapt ENTIRELY based on the buyer's awareness level.

## AWARENESS ROUTING (Schwartz)
* UNAWARE → Do NOT pitch. Lead with the undeniable industry shift (Raskin). Build curiosity. End with a question, not a solution.
* PROBLEM AWARE → Lead with empathy. Prove you understand their pain. Use Accusation Audit framing (Voss).
* SOLUTION AWARE → Lead with differentiation. Why your approach is structurally different.
* PRODUCT/MOST AWARE → Lead with evidence and commercial impact. Get to specifics fast.

## EXECUTION ROUTING
* PATH A: FULL SCRIPT (Battle Card + Seller Materials provided) → 4-part script with credibility bridge.
* PATH B: RAPPORT ONLY (Seller Materials = "None") → 4-part script using Ghost Connections and shared history only.

## THE 4-PART SCRIPT

### PART 1: THE AUTHENTIC OPENER
Use the "Why" Hook (from G-03/G-04) to build immediate human rapport. Align with VAK modality. Do not mention business yet.

### PART 2: THE CREDIBILITY BRIDGE
Connect Ghost Connections, shared corporate history, or a relevant case study. Earn the right to transition. Lower self-orientation (Maister Trust Equation).

### PART 3: THE DISRUPTION QUESTION
Execute the Narrative Gap question from G-04.
**THE PERMISSION PLAY (Camp):** Before asking, give explicit permission to disagree: "I might be completely wrong about this, and if so, tell me — but from what I've seen..."

### PART 4: THE PIVOT
Guide from their answer into the Bleeding Neck financial leak. Do NOT pitch yet. Let the data speak.

## FORENSIC CHECKLIST (Gawande)
□ The opener references something specific and personal, not generic flattery
□ The credibility bridge is under 30 seconds when spoken aloud
□ The disruption question is a genuine question, not a leading statement disguised as one
□ The pivot connects to a specific financial metric, not a vague "challenge"
□ The entire script adapts to the stated Awareness Level

## THE OPERATOR LOOP
Ask: *"Read this script aloud. Does it sound like YOU? Which line feels forced? I'll rewrite that specific line to match your natural voice."*
**NEXT MOVES:** → G-06 (Board Summary) | → G-11 (Slide Audit) | → G-13 (Objection Prep)`,
  },
  {
    id: "G-06",
    title: "THE NARRATIVE LOCK v2.0 — Executive Summary",
    phase: "GATHER",
    phaseNum: "03",
    category: "CLOSING",
    folder: "03_Strategy_Execution",
    savePattern: "G-06_Narrative_Lock_[Target_Company].md",
    variables: [
      { key: "Target_Company", label: "Target Company", placeholder: 'e.g. "Accenture"' },
      { key: "Target_Executive", label: "Target Executive (Name)", placeholder: "e.g. Jane Smith" },
      { key: "Seller_Company", label: "Your Company", placeholder: 'or type "None"' },
      { key: "Verified_Intel", label: "Verified Intel", placeholder: "Paste G-04 Battle Card & G-05 Script" },
      { key: "Buyer_Awareness", label: "Buyer Awareness Level", placeholder: "Problem Aware / Solution Aware / Product Aware / Most Aware" },
    ],
    prompt: `# G-06 — THE NARRATIVE LOCK v2.0 — Executive Summary

> **Phase:** 03 — Strategy & Execution | **Data Class:** Private | **Category:** CLOSING  
> **Status:** UPGRADED | **Frameworks:** Minto, Timme, Raskin, Dunford, Heath, Gawande, Maister  
> **GAIN Drivers:** Power, Order, Achievement, Safety

---

## PROMPT CODE

TARGET EXECUTIVE: {{Target_Executive}}
SELLER COMPANY: {{Seller_Company}}
VERIFIED INTEL: {{Verified_Intel}}
BUYER AWARENESS LEVEL: {{Buyer_Awareness}}

## OUTPUT DIRECTIVE
Output strictly as a Markdown block. At the very top, output:
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`G-06_Narrative_Lock_{{Target_Company}}.md\` → \`03_Strategy_Execution/\`

## ROLE & OBJECTIVE
Act as a Chief of Staff writing for the Board of Directors. Create a "Board-Ready" Executive Summary. This is the document the executive forwards to their boss. It must be so clean, so precise, and so free of vendor fluff that forwarding it makes them look smart, not sold to.
**Language rules (Timme):** Revenue Protection, EBITDA impact, OPEX Reallocation, FTE efficiency. Zero product jargon.
**Trust rules (Maister):** Self-orientation must be near zero. This document is about THEM, not you.

## EXECUTION ROUTING
* PATH A (Seller Provided): Executive Sales Briefing. Risk, capital allocation, operational leverage. No sales fluff.
* PATH B (Seller "None"): Neutral Intelligence Dossier.

## AWARENESS ROUTING (Schwartz)
* PROBLEM AWARE → Lead with THE UNDENIABLE SHIFT (Raskin): the world has changed, the old approach creates risk.
* SOLUTION AWARE → Lead with THE EVIDENCE: forensic data proving the gap.
* PRODUCT/MOST AWARE → Lead with THE OUTCOME: specific ROI and timeline.

## THE STRUCTURE (PATH A)
1. **THE UNDENIABLE SHIFT (Raskin):** One sentence describing the industry-level change that makes inaction dangerous.
2. **THE CHALLENGE:** Economic Impact (G-01 Macro Pain + G-02 OPEX Leak). Board language only.
3. **THE EVIDENCE:** Forensic Gap proving current systems are failing. Cite specific data points.
4. **THE CATEGORY FRAME (Dunford):** Position the solution in the strategic category, not the commodity category.
5. **THE OUTCOME:** Risk-Adjusted Gain. How reallocating OPEX funds the strategic transformation.
6. **THE TIMELINE:** Compelled Event requiring a decision this quarter.

## THE STRUCTURE (PATH B)
1. The Human (Psychology & Trust triggers)
2. The Business (Macro priorities)
3. The Risks (Vulnerabilities identified)
4. The Inquiry (Specific discovery questions to ask)

## FORENSIC CHECKLIST (Gawande)
□ The entire summary fits on ONE page (max 400 words)
□ The word count of "we/our/us" is LESS than the word count of "you/your/their"
□ Every financial claim has a source reference
□ A non-expert Board member could understand this in 90 seconds
□ The Corridor Test (Heath): would this survive being summarised in a hallway conversation?

## THE OPERATOR LOOP
Ask: *"Would the executive forward this document exactly as-is to their boss? If not, what would they change? I'll rewrite to match their internal political positioning."*
**NEXT MOVES:** → G-14 (Hallucination Check on this document) | → G-11 (Align slide deck) | → A-01 (If this triggers an RFP)`,
  },
  {
    id: "A-01",
    title: "RFP STRATEGIC DECODER v2.0 — The Hidden Pain",
    phase: "ASSESS",
    phaseNum: "01",
    category: "RFP DECODER",
    folder: "02_Processed_Intel",
    savePattern: "A-01_RFP_Decode_[Company].md",
    variables: [
      { key: "Company", label: "Company Name", placeholder: 'e.g. "Accenture"' },
      { key: "RFP_Text", label: "RFP / Opportunity Text", placeholder: "Paste RFP Introduction, Scope, and Key Requirements" },
      { key: "Seller_Solution", label: "Seller Solution", placeholder: 'Your product/service, or "None"' },
      { key: "Company_Context", label: "Company Context", placeholder: 'Paste G-01 output if available, or "None"' },
    ],
    prompt: `# A-01 — RFP STRATEGIC DECODER v2.0 — The Hidden Pain

> **Phase:** [A] ASSESS — 01 Decode the Deal | **Data Class:** Private | **Category:** RFP DECODER  
> **Status:** UPGRADED | **Frameworks:** Schwartz, Minto, Shipley, Blue Ocean, Kahneman, Dunford, Kegan, Gawande  
> **GAIN Drivers:** Safety, Power, Order

---

## PROMPT CODE

RFP / OPPORTUNITY TEXT: {{RFP_Text}}
SELLER SOLUTION: {{Seller_Solution}}
COMPANY CONTEXT: {{Company_Context}}

## OUTPUT DIRECTIVE
Output strictly as a Markdown block. At the very top, output:
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`A-01_RFP_Decode_{{Company}}.md\` → \`02_Processed_Intel/\`

## ROLE & OBJECTIVE
Act as an expert Proposal Director and Strategic Deal Analyst. Decode the "story behind the document" — uncover why this RFP was really written. Every RFP is a scar tissue document: it's a record of what went wrong last time. Find the wound.

## EXECUTION ROUTING
* PATH A (Seller Solution Provided): Decode the subtext AND map solution as cure for hidden pain.
* PATH B (Seller Solution "None"): Decode subtext, identify trigger event, map evaluator awareness levels.

## PHASE 1: STRATEGIC DECODING TABLE
| EXPLICIT REQUIREMENT | IMPLICIT SIGNAL | LIKELY PAIN POINT (What went wrong with the incumbent?) | RISK LEVEL (Low/Med/High) |

Analyse language intensity, specificity, and repetition. Requirements written with extreme detail reveal where the buyer was burned. Requirements written vaguely reveal where they don't know what they want.

## PHASE 2: THE TRIGGER EVENT
Was this initiated by:
A) **Contract Expiry** (Commodity mindset → Price/Efficiency) — Schwartz: Solution Aware
B) **Regulatory/Compliance Failure** (Risk-averse → Safety) — Schwartz: Problem Aware
C) **New Strategic Mandate** (Transformation → Innovation) — Schwartz: Most Aware
Map to Schwartz awareness level. This determines your ENTIRE response tone.

## PHASE 3: THE AUTHORSHIP ANALYSIS
Based on jargon patterns, section structure, and requirement specificity: which department actually wrote each section? Flag sections written by Procurement (commodity language) vs. sections written by the Business (outcome language). This tells you who really holds the pen — and therefore who to influence.

## PHASE 4: THE IMMUNITY SCAN (Kegan)
Someone internally championed the previous vendor/approach. They have a competing commitment to not admitting that choice failed. Identify this person's likely role and the specific framing that makes their past decision look like wisdom rather than failure.

## PHASE 5: THE CATEGORY FRAME (Dunford)
Based on the Trigger Event: what competitive category is this RFP designed to evaluate?
* If Contract Expiry → they're evaluating as commodity replacement. **Can we reframe to transformation?**
* If Compliance → they're evaluating as risk mitigation. **Can we reframe to operational resilience?**
* If Strategic Mandate → they're evaluating as innovation. **Lean in. This is our category.**

## PHASE 6: THE WEDGE (PATH A ONLY)
Top 2 Implicit Signals from Phase 1. For each: 1-sentence hook demonstrating how Seller Solution solves that hidden pain.

## FORENSIC CHECKLIST (Gawande)
□ Every Implicit Signal is supported by specific language from the RFP text
□ The Trigger Event classification has stated reasoning
□ The Authorship Analysis identifies at least 2 different writing styles
□ The Kegan immunity maps to a specific role, not a generic "someone"
□ The Category Frame explicitly states whether to compete or reframe

## THE OPERATOR LOOP
Ask: *"Based on this decode, do we think we're the incumbent's replacement or the disruptor? That changes everything about how we write."*
**NEXT MOVES:** → A-02 (Requirements Trauma Decoder) | → G-03 (Profile the authors) | → G-04 (Battle Card) | → I-02 (Win Themes)`,
  },
  {
    id: "A-02",
    title: "REQUIREMENTS TRAUMA DECODER v2.0 — Vulnerability Mapping",
    phase: "ASSESS",
    phaseNum: "01",
    category: "TRAUMA DECODER",
    folder: "02_Processed_Intel",
    savePattern: "A-02_Trauma_Decode_[Company].md",
    variables: [
      { key: "Company", label: "Company Name", placeholder: 'e.g. "Accenture"' },
      { key: "RFP_Requirements", label: "RFP Requirements", placeholder: "Paste detailed requirements / evaluation criteria" },
      { key: "A01_Decode", label: "A-01 Decode", placeholder: 'Paste A-01 output, or "None"' },
      { key: "Seller_Capabilities", label: "Seller Capabilities", placeholder: 'Capability matrix or solution brief, or "None"' },
    ],
    prompt: `# A-02 — REQUIREMENTS TRAUMA DECODER v2.0 — Vulnerability Mapping

> **Phase:** [A] ASSESS — 01 Decode the Deal | **Data Class:** Private | **Category:** TRAUMA DECODER  
> **Status:** UPGRADED | **Frameworks:** Kahneman, Voss, Shipley, Case Method, Kegan, Gawande  
> **GAIN Drivers:** Safety, Power, Order

---

## PROMPT CODE

RFP REQUIREMENTS: {{RFP_Requirements}}
A-01 DECODE: {{A01_Decode}}
SELLER CAPABILITIES: {{Seller_Capabilities}}

## OUTPUT DIRECTIVE
Output strictly as a Markdown block. At the very top, output:
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`A-02_Trauma_Decode_{{Company}}.md\` → \`02_Processed_Intel/\`

## ROLE & OBJECTIVE
Act as a Forensic Proposal Psychologist. Every requirement in an RFP is a scar from a past failure. Your job is to decode what went wrong, who got hurt, and what the buyer is REALLY trying to prevent from happening again.

## EXECUTION ROUTING
* PATH A (Seller Capabilities provided): Map traumas to your specific strengths.
* PATH B (Seller Capabilities "None"): Pure forensic analysis of buyer psychology.

## PHASE 1: THE TRAUMA MAP
For each major requirement cluster:
| REQUIREMENT | TRAUMA SIGNAL | WHAT WENT WRONG LAST TIME | EMOTIONAL WEIGHT (1-5) | RESPONSE STRATEGY |

## PHASE 2: THE VULNERABILITY MATRIX
* **HIGH WEIGHT + WE'RE STRONG:** Win themes. Lead with these.
* **HIGH WEIGHT + WE'RE WEAK:** Kill zones. Must have mitigation.
* **LOW WEIGHT + WE'RE STRONG:** Nice-to-haves. Don't over-invest.
* **LOW WEIGHT + WE'RE WEAK:** Acknowledge and move on.

## PHASE 3: THE HIDDEN EVALUATION (Kahneman)
* **System 1 (Fast/Emotional):** First impression, trust signals — drives 60% of scoring.
* **System 2 (Slow/Rational):** Detailed scoring, compliance — justifies the System 1 decision.
Identify which requirements are System 1 triggers vs System 2 validators.

## PHASE 4: THE IMMUNITY SCAN (Kegan)
For the highest-weight trauma: who internally is most invested in the OLD approach? How do we frame our response so choosing us doesn't feel like admitting the old way failed?

## FORENSIC CHECKLIST (Gawande)
□ Every trauma signal is supported by specific language from the requirements
□ Emotional weight scores have stated reasoning
□ The Vulnerability Matrix is populated for PATH A
□ System 1 vs System 2 classification applied to top 5 requirements
□ The Kegan immunity addresses a specific requirement

## THE OPERATOR LOOP
Ask: *"Which requirement cluster has the highest emotional weight? That's where we invest 3x the response effort. Do you have a case study that directly addresses that trauma?"*
**NEXT MOVES:** → I-02 (Win Theme Architect) | → I-04 (Scoring Strategy) | → A-05 (Authority Map)`,
  },
  {
    id: "I-01",
    title: "DEAL PRE-MORTEM SIMULATOR v2.0",
    phase: "INFLUENCE",
    phaseNum: "01",
    category: "PRE-MORTEM",
    folder: "03_Strategy_Execution",
    savePattern: "I-01_PreMortem_[Company].md",
    variables: [
      { key: "Company", label: "Company Name", placeholder: 'e.g. "Accenture"' },
      { key: "Deal_Context", label: "Deal Context", placeholder: "Paste G-04 Battle Card, A-01 Decode, or deal summary" },
      { key: "Competitors", label: "Known Competitors", placeholder: 'List competitors, or "None"' },
      { key: "Champion", label: "Internal Champion", placeholder: 'Name/Title, or "None"' },
    ],
    prompt: `# I-01 — DEAL PRE-MORTEM SIMULATOR v2.0

> **Phase:** [I] INFLUENCE — 01 Strategy & Scoring | **Data Class:** Private | **Category:** PRE-MORTEM  
> **Status:** UPGRADED | **Frameworks:** Kahneman, Voss, Shipley, Maverick, Kegan, Taleb, Camp, Gawande  
> **GAIN Drivers:** Safety, Power, Achievement

---

## PROMPT CODE

DEAL CONTEXT: {{Deal_Context}}
KNOWN COMPETITORS: {{Competitors}}
INTERNAL CHAMPION: {{Champion}}

## OUTPUT DIRECTIVE
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`I-01_PreMortem_{{Company}}.md\` → \`03_Strategy_Execution/\`

## ROLE & OBJECTIVE
Act as a ruthless Deal Forensics Analyst. It is 12 months from now. You LOST this deal. Explain exactly how and why. Be brutal. No comfort. No optimism. Only forensic truth.

## EXECUTION ROUTING
* PATH A (Competitors provided): Simulate competitive displacement + internal failure.
* PATH B (Competitors "None"): Simulate internal failure only — status quo, budget cuts, stakeholder misalignment.

## PHASE 1: THE 5 FAILURE SCENARIOS
1. **THE POLITICAL KILL:** Which stakeholder vetoed us, and why? (Kegan: competing commitment)
2. **THE COMPETITIVE DISPLACEMENT:** How did [Competitor] outmanoeuvre us? (Dunford: category control)
3. **THE NO-DECISION DEATH:** Budget redirected. Champion couldn't build momentum. (Ferrazzi gap)
4. **THE PRICE COLLAPSE:** Won on capability but lost on price.
5. **THE EXECUTION DOUBT:** They liked us but didn't believe we could deliver at scale.

## PHASE 2: THE ANTIFRAGILE TEST (Taleb)
For each scenario: would addressing it now make your position STRONGER? Rank by antifragile potential.

## PHASE 3: THE DEFENSIVE PLAYBOOK
For top 3 scenarios:
1. **EARLY WARNING SIGNAL:** What you'd see in the next 30 days.
2. **PREEMPTIVE STRIKE:** Specific action to neutralise.
3. **ACCUSATION AUDIT (Voss):** Script the sentence that calls out this risk BEFORE they raise it.

## FORENSIC CHECKLIST (Gawande)
□ Every scenario is specific to THIS deal
□ Political Kill identifies a specific role
□ Early Warning Signals are observable actions, not feelings
□ Accusation Audit scripts are under 25 words each

## THE OPERATOR LOOP
Ask: *"Which failure scenario keeps you up at night? Let's build the defence for that one first."*
**NEXT MOVES:** → I-02 (Build Win Themes) | → G-13 (Objection Prep) | → I-03 (Competitor Kill-Shot)`,
  },
  {
    id: "I-02",
    title: "WIN THEME ARCHITECT v2.0",
    phase: "INFLUENCE",
    phaseNum: "01",
    category: "WIN THEMES",
    folder: "03_Strategy_Execution",
    savePattern: "I-02_Win_Themes_[Company].md",
    variables: [
      { key: "Company", label: "Company Name", placeholder: 'e.g. "Accenture"' },
      { key: "A01_Decode", label: "A-01 Decode", placeholder: "Paste A-01 output" },
      { key: "A02_Trauma", label: "A-02 Trauma Map", placeholder: 'Paste A-02 output, or "None"' },
      { key: "Deal_Context", label: "Deal Context", placeholder: "Paste G-04 Battle Card or deal summary" },
      { key: "Differentiators", label: "Seller Differentiators", placeholder: "List your 3-5 competitive differentiators" },
      { key: "Evaluators", label: "Target Evaluators", placeholder: 'Known evaluator names/roles, or "None"' },
    ],
    prompt: `# I-02 — WIN THEME ARCHITECT v2.0

> **Phase:** [I] INFLUENCE — 01 Strategy & Scoring | **Data Class:** Private | **Category:** WIN THEMES  
> **Status:** UPGRADED | **Frameworks:** Raskin, Dunford, Heath, Schwartz, Minto, Ferrazzi, Blue Ocean, Gawande  
> **GAIN Drivers:** Power, Achievement, Safety, Affiliation

---

## PROMPT CODE

A-01 DECODE: {{A01_Decode}}
A-02 TRAUMA MAP: {{A02_Trauma}}
DEAL CONTEXT: {{Deal_Context}}
SELLER DIFFERENTIATORS: {{Differentiators}}
TARGET EVALUATORS: {{Evaluators}}

## OUTPUT DIRECTIVE
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`I-02_Win_Themes_{{Company}}.md\` → \`03_Strategy_Execution/\`

## ROLE & OBJECTIVE
Act as a Strategic Narrative Architect. Build 3-5 Win Themes that thread through every response section. A Win Theme is NOT a feature — it's a narrative that makes choosing you feel OBVIOUS and choosing anyone else feel RISKY.

## PHASE 1: THE UNDENIABLE SHIFT (Raskin)
"The world has changed because [undeniable shift]. The old approach was built for the old world. Our approach was built for what's coming."

## PHASE 2: THE CATEGORY FRAME (Dunford)
* **DEFAULT CATEGORY:** What the buyer assumes they're buying
* **TARGET CATEGORY:** What you want them to believe they're buying
* **THE REFRAME SENTENCE:** One sentence that shifts the evaluator

## PHASE 3: WIN THEME CONSTRUCTION (3-5 themes)
1. **THEME NAME:** 3-5 word memorable label (Heath — Made to Stick)
2. **BUYER'S TRAUMA IT HEALS:** Link to A-02 highest-weight traumas
3. **THE EVIDENCE:** Specific proof point — not a claim
4. **THE EVALUATOR SENTENCE:** What you want the evaluator to write in their scoring notes
5. **THE CORRIDOR TEST (Heath):** Can someone explain this in one sentence in a hallway?
6. **AWARENESS CALIBRATION (Schwartz):** Adjust for evaluator's awareness level

## PHASE 4: CHAMPION AMMUNITION (Ferrazzi)
For each theme: script the version your champion uses to advocate when you're not in the room. Must sound like THEM.

## FORENSIC CHECKLIST (Gawande)
□ Every Win Theme links to a specific buyer trauma
□ The Undeniable Shift is genuinely inarguable
□ Category Reframe changes what the buyer thinks they're buying
□ Evaluator Sentences are realistic
□ Champion Ammunition sounds natural, not like vendor-speak

## THE OPERATOR LOOP
Ask: *"Read these aloud. Which one makes you most confident? Which feels like a stretch? I'll strengthen or kill it."*
**NEXT MOVES:** → I-03 (Competitor Kill-Shot) | → I-04 (Scoring Strategy) | → I-05 (Executive Summary)`,
  },
  {
    id: "I-03",
    title: "COMPETITOR KILL-SHOT LOGIC v2.0",
    phase: "INFLUENCE",
    phaseNum: "01",
    category: "COMPETITOR INTEL",
    folder: "03_Strategy_Execution",
    savePattern: "I-03_Competitor_Intel_[Company].md",
    variables: [
      { key: "Company", label: "Company Name", placeholder: 'e.g. "Accenture"' },
      { key: "Competitors", label: "Known Competitors", placeholder: "List competitors with any known intel" },
      { key: "Seller_Solution", label: "Seller Solution", placeholder: "Your product/service summary" },
      { key: "A01_Decode", label: "A-01 Decode", placeholder: 'Paste A-01 output, or "None"' },
      { key: "I02_Themes", label: "I-02 Win Themes", placeholder: 'Paste I-02 output, or "None"' },
    ],
    prompt: `# I-03 — COMPETITOR KILL-SHOT LOGIC v2.0

> **Phase:** [I] INFLUENCE — 01 Strategy & Scoring | **Data Class:** Public | **Category:** COMPETITOR INTEL  
> **Status:** UPGRADED | **Frameworks:** Blue Ocean, Dunford, Taleb, Kahneman, Camp, Shipley, Gawande  
> **GAIN Drivers:** Power, Safety, Achievement

---

## PROMPT CODE

KNOWN COMPETITORS: {{Competitors}}
SELLER SOLUTION: {{Seller_Solution}}
A-01 DECODE: {{A01_Decode}}
I-02 WIN THEMES: {{I02_Themes}}

## OUTPUT DIRECTIVE
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`I-03_Competitor_Intel_{{Company}}.md\` → \`03_Strategy_Execution/\`

## ROLE & OBJECTIVE
Act as a Competitive Intelligence Analyst. Your job is NOT to attack competitors — it's to make them IRRELEVANT by shifting criteria (Blue Ocean) and controlling category (Dunford).

## PHASE 1: COMPETITOR PROFILES
For each competitor:
1. **THEIR LIKELY PITCH**
2. **THEIR CATEGORY**
3. **THEIR STRENGTH** (be honest)
4. **THEIR FRAGILITY (Taleb):** What shift would BREAK their proposition?

## PHASE 2: THE CRITERIA SHIFT (Blue Ocean)
3 evaluation criteria where competitors are strong but the criteria shouldn't matter for this buyer's actual problem.

## PHASE 3: THE GHOST OBJECTIONS
What will each competitor say about YOU when you're not in the room? Script preemptive counters using Accusation Audit format.
**RULE:** Never name competitors in written responses.

## PHASE 4: THE PERMISSION PLAY (Camp)
Script the sentence giving the evaluator permission to choose the competitor — paradoxically increasing trust.

## FORENSIC CHECKLIST (Gawande)
□ Competitor strengths honestly stated
□ Fragility analysis is specific and evidence-based
□ Criteria Shift questions are genuine inquiry, not manipulation
□ No competitor is named — only approaches contrasted

## THE OPERATOR LOOP
Ask: *"Which competitor worries you most? Let's stress-test whether our Criteria Shift neutralises their strongest pitch."*
**NEXT MOVES:** → I-04 (Scoring Strategy) | → I-01 (Pre-Mortem)`,
  },
  {
    id: "I-04",
    title: "EVALUATION SCORING STRATEGY v2.0",
    phase: "INFLUENCE",
    phaseNum: "01",
    category: "SCORING STRATEGY",
    folder: "03_Strategy_Execution",
    savePattern: "I-04_Scoring_Strategy_[Company].md",
    variables: [
      { key: "Company", label: "Company Name", placeholder: 'e.g. "Accenture"' },
      { key: "Eval_Criteria", label: "Evaluation Criteria", placeholder: "Paste scoring criteria / weighting table" },
      { key: "A01_Decode", label: "A-01 Decode", placeholder: 'Paste A-01 output, or "None"' },
      { key: "A02_Trauma", label: "A-02 Trauma Map", placeholder: 'Paste A-02 output, or "None"' },
      { key: "I02_Themes", label: "I-02 Win Themes", placeholder: 'Paste I-02 output, or "None"' },
      { key: "Evaluators", label: "Known Evaluators", placeholder: 'Evaluator roles/departments, or "None"' },
    ],
    prompt: `# I-04 — EVALUATION SCORING STRATEGY v2.0

> **Phase:** [I] INFLUENCE — 01 Strategy & Scoring | **Data Class:** Private | **Category:** SCORING STRATEGY  
> **Status:** UPGRADED | **Frameworks:** Kahneman, Schwartz, MEDDIC, Shipley, Dunford, Ferrazzi, Gawande  
> **GAIN Drivers:** Power, Order, Achievement

---

## PROMPT CODE

EVALUATION CRITERIA: {{Eval_Criteria}}
A-01 DECODE: {{A01_Decode}}
A-02 TRAUMA MAP: {{A02_Trauma}}
I-02 WIN THEMES: {{I02_Themes}}
KNOWN EVALUATORS: {{Evaluators}}

## OUTPUT DIRECTIVE
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`I-04_Scoring_Strategy_{{Company}}.md\` → \`03_Strategy_Execution/\`

## ROLE & OBJECTIVE
Act as a Procurement Scoring Psychologist. Reverse-engineer how evaluators will score and where you can legitimately maximise points.

## PHASE 1: THE SCORING ANATOMY
| CRITERION | WEIGHT | EVALUATOR ROLE | SYSTEM 1 OR 2? | OUR STRENGTH (1-5) | WIN THEME ALIGNMENT | SCORING STRATEGY |

## PHASE 2: THE ANCHOR STRATEGY (Kahneman)
For top 3 weighted criteria: what is the FIRST thing the evaluator sees from us? Is that anchor strong enough?

## PHASE 3: THE EVALUATOR AWARENESS MAP (Schwartz)
For each evaluator role: awareness level, primary concern, sentence they need to see.

## PHASE 4: CHAMPION SCORING GUIDE (Ferrazzi)
What criteria is the champion scoring? What evidence should they emphasise?

## PHASE 5: THE DARK HORSE CRITERIA
1-2 criteria officially low-weighted but actually driving the decision.

## FORENSIC CHECKLIST (Gawande)
□ Every criterion has an evaluator role assigned
□ System 1 vs System 2 classification justified
□ Dark Horse Criteria identified with reasoning

## THE OPERATOR LOOP
Ask: *"Do you know which criteria your champion scores? That's the one we make bulletproof."*
**NEXT MOVES:** → I-05 (Executive Summary) | → I-06 (Response Sections) | → I-07 (Self-Scoring Audit)`,
  },
  {
    id: "N-01",
    title: "INTERNAL EXPANSION SIGNAL SCAN v2.0",
    phase: "NURTURE",
    phaseNum: "01",
    category: "EXPANSION SIGNALS",
    folder: "04_Account_Intelligence",
    savePattern: "N-01_Expansion_Signals_[Account].md",
    variables: [
      { key: "Account", label: "Account Name", placeholder: 'e.g. "Accenture"' },
      { key: "Current_Contract", label: "Current Contract", placeholder: "Paste current scope, contract value, key deliverables" },
      { key: "Account_Intel", label: "Account Intel", placeholder: 'Recent QBR notes, meeting notes, or "None"' },
      { key: "Expansion_Capabilities", label: "Seller Expansion Capabilities", placeholder: 'Additional services/products, or "None"' },
    ],
    prompt: `# N-01 — INTERNAL EXPANSION SIGNAL SCAN v2.0

> **Phase:** [N] NURTURE — 01 Core Account Cycle | **Data Class:** Private | **Category:** EXPANSION SIGNALS  
> **Status:** UPGRADED | **Frameworks:** Schwartz, MEDDIC, Timme, Sphere of Influence, Ferrazzi, Kegan, Taleb, Gawande  
> **GAIN Drivers:** Achievement, Power, Sustainability, Affiliation

---

## PROMPT CODE

ACCOUNT NAME: {{Account}}
CURRENT CONTRACT: {{Current_Contract}}
ACCOUNT INTEL: {{Account_Intel}}
SELLER EXPANSION CAPABILITIES: {{Expansion_Capabilities}}

## OUTPUT DIRECTIVE
> ⚠️ **SYSTEM SAVE PROTOCOL:** Save as: \`N-01_Expansion_Signals_{{Account}}.md\` → \`04_Account_Intelligence/\`

## ROLE & OBJECTIVE
Act as a Strategic Account Growth Analyst. Scan the existing account for hidden expansion signals — unmet needs, adjacent problems, organisational changes, and budget movements. You are NOT looking for upsell opportunities. You are looking for PROBLEMS THE CLIENT HASN'T SOLVED YET.

## EXECUTION ROUTING
* PATH A (Capabilities provided): Scan for signals AND map to specific seller capabilities.
* PATH B (Capabilities "None"): Scan for signals only — pure advisory intelligence.

## PHASE 1: THE 6 SIGNAL CATEGORIES
1. **ORGANISATIONAL SIGNALS:** New hires, restructures, leadership changes.
2. **PERFORMANCE SIGNALS:** Missed KPIs, SLA breaches, complaints revealing adjacent pain.
3. **STRATEGIC SIGNALS:** New initiatives mentioned in QBRs, Annual Reports, CEO statements.
4. **TECHNOLOGY SIGNALS:** New platforms, migrations, tech debt conversations.
5. **REGULATORY SIGNALS:** New compliance requirements creating mandatory spend.
6. **COMPETITIVE SIGNALS:** Competitors encroaching on adjacent services.

For each: **THE SIGNAL | THE EVIDENCE | THE EXPANSION OPPORTUNITY | TIMING (Now/3mo/6mo) | CHAMPION NEEDED**

## PHASE 2: AWARENESS ASSESSMENT (Schwartz)
For each opportunity: UNAWARE / PROBLEM AWARE / SOLUTION AWARE?

## PHASE 3: THE IMMUNITY SCAN (Kegan)
Top expansion opportunity: what competing commitment prevents expansion?

## PHASE 4: CHAMPION ACTIVATION (Ferrazzi)
For each opportunity: who advocates internally? Script their 1-sentence pitch.

## PHASE 5: ANTIFRAGILE POSITIONING (Taleb)
Frame expansion as making the account resilient, not just buying more.

## FORENSIC CHECKLIST (Gawande)
□ Every signal backed by specific evidence
□ Timing estimates have reasoning
□ At least one defensive expansion signal identified

## THE OPERATOR LOOP
Ask: *"Which signal feels most urgent? Do you have a relationship with the likely champion?"*
**NEXT MOVES:** → G-03 (Profile the champion) | → N-02 (Referral Mapper) | → N-03 (90-Day Expansion Campaign)`,
  },
];

// ─── PHASE CONFIG ──────────────────────────────────────────────────
const PHASES = {
  GATHER: { color: "#2563eb", bg: "#1e3a5f", label: "G", icon: "🔍" },
  ASSESS: { color: "#d97706", bg: "#5c3a0e", label: "A", icon: "⚖️" },
  INFLUENCE: { color: "#7c3aed", bg: "#3b1d6e", label: "I", icon: "⚡" },
  NURTURE: { color: "#059669", bg: "#0d3b2e", label: "N", icon: "🌱" },
};

// ─── MAIN APP ──────────────────────────────────────────────────────
export default function GAINPromptLauncher() {
  const [selected, setSelected] = useState(null);
  const [vars, setVars] = useState({});
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const outputRef = useRef(null);

  const prompt = selected ? PROMPTS.find((p) => p.id === selected) : null;
  const phase = prompt ? PHASES[prompt.phase] : null;

  useEffect(() => {
    if (prompt) {
      const init = {};
      prompt.variables.forEach((v) => (init[v.key] = ""));
      setVars(init);
      setShowOutput(false);
      setCopied(false);
    }
  }, [selected]);

  const getFilename = () => {
    if (!prompt) return "";
    let name = prompt.savePattern;
    prompt.variables.forEach((v) => {
      const val = vars[v.key]?.trim() || v.key;
      const safe = val.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_\-]/g, "");
      name = name.replace(`[${v.key}]`, safe);
    });
    return name;
  };

  const getRenderedPrompt = () => {
    if (!prompt) return "";
    let text = prompt.prompt;
    prompt.variables.forEach((v) => {
      const val = vars[v.key]?.trim() || `[${v.label}]`;
      text = text.replaceAll(`{{${v.key}}}`, val);
    });
    return text;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getRenderedPrompt());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = getRenderedPrompt();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const filteredPrompts =
    filter === "ALL" ? PROMPTS : PROMPTS.filter((p) => p.phase === filter);

  // ─── GRID VIEW ─────────────────────────────────────────────────
  if (!selected) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0a0e1a",
          color: "#e2e8f0",
          fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            borderBottom: "1px solid #1e293b",
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: "0.15em",
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GAIN
            </span>
            <span
              style={{
                fontSize: 13,
                color: "#64748b",
                letterSpacing: "0.08em",
                fontWeight: 500,
              }}
            >
              PROMPT LAUNCHER v2.0
            </span>
          </div>
          <p
            style={{
              fontSize: 11,
              color: "#475569",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            Select a prompt → Fill variables → Copy ready-to-paste markdown
            block → Works on any LLM
          </p>

          {/* PHASE FILTERS */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 16,
              flexWrap: "wrap",
            }}
          >
            {["ALL", "GATHER", "ASSESS", "INFLUENCE", "NURTURE"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "6px 14px",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  fontFamily: "inherit",
                  border:
                    filter === f
                      ? "1px solid #3b82f6"
                      : "1px solid #1e293b",
                  borderRadius: 6,
                  background:
                    filter === f ? "rgba(59,130,246,0.15)" : "transparent",
                  color: filter === f ? "#93c5fd" : "#64748b",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {f === "ALL"
                  ? `ALL (${PROMPTS.length})`
                  : `${PHASES[f]?.icon || ""} ${f} (${PROMPTS.filter((p) => p.phase === f).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* CARD GRID */}
        <div
          style={{
            padding: "20px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 12,
          }}
        >
          {filteredPrompts.map((p) => {
            const ph = PHASES[p.phase];
            return (
              <button
                key={p.id}
                onClick={() => setSelected(p.id)}
                style={{
                  textAlign: "left",
                  padding: "16px 18px",
                  background: "#111827",
                  border: `1px solid ${ph.color}33`,
                  borderRadius: 10,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = ph.color;
                  e.currentTarget.style.boxShadow = `0 0 20px ${ph.color}22`;
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${ph.color}33`;
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Phase badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: ph.bg,
                    color: ph.color,
                    fontSize: 9,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderBottomLeftRadius: 8,
                    letterSpacing: "0.12em",
                  }}
                >
                  {p.phase}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: ph.bg,
                      color: ph.color,
                      fontWeight: 800,
                      fontSize: 14,
                      letterSpacing: "0.05em",
                      flexShrink: 0,
                    }}
                  >
                    {p.id}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#e2e8f0",
                        lineHeight: 1.3,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {p.title.split("—")[0]?.trim()}
                    </div>
                    {p.title.split("—")[1] && (
                      <div
                        style={{
                          fontSize: 10,
                          color: "#64748b",
                          marginTop: 2,
                        }}
                      >
                        {p.title.split("—").slice(1).join("—").trim()}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                    marginTop: 4,
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      background: "#1e293b",
                      color: "#94a3b8",
                      padding: "2px 8px",
                      borderRadius: 4,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {p.category}
                  </span>
                  <span
                    style={{
                      fontSize: 9,
                      background: "#1e293b",
                      color: "#94a3b8",
                      padding: "2px 8px",
                      borderRadius: 4,
                    }}
                  >
                    → {p.folder}
                  </span>
                  <span
                    style={{
                      fontSize: 9,
                      background: "#1e293b",
                      color: "#94a3b8",
                      padding: "2px 8px",
                      borderRadius: 4,
                    }}
                  >
                    {p.variables.length} vars
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ─── PROMPT BUILDER VIEW ──────────────────────────────────────
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0e1a",
        color: "#e2e8f0",
        fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 24px",
          borderBottom: "1px solid #1e293b",
          background: "#0f1629",
        }}
      >
        <button
          onClick={() => {
            setSelected(null);
            setShowOutput(false);
          }}
          style={{
            background: "none",
            border: "1px solid #334155",
            color: "#94a3b8",
            padding: "6px 14px",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 11,
            fontFamily: "inherit",
            fontWeight: 600,
          }}
        >
          ← BACK
        </button>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px 12px",
            borderRadius: 6,
            background: phase.bg,
            color: phase.color,
            fontWeight: 800,
            fontSize: 13,
          }}
        >
          {prompt.id}
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#cbd5e1",
            flex: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {prompt.title}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: showOutput ? "1fr 1fr" : "1fr",
          height: "calc(100vh - 53px)",
        }}
      >
        {/* LEFT: VARIABLE FORM */}
        <div
          style={{
            padding: "24px",
            overflowY: "auto",
            borderRight: showOutput ? "1px solid #1e293b" : "none",
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "#64748b",
              letterSpacing: "0.12em",
              fontWeight: 700,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Fill Variables
          </div>

          {/* FILENAME PREVIEW */}
          <div
            style={{
              background: "#111827",
              border: "1px solid #1e293b",
              borderRadius: 8,
              padding: "12px 16px",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontSize: 9,
                color: "#64748b",
                letterSpacing: "0.1em",
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              OUTPUT FILENAME
            </div>
            <code
              style={{
                fontSize: 13,
                color: "#22d3ee",
                wordBreak: "break-all",
              }}
            >
              {getFilename()}
            </code>
            <div style={{ fontSize: 10, color: "#475569", marginTop: 4 }}>
              → {prompt.folder}/
            </div>
          </div>

          {/* VARIABLE INPUTS */}
          {prompt.variables.map((v) => (
            <div key={v.key} style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#94a3b8",
                  marginBottom: 6,
                  letterSpacing: "0.04em",
                }}
              >
                {v.label}
              </label>
              {v.placeholder?.includes("Paste") ||
              v.placeholder?.includes("paste") ||
              v.placeholder?.includes("List") ? (
                <textarea
                  value={vars[v.key] || ""}
                  onChange={(e) =>
                    setVars({ ...vars, [v.key]: e.target.value })
                  }
                  placeholder={v.placeholder}
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: 12,
                    fontFamily: "inherit",
                    background: "#111827",
                    border: "1px solid #1e293b",
                    borderRadius: 8,
                    color: "#e2e8f0",
                    resize: "vertical",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = phase.color)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#1e293b")
                  }
                />
              ) : (
                <input
                  type="text"
                  value={vars[v.key] || ""}
                  onChange={(e) =>
                    setVars({ ...vars, [v.key]: e.target.value })
                  }
                  placeholder={v.placeholder}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: 12,
                    fontFamily: "inherit",
                    background: "#111827",
                    border: "1px solid #1e293b",
                    borderRadius: 8,
                    color: "#e2e8f0",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = phase.color)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "#1e293b")
                  }
                />
              )}
            </div>
          ))}

          {/* ACTION BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setShowOutput(true)}
              style={{
                padding: "12px 24px",
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "inherit",
                letterSpacing: "0.08em",
                background: `linear-gradient(135deg, ${phase.color}, ${phase.color}cc)`,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              ▶ GENERATE PROMPT
            </button>
            <button
              onClick={handleCopy}
              style={{
                padding: "12px 24px",
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "inherit",
                letterSpacing: "0.08em",
                background: copied
                  ? "rgba(34,197,94,0.2)"
                  : "rgba(255,255,255,0.05)",
                color: copied ? "#22c55e" : "#94a3b8",
                border: copied
                  ? "1px solid #22c55e"
                  : "1px solid #334155",
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {copied ? "✓ COPIED!" : "📋 COPY TO CLIPBOARD"}
            </button>
          </div>

          {/* LLM COMPATIBILITY NOTE */}
          <div
            style={{
              marginTop: 20,
              padding: "12px 16px",
              background: "rgba(34,211,238,0.05)",
              border: "1px solid rgba(34,211,238,0.15)",
              borderRadius: 8,
              fontSize: 10,
              color: "#67e8f9",
              lineHeight: 1.6,
            }}
          >
            <strong>LLM COMPATIBILITY:</strong> Copy the generated block and
            paste directly into ChatGPT, Claude, Gemini, Copilot, Llama, Mistral,
            or any LLM that accepts markdown. The "Save as" directive at the
            top tells the LLM to name its output file correctly.
          </div>
        </div>

        {/* RIGHT: OUTPUT PREVIEW */}
        {showOutput && (
          <div
            style={{
              overflowY: "auto",
              background: "#0d1117",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "sticky",
                top: 0,
                background: "#0d1117",
                borderBottom: "1px solid #1e293b",
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 10,
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  color: "#64748b",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
              >
                READY-TO-PASTE OUTPUT
              </span>
              <button
                onClick={handleCopy}
                style={{
                  padding: "5px 14px",
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "inherit",
                  background: copied
                    ? "rgba(34,197,94,0.2)"
                    : "rgba(255,255,255,0.08)",
                  color: copied ? "#22c55e" : "#94a3b8",
                  border: copied
                    ? "1px solid #22c55e"
                    : "1px solid #334155",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                {copied ? "✓ COPIED" : "COPY"}
              </button>
            </div>
            <pre
              ref={outputRef}
              style={{
                padding: "20px",
                margin: 0,
                fontSize: 11,
                lineHeight: 1.7,
                color: "#c9d1d9",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontFamily: "inherit",
              }}
            >
              {getRenderedPrompt()}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
