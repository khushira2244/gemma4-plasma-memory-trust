export const cases = [
  {
    id: "misleading",
    title: "Misleading State-Only Match",
    currentShot: "11766",
    referenceShot: "11767",
    stateSimilarity: 0.44,
    directionSimilarity: -0.9077,
    combinedScore: 0.22,
    finalLabel: "misleading state-only match",
    confidence: "high",
    verificationNote:
      "moderate or strong state resemblance is overridden by strongly opposing approach direction",
    nextCheck:
      "review additional magnetic fluctuation channels before treating this as a reusable prior-risk case",
  },
  {
    id: "partial",
    title: "Partial / Uncertain",
    currentShot: "11766",
    referenceShot: "11768",
    stateSimilarity: 0.8044,
    directionSimilarity: -0.1279,
    combinedScore: 0.4022,
    finalLabel: "partial / uncertain",
    confidence: "medium",
    verificationNote:
      "state resemblance exists, but direction compatibility is not strong enough for a confident reusable match",
    nextCheck:
      "inspect nearby temporal signal evolution and auxiliary diagnostics before reuse",
  },
  {
    id: "reject",
    title: "Reject",
    currentShot: "11767",
    referenceShot: "11768",
    stateSimilarity: -0.0376,
    directionSimilarity: 0.0591,
    combinedScore: 0.0108,
    finalLabel: "reject",
    confidence: "medium",
    verificationNote:
      "insufficient similarity for a reusable failure-memory match",
    nextCheck:
      "search for alternative prior cases with closer trajectory compatibility",
  },
];