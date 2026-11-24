const stack = [
  {
    "n": "01",
    "category": "Web",
    "desc": "Useful interfaces with clear state and reusable components.",
    "primary": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js"
    ],
    "secondary": [
      "Tailwind CSS",
      "HTML",
      "CSS"
    ]
  },
  {
    "n": "02",
    "category": "Backend",
    "desc": "APIs and repeatable automation workflows, with explicit validation and error handling.",
    "primary": [
      "Node.js",
      "Express",
      "Python / FastAPI"
    ],
    "secondary": [
      "REST APIs",
      "Playwright",
      "Java"
    ]
  },
  {
    "n": "03",
    "category": "Data",
    "desc": "Relational storage, document data, and vector retrieval.",
    "primary": [
      "PostgreSQL",
      "SQLite",
      "MongoDB"
    ],
    "secondary": [
      "SQL",
      "FAISS",
      "pandas",
      "NumPy"
    ]
  },
  {
    "n": "04",
    "category": "Auth & security",
    "desc": "Authentication and authorization systems with tested token and policy behavior.",
    "primary": [
      "OAuth 2.0",
      "OpenID Connect",
      "JWT / JWKS"
    ],
    "secondary": [
      "PKCE",
      "RBAC",
      "ABAC",
      "Rate limiting"
    ]
  },
  {
    "n": "05",
    "category": "AI / ML",
    "desc": "Applied experiments in retrieval, model robustness, and agent evaluation.",
    "primary": [
      "Python",
      "PyTorch",
      "scikit-learn"
    ],
    "secondary": [
      "Sentence embeddings",
      "Multi-agent RL",
      "OpenEnv",
      "OpenAI APIs"
    ]
  },
  {
    "n": "06",
    "category": "Tools & testing",
    "desc": "Reproducible development, version control, and automated checks.",
    "primary": [
      "Git",
      "Docker",
      "pytest"
    ],
    "secondary": [
      "Playwright",
      "Claude Code",
      "Codex",
      "C / C++"
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
              The full stack &mdash; front to back. No skill bars, no
              percentages. The tools I use across projects, with a line on{" "}
              <em className="italic">why</em>.
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
