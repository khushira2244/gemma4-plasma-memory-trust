import { useState } from "react";

const tabs = [
  {
    id: "feature",
    label: "Feature",
    colorClass: "tab-feature",
    title: "State Similarity",
    intro:
      "State similarity measures how similar two candidate plasma-event states are at the event time using a compact diagnostic fingerprint.",
    sections: [
      {
        heading: "Current Fingerprint",
        math: "x_event = [I_p, n_e,line, P_rad, n_G]",
      },
    ],
    bullets: [
      "I_p — plasma current",
      "n_e,line — line-averaged electron density",
      "P_rad — radiated power",
      "n_G — Greenwald-related density",
    ],
    footer:
      "State similarity answers: how similar do two plasma events look at the snapshot level?",
    extraMath: "StateSim(a, b) = cos(x_a, x_b)",
    extraHeading: "Definition",
  },
  {
    id: "direction",
    label: "Direction",
    colorClass: "tab-direction",
    title: "Trajectory Direction",
    intro:
      "Trajectory direction measures how the plasma is moving into the event, not just where it is at the event time.",
    sections: [
      {
        heading: "Approach Vector",
        math: "d_approach = x_event - x_prev",
      },
      {
        heading: "Normalization",
        math: "d̂ = d_approach / ||d_approach||",
      },
    ],
    bullets: [
      "Positive — evolving in similar directions",
      "Near zero — weak or unclear relation",
      "Negative — evolving in opposing directions",
    ],
    footer:
      "Direction answers: are two plasma events approaching risk in the same way, or only looking similar at one instant?",
    extraMath: "DirSim(a, b) = cos(d̂_a, d̂_b)",
    extraHeading: "Direction Similarity",
  },
  {
    id: "validation",
    label: "Validation",
    colorClass: "tab-validation",
    title: "Current Prototype Logic",
    intro:
      "In the current prototype, labels are validated against physically interpretable differences in diagnostic-state resemblance and pre-event trajectory compatibility.",
    bullets: [
      "Misleading State-Only Match — state similarity is moderate or high, but direction similarity is strongly negative.",
      "Partial / Uncertain — state similarity is high enough, but direction compatibility is weak or mildly negative.",
      "Reject — state similarity is very low and direction similarity is weak or inconsistent.",
    ],
    footer:
      "These labels are currently prototype-calibrated and will later be refined with expert judgment, richer diagnostics, and larger real-shot case banks.",
  },
  {
    id: "thresholds",
    label: "Thresholds",
    colorClass: "tab-thresholds",
    title: "Prototype Trust Thresholds",
    intro:
      "The current system uses prototype trust thresholds to separate three interpretable regimes: strong match, partial or uncertain, and reject.",
    sections: [
      {
        heading: "Combined Score",
        math: "S = α StateSim + (1 − α) max(0, DirSim)",
      },
    ],
    bullets: [
      "Strong match — S > 0.5",
      "Partial / uncertain — 0.2 < S ≤ 0.5",
      "Reject — S ≤ 0.2",
    ],
    footer:
      "These are not yet final physical boundaries. They are prototype calibration thresholds used to distinguish low-trust, medium-trust, and reject regimes in the current feasibility study.",
  },
];

export default function ParameterDefinition() {
  const [activeTab, setActiveTab] = useState("feature");

  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="parameters" className="section">
      <h2>Parameter Definition & Trust Calibration</h2>
      <p className="architecture-subtitle">
        The trust logic combines plasma-event state similarity, trajectory
        direction, validation assumptions, and prototype trust thresholds.
      </p>

      <div className="param-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`param-tab ${tab.colorClass} ${
              activeTab === tab.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={`param-tab-panel ${active.colorClass}`}>
        <div className="param-pill">{active.label}</div>
        <h3>{active.title}</h3>
        <p>{active.intro}</p>

        {active.sections?.map((section) => (
          <div className="formula-box" key={section.heading}>
            <div className="formula-title">{section.heading}</div>
            <p className="math-line">{section.math}</p>
          </div>
        ))}

        {active.extraHeading && (
          <div className="formula-box">
            <div className="formula-title">{active.extraHeading}</div>
            <p className="math-line">{active.extraMath}</p>
          </div>
        )}

        {active.bullets?.length > 0 && (
          <ul className="param-list">
            {active.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        <p className="param-note">{active.footer}</p>
      </div>
    </section>
  );
}