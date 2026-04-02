# THE MATTHEWS GOLD STANDARD
## Definitive Guide to GAIN Prompt Creation & Quality
### David Matthews | hownottogain | March 2026

---

## WHAT THIS IS

Every GAIN prompt must meet the Matthews Gold Standard before it goes into production. This document defines the 10 structural elements, the content upgrades, the framework hierarchy, the quality checklist, and the build process. If a prompt doesn't meet this standard, it doesn't ship.

---

## THE 10 STRUCTURAL ELEMENTS (mandatory on every prompt)

### 1. PLATFORM ADAPTER
Every prompt opens with platform detection and adaptation.
```
## PLATFORM ADAPTER
What AI are you running this in? (Claude / ChatGPT / Gemini / Copilot / Other)
— If Claude: Full execution. Accepts file uploads directly.
— If ChatGPT: Full execution. Flag if output exceeds token window.
— If Gemini: Conservative table formatting.
— If Other: Standard Markdown. Flag input handling limitations.
```
**Why:** The same prompt behaves differently on different platforms. Claude handles tables well; Gemini struggles with JSON. ChatGPT truncates. The adapter ensures consistent output regardless of platform.

### 2. SCQA STRUCTURE (Minto Pyramid)
Every prompt that produces a deliverable uses Situation-Complication-Question-Answer structure. The ANSWER comes first (Minto Pyramid), then the supporting evidence.
- **Situation:** Where things stand now (one paragraph)
- **Complication:** What the diagnostic found (one paragraph)
- **Answer:** The verdict/recommendation — appears FIRST, before evidence
- **Question:** Implied (what should we do?)

**Why:** CEOs read the answer first. If they have to wade through 10 pages to find the recommendation, they won't read it. Answer first. Always.

### 3. TUFTE TABLE RULES
All tables in prompt output maximise data-ink ratio. Every column earns its place. No decorative elements. No empty columns. No redundant headers.
- Every cell contains meaningful data
- Column headers are descriptive and short
- No shading unless it conveys meaning (RED/AMBER/GREEN)
- Tables are scannable in under 10 seconds

**Why:** Edward Tufte's principle: maximise the data-to-ink ratio. If a column doesn't add information, delete it. If a table can be a sentence, use the sentence.

### 4. MECE CHECK
Every classification in every prompt is checked for Mutually Exclusive, Collectively Exhaustive coverage.
- **Mutually Exclusive:** No finding appears in two categories. No double-counting.
- **Collectively Exhaustive:** Every possible finding has a home. Nothing falls outside the taxonomy.
- If a finding doesn't fit, flag it as UNCLASSIFIED — don't force it into a category.

**Why:** McKinsey's foundational framework. If your categories overlap, you're counting problems twice. If they have gaps, you're missing problems entirely. Both destroy credibility.

### 5. ONE-PAGE COMPRESSION + CORRIDOR TEST
Every prompt that produces a final deliverable (verdict, brief, recommendation) must compress to one page. The Corridor Test is the ultimate compression:

**CORRIDOR TEST (under 15 words):**
The one sentence that captures the entire diagnostic. If this is all the CEO reads, they understand. If a PE partner repeats it in the corridor after reading nothing else, the diagnostic did its job.

**Why:** The CEO reads this at 6am on their phone. Respect their time. If it doesn't fit on one page, cut until it does. The discipline of compression forces clarity.

### 6. CONDITIONAL OPERATOR LOOPS
Every prompt includes IF/THEN routing that adapts based on what data is present or absent.
```
IF [data provided] → proceed to [next step]
IF [data missing] → ask: "I need [specific data]. Here's where to find it."
IF [contradiction detected] → flag and route to evidence audit
```
**Why:** Real data is messy. Prompts must handle missing data, contradictions, and partial information without breaking. The operator loop keeps the human in control.

### 7. POWER OF NONE
For every variable in every prompt, define what happens if it's blank/missing/unavailable.
- Never skip silently — always flag what's missing
- Never fabricate — mark as MISSING, not inferred
- Always state what the missing data would change if obtained
- NONE is always a valid finding. Never fabricate findings to fill gaps.

**Why:** The most dangerous output is one that looks complete but has hidden gaps. Power of None makes every gap visible.

### 8. 3+ ROUTING PATHS
Every prompt must have at least 3 different output paths depending on what the data reveals. No single-track prompts.
- Path A: Healthy/positive finding → what to do with it
- Path B: Problem detected → intervention prescribed
- Path C: Insufficient data → what to gather and where

**Why:** Reality is not binary. A prompt that only produces "good" or "bad" output misses the nuance that determines the right action.

### 9. GAIN DRIVER MAPPING
Every prompt that profiles a person or organisation maps to the 6 GAIN Psychological Drivers:
- **Safety:** Fear of loss, risk aversion, protection of position
- **Order:** Need for structure, process, predictability, control
- **Power:** Status, authority, influence, being seen as important
- **Achievement:** Results, outcomes, building something visible
- **Affiliation:** Belonging, relationships, team, being liked
- **Identity:** Self-image, values alignment, purpose, legacy

