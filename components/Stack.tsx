const lanes = [
  {
    label: "Build",
    note: "Interfaces and services",
    tools: ["TypeScript", "JavaScript", "Python", "React", "Next.js", "Node.js", "Express", "FastAPI"],
  },
  {
    label: "Connect",
    note: "Identity and data",
    tools: ["OAuth 2.0", "OpenID Connect", "JWT / JWKS", "PostgreSQL", "SQLite", "FAISS"],
  },
  {
    label: "Verify",
    note: "Quality and workflow",
    tools: ["pytest", "Playwright", "Docker", "Git", "REST APIs", "Unix / macOS"],
  },
];

const tape = ["Interfaces", "Identity", "Data", "Reliability", "Automation", "Testing"];

export default function Stack() {
  const repeatedTape = [...tape, ...tape, ...tape];

  return (
    <section id="stack" className="toolkit-section relative overflow-hidden border-y border-ink/10 py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-14">
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="num-marker mb-5">A working toolkit / Chennai, India</p>
            <h2 className="display-text max-w-4xl text-5xl md:text-7xl lg:text-8xl">
              The stack changes.
              <span className="block pl-[8vw] italic text-cobalt">The habit stays.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink/60 lg:col-span-4 lg:col-start-9">
            Tools are useful when they help make software easier to understand,
            safer to change, and more dependable in use.
          </p>
        </div>

        <div className="stack-lanes">
          {lanes.map((lane, index) => (
            <div key={lane.label} className="stack-lane group">
              <div className="stack-lane-label">
                <span className="num-marker">0{index + 1} / {lane.label}</span>
                <span className="hidden text-xs text-ink/40 sm:block">{lane.note}</span>
              </div>
              <ul className="stack-tokens">
                {lane.tools.map((tool, toolIndex) => (
                  <li key={tool} className="tool-token" style={{ "--token-index": toolIndex } as React.CSSProperties}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="stack-tape mt-20 border-y border-ink/10 py-4" aria-hidden="true">
        <div className="marquee-track flex items-center gap-7">
          {repeatedTape.map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-7">
              <span className="text-sm uppercase tracking-[0.16em] text-ink/45">{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
