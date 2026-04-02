# G-21 CALL PLANNER v1.0
## "The Meeting Architect"

**CODE:** G-21
**PHASE:** [G] GATHER
**CATEGORY:** Meeting Preparation and Discovery
**VERSION:** 1.0
**FILENAME OUTPUT:** G-21_Call_Plan_[ACCOUNT]_[DATE].md
**DESTINATION:** 02_Processed_Intel/

---

## PURPOSE

Build a structured pre-call plan that goes beyond a generic agenda. Every meeting is an intelligence operation: you enter with specific objectives, specific questions for specific people, a planned opening calibrated to awareness level, pre-loaded objection responses, and a closing action with a concrete ask. The plan fits on two pages because anything longer will not be read in the lift on the way up. Apply Minto throughout: answer-first, then supporting structure.

---

## VARIABLES

| # | VARIABLE | INSTRUCTION | DEFAULT IF BLANK |
|---|----------|------------|-----------------|
| 1 | **ACCOUNT NAME** | Target company | REQUIRED |
| 2 | **MEETING CONTEXT** | Paste all available intel: CRM notes, previous meeting notes, email threads, stakeholder info, deal stage, any GAIN outputs (G-01, G-02, A-04, etc.) | REQUIRED - minimum: who you are meeting and why |
| 3 | **YOUR COMPANY** | Seller company name and one-line description | REQUIRED |
| 4 | **YOUR PROPOSITION** | What you sell/deliver, plain language | REQUIRED |
| 5 | **MEETING TYPE** | FIRST MEETING / FOLLOW-UP / HIGH-STAKES FINAL / RENEWAL / RESCUE (deal gone cold or sideways) | None = infer from MEETING CONTEXT |
| 6 | **MEETING FORMAT** | VIRTUAL / IN-PERSON / HYBRID | None = assume VIRTUAL |
| 7 | **ATTENDEES** | List every person expected in the room: Name, Title, Role in decision (Champion/Economic Buyer/Technical Buyer/Coach/Blocker/Unknown), any known preferences or concerns | None = plan for unknown audience (defensive posture) |
| 8 | **INFORMATION GAPS** | What you need to learn in this meeting - specific unknowns. Paste A-04 gap list if available | None = generate from MEETING CONTEXT analysis |
| 9 | **SCHWARTZ AWARENESS LEVEL** | Unaware / Problem Aware / Solution Aware / Product Aware / Most Aware - of the primary decision-maker | None = infer from deal stage |
| 10 | **DESIRED OUTCOME** | What specific commitment you want when the meeting ends. Not "next steps" - a concrete action with a name and a date | None = generate based on meeting type |

---

## ROUTING LOGIC

Determine meeting type. Each type activates different module emphasis.

### PATH A - FIRST MEETING
**Trigger:** MEETING TYPE is FIRST MEETING or inferred as first interaction.
**Emphasis:** Module 1 (objective hierarchy) focused on information gathering. Module 3 (opening) calibrated to low trust - earn the right to ask. Module 4 (discovery) is primary output. Module 6 (closing) asks for second meeting, not commitment. Apply Camp: give them permission to say no.

### PATH B - FOLLOW-UP
**Trigger:** MEETING TYPE is FOLLOW-UP.
**Emphasis:** Module 1 focused on advancing the deal. Module 4 (discovery) targets remaining gaps only. Module 5 (objection pre-load) is critical - objections crystallise between first and second meeting. Module 6 asks for a specific next step with a named person and date.

### PATH C - HIGH-STAKES FINAL
**Trigger:** MEETING TYPE is HIGH-STAKES FINAL.
**Emphasis:** All modules at maximum intensity. Module 2 (stakeholder prep) is critical - know every person's position, concern, and likely question. Module 5 pre-loads every possible objection. Module 6 asks for the decision or a clear decision date. Apply Kegan: identify the competing commitment that could kill the deal at the last moment.

### PATH D - RENEWAL
**Trigger:** MEETING TYPE is RENEWAL.
**Emphasis:** Module 1 focused on demonstrating delivered value (pull from G-20 if available). Module 4 discovers what has changed - new stakeholders, new priorities, new competitors. Module 5 pre-loads "we're reviewing all vendors" and "we need to cut costs." Module 6 asks for renewal commitment or expansion conversation.

