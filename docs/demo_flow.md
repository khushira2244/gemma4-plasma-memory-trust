# Demo Flow

This project uses a real-data plasma failure-memory workflow built from tokamak shot analysis.

## Step 1 — Notebook analyzes real plasma shots
The notebook inspects real shot data, extracts valid time windows, constructs plasma state fingerprints, identifies proxy candidate events, and computes approach directions.

## Step 2 — Notebook exports structured real outputs
After pairwise comparison across real shots, the notebook writes the comparison results to:

`demo/real_cases.json`

This file contains real generated outputs such as:
- current shot
- reference shot
- state similarity
- direction similarity
- combined score
- final label
- confidence
- verification note
- suggested next check

## Step 3 — Retriever / selector chooses a case
A retriever or simple selector chooses the most relevant comparison case from `demo/real_cases.json`.

In the current prototype, this can simply mean selecting the strongest or most illustrative case for explanation.

## Step 4 — Verifier confirms the case
The verifier checks whether the case label is actually supported by the comparison evidence.

For example, if state similarity is moderate but direction similarity is strongly negative, the verifier can confirm that the result should be treated as a misleading state-only match rather than a reusable prior-risk case.

## Step 5 — Gemma 4 explains the selected case
Gemma 4 receives the structured verified result and produces a scientist-facing explanation.

The explanation must:
- use only the structured fields
- avoid unsupported claims
- clearly explain the match label
- mention uncertainty where appropriate
- suggest a next check only if justified

## Current prototype status
At the current stage:
- the notebook analysis is real
- the exported JSON is real
- the agent architecture is defined
- the Gemma trust reporter prompt is defined

The next implementation step is to connect the selector/verifier/reporter flow directly to the exported JSON.