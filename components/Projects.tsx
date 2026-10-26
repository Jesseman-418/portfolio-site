const projects = [
  {
    number: "01",
    tag: "API SECURITY",
    title: "Zero-Trust API Gateway",
    summary: "A reverse proxy that applies identity-aware access rules before traffic reaches an upstream service.",
    detail: "Built JWT/JWKS verification, RBAC and ABAC policies, per-user rate limits, circuit breakers, health checks, and request/error metrics. Verified the behavior with 25 automated tests.",
    stack: ["Node.js", "Express", "JWT / JWKS", "RBAC / ABAC"],
    proof: "25 automated tests",
    github: "https://github.com/Jesseman-418/zero-trust-api-gateway",
  },
  {
    number: "02",
    tag: "IDENTITY",
    title: "OAuth 2.0 Authorization Server",
    summary: "An OAuth 2.0 and OpenID Connect service for authorization-code and client-credentials flows.",
    detail: "Implemented PKCE, signed tokens, refresh-token rotation, and reuse detection, with routes, middleware, and database operations separated into modules. Covered the flows with 53 tests.",
    stack: ["Node.js", "Express", "SQLite", "PKCE"],
    proof: "53 automated tests",
    github: "https://github.com/Jesseman-418/oauth2-authorization-server",
  },
  {
    number: "03",
    tag: "APPLIED AI · RETRIEVAL",
    title: "DocQA AI",
    summary: "A document question-answering app that retrieves relevant passages and keeps their source citations attached.",
    detail: "Built PDF, text, and Markdown ingestion, sentence embeddings, a persistent FAISS index, and optional generated answers. Retrieval and answer behavior have pytest coverage.",
    stack: ["Python", "Streamlit", "FAISS", "pytest"],
    proof: "Source-linked retrieval",
    github: "https://github.com/Jesseman-418/docqa-ai",
  },
  {
    number: "04",
    tag: "AI SERVICES · WEB",
    title: "Meridius AI",
    summary: "An AI services company whose current focus is websites for local services, restaurants, spas, and similar businesses.",
    detail: "The website work brings together clear customer journeys, search-engine optimization, and generative-engine optimization. Meridius AI also provides broader AI services to businesses.",
    stack: ["Web strategy", "SEO", "GEO", "AI services"],
    proof: "Eight niche demos",
    github: "https://github.com/Jesseman-418/meridius-ai",
    live: "https://meridius-ai.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="work" className="projects-section border-t border-ink/10 py-24 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-14">
        <div className="mb-20 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="num-marker mb-5">Selected work / 2023—2026</p>
            <h2 className="display-text text-6xl md:text-8xl lg:text-[10rem]">
              Things I&apos;ve
              <span className="block pl-[12vw] italic text-cobalt">made.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink/60 lg:col-span-3 lg:col-start-10">
            A few systems, experiments, and client-focused builds. Each one
            started with a concrete problem and a different set of trade-offs.
          </p>
        </div>

        <div>
          {projects.map((project) => (
            <article key={project.number} className="project-row grid gap-7 border-t border-ink/15 py-10 md:grid-cols-12 md:gap-8 lg:py-14">
              <div className="flex items-start justify-between md:col-span-2 md:flex-col md:justify-start md:gap-5">
                <span className="project-number font-mono text-5xl text-cobalt/80">{project.number}</span>
                <span className="num-marker text-ink/45">{project.tag}</span>
              </div>

              <div className="md:col-span-7">
                <h3 className="display-text mb-5 max-w-4xl text-4xl leading-[0.95] md:text-6xl lg:text-7xl">
                  {project.title}
                </h3>
                <p className="mb-5 max-w-2xl text-xl leading-snug text-ink/85 md:text-2xl">
                  {project.summary}
                </p>
                <p className="max-w-2xl text-sm leading-relaxed text-ink/55 md:text-base">
                  {project.detail}
                </p>
                <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">
                  {project.stack.map((item, index) => (
                    <span key={item} className="flex items-center gap-3">
                      {index > 0 && <span className="text-cobalt">/</span>}
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-row items-end justify-between gap-6 md:col-span-3 md:flex-col md:items-end md:justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">{project.proof}</span>
                <div className="flex gap-5 text-sm">
                  {project.live && (
                    <a data-cursor="link" href={project.live} target="_blank" rel="noopener noreferrer" className="ink-link">Live site</a>
                  )}
                  <a data-cursor="link" href={project.github} target="_blank" rel="noopener noreferrer" className="ink-link">Source</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
