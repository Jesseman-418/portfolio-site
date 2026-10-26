export default function About() {
  return (
    <section id="about" className="py-32 lg:py-40 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <span className="num-marker">02 — About</span>
          </div>

          <div className="md:col-span-6 space-y-7 text-lg leading-relaxed text-ink/85">
            <h2 className="display-text text-3xl md:text-4xl leading-tight text-ink mb-2">
              Useful software.<br /><span className="text-cobalt">Carefully engineered.</span>
            </h2>
            <p>I’m Jesseman Devamirtham N, a 2026 Computer Science graduate from VIT Chennai, specializing in AI &amp; Robotics. I build backend services and full-stack applications, with a focus on secure access, reliable behavior, and clear interfaces.</p>
            <p>At Hyundai Motor India, I built dashboards and anomaly-detection pipelines for telemetry from 50+ robotic weld machines. Working with floor engineers, I diagnosed a critical sensor failure and helped restore the real-time pipeline within 24 hours.</p>
            <p>As founder of Meridius AI, I develop practical automation for small-business workflows, including a Python and Playwright pipeline for lead sourcing. My independent projects explore API security, OAuth/OIDC, and document retrieval with source citations.</p>
            <p>I’m applying to HENNGE’s Global Internship Program because I want to contribute to full-stack product work while learning from direct engineering feedback. I’m especially interested in developing my cloud deployment and DevOps skills through hands-on work and mentorship in Tokyo.</p>
            <p className="text-ink/60 pt-2">I care about understandable systems: clear interfaces, explicit access policies, useful diagnostics, and tests that exercise real behavior.</p>
          </div>

          <aside className="md:col-span-3 md:col-start-10 md:border-l md:border-ink/10 md:pl-8 space-y-7 text-sm">
            <div>
              <div className="num-marker mb-2">Based</div>
              <div className="text-ink/80">Chennai, India</div>
              <div className="text-ink/50">Open to relocating to Tokyo</div>
            </div>
            <div>
              <div className="num-marker mb-2">Discipline</div>
              <div className="text-ink/80">
                Backend &amp; full-stack engineering
                <br />
                <span className="text-ink/50">+ Applied AI/ML research</span>
              </div>
            </div>
            <div>
              <div className="num-marker mb-2">Education</div>
              <div className="text-ink/80">
                B.Tech CSE · AI &amp; Robotics
                <br />
                <span className="text-ink/50">VIT Chennai · 2022–2026</span>
              </div>
            </div>
            <div>
              <div className="num-marker mb-2">Selected evidence</div>
              <ul className="text-ink/80 space-y-1">
                <li>IEEE Xplore first-author publication</li>
                <li>78 tests across two API projects</li>
                <li>Hyundai Motor India internship</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