Drivers are OPERATIONALISED — not just labelled but used to determine engagement approach, messaging, and objection handling.

**Why:** People make decisions based on psychological drivers, not logic. Knowing someone is Achievement-driven (like Moseley) changes every word of the outreach.

### 10. FORENSIC CHECKLIST (Gawande)
Every prompt ends with a verification checklist — inspired by Atul Gawande's "The Checklist Manifesto." The checklist confirms all critical elements were covered.
```
## FORENSIC CHECKLIST
- [ ] All data sources cited
- [ ] Contradictions flagged
- [ ] MECE verified
- [ ] NONE findings explicitly stated
- [ ] Corridor Test under 15 words
- [ ] Evidence classified (VERIFIED / CLAIMED / MISSING)
- [ ] Human gate identified
- [ ] Next steps prescribed
```
**Why:** Surgeons use checklists. Pilots use checklists. The most critical work in the world uses checklists. So does GAIN.

---

## CONTENT UPGRADES (apply where relevant)

Not every prompt needs every content upgrade. Apply based on the prompt's purpose:

### Financial/Operational Prompts (G-01, G-02, G-02B, G-22)
- **3-year longitudinal mandate:** Never assess a single year in isolation. Always show 3-year trajectory.
- **CEO compensation / board incentives:** Follow the money. How are leaders paid? What behaviour does the comp plan drive?
- **Risk disclosure persistence:** Read the risk section of annual reports. What risks do they acknowledge? What risks are they blind to?
- **2026 Industry Blueprint comparison:** Compare against current industry best practice, not historic norms.
- **Website & proposition audit:** What does the website claim vs what delivery actually does?
- **BPF seed (Business Plan on a Page):** Goal → Strategy → Initiative → Project cascade.

### People/Stakeholder Prompts (G-03, G-05, G-21)
- **Executive playbook / history follows history:** Career pattern analysis. What has this person done before? They'll do it again.
- **Belief System Decoder:** How do they validate truth? Empirical? Authority? Consensus?
- **Kegan Immunity Map:** Visible commitment → Hidden competing commitment → Big assumption → The fear → Neutralisation script.
- **Dialogue Planning methodology:** Structure conversations, not just content.
- **Jelly qualification question:** "What specifically happens between strategy and execution in your organisation?" (Exposes the execution gap.)

### Competitive/Deal Prompts (I-03, A-01, I-01B)
- **Blueprint differentiation wedge:** Where does the competitor's approach structurally differ from yours? Not features — architecture.
- **RFP Reality Check:** Does the RFP actually match the buyer's real problem? Or is it procurement theatre?
- **Budget Sanity Check:** Can they actually afford what they're asking for?
- **Sponsor Incentive Check:** What does the person who wrote the RFP personally gain from the outcome?

### Account/Renewal Prompts (N-06, N-01, N-08)
- **Sector shift check:** Is the customer's industry changing in ways that affect your relevance?
- **Compelled event timeline:** What external deadlines force action? (Regulations, contract expiry, board review, fiscal year end.)

---

## FRAMEWORK HIERARCHY (conflict resolution rules)

When multiple behavioural/psychological frameworks apply, these rules resolve conflicts:

1. **Level 1 (ADKAR) gates Level 2 (Schwartz):** You cannot apply Schwartz value-based messaging until ADKAR readiness is confirmed. Never both unresolved simultaneously.

2. **Level 2 (Kübler-Ross) gates Voss:** Apply Kübler-Ross grief/change stage assessment BEFORE tactical empathy. You must know where they are emotionally before you can meet them there.

3. **Pre-Suasion survives Maverick check:** Cialdini's pre-suasion framing persists even if the stakeholder is identified as a maverick/contrarian. Framing works on everyone.

4. **FBI Linguistic is INTERNAL ONLY:** Linguistic analysis of stakeholder language is for your preparation only. Never reference it in client-facing output. Never say "based on your language patterns..."

5. **GAIN Drivers are PRIMARY:** When a framework conflicts with the assessed GAIN Driver, the Driver wins. Drivers are more stable than situational frameworks.

---

## v6.0 ADDITIONS TO GOLD STANDARD

The v6.0 chain adds these elements to the Gold Standard:

### 11. TOWER FRAMEWORK OUTPUT
All diagnostic prescriptions produce an adaptive Tower Framework, not flat prompt lists:
- 3-5 strategic pillars (tower names adapt per scenario)
- Each item scored RED / AMBER / GREEN / DARK with explicit thresholds
- Drill-down per item: evidence, decision path, tracker
- CMO → FMO gap (where you are vs where you need to be)
- Quest map (which tower first, what unlocks what)
- 30/60/90 roadmap per tower
- Impact case (do nothing vs act, quantified in P&L)

### 12. COMPOUNDING LOOP
Every diagnostic output includes:
- What was learned this pass
- What is still missing
- What to run next (exact engines, priority ordered)
- Decision tree status (LIT / AMBER / DARK / RECOMMENDED / BLOCKED)
- Confidence score (LOW → MEDIUM → HIGH → VERIFIED)

