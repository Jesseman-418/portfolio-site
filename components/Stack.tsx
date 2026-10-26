const groups = [
  {
    label: "Build",
    items: [
      ["TS", "TypeScript"], ["JS", "JavaScript"], ["PY", "Python"], ["RE", "React"],
      ["N", "Next.js"], ["ND", "Node.js"], ["EX", "Express"], ["FA", "FastAPI"],
    ],
  },
  {
    label: "Connect",
    items: [
      ["O2", "OAuth 2.0"], ["OI", "OpenID Connect"], ["JWT", "JWT / JWKS"],
      ["PG", "PostgreSQL"], ["SQ", "SQLite"], ["F", "FAISS"],
    ],
  },
  {
    label: "Verify",
    items: [
      ["PW", "Playwright"], ["PT", "pytest"], ["DK", "Docker"],
      ["G", "Git"], ["API", "REST APIs"], ["UX", "Unix / macOS"],
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="stack-section section-wrap">
      <div className="section-kicker"><span>03</span><span>Working toolkit</span></div>
      <div className="section-heading-row stack-heading">
        <h2>Tools I reach<br /><em>for often.</em></h2>
        <p>Grouped by the kind of work they help me do. The labels drift gently; hover or tap to bring one into focus.</p>
      </div>
      <div className="skill-cloud">
        {groups.map((group, groupIndex) => (
          <div className="skill-group" key={group.label}>
            <span className="skill-group-label">{group.label}</span>
            <div className="skill-group-chips">
              {group.items.map(([mark, name]) => (
                <span className="skill-chip" key={name} data-cursor="link">
                  <b>{mark}</b><span>{name}</span>
                </span>
              ))}
            </div>
            {groupIndex < groups.length - 1 && <span className="skill-spark" aria-hidden="true">✳</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
