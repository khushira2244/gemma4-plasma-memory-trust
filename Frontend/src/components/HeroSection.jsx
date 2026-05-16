export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content centered">
        <div className="powered-pill">⚡ Powered by Google Gemma 4</div>

        <p className="eyebrow">Gemma 4 Good Hackathon · Safety & Trust</p>

        <h1>Plasma Memory Trust</h1>

        <p className="tagline">
          Direction-aware plasma failure-memory for trustworthy scientific
          reasoning with Gemma 4.
        </p>

        <p className="hero-text">
          A real-data tokamak trust layer that shows why state-only similarity
          can mislead and why trajectory direction must be verified before reuse.
        </p>

        <div className="hero-actions">
          <a href="#results" className="btn primary">View Real Cases</a>
          <a href="#architecture" className="btn secondary">See Architecture</a>
           <a href="#future" className="btn secondary">Future Scope</a>
           <a href="#parameters" className="btn secondary">Parameter Definition</a>
        </div>
      </div>

      <div className="hero-video-wrapper">
        <div className="hero-video-card">
          <p className="video-label">Demo Preview</p>
          <div className="video-frame large-video">
            <iframe
              src="https://www.youtube.com/embed/40Ef__5901o"
              title="Plasma Memory Trust Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}