### 13. HUNTING BRIEF
When running against a prospecting target:
- Corridor test (the one sentence)
- Top 3 patterns detected
- Killer line (the personalised insight)
- Channel-specific messages (LinkedIn DM, WhatsApp, email, cotton envelope)
- Response handling (what to do when they reply)

### 14. BEHAVIOURAL SIGNAL DETECTION
When processing voice, visual, or informal inputs:
- Pace, tone, hesitation patterns
- Language flags ("to be honest...", "my team is great BUT...")
- Visual/environmental signals (office condition, whiteboard currency)
- Micro-leakage (coded departures, body language, what isn't said)

### 15. CLASSIFICATION THRESHOLDS (explicit, repeatable)
Every RED/AMBER/GREEN/DARK assignment has a defined, data-driven threshold:
- Culture: Glassdoor <30% recommend = RED
- Pipeline: >50% stale 90 days = RED
- Revenue concentration: Top 3 >40% = RED
- Proposition: Inconsistent proposals + no battle card = RED
- Margin: EBITDA declining >10% YoY = RED
- Leadership: >2 changes in 12 months = RED

Same evidence = same colour every time. No subjective assignment.

---

## THE BUILD PROCESS

### When David gives you a prompt to build:

**STEP 1:** Ask — "Is this prompt OPEN or RESTRICTED?"

**STEP 2:** Read the existing code. Cross-reference against this Gold Standard.

**STEP 3:** Report — "This prompt needs: [list of upgrades]. Proceeding."

**STEP 4:** Build the output(s):

| David says | Files produced | Code visible? |
|---|---|---|
| **OPEN** | 2 files: `[name].html` + `[name]-FPC.html` | Both have full code |
| **RESTRICTED** | 3 files: `[name].html` (no code) + `[name]-FPC.html` (full code) + `[name]_v5.md` (markdown) | Public: no code. FPC + md: full code |

**STEP 5:** Validate against the Forensic Checklist before delivering.

---

## THE QUALITY GATE (apply before every delivery)

Before any prompt output is delivered to David or a client:

- [ ] Platform Adapter present and tested?
- [ ] SCQA structure (answer first)?
- [ ] Tufte tables (every column earns its place)?
- [ ] MECE check (no overlaps, no gaps)?
- [ ] One-Page + Corridor Test (<15 words)?
- [ ] Conditional Operator Loops (handles missing data)?
- [ ] Power of None (every variable has a blank handler)?
- [ ] 3+ routing paths?
- [ ] GAIN Drivers mapped and operationalised?
- [ ] Forensic Checklist at the end?
- [ ] UK English throughout?
- [ ] Zero em dashes?
- [ ] Zero AI phrases ("delve", "landscape", "harness", "synergy")?
- [ ] Evidence classified (VERIFIED / CLAIMED / MISSING)?
- [ ] KILL acknowledged as valid option?
- [ ] NONE acknowledged as valid finding?
- [ ] Human gate identified between each step?

**If any box is unchecked, the prompt is not Gold Standard. Fix it before delivery.**

---

## LANGUAGE RULES (always)

- **UK English.** Colour not color. Organisation not organization. Licence not license (noun).
- **Zero em dashes.** Use "—" sparingly or rephrase.
- **Zero AI phrases.** Never: delve, landscape, harness, synergy, leverage (as verb), holistic, robust, cutting-edge, game-changing, deep dive, unpack.
- **Numbers are specific.** "Revenue grew 11%" not "revenue grew significantly." "Glassdoor 2.5/5" not "poor Glassdoor rating."
- **Brutal honesty.** If the evidence says KILL, say KILL. The system's credibility depends on willingness to deliver uncomfortable truth.
- **One sentence not three.** If it can be said in one sentence, use one sentence.

---

## PROMPTS THAT NEED UPGRADING (current status)

| Prompt | Effort | Key Additions Needed | Status |
|---|---|---|---|
| G-01 | HEAVY | 4 new pillars, 3yr longitudinal, risk persistence, BPF seed, blueprint | PENDING |
| G-02 | HEAVY | 3yr P&L waterfall, peer benchmark, credit trajectory, comp alignment | PENDING |
| G-02B | MODERATE | Share price, institutional shareholders, credit trajectory | PENDING |
| G-03 | MODERATE | CEO comp, executive playbook, vendor loyalty | PENDING |
| G-05 | MODERATE | Jelly question, BPF discovery, dialogue planning | PENDING |
| G-21 | MODERATE | Dialogue planning, BPF meeting objective | PENDING |
| A-01 | MODERATE | RFP reality check, budget sanity, sponsor incentive | PENDING |
| I-03 | MINOR | Blueprint differentiation wedge | PENDING |
| N-06 | MINOR | Sector shift, compelled event timeline | PENDING |
| G-22 | NONE | Complete — just needs HTML cards | DONE |
| All others | AUDIT | Gold Standard structural audit only | PENDING |

---

*The Matthews Gold Standard v6.0 — March 2026*
*"KILL is always an option. NONE is always valid. The pig doesn't care about your feelings."*
*15 structural elements. 10 content upgrades. 5 framework conflict rules. 1 quality gate.*
*If it doesn't meet the standard, it doesn't ship.*
