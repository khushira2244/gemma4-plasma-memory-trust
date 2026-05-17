






# Gemma4 Plasma Memory Trust


<img width="923" height="464" alt="image" src="https://github.com/user-attachments/assets/444d31a0-05eb-4eb1-af1b-5a6bca141258" />


A real-data trust layer for plasma trajectory reasoning in fusion research.

Plasma Memory Trust shows why **state similarity alone can mislead** when comparing risky plasma events, and why **trajectory direction** must also be verified before reuse. The system combines real tokamak shot comparisons, structured trust logic, and **Gemma 4** as the final scientist-facing explanation layer.

---

## Live Links

- **Live Demo:** [gemma4-plasma-memory-trust.netlify.app](https://gemma4-plasma-memory-trust.netlify.app/)
- **Kaggle Writeup:** [Gemma 4 Plasma Memory Trust Writeup](https://www.kaggle.com/competitions/gemma-4-good-hackathon/writeups/gemma-4-plasma-memory-trust)
- **Demo Video:** [Watch on YouTube](https://www.youtube.com/watch?v=40Ef__5901o)

---

## Core Workflow

1. **Real tokamak shot data**
2. **Plasma Memory Analyst** computes state similarity and trajectory direction
3. **Case Selector** picks the most relevant structured comparison
4. **Verifier** checks whether the label is actually supported by the evidence
5. **Gemma 4 Trust Reporter** explains the verified result in a grounded, scientist-facing way

---

## Key Result

The current prototype shows three real outcomes:

- **misleading state-only match**
- **partial / uncertain**
- **reject**

**Main finding:** state similarity alone is not enough for trustworthy plasma-risk comparison.

---

## Tech Stack

- **Frontend:** React + Vite
- **Analysis pipeline:** Python
- **Data:** real tokamak shot comparisons
- **Explanation layer:** Gemma 4

---

## Future Direction

The next step is to expand the plasma memory bank, add richer diagnostics, improve expert validation and threshold calibration, and build a stronger scientist-facing plasma decision-support assistant.

---

## Project Goal

Build a more grounded, interpretable, and trustworthy plasma-risk reasoning workflow for future fusion science.
