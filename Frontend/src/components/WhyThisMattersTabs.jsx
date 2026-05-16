import { useState } from "react";

const tabs = [
  {
    id: "global",
    label: "Global Need",
    color: "tab-blue",
    title: "Why the world and scientific community care",
    intro:
      "International fusion programs and benchmark efforts are actively working toward safer plasma operation, disruption forecasting, and more trustworthy AI-assisted scientific reasoning.",
    points: [
      "Major fusion ecosystems such as IAEA, ITER, EUROfusion, and UKAEA-backed efforts are pushing toward safer and more stable plasma operation.",
      "The global motivation is bigger than one lab: energy security, climate resilience, scientific infrastructure, and trustworthy AI for high-stakes decision support.",
      "Benchmarks like TokaMark were created because fusion data is fragmented and fair, scalable AI evaluation is still difficult.",
    ],
    takeaway:
      "This is not a niche toy problem — it sits inside a real international push for safer, more reliable fusion science.",
  },
  {
    id: "problem",
    label: "The Problem",
    color: "tab-amber",
    title: "Why plasma-risk interpretation is hard",
    intro:
      "Tokamak plasmas can appear similar at one instant while evolving in very different ways over time.",
    points: [
      "Snapshot-only similarity can mislead scientists into reusing the wrong prior case.",
      "Plasma measurements are partial, indirect, and fast-changing, which makes high-confidence interpretation difficult.",
      "A case that looks similar in state space may still be dynamically incompatible if the trajectory is moving toward risk in a different direction.",
    ],
    takeaway:
      "The core trust gap is simple: state resemblance alone is not enough for reliable plasma-risk comparison.",
  },
  {
    id: "solution",
    label: "Our Solution",
    color: "tab-cyan",
    title: "How Plasma Memory Trust works",
    intro:
      "We built a direction-aware plasma failure-memory workflow that checks both current state and trajectory evolution before reusing a prior risky case.",
    points: [
      "The Plasma Memory Analyst computes state similarity, direction similarity, combined score, and an initial label from real tokamak shot comparisons.",
      "A Case Selector picks a relevant comparison, and a Verifier checks whether the claimed label is actually supported by the evidence.",
      "Gemma 4 then acts as a scientist-facing trust reporter, turning the verified result into a grounded explanation with uncertainty and next-step guidance.",
    ],
    takeaway:
      "Our system does not trust raw similarity alone — it verifies reuse before explanation.",
  },
  {
    id: "impact",
    label: "Why It Matters",
    color: "tab-violet",
    title: "What value this creates",
    intro:
      "The goal is not only better plasma comparison, but more trustworthy scientific decision support.",
    points: [
      "Scientists can reject misleading lookalikes instead of treating them as reusable prior-risk cases.",
      "The system preserves uncertainty instead of pretending every comparison is equally informative.",
      "Gemma 4 makes the result readable and useful to researchers without replacing the structured trust logic underneath.",
    ],
    takeaway:
      "This creates a trust layer for plasma science: interpretable, auditable, and easier to use in high-stakes research workflows.",
  },
];

export default function WhyThisMattersTabs() {
  const [activeTab, setActiveTab] = useState("global");

  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="section">
      <h2>Why This Matters</h2>

      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`info-tab ${tab.color} ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={`tabs-panel ${current.color}`}>
        <div className="tabs-panel-left">
          <p className="panel-kicker">{current.label}</p>
          <h3>{current.title}</h3>
          <p className="panel-intro">{current.intro}</p>
          <p className="panel-takeaway">{current.takeaway}</p>
        </div>

        <div className="tabs-panel-right">
          {current.points.map((point, index) => (
            <div className="point-card" key={index}>
              <span className="point-number">0{index + 1}</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}