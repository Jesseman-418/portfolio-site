const timeline = [
  {
    when: "2026 — Present",
    role: "Founder",
    org: "Stratum",
    what: "Custom AI operating systems for solo operators — Claude Code workspaces with skills, commands, hooks, and automations, governed by one config. One-time builds across four tiers.",
    href: "https://stratum-three.vercel.app",
  },
  {
    when: "Summer 2025",
    role: "Intern — Digital ME",
    org: "Hyundai Motor India",
    what: "Data analysis + error correction on 590+ robotic systems across the production line. Python, SQL, IIoT data pipelines.",
    href: null,
  },
  {
    when: "2024 — Present",
    role: "Independent Engineer",
    org: "Client work",
    what: "Built and shipped 4 client SaaS platforms (NexusFlow AI, Solara Studio, VitalEdge Fitness, Artisan Eats). End-to-end from schema design through Vercel deployment.",
    href: null,
  },
  {
    when: "2022 — 2026",
    role: "B.Tech Computer Science",
    org: "VIT Chennai",
    what: "Final year. Focus on systems, distributed computing, and applied ML. Published one paper in IEEE Xplore during undergrad on geospatial contact tracing with ball-tree indexing. Capstone in progress on Vision Transformer activation functions.",
    href: null,
  },
];

export default function Experience() {
  return (
    <section id="research" className="py-32 lg:py-40 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-2">
            <span className="num-marker">05 — Track record</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-text text-5xl md:text-6xl leading-[0.95] mb-6">
              What I&apos;ve been{" "}
              <span className="italic">building</span>
              <span className="text-cobalt">.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2"></div>
          <div className="md:col-span-9">
            <ol className="relative">
              {timeline.map((t, i) => (
                <li
                  key={i}
                  className="relative pl-8 pb-12 border-l border-ink/15 last:border-l-transparent last:pb-0"
                >
                  <span className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-cobalt" />
                  <div className="num-marker mb-2">{t.when}</div>
                  <h3 className="display-text text-2xl md:text-3xl mb-1">
                    {t.role}
                    {t.href ? (
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ink-link text-cobalt ml-2"
                      >
                        &middot; {t.org} ↗
                      </a>
                    ) : (
                      <span className="text-ink/60"> &middot; {t.org}</span>
                    )}
                  </h3>
                  <p className="text-ink/70 max-w-2xl leading-relaxed mt-2">
                    {t.what}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
