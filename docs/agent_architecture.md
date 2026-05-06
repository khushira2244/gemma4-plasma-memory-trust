# Agent Architecture

This project uses a simple scientist-facing multi-agent workflow for trustworthy plasma-risk reasoning.

## 1. Retriever
The Retriever finds the most relevant prior plasma cases for the current shot segment.

It returns:
- current shot identifier
- candidate prior references
- retrieval reason

Main question:
**Which earlier cases should we compare against?**

## 2. Plasma Memory Analyst
The Plasma Memory Analyst computes the actual quantitative comparison between the current shot and retrieved prior cases.

It returns:
- state similarity
- direction similarity
- combined score
- proposed label

Main question:
**How similar is the current plasma event to each prior risky case?**

## 3. Verifier
The Verifier checks whether the proposed comparison label is actually supported by the evidence.

It checks:
- consistency between scores and label
- whether direction opposition overrides state similarity
- whether the result should be downgraded to uncertain

Main question:
**Can we trust this comparison claim?**

## 4. Gemma 4 Trust Reporter
The Gemma 4 Trust Reporter explains the verified result in grounded, uncertainty-aware scientific language.

It produces:
- explanation for the scientist
- uncertainty note
- why the case was accepted or rejected
- suggested next checks

Main question:
**What does this result mean for the scientist?**

## Workflow

1. Retriever selects the most relevant prior plasma cases.
2. Plasma Memory Analyst scores each case.
3. Verifier checks whether the proposed claim is justified.
4. Gemma 4 Trust Reporter explains the verified result.

## Why this structure

This architecture keeps the system:
- evidence-based
- checkable
- transparent
- easier to trust in high-risk scientific settings