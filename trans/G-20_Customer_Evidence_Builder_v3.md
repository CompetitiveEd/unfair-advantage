# G-20 CUSTOMER EVIDENCE BUILDER v3.0
## "The Proof Factory"

**CODE:** G-20
**PHASE:** [G] GATHER
**CATEGORY:** Evidence and Social Proof
**VERSION:** 3.0
**FILENAME OUTPUT:** G-20_Customer_Evidence_[CUSTOMER_NAME].md
**DESTINATION:** 02_Processed_Intel/

---

## PURPOSE

Transform raw customer data into deployment-ready evidence calibrated to buyer persona, awareness level, and competitive context. Every output must pass the Maister self-orientation test: if a sentence starts with your company name, it fails. Evidence serves the buyer's decision, not the seller's ego.

---

## VARIABLES

| # | VARIABLE | INSTRUCTION | DEFAULT IF BLANK |
|---|----------|------------|-----------------|
| 1 | **CUSTOMER NAME** | Company whose story is being built | REQUIRED |
| 2 | **CUSTOMER CONTEXT** | Paste ALL raw data: CRM notes, emails, delivery reports, metrics, quotes, call transcripts, project documentation | REQUIRED - minimum one source |
| 3 | **YOUR COMPANY** | Seller company name and one-line description | REQUIRED |
| 4 | **YOUR PROPOSITION** | What was sold/delivered, in plain language | REQUIRED |
| 5 | **TARGET BUYER PERSONA** | Who this evidence will be shown to: CIO / CFO / Procurement / Board / Operations / Technical Lead | None = build for ALL personas |
| 6 | **TARGET INDUSTRY** | Target buyer's industry - may be same or different from customer | None = generic cross-industry |
| 7 | **COMPETITOR CONTEXT** | Who seller competes against - names, positioning, known weaknesses | None = skip competitive framing |
| 8 | **SCHWARTZ AWARENESS LEVEL** | Unaware / Problem Aware / Solution Aware / Product Aware / Most Aware | None = Solution Aware default |
| 9 | **AVAILABLE QUOTE APPROVAL** | YES / ANONYMOUS ONLY / NOT YET ASKED | None = assume ANONYMOUS ONLY |

---

## ROUTING LOGIC

Read all 9 variables. Determine which path applies. Multiple paths can activate simultaneously.

### PATH A - FULL CONTEXT
**Trigger:** Rich customer data (3+ data points in CUSTOMER CONTEXT) AND persona specified.
**Action:** Run all 7 modules. Calibrate every output to the specified persona and awareness level.

### PATH B - PARTIAL CONTEXT
**Trigger:** Sparse data (fewer than 3 substantive data points) OR TARGET BUYER PERSONA is None.
**Action:** Extract what exists. Flag every gap explicitly. Produce Module 7 (Evidence Interview Guide) as primary output. Run other modules with available data, marking gaps with [EVIDENCE GAP - see Module 7].

### PATH C - COMPETITIVE MODE
**Trigger:** COMPETITOR CONTEXT is provided.
**Action:** Layer onto Path A or B. Add displacement framing to all outputs. Apply Blue Ocean criteria-shifting: redefine the evaluation so the comparison favours dimensions competitors cannot match. Never attack a competitor by name in buyer-facing outputs - attack the approach.

### PATH D - ANONYMOUS MODE
**Trigger:** AVAILABLE QUOTE APPROVAL is ANONYMOUS ONLY or NOT YET ASKED.
**Action:** Layer onto any path. All outputs use anonymised language: "a [industry] organisation with [size descriptor]" instead of customer name. Flag every element that would need approval before named use. Produce approval request template.

---

## OUTPUT MODULES

---

### MODULE 1: EVIDENCE EXTRACTION

Extract from CUSTOMER CONTEXT into three tables. Never fabricate a data point. If a metric is not in the source data, it does not exist.

**TABLE 1 - HARD EVIDENCE**

| Metric | Before | After | Delta (%) | Timeframe | Source | Classification |
|--------|--------|-------|-----------|-----------|--------|---------------|
| [metric name] | [baseline] | [result] | [change] | [period] | [which source document] | VERIFIED / CLAIMED / INFERRED |

Classification rules:
- **VERIFIED** - data point confirmed in two or more independent sources, or in audited/published figures
- **CLAIMED** - stated by one source, not independently confirmed
- **INFERRED** - calculated or derived from other data points (show working)

