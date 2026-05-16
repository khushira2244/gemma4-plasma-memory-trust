export const gemmaReports = {
  misleading: {
    summary:
      "The comparison between current shot 11766 and reference shot 11767 is classified as a misleading state-only match.",
    why:
      "While the shots exhibit moderate state similarity, the direction similarity is strongly negative. This means the plasma trajectories are evolving in opposing directions, so the reference shot should not be treated as a reliable reusable prior-risk case.",
    uncertainty:
      "Confidence is high because the directional contradiction is strong enough to overturn the state resemblance.",
    nextCheck:
      "Review additional magnetic fluctuation channels before treating this as a reusable prior-risk case.",
  },
  partial: {
    summary:
      "The comparison between current shot 11766 and reference shot 11768 is classified as partial / uncertain.",
    why:
      "The shots show notable state resemblance, but the direction similarity remains weak and negative. This creates mixed evidence: the state looks somewhat similar, but the evolving trajectory is not compatible enough for a confident reusable failure-memory match.",
    uncertainty:
      "Confidence is medium. The evidence is mixed, so this should not be treated as a confirmed match.",
    nextCheck:
      "Inspect nearby temporal signal evolution and auxiliary diagnostics before reuse.",
  },
  reject: {
    summary:
      "The comparison between current shot 11767 and reference shot 11768 is classified as reject.",
    why:
      "The state similarity is very low and the direction similarity is also weak, producing a near-zero combined score. This indicates insufficient similarity for a reusable failure-memory match.",
    uncertainty:
      "Confidence is medium. The overall evidence points away from meaningful alignment between the two shots.",
    nextCheck:
      "Search for alternative prior cases with closer trajectory compatibility.",
  },
};