# Plasma Memory Trust

A direction-aware plasma failure-memory system for trustworthy scientific reasoning on real tokamak shot data.

## Core idea

A risky plasma event should not be matched to a prior failure case using state similarity alone. Approach direction also matters.

## Current status

This repository contains a real-data feasibility study on tokamak shots showing that:
- state-only similarity can be misleading
- approach direction improves failure-memory matching
- the system can support a trust layer for Gemma 4 scientific explanations

## Main workflow

1. Retriever finds relevant prior plasma cases
2. Plasma Memory Analyst computes similarity scores
3. Verifier checks whether the claim is supported
4. Gemma 4 Trust Reporter explains the verified result

## Current evidence

Three real plasma shots were compared using:
- state similarity
- approach-direction similarity
- combined memory-match score

Main finding:
**state similarity alone is not enough for trustworthy plasma-risk comparison.**

## Next steps

- freeze the 4-agent workflow
- add structured schemas
- build the first demo path
- create landing page and UI