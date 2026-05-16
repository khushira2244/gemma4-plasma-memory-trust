import { useState } from "react";
import { cases } from "../data/cases";
import { gemmaReports } from "../data/gemmaReports";
import GemmaPanel from "./GemmaPanel";

export default function CaseExplorer() {
  const [selectedId, setSelectedId] = useState("misleading");

  const selectedCase = cases.find((item) => item.id === selectedId);
  const selectedReport = gemmaReports[selectedId];

  return (
    <section className="section">
      <h2>Case Explorer</h2>

      <div className="case-tabs">
        {cases.map((item) => (
          <button
            key={item.id}
            className={`case-tab ${selectedId === item.id ? "active" : ""}`}
            onClick={() => setSelectedId(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="explorer-grid">
        <div className="panel-card">
          <h3>Verified Case</h3>
          <div className="metric-row">
            <span>Current Shot</span>
            <strong>{selectedCase.currentShot}</strong>
          </div>
          <div className="metric-row">
            <span>Reference Shot</span>
            <strong>{selectedCase.referenceShot}</strong>
          </div>
          <div className="metric-row">
            <span>State Similarity</span>
            <strong>{selectedCase.stateSimilarity}</strong>
          </div>
          <div className="metric-row">
            <span>Direction Similarity</span>
            <strong>{selectedCase.directionSimilarity}</strong>
          </div>
          <div className="metric-row">
            <span>Combined Score</span>
            <strong>{selectedCase.combinedScore}</strong>
          </div>
          <div className="metric-row">
            <span>Confidence</span>
            <strong>{selectedCase.confidence}</strong>
          </div>
          <div className="metric-note">
            <h4>Verification Note</h4>
            <p>{selectedCase.verificationNote}</p>
          </div>
        </div>

        <GemmaPanel report={selectedReport} />
      </div>
    </section>
  );
}