### PATH E - RESCUE
**Trigger:** MEETING TYPE is RESCUE.
**Emphasis:** Module 3 opening acknowledges the situation directly - no pretending everything is fine. Module 4 discovers what went wrong from their perspective (not yours). Module 5 pre-loads "we've lost confidence" and "we're looking at alternatives." Apply Voss throughout: tactical empathy first, solutions second. Module 6 asks for a specific recovery action, not a vague "let's keep talking."

---

## OUTPUT MODULES

---

### MODULE 1: OBJECTIVE HIERARCHY

Three levels. Write in Minto answer-first. The seller reads this in 30 seconds and knows exactly what they are trying to achieve.

**PRIMARY OBJECTIVE:**
[One sentence. The single most important thing that must happen in this meeting. If nothing else works, this is the minimum viable outcome.]

**SECONDARY OBJECTIVES (2-3 maximum):**
[Each one sentence. These advance the deal but are not essential today. Ranked by importance.]

**INTELLIGENCE OBJECTIVES:**
[Specific questions that must be answered by the end of this meeting. Mapped to INFORMATION GAPS variable. Each tagged with which attendee is most likely to answer it.]

| Intelligence Question | Target Attendee | Why This Matters Now | MEDDIC Category |
|----------------------|----------------|---------------------|-----------------|
| [question] | [name/role] | [impact on deal if unknown] | Metrics / Economic Buyer / Decision Criteria / Decision Process / Identify Pain / Champion |

Apply MEDDIC: every intelligence objective maps to a MEDDIC element. Flag which MEDDIC elements remain unknown after this meeting is planned - these become future meeting objectives.

---

### MODULE 2: STAKEHOLDER PREP CARDS

One card per attendee. If ATTENDEES variable is None, produce a "ghost audience" card: plan for the most likely attendees based on MEETING CONTEXT.

**STAKEHOLDER CARD: [Name]**

