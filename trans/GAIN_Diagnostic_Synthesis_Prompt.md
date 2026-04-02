# GAIN DIAGNOSTIC SYNTHESIS PROMPT
## Use: paste this prompt, then paste both diagnostic outputs below it
## Purpose: merge two independent diagnostic passes into a single comprehensive evidence base
## Rule: NOTHING gets cut. This is forensic assembly, not summarisation.

---

```
You are assembling a forensic diagnostic evidence base from two independent research passes on the same company. You have been given:

1. OUTPUT A — Gemini Deep Research diagnostic
2. OUTPUT B — Claude 4.6 diagnostic

Both were produced using the GAIN Hunting MegaPrompt v5.1. Both contain findings, numbers, sources, analysis, and recommendations. They overlap in places and diverge in others.

## YOUR TASK

Merge both outputs into a SINGLE COMPREHENSIVE EVIDENCE BASE organised by the sections below. 

## ABSOLUTE RULES

1. **DO NOT CONDENSE.** If Output A has a 200-word finding on executive departures and Output B has a 150-word finding on the same topic, include BOTH in full. Label them [SOURCE: GEMINI] and [SOURCE: CLAUDE].

2. **DO NOT REWRITE.** Preserve the original language of each finding. Do not paraphrase, tighten, or "improve" the wording. The original phrasing contains nuance that rewriting destroys.

3. **DO NOT SHORTEN.** Every number, every name, every date, every source reference, every company number, every quote must be carried forward. If it appeared in either output, it appears in the synthesis.

4. **DO NOT PICK WINNERS.** If the two outputs give different numbers for the same metric (e.g. different revenue figures), include BOTH with their sources. Flag the discrepancy with [DISCREPANCY — VERIFY]. Do not silently choose one.

5. **DO NOT DROP "MINOR" FINDINGS.** A detail that seems minor in isolation may be critical in context. A single Glassdoor quote, a single director resignation date, a single court case reference — these are evidence. Include everything.

6. **MARK UNIQUE FINDINGS.** If a finding appears in only one output, mark it [UNIQUE — GEMINI] or [UNIQUE — CLAUDE]. These are especially valuable because they represent intelligence the other pass missed.

7. **MARK CORROBORATED FINDINGS.** If both outputs independently found the same thing, mark it [CORROBORATED]. This is your highest-confidence evidence.

8. **PRESERVE ALL SOURCES.** Every source reference (Companies House filing, LinkedIn profile, Glassdoor review, press article, CRN report, court record) must be carried forward with its original attribution.

9. **FLAG CONTRADICTIONS.** If the two outputs directly contradict each other on a factual claim, flag it [CONTRADICTION — MUST RESOLVE] and include both versions with sources.

10. **DO NOT ANALYSE YET.** This is evidence assembly, not diagnosis. Do not add your own conclusions, recommendations, or commentary. Just organise what exists.

## OUTPUT STRUCTURE

Organise the merged evidence into these sections. Within each section, list every finding from both outputs.

### SECTION 1: COMPANY FUNDAMENTALS
- Legal names, trading names, subsidiaries
- Companies House numbers (every entity)
- Registered addresses
- Ownership structure and PE details
- Board composition

### SECTION 2: FINANCIAL DATA
- Revenue figures (every year, every entity, every source)
- Operating profit / EBITDA (every year, every entity)
- Gross profit and margins
- Revenue per employee (every calculation)
- Cash position and debt
- Any discrepancies between the two outputs on financial figures

### SECTION 3: SUBSIDIARY ACCOUNTS (per entity)
For EACH subsidiary, create a separate sub-section:
- Company number, status, last filing date
- Revenue, gross profit, operating profit/loss from filed accounts
- Headcount if disclosed
- Directors resigned / appointed since acquisition
- Outstanding charges
- Profitability assessment
- Notes to accounts findings (revenue splits, related party transactions, etc.)

### SECTION 4: ACQUISITION HISTORY
For EACH acquisition:
- Date, price (if known), stated reason
- Who sold it and why (seller's press announcement)
- What the CEO said at the time
- Previous ownership (PE, founder, corporate parent)
- Staff count at acquisition
- Integration status today

### SECTION 5: EXECUTIVE INTELLIGENCE
For EACH named person:
- Name, title, time in role
- Career history and DNA type
- Current status (verified — still in role or departed)
- If departed: when, where to, was it to a competitor
- LinkedIn activity and signals
- GAIN driver assessment
- Kegan immunity map (if produced)

### SECTION 6: EXECUTIVE CHANGE LOG
- Every C-suite and board change (last 3 years minimum)
- Dates, names, arrived/departed, where from/to
- Pattern assessment (stable / refreshing / haemorrhaging)
- Sub-entity director changes from Companies House

### SECTION 7: PE INVESTOR PROFILE
- PE firm details, fund, vintage, entry price
- Hold period and exit window
- Board representation (names, other boards)
- Portfolio analysis (other companies in same sector?)
- Investment thesis vs actual results
- Exit value impact of margin compression

### SECTION 8: GLASSDOOR AND CULTURE
- Overall rating, % recommend, CEO approval
- Trend (improving or declining)
- Top complaint themes
- Specific reviews quoted
- Compensation and culture ratings

### SECTION 9: PROPOSITION AND EVIDENCE AUDIT
- Case study counts per website
- Case study dates and categories
- Group references in case studies (yes/no per study)
- Cross-sell evidence
- Website audit findings
- Proposition freshness assessment

### SECTION 10: WIN/LOSS RECORD
- Every contract win found (date, entity, client, value, service, source)
- Every loss or court case found (date, entity, detail, source)
- Pattern assessment

### SECTION 11: PEER BENCHMARKING
- Peer set used by each output
- Financial comparisons (revenue, margin, RPE, headcount)
- Glassdoor comparisons
- Sources for peer figures

### SECTION 12: HARVARD SERVICE-PROFIT CHAIN
- Chain assessment from each output
- Where each output identified the first break
- Evidence for each link in the chain

### SECTION 13: TAXONOMY SCAN (30 PATTERNS)
- Every pattern scored by each output
- Evidence for DETECTED and SUSPECTED patterns
- Any disagreements between outputs on pattern scoring

### SECTION 14: TOWER FRAMEWORK
- Tower names and structure from each output
- Every item with status, priority, evidence
- Benefits per item
- Resistance mapping
- "What good looks like" per P1 item

### SECTION 15: VERDICT AND CORRIDOR TEST
- Verdict from each output
- Corridor test from each output
- Minto pyramid (situation, complication, evidence) from each output
- Impact case (do nothing vs act) from each output

### SECTION 16: OUTREACH
- All outreach drafts from both outputs
- LinkedIn DMs, emails, cotton envelope letters
- PE partner outreach
- Killer facts identified by each output

### SECTION 17: DATA CENTRES AND PHYSICAL ASSETS
- Facilities (locations, capacity, specifications)
- AI readiness assessment
- Strategic value of physical assets

### SECTION 18: RAW INTELLIGENCE NOT CAPTURED ABOVE
- Any finding from either output that does not fit neatly into the sections above
- Miscellaneous signals, quotes, observations
- Anything marked DARK by one output but found by the other

---

## FINAL CHECK

After assembly, produce a gap analysis:

**GEMINI FOUND BUT CLAUDE MISSED:**
[List every unique Gemini finding]

**CLAUDE FOUND BUT GEMINI MISSED:**
[List every unique Claude finding]

**DISCREPANCIES TO RESOLVE:**
[List every case where the two outputs give different numbers or contradictory claims]

**STILL DARK (neither output found):**
[List data points that both outputs marked as DARK or did not address]

---

## NOW PASTE THE TWO OUTPUTS BELOW

### OUTPUT A: GEMINI DEEP RESEARCH
[paste here]

### OUTPUT B: CLAUDE 4.6
[paste here]
```
