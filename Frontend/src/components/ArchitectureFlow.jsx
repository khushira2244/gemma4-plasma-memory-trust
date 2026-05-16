const steps = [
  {
    title: "Real Tokamak Data",
    text: "Valid time windows and event fingerprints from real plasma shots.",
  },
  {
    title: "Plasma Memory Analyst",
    text: "Computes state similarity, direction similarity, score, and initial label.",
  },
  {
    title: "Case Selector",
    text: "Chooses the most relevant structured comparison case.",
  },
  {
    title: "Verifier",
    text: "Checks whether the proposed label is truly supported by the evidence.",
  },
  {
    title: "Gemma 4 Trust Reporter",
    text: "Explains the verified result in a grounded, scientist-facing way.",
  },
];

export default function ArchitectureFlow() {
  return (
    <section id="architecture" className="section">
      <h2>Architecture</h2>
      <p className="architecture-subtitle">
        From real plasma shots to grounded scientist-facing trust reports.
      </p>

      <div className="pipeline-flow">
        {steps.map((step, index) => (
          <div className="pipeline-step" key={step.title}>
            <div className="flow-number">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            {index < steps.length - 1 && <div className="pipeline-arrow">→</div>}
          </div>
        ))}
      </div>
    </section>
  );
}