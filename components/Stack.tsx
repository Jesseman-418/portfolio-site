const stack = [
  {
    n: "01",
    category: "Web",
    desc: "Production web interfaces, end to end. App Router patterns, type-safe data flow, Web3 wallet integration, edge runtimes.",
    primary: ["TypeScript", "React", "Next.js (App Router)"],
    secondary: ["Tailwind CSS", "Framer Motion", "ethers.js / MetaMask", "Radix UI", "shadcn/ui"],
  },
  {
    n: "02",
    category: "Backend",
    desc: "Schema-first APIs. REST and GraphQL where each fits. Strong opinions on error handling and observability.",
    primary: ["Node.js", "Express", "Python / FastAPI"],
    secondary: ["REST", "GraphQL", "WebSockets", "Webhook handlers"],
  },
  {
    n: "03",
    category: "Data",
    desc: "Schema design that won't bite you in month 6. Indexes where they matter, denormalize where it pays.",
    primary: ["PostgreSQL", "MongoDB", "Redis"],
    secondary: ["Prisma ORM", "Mongoose", "Drizzle", "Pinecone (vector)"],
  },
  {
    n: "04",
    category: "Auth & security",
    desc: "Auth servers from primitives. JWT and OAuth 2.0 done right. Rate limiting in the right layer.",
    primary: ["OAuth 2.0", "JWT", "NextAuth.js"],
    secondary: ["RBAC", "ABAC", "API gateway design", "Rate limiting"],
  },
  {
    n: "05",
    category: "AI / ML",
    desc: "Research-grade PyTorch. LLM APIs for production. ViT, MARL, adversarial training as default frameworks.",
    primary: ["PyTorch", "LLM APIs (Claude, OpenAI)", "Hugging Face"],
    secondary: ["Vision Transformers", "Multi-agent RL", "Gradio", "LangChain"],
  },
  {
    n: "06",
    category: "Infrastructure",
    desc: "Containerized deploys to Vercel and beyond. CI that actually catches things. Observability before it's a fire.",
    primary: ["Docker", "Vercel", "GitHub Actions"],
    secondary: ["Linux", "Sentry", "Microservices", "Edge functions"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-32 lg:py-40 border-t border-ink/10 bg-paper-200/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-2">
            <span className="num-marker">04 — Stack</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-text text-5xl md:text-6xl leading-[0.95] mb-6">
              The tools, and{" "}
              <span className="italic">how I use them</span>
              <span className="text-cobalt">.</span>
            </h2>
            <p className="text-lg text-ink/70 max-w-xl">
              No skill bars. No percentages. Just what I reach for in
              production, with a line on{" "}
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
                <div className="num-marker mb-2">Daily</div>
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
                <div className="num-marker mb-2">Shipped</div>
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
