export default function GemmaPanel({ report }) {
  return (
    <div className="panel-card">
      <h3>Gemma 4 Trust Reporter</h3>
      <div className="report-block">
        <h4>Summary</h4>
        <p>{report.summary}</p>
      </div>
      <div className="report-block">
        <h4>Why</h4>
        <p>{report.why}</p>
      </div>
      <div className="report-block">
        <h4>Uncertainty</h4>
        <p>{report.uncertainty}</p>
      </div>
      <div className="report-block">
        <h4>Suggested next check</h4>
        <p>{report.nextCheck}</p>
      </div>
    </div>
  );
}