For every metric, apply Kahneman loss framing: calculate the **cost of NOT acting**. What would [timeframe] more of the old state have cost? Express as: "Every [time unit] of delay cost [currency/risk amount]."

**TABLE 2 - SOFT EVIDENCE**

| Observation | Source | Buyer Relevance | Quotable? |
|-------------|--------|----------------|-----------|
| [behavioural observation, cultural shift, team response] | [source] | HIGH / MED / LOW | Yes / Needs editing / No |

Rate buyer relevance against the TARGET BUYER PERSONA. A CFO cares about margin impact; a CIO cares about integration speed; Procurement cares about contract risk.

**TABLE 3 - MISSING EVIDENCE**

| What Is Missing | Why It Matters | How To Get It |
|----------------|---------------|--------------|
| [gap] | [impact on evidence credibility] | [specific question to ask, specific person to ask, specific document to request] |

If this table has more than 3 entries, Path B is automatically active regardless of initial routing.

---

### MODULE 2: CORRIDOR PROOF POINT

Three versions of a single-sentence proof point. Under 30 seconds spoken. Apply Minto answer-first - lead with the outcome, not the setup.

**TECHNICAL BUYER VERSION:**
> [Customer] moved from [old state/system] to [new state/system] and achieved [technical outcome] in [timeframe].

**COMMERCIAL BUYER VERSION (Timme P&L language):**
> [Customer] was spending [X] on [old approach]. After [solution], they [financial outcome - revenue, margin, or cost line item], payback in [timeframe].

**POWER BUYER VERSION:**
> [Customer] could not [strategic capability] because [root cause]. Now they [outcome] and they have [business impact - market position, competitive advantage, risk elimination].

Test: read each aloud. If it takes more than 30 seconds or requires a breath mid-sentence, cut it.

---

### MODULE 3: CHAMPION SCRIPT

Three scenarios. Apply Ferrazzi champion arming - give the champion the words, not the brochure. Apply Camp Start With No: give the champion language that says "you don't have to agree with this."

**SCENARIO 1 - Champion pitching to their boss:**

Structure:
1. Parallel situation: "A [similar role] at a [similar company] had the same [problem]."
2. Specific outcome: "They [measurable result] in [timeframe]."
3. Bridge: "I think we're in a similar position because [2-3 parallels]. Worth 30 minutes to explore?"

The champion must sound like they discovered this, not like they were sold to.

**SCENARIO 2 - Champion defending against a sceptic:**

Structure:
1. Open with Voss accusation audit: name the objection before the sceptic raises it. "You're probably thinking [objection]. That's exactly what [customer role] thought."
2. Counter-evidence: "What actually happened was [evidence point with source]."
3. Risk mitigation: "And even if [worst case], [fallback position]."

**SCENARIO 3 - Champion in procurement/evaluation committee:**

Structure:
1. Competitive differentiator: "The difference isn't [obvious feature]. It's [evaluation criterion competitors cannot match]."
2. Evaluation advantage: "If we evaluate on [Blue Ocean criterion], the comparison changes because [reason]."
3. Risk of alternative: "The risk of [competitor's approach / doing nothing] is [specific, quantified if possible]."

Quality test for all three: read aloud. Does it sound like a person talking to a colleague at a coffee machine, or does it sound like a marketing slide? If the latter, rewrite entirely.

---

### MODULE 4: OBJECTION KILLER MATRIX

| Objection | Evidence Point | Source | Deployment Script |
|-----------|---------------|--------|-------------------|
| [buyer objection] | [specific evidence that addresses it] | [Module 1 reference] | [exact words to say] |

Apply Kahneman System 1 / System 2: objections are emotional first (System 1). Label the emotion before presenting data (System 2).

Deployment script structure:
1. **Label** (Voss): "It sounds like you're concerned that [emotional root of objection]."
2. **Validate**: "That's a reasonable concern. [Customer role] had the same worry."
3. **Evidence**: "What they found was [data point]."
4. **Redirect**: "The real question is [reframe to buyer's priority]."

Never argue. Never say "but." If the evidence does not address an objection, state: "[GAP] No evidence available for this objection. See Module 7, question [#]."

---

### MODULE 5: AWARENESS-CALIBRATED EVIDENCE PACK

