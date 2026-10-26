const timeline = [
  {
    when: "May 2025 — now",
    role: "Founder · Meridius AI",
    note: "AI services for businesses",
    detail: "Meridius AI provides a range of AI services. Current work focuses on websites for local services, restaurants, spas, and similar businesses, with SEO and GEO optimization.",
    href: "https://meridius-ai.vercel.app",
  },
  {
    when: "Jun — Jul 2025",
    role: "Software Engineering Intern · Hyundai Motor India",
    note: "Chennai",
    detail: "Built dashboards and anomaly-detection pipelines for telemetry from 50+ robotic weld machines. Worked with floor engineers to diagnose a sensor failure and help restore the real-time pipeline within 24 hours.",
    href: null,
  },
  {
    when: "Sep 2022 — Aug 2026",
    role: "B.Tech · Computer Science & Engineering",
    note: "VIT Chennai · AI & Robotics",
    detail: "Graduated in August 2026, with project experience in backend services, full-stack applications, and applied AI.",
    href: null,
  },
];

export default function Experience() {
  return (
    <section id="research" className="experience-section border-t border-ink/10 py-24 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-14">
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="num-marker mb-5">Field notes / work + study</p>
            <h2 className="display-text text-5xl md:text-7xl lg:text-8xl">
              Places I learned
              <span className="block pl-[12vw] italic text-cobalt">to build.</span>
            </h2>
          </div>
        </div>

        <ol className="experience-list">
          {timeline.map((item) => (
            <li key={item.when} className="experience-row">
              <div className="experience-date num-marker">{item.when}</div>
              <div className="experience-title">
                <h3 className="display-text text-3xl leading-tight md:text-4xl">
                  {item.href ? (
                    <a data-cursor="link" href={item.href} target="_blank" rel="noopener noreferrer" className="experience-link">
                      {item.role}
                    </a>
                  ) : item.role}
                </h3>
                <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.13em] text-ink/40">{item.note}</span>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-ink/55 md:text-base">{item.detail}</p>
            </li>
          ))}
        </ol>

        <div className="publication-line mt-14 grid gap-4 border-t border-ink/15 pt-5 md:grid-cols-12 md:items-start">
          <span className="num-marker md:col-span-2">Research · First author</span>
          <p className="md:col-span-7">
            <a data-cursor="link" href="https://ieeexplore.ieee.org/document/10537381" target="_blank" rel="noopener noreferrer" className="ink-link">
              Leveraging Location Data for Enhanced Contact Tracing in Educational Settings
            </a>
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/40">IEEE Xplore</span>
          </p>
        </div>
      </div>
    </section>
  );
}
