const cases = [
  {
    n: "01",
    title: "PollChain",
    summary: "Decentralized voting dApp with MetaMask wallet auth, live on-chain vote counting, and a no-wallet demo mode. Six routes, animated real-time results.",
    problem: "Web3 UX is the wall most users hit — wallet connection, transaction states, and on-chain latency break the interface if the frontend isn't built for them.",
    solution: "Built the full frontend in Next.js 14 + TypeScript: ethers.js wallet integration, React Context for chain state, animated progress bars driven by live vote data, and a demo fallback so anyone can explore without a wallet.",
    stack: ["Next.js 14", "React", "TypeScript", "ethers.js", "MetaMask", "Tailwind"],
    github: "https://github.com/Jesseman-418/Pollchain-frontend",
    live: "https://pollchain-frontend.vercel.app",
    tag: "Web3 · dApp",
  },
  {
    n: "02",
    title: "TaskFlow",
    summary: "Full-stack Kanban board with native drag-and-drop, multi-board management, and type-safe server-driven mutations. Strict-mode TypeScript throughout.",
    problem: "Drag-and-drop boards get janky fast — optimistic UI, persistence, and re-render control fight each other once state grows.",
    solution: "Built on Next.js 14 App Router with Server Actions for every mutation, native HTML5 drag-and-drop, a priority/label/due-date task model, search + filter, and Prisma migrations. No client-state library — server actions keep it type-safe end to end.",
    stack: ["Next.js 14", "TypeScript (strict)", "Server Actions", "Prisma", "SQLite", "Tailwind"],
    github: "https://github.com/Jesseman-418/taskflow",
    live: null,
    tag: "Interactive UI",
  },
  {
    n: "03",
    title: "NexusFlow AI",
    summary: "High-performance marketing + onboarding site for an AI workflow platform. Lighthouse 98 / 100 / 100 / 100, custom animation system, type-safe content layer.",
    problem: "Client needed an enterprise-grade, founder-facing site that loads instantly and holds up under scrutiny — shipped in under two weeks.",
    solution: "Next.js App Router with a type-safe content layer, a hand-built Framer Motion animation system, and ICP-tuned copy. Tuned to a near-perfect Lighthouse score across all four axes.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    github: "https://github.com/Jesseman-418/nexusflow-ai",
    live: "https://nexusflow-ai.vercel.app",
    tag: "Performance",
  },
  {
    n: "04",
    title: "VitalEdge Fitness",
    summary: "Coaching SaaS with client dashboards, programming, and Stripe payment flows. Built solo, end to end — the premium-user systems a token economy needs, minus the chain.",
    problem: "Client ran the whole business on DMs, Google Docs, and Stripe payment links. No dashboard, no billing logic, no source of truth.",
    solution: "Built the full product: typed dashboards for clients and programs, Stripe Connect split payments, scheduled reminder jobs, and a Prisma schema that won't bite in month six.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Vercel"],
    github: "https://github.com/Jesseman-418/vitaledge-fitness",
    live: "https://vitaledge-fitness.vercel.app",
    tag: "Dashboards · Payments",
  },
  {
    n: "05",
    title: "Kaval",
    summary: "Shipped production frontend for an AI digital-safety agent that sits between the user and the internet. Built on the latest Next.js, live in production.",
    problem: "A new AI product needs a frontend that explains an unfamiliar concept fast and converts — on a bleeding-edge Next.js with breaking API changes.",
    solution: "Built the production site on Next.js 16 App Router, reading the framework's own docs to ship against APIs newer than most tooling supports. Clean, fast, conversion-tuned.",
    stack: ["Next.js 16", "React", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/Jesseman-418/kaval",
    live: "https://kaval.chat",
    tag: "Product",
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
              Five builds across Web3, real-time interfaces, and production
              frontends — wallet integration, server-driven state, sub-second
              loads. Each one shipped.
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
