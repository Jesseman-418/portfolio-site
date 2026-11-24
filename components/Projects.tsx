const cases = [
  {
    "n": "01",
    "title": "Zero-Trust API Gateway",
    "summary": "Identity-aware reverse proxy with authentication, access policies, rate limiting, and upstream resilience.",
    "problem": "APIs need consistent identity checks and access controls while handling upstream failures.",
    "solution": "Implemented JWT/JWKS verification, RBAC/ABAC policies, per-user rate limiting, circuit breakers, health checks, and request/error metrics. Added 25 automated tests and setup documentation.",
    "stack": [
      "Node.js",
      "Express",
      "JWT / JWKS",
      "RBAC / ABAC"
    ],
    "github": "https://github.com/Jesseman-418/zero-trust-api-gateway",
    "live": null,
    "tag": "Backend · Security"
  },
  {
    "n": "02",
    "title": "OAuth 2.0 / OpenID Connect Server",
    "summary": "An authorization server with PKCE, signed tokens, and refresh-token reuse detection.",
    "problem": "Applications need clear authorization flows and token lifecycle controls to protect API access.",
    "solution": "Implemented authorization-code and client-credentials flows, PKCE, and refresh-token reuse detection with modular routes, middleware, and database operations. Added 53 automated tests.",
    "stack": [
      "Node.js",
      "Express",
      "SQLite",
      "OAuth 2.0",
      "OpenID Connect"
    ],
    "github": "https://github.com/Jesseman-418/oauth2-authorization-server",
    "live": null,
    "tag": "Identity · Backend"
  },
  {
    "n": "03",
    "title": "DocQA-AI",
    "summary": "Document question answering with semantic search, persistent indexing, and source citations.",
    "problem": "Finding useful answers in documents requires retrieval that makes the supporting evidence easy to inspect.",
    "solution": "Built PDF, TXT, and Markdown ingestion with 384-dimensional sentence embeddings and FAISS indexing. Added source citations, optional OpenAI answers, and pytest coverage for chunking, retrieval, and answer generation.",
    "stack": [
      "Python",
      "FAISS",
      "Streamlit",
      "pytest"
    ],
    "github": "https://github.com/Jesseman-418/docqa-ai",
    "live": null,
    "tag": "Applied AI · Retrieval"
  },
  {
    "n": "04",
    "title": "Meridius AI",
    "summary": "My website, digital-services, and small-business automation venture.",
    "problem": "Recurring business tasks and unclear digital interfaces create avoidable manual work.",
    "solution": "Develop websites and repeatable automation workflows. Built a Python and Playwright lead-sourcing pipeline to replace repetitive prospect research, alongside service presentation and interface development.",
    "stack": [
      "Python",
      "Playwright",
      "Web development",
      "Automation"
    ],
    "github": "https://github.com/Jesseman-418/meridius-ai",
    "live": "https://meridius-ai.vercel.app/",
    "tag": "Venture · Automation"
  },
  {
    "n": "05",
    "title": "Multi-Agent Adversarial Defense",
    "summary": "Final-year work exploring reinforcement-learning agents that defend image classifiers against adversarial attacks.",
    "problem": "Small FGSM and PGD perturbations can cause image classifiers to produce incorrect predictions.",
    "solution": "Explored coordinated PPO-based defense agents on MNIST using Python and PyTorch. The linked repository documents a related adversarial-training implementation; experimental results depend on the specific setup.",
    "stack": [
      "Python",
      "PyTorch",
      "PPO",
      "MNIST",
      "FGSM / PGD"
    ],
    "github": "https://github.com/Jesseman-418/adversarial-marl-defense",
    "live": null,
    "tag": "Research · Model Robustness"
  },
  {
    "n": "06",
    "title": "OpenEnv Data Cleaning Environment",
    "summary": "An environment for evaluating agents on structured data-cleaning tasks.",
    "problem": "Agents need repeatable tasks that expose format errors, missing values, typos, and multi-step cleaning challenges.",
    "solution": "Developed tasks for easy format standardization, missing values and typos, and a complete cleaning pipeline, with an environment for running and evaluating agent actions.",
    "stack": [
      "Python",
      "OpenEnv",
      "pandas",
      "Agent evaluation"
    ],
    "github": "https://github.com/Jesseman-418/data-cleaning-env",
    "live": "https://jesse1811-data-cleaning-env.hf.space/web/",
    "tag": "Applied AI · Data"
  },
  {
    "n": "07",
    "title": "Location-Based Contact Tracing",
    "summary": "IEEE-published research: Leveraging Location Data for Enhanced Contact Tracing in Educational Settings.",
    "problem": "Identifying nearby records in educational location datasets calls for efficient proximity search.",
    "solution": "Used BallTree nearest-neighbour search and Python analysis to identify proximity relationships. Co-authored with Sakshi Ashish Kedia and Harishankar S, mentored by Sudheer Kumar Erramchetty at VIT Chennai.",
    "stack": [
      "Python",
      "BallTree",
      "scikit-learn",
      "pandas"
    ],
    "github": "https://github.com/Jesseman-418/Contact-Tracing-using-Ball-tree-Algorithm",
    "live": "https://ieeexplore.ieee.org/document/10537381",
    "tag": "IEEE Publication · Research"
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
              Seven projects across backend security, full-stack development,
              automation, and applied AI. The problem, the implementation,
              and the technology behind each one.
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
