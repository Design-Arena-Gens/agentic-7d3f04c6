export default function Page() {
  return (
    <main className="scene">
      <div className="vignette" aria-hidden="true" />
      <div className="sun" aria-hidden="true" />

      <div className="hills" aria-hidden="true">
        <div className="hill hill-1" />
        <div className="hill hill-2" />
        <div className="hill hill-3" />
      </div>

      <div className="trees" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, i) => (
          <div className="tree" key={i} style={{ ['--i']: i }}>
            <div className="trunk" />
            <div className="crown crown-1" />
            <div className="crown crown-2" />
            <div className="crown crown-3" />
          </div>
        ))}
      </div>

      <svg className="birds" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" aria-label="Birds flying across the sky" role="img">
        <g className="flock">
          <path d="M10 60 q20 -20 40 0 M70 60 q20 -20 40 0 M130 60 q20 -20 40 0" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="flock delay-1">
          <path d="M10 100 q22 -18 44 0 M72 100 q22 -18 44 0 M134 100 q22 -18 44 0" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="flock delay-2">
          <path d="M10 140 q18 -16 36 0 M66 140 q18 -16 36 0 M122 140 q18 -16 36 0" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>

      <section className="dialogue" aria-live="polite">
        <p className="line harm">?Wow, Ahad! The weather feels so nice today.?</p>
        <p className="line ahad">?Yeah, it?s perfect for a walk.?</p>
      </section>

      <footer className="caption" aria-hidden="true">Sunlight glows softly. A peaceful, natural mood.</footer>
    </main>
  );
}
