# GAIN-00E: DASHBOARD DATA — Meridian Financial Services

## JSON Data Structure for gain-deal-diagnostic.html

```json
{
  "company": {
    "name": "Meridian Financial Services plc",
    "sector": "Financial Services",
    "revenue": "£847m",
    "employees": 8000,
    "acquisitions": 0,
    "ownership": "Public (LSE: MFS.L)",
    "portfolioAge": 0,
    "boardReview": "Active (Audit Committee Extraordinary Review)"
  },
  "summary": {
    "reportedPipeline": "£2,500,000",
    "verifiedPipeline": "£0",
    "verifiedPct": 0,
    "verdict": "KILL",
    "verdictDetail": "Kill the £2.5M standalone Q2 software deal immediately. Budget is frozen by the Board. Pivot strategy to the £115M managed services RFP.",
    "problemsDetected": 12,
    "criticals": 8,
    "atRisk": 4,
    "watch": 0,
    "healthy": 13,
    "none": 13,
    "confidenceLevel": "HIGH"
  },
  "problems": [
    {"code": "1.1", "name": "Margin Compression", "level": "COMPANY", "severity": 3, "status": "DETECTED", "evidenceClassification": "VERIFIED", "chain": ["G-19", "N-09"]},
    {"code": "1.5", "name": "Measurement Trap", "level": "COMPANY", "severity": 2, "status": "DETECTED", "evidenceClassification": "VERIFIED", "chain": ["I-01"]},
    {"code": "1.7", "name": "Proposition-Reality Gap", "level": "COMPANY", "severity": 3, "status": "DETECTED", "evidenceClassification": "VERIFIED", "chain": ["A-01", "G-19"]},
    {"code": "2.1", "name": "Seller Self-Deception", "level": "DEAL", "severity": 3, "status": "DETECTED", "evidenceClassification": "CONTRADICTED", "chain": ["I-01", "G-21"]},
    {"code": "2.2", "name": "Pipeline Inflation", "level": "DEAL", "severity": 3, "status": "DETECTED", "evidenceClassification": "CONTRADICTED", "chain": ["I-01"]},
    {"code": "2.4", "name": "Stakeholder Blindness", "level": "DEAL", "severity": 3, "status": "DETECTED", "evidenceClassification": "CONTRADICTED", "chain": ["G-03", "A-05"]},
    {"code": "2.6", "name": "Cycle Drag", "level": "DEAL", "severity": 2, "status": "DETECTED", "evidenceClassification": "VERIFIED", "chain": ["I-01"]},
    {"code": "2.7", "name": "Competitive Blindness", "level": "DEAL", "severity": 2, "status": "DETECTED", "evidenceClassification": "CLAIMED", "chain": ["I-03"]},
    {"code": "2.8", "name": "Phantom Champion", "level": "DEAL", "severity": 3, "status": "DETECTED", "evidenceClassification": "CLAIMED", "chain": ["G-03", "A-05"]},
    {"code": "2.9", "name": "Dead Deal Denial", "level": "DEAL", "severity": 3, "status": "DETECTED", "evidenceClassification": "VERIFIED", "chain": ["I-01"]},
    {"code": "2.11", "name": "Procurement Black Box", "level": "DEAL", "severity": 3, "status": "DETECTED", "evidenceClassification": "VERIFIED", "chain": ["A-01"]},
    {"code": "3.3", "name": "Accountability Vacuum", "level": "PEOPLE", "severity": 2, "status": "DETECTED", "evidenceClassification": "MISSING", "chain": ["P-01"]}
  ],
  "deals": [
    {
      "name": "Automated Dependency Mapping / Resilience Tooling",
      "value": "£2,500,000",
      "stage": "Stage 3 (Evaluation)",
      "stageActual": "Dead/Stalled",
      "age": 45,
      "sellerProbability": 75,
      "gainProbability": 0,
      "verdict": "KILL"
    }
  ],
  "stakeholders": [
    {"name": "Mark Thompson", "title": "CFO", "role": "ECONOMIC_BUYER", "authority": "HIGH", "lastContact": 60, "status": "HOSTILE"},
    {"name": "Nicholas Reid", "title": "CIO", "role": "DECISION_MAKER", "authority": "HIGH", "lastContact": 30, "status": "HOSTILE"},
    {"name": "Sir Anthony Pemberton", "title": "Chair, Audit Committee", "role": "GATEKEEPER", "authority": "HIGH", "lastContact": 0, "status": "MISSING"},
    {"name": "Jennifer Morris", "title": "Dir. Organisational Resilience", "role": "CHAMPION", "authority": "LOW", "lastContact": 7, "status": "ACTIVE"},
    {"name": "Sarah Blackwell", "title": "Group Procurement Director", "role": "GATEKEEPER", "authority": "HIGH", "lastContact": 45, "status": "GHOST"}
  ]
}
```

**DASHBOARD DATA COMPLETE. Ready for 00-F VERDICT.**
