const timeline = [
  {
    "when": "May 2025 — Present",
    "role": "Founder",
    "org": "Meridius AI",
    "what": "Develop automation systems for small businesses, turning recurring tasks into repeatable software workflows. Built a Python and Playwright lead-sourcing pipeline to replace repetitive manual prospect research, alongside website and digital-service work.",
    "href": "https://meridius-ai.vercel.app/"
  },
  {
    "when": "Jun — Jul 2025",
    "role": "Software Engineering Intern",
    "org": "Hyundai Motor India",
    "what": "Built dashboards and anomaly-detection pipelines for telemetry from 50+ robotic weld machines, supporting ISO audit work. Diagnosed a critical sensor failure with floor engineers and restored the real-time data pipeline within 24 hours.",
    "href": null
  },
  {
    "when": "Project-based",
    "role": "Independent Development & Copywriting",
    "org": "Freelance",
    "what": "Develop websites for small businesses and write email marketing for coaching businesses, translating open-ended briefs into useful digital experiences and clear communication.",
    "href": null
  },
  {
    "when": "During my B.Tech",
    "role": "Marketing Lead",
    "org": "Sports Club, VIT Chennai",
    "what": "Led event promotion, registrations, and student engagement. Additional campus leadership includes marketing and crowd coordination for VOYAGE’24.",
    "href": null
  },
  {
    "when": "Sep 2022 — Aug 2026",
    "role": "B.Tech Computer Science & Engineering",
    "org": "VIT Chennai",
    "what": "Graduated with a specialization in AI & Robotics. Co-authored an IEEE Xplore paper on location-based contact tracing and explored multi-agent reinforcement learning for adversarial defense in final-year project work.",
    "href": "https://ieeexplore.ieee.org/document/10537381"
  }
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
