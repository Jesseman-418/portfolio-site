const cases = [
  {
    n: "01",
    title: "Zero-Trust API Gateway",
    summary: "OAuth 2.0 authorization server + API gateway with token introspection, rate limiting, and RBAC — the infra most B2B SaaS apps wire together from 5 separate vendors.",
    problem: "Early-stage SaaS auth stacks leak. Bearer tokens cached too long, scope inheritance unclear, rate limiting missing or in the wrong layer.",
    solution: "Built from primitives: token issuance, JWKS rotation, scope-based middleware, per-key rate buckets, audit logging. Documented as a reference implementation.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT", "OAuth 2.0"],
    github: "https://github.com/Jesseman-418/zero-trust-api-gateway",
    live: null,
    tag: "Infrastructure",
  },
  {
    n: "02",
    title: "NexusFlow AI",
    summary: "End-to-end SaaS marketing site + onboarding for an AI workflow platform. Schema-first, conversion-tuned, deployed on Vercel.",
    problem: "Client needed a high-trust founder-facing site that could hold up under enterprise scrutiny while shipping in under 2 weeks.",
    solution: "Built on Next.js App Router with type-safe content layer, custom animation system, and ICP-tuned copy. Lighthouse 98 / 100 / 100 / 100.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    github: "https://github.com/Jesseman-418/nexusflow-ai",
    live: "https://nexusflow-ai.vercel.app",
    tag: "Client work",
  },
  {
    n: "03",
    title: "Contact Tracing with Ball-Tree",
    summary: "IEEE-published research on geospatial contact tracing using ball-tree nearest-neighbor structures — sub-linear lookup for COVID-scale datasets.",
    problem: "Standard contact tracing queries scale O(n²) on naive distance checks. At 10M+ event pairs, that breaks.",
    solution: "Implemented ball-tree indexing over haversine distance, benchmarked against brute force + k-d tree, published the comparison and complexity proof in IEEE Xplore.",
    stack: ["Python", "scikit-learn", "NumPy", "Pandas", "Jupyter"],
    github: "https://github.com/Jesseman-418/Contact-Tracing-using-Ball-tree-Algorithm",
    live: null,
    tag: "Research · IEEE",
  },
  {
    n: "04",
    title: "ShadowOS",
    summary: "Multi-agent AI system entered at Milan AI Week 2026. Specialist agents coordinate around a shared task graph with cost-aware routing.",
    problem: "Single-agent LLM workflows hit a wall on tasks requiring research + execution + critique. Most multi-agent frameworks are research toys, not deployable.",
    solution: "Built an orchestrator + 6 specialist agents with explicit role contracts, retry semantics, and a routing layer that picks the cheapest model per step. Ships as a runnable spec.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Claude API", "Anthropic SDK"],
    github: "https://github.com/Jesseman-418/ShadowOS",
    live: null,
    tag: "AI Systems",
  },
  {
    n: "05",
    title: "Adversarial Defense in Multi-Agent RL",
    summary: "Capstone research on adversarial robustness in cooperative multi-agent reinforcement learning. Defended a centralized critic against gradient-based attacks.",
    problem: "Cooperative MARL agents are brittle under adversarial perturbation. Most defenses target single-agent RL and don't transfer.",
    solution: "Adapted projected gradient descent + adversarial training to the centralized-critic case, ran 30 experiments, documented attack-success-rate reduction.",
    stack: ["PyTorch", "Stable-Baselines3", "Gymnasium", "Weights & Biases"],
    github: "https://github.com/Jesseman-418/Adversarial-Attack-defense-using-MARL-approach",
    live: null,
    tag: "Research",
  },
  {
    n: "06",
    title: "VitalEdge Fitness",
    summary: "Coaching SaaS platform — client management, programming, payment flows. Built solo, end-to-end.",
    problem: "Client had no digital infrastructure. Bookings via DM, payments via Stripe Links, programs via Google Docs.",
    solution: "Built the whole stack: Postgres schema for clients/programs/sessions, Stripe Connect for split payments, scheduled background jobs for reminders, Next.js dashboard.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Vercel"],
    github: "https://github.com/Jesseman-418/vitaledge-fitness",
    live: "https://vitaledge-fitness.vercel.app",
    tag: "Client work",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-32 lg:py-40 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-2">
            <span className="num-marker">02</span>
          </div>
          <div className="md:col-span-7">
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95] mb-6">
              Selected work<span className="text-cobalt">.</span>
            </h2>
            <p className="text-lg text-ink/70 max-w-xl leading-snug">
              Six case studies across infrastructure, AI systems, client work,
              and research. Each one shipped or published.
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
