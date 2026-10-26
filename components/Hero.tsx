const socials = [
  { label: "GitHub", href: "https://github.com/Jesseman-418" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/njd-jesse/" },
  { label: "Email", href: "mailto:njessemandevamirtham@gmail.com" },
];

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-inner">
        <div className="hero-main">
          <div className="hero-copy">
            <h1>
              <span className="hero-first-name">Jesseman</span>
              <span>Devamirtham</span>
            </h1>
            <p className="hero-tagline">
              I build secure APIs, full-stack products, and practical automation.
            </p>
            <div className="hero-links">
              {socials.map((item) => (
                <a key={item.label} href={item.href} data-cursor="link" target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {item.label}
                </a>
              ))}
              <a className="hire-pill" href="#contact" data-cursor="link">Let&apos;s talk</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="https://avatars.githubusercontent.com/u/143321248?v=4"
                alt="Jesseman Devamirtham"
                width="460"
                height="460"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="status-card">
            <span className="status-avatar">JD</span>
            <div>
              <strong>Jesseman Devamirtham</strong>
            </div>
          </div>
          <p className="hero-summary">
            From OAuth services with 78 tests to telemetry systems for 50+ robotic weld machines, I like making complex systems feel clear and dependable.
          </p>
        </div>
      </div>
    </section>
  );
}
