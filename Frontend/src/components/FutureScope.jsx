export default function FutureScope() {
  const items = [
    {
      id: 1,
      title: "Larger real plasma memory bank",
      points: [
        "More tokamak shots",
        "Larger prior-risk memory bank",
        "Better coverage of different plasma regimes",
        "Expand beyond the initial 3-shot feasibility study",
      ],
      className: "future-card cyan",
    },
    {
      id: 2,
      title: "Richer diagnostics",
      points: [
        "Mirnov fluctuation channels",
        "Magnetic activity diagnostics",
        "Additional profile and radiative signals",
        "Better event fingerprints",
      ],
      className: "future-card blue",
    },
    {
      id: 3,
      title: "Expert and physical validation",
      points: [
        "Compare labels with expert judgment",
        "Calibrate thresholds on larger real-shot datasets",
        "Validate against known physical instability patterns",
      ],
      className: "future-card violet",
    },
    {
      id: 4,
      title: "Better retrieval and trust scoring",
      points: [
        "Retrieve top-k prior risky cases",
        "Rank by state + direction + context",
        "Improve trust calibration beyond heuristic thresholds",
      ],
      className: "future-card gold",
    },
    {
      id: 5,
      title: "Scientist-facing AI assistant",
      points: [
        "Grounded scientific reporting",
        "Uncertainty-aware explanations",
        "Interactive plasma case explorer",
        "Human-AI decision support for fusion research",
      ],
      className: "future-card teal",
    },
  ];

  return (
    <section  id="future" className="section">
      <h2>Future Scope</h2>
      <p className="future-subtitle">
        Next steps for scaling Plasma Memory Trust into a robust scientific
        decision-support system.
      </p>

      <div className="future-grid">
        {items.map((item) => (
          <div key={item.id} className={item.className}>
            <div className="future-step">{item.id}</div>
            <h3>{item.title}</h3>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="future-goal">
        <strong>Goal:</strong> move from a promising real-data prototype to a
        robust, expert-informed plasma decision-support platform.
      </div>
    </section>
  );
}