| Element | Detail |
|---------|--------|
| Title / Role | [from ATTENDEES or inferred] |
| Decision Role | Champion / Economic Buyer / Technical Buyer / Coach / Blocker / Unknown |
| Known Position | For / Against / Neutral / Unknown - with evidence |
| Primary Concern | [what keeps this person up at night - infer from role if not known] |
| Communication Preference | NLP Meta-Program read: Detail vs Big Picture / Toward vs Away / Internal vs External reference / Options vs Procedures. Infer from available data, flag as INFERRED if not confirmed |
| Prepared Statement | [one sentence tailored to this person's concern and communication style - what you will say directly to them during the meeting] |
| Question for Them | [one calibrated question (Voss) designed to surface their real position] |
| Risk | [what could go wrong with this person in this meeting] |
| Relationship to Other Attendees | [power dynamics, alliances, tensions - from Sphere of Influence analysis] |

If an attendee is flagged as BLOCKER, add: **Blocker Neutralisation Plan** - specific strategy. Options: convert (address underlying concern), bypass (engage their superior separately), contain (limit their influence in this meeting), or accept (work around them).

---

### MODULE 3: OPENING STRATEGY

Calibrated to SCHWARTZ AWARENESS LEVEL and MEETING TYPE. The first 90 seconds determine whether the meeting is a conversation or a presentation. Conversations close deals. Presentations create polite exits.

**OPENING FRAMEWORK BY AWARENESS LEVEL:**

**If UNAWARE:**
Do NOT open with your company or solution. Apply Raskin: open with the market shift that makes the old way untenable. Structure: "Something has changed in [their world]. [Undeniable trend]. The companies adapting fastest are [outcome]. I wanted to understand how you're seeing this."

**If PROBLEM AWARE:**
Open with Voss labelling: "It seems like [their problem] is [impact]. A lot of [peer group] are dealing with the same thing." Then ask, do not tell. Structure: "Before I share anything, I'd like to understand your situation. Can I ask a few questions?"

**If SOLUTION AWARE:**
Open with Minto answer-first: "Based on what [champion/context source] shared, I think we can [specific outcome] in [timeframe]. Here's why - and here's what I'd need to confirm with you today." Brief. Credible. Then transition to discovery.

**If PRODUCT AWARE:**
Open by acknowledging they know the landscape: "You've looked at this space. Rather than repeat what you already know, I'd like to focus on [the one thing that differentiates]. But first - what matters most to you in this decision?" Apply Camp: "And if at any point this doesn't feel right, say so."

**If MOST AWARE:**
Open by addressing the decision barrier directly. Apply Kegan: "You know the solution. You know the evidence. The question is what's making this hard to commit to. Can we talk about that openly?"

**FORMAT-SPECIFIC ADJUSTMENTS:**

| Format | Adjustment |
|--------|-----------|
| VIRTUAL | Open with human connection - 30 seconds of genuine rapport before business. Camera on. Name every attendee. Shorter meeting = tighter opening. |
| IN-PERSON | Use the environment - comment on something real you observed. Stand for introductions. Sit when conversation begins (power dynamics). |
| HYBRID | Address remote attendees first - they are at a disadvantage. Ensure screen sharing works before the meeting starts. |

**INTEGRATION WITH G-05 (First 15 Minutes):**
If G-05 output exists for this account, reference it here. This module provides the strategic intent; G-05 provides the tactical script. They work as a pair: G-21 Module 3 = what to achieve in the opening. G-05 = exactly what to say.

---

### MODULE 4: DISCOVERY QUESTIONS

Mapped to INFORMATION GAPS. Not a list to read from - a structured conversation plan with branching logic.

**QUESTION ARCHITECTURE:**

For each information gap, produce:

| # | Gap | Primary Question | If YES - Follow-Up | If NO - Follow-Up | Voss Technique | Listen For |
|---|-----|-----------------|--------------------|--------------------|---------------|------------|
| 1 | [gap from Module 1] | [calibrated question - open, not leading] | [dig deeper] | [redirect] | Label / Mirror / Calibrated Question / Accusation Audit / Dynamic Silence | [specific words/phrases that signal truth, deflection, or hidden agenda] |

**QUESTION DESIGN RULES:**

1. Apply Voss calibrated questions: start with "What" or "How" - never "Why" (triggers defensiveness) and never "Do you" (yields yes/no).
2. Apply Camp permission framing: before sensitive questions, say "I'm not sure if this is appropriate to ask, but..." - gives them permission to redirect without confrontation.
3. Apply NLP Meta-Programs: match question style to buyer's processing preference. Detail-oriented buyers get specific questions. Big-picture buyers get vision questions. Away-from buyers get risk questions. Toward buyers get opportunity questions.
4. Maximum 7 questions planned. You will not get through more. Rank by priority - if the meeting runs short, ask the top 3.
5. For every question, note: "If they deflect, DO NOT push. Note the deflection. Return to it later or in follow-up." Deflection is data.

**FORBIDDEN QUESTIONS:**
- Anything you could have learned from public sources (shows you did not prepare)
- "Tell me about your business" (insulting - you should know)
- "What keeps you up at night?" (cliche - everyone asks this)
- "What's your budget?" in a first meeting (premature - earns distrust)

---

### MODULE 5: OBJECTION PRE-LOAD

Predict the 3-5 most likely objections for this specific meeting. Not generic objections - situational ones based on MEETING CONTEXT, ATTENDEES, and MEETING TYPE.

| # | Predicted Objection | Source of Prediction | Emotional Root (System 1) | Pre-Loaded Response | Evidence Available |
|---|--------------------|--------------------|--------------------------|--------------------|--------------------|
| 1 | [objection] | [why you expect this - from context] | [fear/doubt/politics driving it] | [Voss label + redirect + evidence] | [Y/N - if N, flag for G-20] |

**RESPONSE FRAMEWORK (applied to each):**

1. **Anticipate** - if you know it is coming, decide: address proactively in your presentation (Voss accusation audit: "You might be thinking...") or wait for them to raise it (if raising it might plant the seed).
2. **Label** - when it surfaces: "It sounds like the concern is [emotional root], not just [surface objection]."
3. **Validate** - "That's a legitimate concern. I'd have the same question."
4. **Redirect** - "The way [customer/peer] navigated that was [evidence or approach]."
5. **Confirm** - "Does that address it, or is there something else behind the concern?"

Apply Kahneman: for every objection, calculate the cost of the objection being the reason they do nothing. "If [objection] prevents action, the cost is [continued loss from Module 1 of G-20 if available]."

---

### MODULE 6: CLOSING ACTION

Not "next steps." A specific, named commitment. Apply Minto: state the ask, then the rationale.

**THE ASK:**
[One sentence. Specific action. Named person. Date. Example: "I'd like to schedule a 45-minute technical deep-dive with [Technical Buyer name] and your infrastructure team by [date], so we can validate the integration approach before your board meeting on [date]."]

**THE RATIONALE:**
[Two sentences maximum. Why this action serves THEIR timeline, not yours. Frame around their deadline, their risk, their opportunity cost of delay.]

**THE FALLBACK:**
[If the primary ask is declined, what is the minimum acceptable next step? This must still be concrete - not "we'll be in touch."]

**THE CAMP EXIT:**
[Give them a graceful out. "If this doesn't feel right at this point, that's completely fine. I'd rather know now than waste your time." This is counterintuitive but builds trust. Apply Camp Start With No: the permission to refuse makes agreement more genuine.]

**MEETING-TYPE CALIBRATION:**

| Type | Primary Ask | Fallback |
|------|-----------|----------|
| FIRST MEETING | Second meeting with additional stakeholder | Permission to send a one-page summary and follow up in [X] days |
| FOLLOW-UP | Technical validation session or proposal review date | Agreement on specific evaluation criteria |
| HIGH-STAKES FINAL | Decision or decision date with named decision-maker | Identify and address the single remaining blocker |
| RENEWAL | Renewal commitment or expansion scoping session | 90-day review meeting with metrics |
| RESCUE | Specific recovery action with measurable checkpoint | Honest diagnosis: is this recoverable, and what would recovery require? |

---

### MODULE 7: POST-CALL CAPTURE TEMPLATE

Pre-built template to complete within 60 minutes of the meeting ending. Memory degrades rapidly - capture while fresh.

```
POST-CALL CAPTURE
=================
Account:        [pre-filled]
Date:           [pre-filled]
Attendees:      [pre-filled, note anyone who did not show / anyone unexpected]

WHAT HAPPENED (3 sentences maximum):
[outcome vs. objective - did you achieve Module 1 primary objective?]

INTELLIGENCE GATHERED:
| Question Asked | Answer Received | MEDDIC Element Updated | Confidence |
|---------------|----------------|----------------------|------------|
| [from Module 4] | [what they said] | [which element] | HIGH/MED/LOW |

SURPRISES (things you did not expect):
[these are often the most valuable data points]

OBJECTIONS SURFACED:
| Objection | How Handled | Resolved? | Follow-Up Needed |
|-----------|------------|-----------|-----------------|
| [from Module 5 or new] | [what you said] | Y/N | [action] |

COMMITMENTS MADE:
| By Whom | Commitment | Deadline |
|---------|-----------|----------|
| [them] | [what they agreed to] | [when] |
| [you] | [what you promised] | [when] |

RELATIONSHIP SHIFTS:
[any change in stakeholder positions - who warmed, who cooled, who emerged as unexpected ally or blocker]

NEXT GAIN ACTIONS:
- [ ] Update G-01 (Account Intelligence) with new data
- [ ] Update G-02 (Stakeholder Map) with relationship shifts
- [ ] Run/update A-04 (Gap Analysis) with new information
- [ ] If evidence gap found: queue G-20 (Evidence Builder)
- [ ] If competitor mentioned: queue I-03 (Competitor Kill-Shot)
- [ ] Plan next meeting: re-run G-21 with updated context
```

---

## RED TEAM CHECK (Shipley Review)

| Module | Test Question | GREEN | AMBER | RED |
|--------|-------------|-------|-------|-----|
| Objective Hierarchy | Is the primary objective achievable in one meeting? | Specific and realistic | Ambitious but possible | Fantasy - requires three meetings |
| Stakeholder Prep | Do you know each person's position? | Confirmed data | Reasonable inferences | Guessing blind |
| Opening Strategy | Will they talk or listen? | Opens conversation | Opens presentation | Opens pitch - they tune out |
| Discovery Questions | Will they answer honestly? | Calibrated, earns honesty | Reasonable but generic | Interrogation - trust destroyed |
| Objection Pre-Load | Are you ready for what's coming? | Specific to this meeting | Generic but relevant | Unprepared for obvious risks |
| Closing Action | Would YOU agree to this ask? | Clear value for them | Reasonable but seller-serving | Presumptuous - kills deal |
| Post-Call Template | Will it actually get filled in? | Takes 10 minutes | Takes 30 minutes | Too complex - will be skipped |

**Maister Trust Check:**
Scan the entire plan. Calculate: (Credibility + Reliability + Intimacy) / Self-Orientation. If any module prioritises what YOU want to say over what THEY need to hear, rewrite it. The meeting serves the buyer's decision process, not your sales process.

---

## GAWANDE CHECKLIST

Before the meeting, verify all 10:

- [ ] 1. Primary objective is one sentence and achievable today
- [ ] 2. Every attendee has a stakeholder prep card - no unknown faces
- [ ] 3. Opening is calibrated to awareness level - not a generic pitch
- [ ] 4. Discovery questions are ranked - if time runs short, top 3 are asked
- [ ] 5. Each discovery question has a "listen for" - you know what good and bad answers sound like
- [ ] 6. Objection pre-load covers the 3 most likely - with evidence or honest gap flags
- [ ] 7. Closing ask is specific: named person, specific action, date
- [ ] 8. Fallback ask is prepared - you do not leave with nothing
- [ ] 9. Post-call template is open and ready to complete before you leave the building or close the video
- [ ] 10. Two-page test: entire plan fits on two pages when printed - if longer, cut

---

## OPERATOR LOOP

**Before the meeting, verify three things:**

1. **Completeness** - Are all 7 modules populated? Any marked [UNKNOWN] more than twice? If so, this meeting has too many unknowns - consider whether a pre-meeting call with the champion could fill gaps.
2. **Alignment** - Does the primary objective align with where this deal is in the pipeline? Do not run a discovery plan for a closing meeting or a closing plan for a first meeting.
3. **Readiness** - Has the seller read the plan? Not skimmed - read. The plan is worthless if it stays in the file. Print it. Annotate it. Carry it.

**Suggested next actions:**

| Condition | Action |
|-----------|--------|
| First meeting completed | Run G-21 again with post-call capture data for follow-up plan |
| Multiple stakeholders identified | Update G-02 (Stakeholder Map) before next meeting |
| Evidence gaps surfaced | Queue G-20 (Evidence Builder) for relevant customer |
| Competitor mentioned | Queue I-03 (Competitor Kill-Shot) |
| Champion identified or confirmed | Queue N-05 (Objection Armoury) to arm them |
| Deal requires proposal | Queue I-02 (Proposal Builder) with all gathered intelligence |

---

## GAIN DRIVER MAPPING

| Driver | How This Prompt Serves It |
|--------|--------------------------|
| **ORDER** | Structured preparation replaces hope - seller enters with a plan, not a prayer |
| **SAFETY** | Pre-loaded objections and fallback actions mean the seller cannot be ambushed |
| **POWER** | Stakeholder prep cards and calibrated questions give the seller control of the conversation's direction |

---

## CHAIN CONNECTIONS

**FEEDS FROM:**
- G-01 (Account Intelligence) - account context and history
- G-02 (Stakeholder Mapping) - attendee intelligence
- G-05 (First 15 Minutes) - tactical opening script (paired output)
- A-04 (Gap Analysis) - information gaps to close
- G-20 (Customer Evidence Builder) - evidence for objection handling
- N-05 (Objection Armoury) - pre-loaded responses

**FEEDS INTO:**
- G-01 (Account Intelligence) - updated with post-call intelligence
- G-02 (Stakeholder Mapping) - updated with relationship shifts
- A-04 (Gap Analysis) - updated with new information
- I-02 (Proposal Builder) - when meeting triggers proposal stage
- I-03 (Competitor Kill-Shot) - when competitor surfaces
- G-21 (Self) - next meeting plan built from post-call capture

---

## SELF-AUDIT SCORE

**Structural: 5/5**
- [x] Variables with defaults and routing (10 variables, 5 paths)
- [x] Conditional path logic (meeting type routing with emphasis shifts)
- [x] Modular output architecture (7 modules including post-call)
- [x] Quality gate (Red Team + Gawande)
- [x] Operator loop with next actions

**Framework Integration: 18/22 explicit**
Voss (calibrated questions, labelling, accusation audit, mirrors, dynamic silence), MEDDIC (intelligence objectives mapping), Schwartz (awareness-calibrated opening), Kahneman (loss framing in objection handling), Minto (answer-first objectives and closing), Ferrazzi (champion development via stakeholder cards), Gawande (pre-meeting checklist), Maister (trust equation check), Camp (Start With No, permission questions), NLP Meta-Programs (communication preference on stakeholder cards, question design), Raskin (strategic narrative opening for unaware), Kegan (competing commitment identification for high-stakes), Blue Ocean (criteria management in objection handling), Shipley (red team review), Sphere of Influence (stakeholder relationship mapping), Heath (sticky opening framework), Timme (commercial buyer language in proof points), Maverick (two-page test cuts compliance theatre).

**Implicit:** Cialdini (social proof in evidence deployment), Taleb (rescue path builds antifragility), Case Method (real account data drives planning), Human Amplification (operator loop - seller must read and carry the plan).

**Total: 22/22 present. 18 explicit, 4 implicit.**
