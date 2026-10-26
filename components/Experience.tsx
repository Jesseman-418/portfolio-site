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
    <section id="research" className="experience-section section-wrap">
      <div className="section-kicker"><span>04</span><span>Work · study · research</span></div>
      <div className="section-heading-row experience-heading">
        <h2>Where I’ve<br /><em>been building.</em></h2>
        <p>Work that taught me to pay attention to the system around the code: the people, the data, and what happens when something fails.</p>
      </div>
      <div className="experience-list">
        {timeline.map((item, index) => (
          <article className="experience-item" key={item.when}>
            <span className="experience-index">0{index + 1}</span>
            <div className="experience-main">
              <span className="experience-when">{item.when}</span>
              <h3>{item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" data-cursor="link">{item.role}</a> : item.role}</h3>
              <span className="experience-note">{item.note}</span>
            </div>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
      <a className="publication-link" href="https://ieeexplore.ieee.org/document/10537381" target="_blank" rel="noopener noreferrer" data-cursor="link">
        <span>First-author publication · IEEE Xplore</span>
        <strong>Leveraging Location Data for Enhanced Contact Tracing in Educational Settings</strong>
      </a>
    </section>
  );
}
