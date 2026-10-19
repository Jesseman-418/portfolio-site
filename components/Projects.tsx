const cases = [
  {
    "n": "01",
    "title": "Zero-Trust API Gateway",
    "summary": "An identity-aware reverse proxy that checks who is calling, what they can access, and how much traffic they can send.",
    "problem": "Upstream services need consistent access control and resilience when dependencies become unhealthy.",
    "solution": "Implemented JWT/JWKS authentication, RBAC and ABAC policies, per-user rate limits, circuit breakers, health checks, and request/error metrics. Added 25 automated tests for authentication, policies, and proxy behavior.",
    "stack": [
      "Node.js",
      "Express",
      "JWT / JWKS",
      "RBAC / ABAC"
    ],
    "github": "https://github.com/Jesseman-418/zero-trust-api-gateway",
    "live": null,
    "tag": "API security · 25 tests"
  },
  {
    "n": "02",
    "title": "OAuth 2.0 Authorization Server",
    "summary": "An OAuth 2.0 and OpenID Connect server with authorization-code and client-credentials flows, PKCE, and signed tokens.",
    "problem": "Token issuance and renewal need explicit safeguards against interception and refresh-token reuse.",
    "solution": "Built PKCE verification, signed tokens, refresh-token rotation and reuse detection, with routes, middleware, and database operations separated into modules. Covered flows with 53 automated tests.",
    "stack": [
      "Node.js",
      "Express",
      "SQLite",
      "OAuth 2.0 / OIDC",
      "PKCE"
    ],
    "github": "https://github.com/Jesseman-418/oauth2-authorization-server",
    "live": null,
    "tag": "Identity · 53 tests"
  },
  {
    "n": "03",
    "title": "DocQA-AI",
    "summary": "Ask questions across PDF, text, and Markdown documents, with retrieved passages and source citations.",
    "problem": "Finding an answer in a collection of documents should preserve the source context and work without a hosted model.",
    "solution": "Built ingestion, paragraph-aware chunking, 384-dimensional sentence embeddings, and persistent FAISS search. Extractive answers run locally; optional OpenAI synthesis adds generative answers. Tested chunking, retrieval, and answer generation with pytest.",
    "stack": [
      "Python",
      "FAISS",
      "Streamlit",
      "sentence-transformers",
      "pytest"
    ],
    "github": "https://github.com/Jesseman-418/docqa-ai",
    "live": null,
    "tag": "Applied AI · Retrieval"
  },
  {
    "n": "04",
    "title": "Meridius AI",
    "summary": "A website studio portfolio showcasing eight distinct niche website demos, from hospitality to fitness and home services.",
    "problem": "Different local businesses need a visual identity and browsing experience tailored to their audience.",
    "solution": "Built a static HTML, CSS, and JavaScript showcase with optimized WebP imagery and individual Vercel deployments. Demo forms prepare local briefs or demonstrate interactions; they do not send enquiries.",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "WebP",
      "Vercel"
    ],
    "github": "https://github.com/Jesseman-418/meridius-ai",
    "live": "https://meridius-ai.vercel.app",
    "tag": "Web design · Showcase"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-32 lg:py-40 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-2">
            <span className="num-marker">04</span>
          </div>
          <div className="md:col-span-7">
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95] mb-6">
              Selected work<span className="text-cobalt">.</span>
            </h2>
            <p className="text-lg text-ink/70 max-w-xl leading-snug">
              Selected GitHub projects across API security, identity, document
              retrieval, and web design. Explore the implementation, tests,
              and setup in each repository.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {cases.map((c) => (
            <article
              key={c.n}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-16 border-t border-ink/10 lift"
            >
              <div className="md:col-span-2 flex md:flex-col gap-4 md:gap-2">
                <span className="num-marker">{c.n}</span>
                <span className="text-xs text-ink/40 small-caps">{c.tag}</span>
              </div>

              <div className="md:col-span-6">
                <h3 className="display-text text-3xl md:text-4xl mb-5 leading-tight">
                  {c.title}
                </h3>
                <p className="text-ink/80 mb-7 leading-relaxed">{c.summary}</p>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mb-7">
                  <div>
                    <div className="num-marker mb-1">Problem</div>
                    <p className="text-sm text-ink/70 leading-snug">{c.problem}</p>
                  </div>
                  <div>
                    <div className="num-marker mb-1">Solution</div>
                    <p className="text-sm text-ink/70 leading-snug">{c.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  {c.live && (
                    <a href={c.live} target="_blank" rel="noopener noreferrer" className="ink-link">
                      Live ↗
                    </a>
                  )}
                  {c.github && (
                    <a href={c.github} target="_blank" rel="noopener noreferrer" className="ink-link">
                      Source ↗
                    </a>
                  )}
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="num-marker mb-3">Stack</div>
                <ul className="space-y-1.5">
                  {c.stack.map((s) => (
                    <li key={s} className="text-sm text-ink/70 font-mono">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
