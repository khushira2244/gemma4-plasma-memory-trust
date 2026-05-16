import { cases } from "../data/cases";

function labelClass(label) {
  if (label.includes("misleading")) return "badge misleading";
  if (label.includes("partial")) return "badge partial";
  return "badge reject";
}

export default function ResultsTable() {
  return (
    <section id="results" className="section">
      <div className="results-header">
        <h2>Real Results</h2>
        <a
          href="/images/result-diagram.png"
          download
          className="btn secondary"
        >
          Download Result Image
        </a>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Current Shot</th>
              <th>Reference Shot</th>
              <th>State Similarity</th>
              <th>Direction Similarity</th>
              <th>Combined Score</th>
              <th>Final Label</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((item) => (
              <tr key={item.id}>
                <td>{item.currentShot}</td>
                <td>{item.referenceShot}</td>
                <td>{item.stateSimilarity}</td>
                <td>{item.directionSimilarity}</td>
                <td>{item.combinedScore}</td>
                <td>
                  <span className={labelClass(item.finalLabel)}>
                    {item.finalLabel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}