One deployment for each Schwartz awareness level. If evidence is insufficient for a level, flag: "[INSUFFICIENT EVIDENCE for this level - need: (specific gap)]."

**UNAWARE - "The World Changed"**
Apply Raskin strategic narrative. Lead with an undeniable shift making the old way untenable. Do not mention your company or solution.
- Format: 2-3 paragraph narrative about the market shift, ending with the implication for the buyer's world.
- Use when: cold outreach, thought leadership content, conference speaking.
- Evidence deployed: market data, industry trends, customer's "before" state as illustration.

**PROBLEM AWARE - "You're Not Alone"**
Apply Cialdini social proof. Peer validation of the problem.
- Format: Direct quote about the pain (or paraphrased if anonymous). Peer comparison data. "X% of [peer group] report the same challenge."
- Use when: discovery calls, nurture sequences, problem-focused content.
- Evidence deployed: Module 1 soft evidence, customer quotes about pre-solution state.

**SOLUTION AWARE - "Here's the Proof"**
Apply Timme P&L language. Hard metrics, ROI, business case.
- Format: Before/after comparison. Business case summary. Time to value. Payback period.
- Use when: proposal support, evaluation stage, business case documents.
- Evidence deployed: Module 1 hard evidence table, Module 2 commercial proof point.

**PRODUCT AWARE - "Why This, Not That"**
Apply Blue Ocean criteria-shifting. Unique differentiator competitors cannot match.
- Format: Evaluation criteria comparison (on YOUR criteria, not the default RFP criteria). Specific evidence of capability competitors lack.
- Use when: competitive displacement, shortlist stage, RFP responses.
- Evidence deployed: Module 3 Scenario 3, Module 4 competitive objections.

**MOST AWARE - "What Almost Stopped Them"**
Apply Kegan immunity to change. Hunt the unconscious competing commitment.
- Format: Story of what nearly prevented the customer from acting. What changed their mind. The moment of commitment.
- Use when: deal closing, final objection handling, executive sponsorship conversations.
- Evidence deployed: Module 1 soft evidence about decision process, Module 3 Scenario 2 (sceptic defence).

---

### MODULE 6: EVIDENCE LIBRARY CARD

Structured metadata for searchable evidence library. Seller must find this in under 60 seconds.

```
EVIDENCE LIBRARY CARD
=====================
Customer:           [name or anonymous descriptor]
Industry:           [SIC/sector]
Company Size:       [revenue band / employee count]
Geography:          [region/country]
Challenge Category: [from GAIN taxonomy if applicable]
Solution Category:  [what was delivered]
Key Metric:         [single most compelling number]
Delta:              [% or absolute change]
Personas Served:    [which buyer types this evidence works for]
Awareness Levels:   [which levels have sufficient evidence]
Competitive Use:    [Yes - against X / No / Generic]
Approval Status:    [Named / Anonymous / Pending]
Expiry Risk:        [date evidence becomes stale - typically 18 months from delivery]
Last Updated:       [date]
Related GAIN:       [prompt codes that feed from or into this evidence]
Search Tags:        [5-8 keywords for rapid retrieval]
```

---

### MODULE 7: EVIDENCE INTERVIEW GUIDE

Produced automatically when Module 1 flags 3+ gaps (Missing Evidence table) OR Path B is active. Available on request for any path.

**PRE-INTERVIEW**

| Element | Detail |
|---------|--------|
| Who to interview | [specific role - the person closest to the outcome, not the executive who signed off] |
| Time estimate | 30 minutes (set expectation: "this will take less time than you think") |
| Recording consent | Ask permission. Explain: for accuracy only, not publication |
| Advance briefing | Send 3 questions in advance so they can pull data. Never send all 7 - you want spontaneous responses on the rest |

**7 QUESTIONS WITH DIG PROMPTS**

**Q1 - THE WORLD BEFORE: "What was broken?"**
- Dig: "What was that costing you - in time, in risk, in reputation?"
- Dig: "Had you tried to fix this before? What happened?"
- Why: Establishes the "before" baseline. Apply Kahneman - frame the old state as ongoing loss.

**Q2 - THE TIPPING POINT: "What made you actually do something about it?"**
- Dig: "Was there a specific moment - a meeting, an incident, a number?"
- Dig: "What would have happened if you'd waited another 6 months?"
- Why: Captures the trigger event. This becomes the Raskin narrative spine for unaware buyers.

