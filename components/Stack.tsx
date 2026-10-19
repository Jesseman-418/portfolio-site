const stack = [
  {
    "n": "01",
    "category": "Applications",
    "desc": "Building interfaces and the APIs behind them.",
    "primary": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js"
    ],
    "secondary": [
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs"
    ]
  },
  {
    "n": "02",
    "category": "Data & retrieval",
    "desc": "Relational data and semantic search for document applications.",
    "primary": [
      "SQL",
      "PostgreSQL",
      "SQLite"
    ],
    "secondary": [
      "FAISS",
      "Sentence embeddings",
      "Python"
    ]
  },
  {
    "n": "03",
    "category": "Identity & access",
    "desc": "Explicit authentication, authorization, and service protection.",
    "primary": [
      "OAuth 2.0",
      "OpenID Connect",
      "JWT / JWKS"
    ],
    "secondary": [
      "PKCE",
      "RBAC / ABAC",
      "Rate limiting"
    ]
  },
  {
    "n": "04",
    "category": "Development & testing",
    "desc": "Repeatable workflows and automated checks for application behavior.",
    "primary": [
      "Git",
      "Docker",
      "pytest",
      "Playwright"
    ],
    "secondary": [
      "Java",
      "Claude Code",
      "Codex"
    ]
  }
];

export default function Stack() {
  return (
    <section id="stack" className="py-32 lg:py-40 border-t border-ink/10 bg-paper-200/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-2">
            <span className="num-marker">03 — Stack</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-text text-5xl md:text-6xl leading-[0.95] mb-6">
              The tools, and{" "}
              <span className="italic">how I use them</span>
              <span className="text-cobalt">.</span>
            </h2>
            <p className="text-lg text-ink/70 max-w-xl">
              The technologies behind my projects, from application code
              and data storage to API security and automated testing.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {stack.map((s) => (
            <div key={s.n} className="border-t border-ink/15 pt-8">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="num-marker">{s.n}</span>
                <h3 className="display-text text-2xl">{s.category}</h3>
              </div>
              <p className="text-ink/70 mb-6 leading-relaxed">{s.desc}</p>

              <div className="mb-4">
                <div className="num-marker mb-2">Core</div>
                <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {s.primary.map((t) => (
                    <li
                      key={t}
                      className="text-sm font-mono text-ink bg-paper-300/60 px-2 py-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="num-marker mb-2">Also used</div>
                <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {s.secondary.map((t) => (
                    <li key={t} className="text-sm font-mono text-ink/55">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
