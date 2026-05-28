export default function About() {
  return (
    <section id="about" className="py-32 lg:py-40 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <span className="num-marker">02 — About</span>
          </div>

          <div className="md:col-span-6 space-y-7 text-lg leading-relaxed text-ink/85">
            <p className="display-text text-3xl md:text-4xl leading-tight text-ink mb-2">
              I design and ship production systems
              <span className="text-cobalt"> end to end.</span>
            </p>

            <p>
              Not CRUD wrappers — auth servers built from primitives, API
              gateways with rate-limited token introspection, real-time data
              pipelines that hold up in prod. The unglamorous parts most
              portfolios skip: data integrity, edge cases, deploy reliability.
            </p>

            <p>
              Stack discipline: TypeScript on Next.js for the front end,
              Node or FastAPI for the back, PostgreSQL with Prisma for the
              schema layer, Redis for state. JWT, OAuth 2.0, RBAC done right.
              Web3 via ethers.js and MetaMask.
              Containerized deploys.
            </p>

            <p>
              AI-native by default. Published one IEEE Xplore paper during
              undergrad on geospatial contact tracing with ball-tree indexing.
              Capstone in progress on Vision Transformer activation functions.
              PyTorch + Hugging Face + LLM APIs as default tooling, not
              buzzwords.
            </p>

            <p className="text-ink/60 pt-2">
              Final-year Computer Science at VIT Chennai. Open to full-time
              roles starting mid-2026.
            </p>
          </div>

          <aside className="md:col-span-3 md:col-start-10 md:border-l md:border-ink/10 md:pl-8 space-y-7 text-sm">
            <div>
              <div className="num-marker mb-2">Based</div>
              <div className="text-ink/80">Chennai, India</div>
            </div>
            <div>
              <div className="num-marker mb-2">Discipline</div>
              <div className="text-ink/80">
                Full-stack engineering
                <br />
                <span className="text-ink/50">+ Applied AI/ML research</span>
              </div>
            </div>
            <div>
              <div className="num-marker mb-2">Education</div>
              <div className="text-ink/80">
                B.Tech CSE
                <br />
                <span className="text-ink/50">VIT Chennai · 2022–2026</span>
              </div>
            </div>
            <div>
              <div className="num-marker mb-2">Recognition</div>
              <ul className="text-ink/80 space-y-1">
                <li>IEEE Xplore published</li>
                <li>Scaler × Meta finalist</li>
                <li>Hyundai Motor India intern</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