**Q3 - THE EVALUATION: "How did you decide?"**
- Dig: "What surprised you during the process?"
- Dig: "What were you most afraid of about making this change?"
- Why: Reveals competing commitments (Kegan). The fear is what the next buyer also fears.

**Q4 - THE DIFFERENTIATOR: "What was different about this approach?"**
- Dig: "If someone asked you to compare to [alternative/competitor], what would you say?"
- Dig: "What would you have missed if you'd gone a different way?"
- Why: Blue Ocean - captures the evaluation criteria that favours your approach.

**Q5 - THE OUTCOME: "What changed?"**
- Dig: "Can you give me numbers? Before and after?"
- Dig: "What line item on your P&L was most affected?"
- Why: Hard evidence. Apply Timme - get P&L language directly from the customer's mouth.

**Q6 - THE RECOMMENDATION: "What would you tell someone who's hesitating?"**
- Dig: "What would you say to someone in [target buyer's] position?"
- Dig: "What's the one thing you wish you'd known before starting?"
- Why: This IS the champion script (Ferrazzi). Record verbatim. This is Module 3 raw material.

**Q7 - THE REFERRAL: "Who else saw the impact?"**
- Dig: "Anyone on your team who'd be willing to speak to a peer?"
- Dig: "Can we use your name, or would you prefer anonymous?"
- Why: Approval status and referral pipeline. Ask at the end when goodwill is highest.

**POST-INTERVIEW**

| Action | Timeframe |
|--------|-----------|
| Transcribe | Within 24 hours |
| Extract quotes | Highlight verbatim phrases. Do not edit into marketing language |
| Re-run G-20 | Add transcript to CUSTOMER CONTEXT. Re-run. Upgrade CLAIMED to VERIFIED where confirmed |
| Update Library Card | Module 6 refresh |
| Send thank-you | Within 48 hours. Include: what you'll use, what you won't, approval request if applicable |

---

## RED TEAM CHECK (Shipley Review)

Score each module. If any module scores RED, it must be reworked before the output is usable.

| Module | Test Question | GREEN | AMBER | RED |
|--------|-------------|-------|-------|-----|
| Evidence Extraction | Any metric fabricated or inflated? | All classified accurately | 1-2 classifications uncertain | Any fabrication detected |
| Corridor Proof Point | Can it be dismissed in one sentence? | Survives scrutiny | Needs qualifier | Falls apart under challenge |
| Champion Script | Does it sound human or like a brochure? | Coffee-machine ready | Needs minor editing | Would embarrass the champion |
| Objection Killer | Does it actually address the objection? | Direct hit with evidence | Partial - gaps flagged | Misses the point entirely |
| Awareness Pack | All outputs calibrated to correct level? | All levels appropriate | 1-2 miscalibrated | Fundamentally wrong level |
| Library Card | Findable in 60 seconds? | All fields complete | Minor gaps | Missing critical fields |
| Interview Guide | Would a customer answer honestly? | Natural conversation | Slightly leading | Feels like interrogation |

**Maister Self-Orientation Sweep:**
Scan every output. If any sentence starts with "[YOUR COMPANY] is..." or "[YOUR COMPANY] provides..." - rewrite it. The sentence must start with the customer, the buyer, or the outcome. Self-orientation kills trust.

**Maverick Compliance Theatre Cut:**
Scan every output. Delete anything that exists to make the seller feel good but adds zero value to the buyer's decision. If removing a sentence changes nothing for the buyer, remove it.

---

## GAWANDE CHECKLIST

Before delivering output, verify all 11:

- [ ] 1. Every Module 1 metric is classified VERIFIED / CLAIMED / INFERRED - no unclassified metrics
- [ ] 2. Module 2 proof points are each under 30 seconds spoken - read aloud test
- [ ] 3. Module 3 scripts sound like a person talking, not a marketing department writing - coffee-machine test
- [ ] 4. Module 4 objection killers label the emotion BEFORE presenting data - Voss before Timme
- [ ] 5. Module 5 covers at least 3 of 5 awareness levels with sufficient evidence - gaps explicitly flagged
- [ ] 6. Module 6 library card is complete - all fields populated or explicitly marked N/A with reason
- [ ] 7. Module 7 questions are usable by a non-expert interviewer - no jargon, no assumed knowledge
- [ ] 8. All outputs use buyer language, not seller jargon - scan for internal terminology
- [ ] 9. Approval status is clearly marked on EVERY output element - Named / Anonymous / Pending
- [ ] 10. Competitive framing attacks the APPROACH, never the competitor by name - in buyer-facing outputs
- [ ] 11. Taleb antifragility test: evidence shows the customer getting STRONGER under stress, not just surviving - resilience narrative present

---

## OPERATOR LOOP

**Before delivering, verify three things:**

1. **Approval status** - Is every output element cleared for use at the marked level (Named/Anonymous/Pending)?
2. **Recency** - Check the Library Card expiry risk. Evidence older than 18 months needs refreshing. Flag if within 3 months of expiry.
3. **Match quality** - Does this customer parallel the target buyer on at least 2 of these 3 dimensions: industry, company size, challenge type? If fewer than 2, flag: "WEAK PARALLEL - evidence may not resonate. Consider [alternative customer] or reframe around [universal dimension]."

**Suggested next actions (select all that apply):**

| Condition | Action |
|-----------|--------|
| Module 7 was produced | Schedule evidence interview within 7 days. Delay reduces quality - memories fade, contacts move on |
| Competitive mode active (Path C) | Feed displacement evidence into **I-03 Competitor Kill-Shot** for full competitive strategy |
| Buyer is MOST AWARE | Feed Module 5 Most Aware output into **I-08 Commercial Narrative** for closing sequence |
| Multiple customers available | Run G-20 for each. Build evidence matrix from Library Cards. Identify coverage gaps by persona x awareness level |

---

## GAIN DRIVER MAPPING

| Driver | How This Prompt Serves It |
|--------|--------------------------|
| **SAFETY** | Risk reduction through verified proof - buyer feels safe deciding because peers have gone before them |
| **ACHIEVEMENT** | Buyer positioned as hero of their own story - evidence frames THEM as the decision-maker, not your company as the saviour |
| **AFFILIATION** | Peer validation - "people like you chose this and got this result" |
| **POWER** | Narrative control through calibrated evidence - seller chooses which evidence to deploy when, buyer gets the right proof at the right moment |
| **ORDER** | Findable, structured library card - evidence programme becomes a system, not a scramble |
| **SUSTAINABILITY** | Repeatable evidence programme - interview guide means every delivery creates the next piece of evidence |

---

## CHAIN CONNECTIONS

**FEEDS FROM:**
- G-01 (Account Intelligence) - customer context and relationship data
- G-02 (Stakeholder Mapping) - persona intelligence for calibration
- G-03 (Trigger Event Scanner) - tipping point context
- A-04 (Gap Analysis) - what evidence gaps exist across the pipeline
- N-05 (Objection Armoury) - common objections to pre-load Module 4
- N-09 (Reference Matching) - which customer best parallels which prospect

**FEEDS INTO:**
- I-02 (Proposal Builder) - evidence pack for proposals
- I-03 (Competitor Kill-Shot) - displacement evidence
- I-05 (Business Case Engine) - hard metrics and ROI data
- I-08 (Commercial Narrative) - awareness-calibrated deployment
- A-11 (Pipeline Review) - evidence coverage across deals
- G-05 (First 15 Minutes) - corridor proof points for opening moves

---

## SELF-AUDIT SCORE

**Structural: 5/5**
- [x] Variables with defaults and routing
- [x] Conditional path logic
- [x] Modular output architecture
- [x] Quality gate (Red Team + Gawande)
- [x] Operator loop with next actions

**Framework Integration: 17/22 explicit**
Kahneman (loss framing), Cialdini (social proof), Schwartz (awareness calibration), Kegan (competing commitments), Minto (answer-first), Heath (sticky evidence), Blue Ocean (criteria shifting), Ferrazzi (champion arming), Voss (accusation audit, labelling), Timme (P&L language), Camp (Start With No), Maister (self-orientation test), Shipley (red team), Maverick (compliance theatre), Gawande (checklist), Raskin (strategic narrative), Taleb (antifragility).

**Implicit:** NLP Meta-Programs (via persona calibration), MEDDIC (via gap analysis structure), Sphere of Influence (via champion arming scenarios), Case Method (via real customer data), Human Amplification (via operator loop).

**Total: 22/22 present. 17 explicit, 5 implicit.**
