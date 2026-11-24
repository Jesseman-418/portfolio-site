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
              I build useful software
              <span className="text-cobalt"> end to end.</span>
            </p>

            <p>
              My work spans secure APIs, web applications, industrial dashboards,
              and AI-powered document tools. I care about clear interfaces,
              reliable data, testable behavior, and explaining the decisions
              behind an implementation.
            </p>

            <p>
              React and Next.js for interfaces; Node.js, Express, and FastAPI
              for services; PostgreSQL and SQLite for data. My API gateway
              and authorization server cover JWT/JWKS, OAuth 2.0, PKCE, and
              access policies, with 78 automated tests across the two projects.
            </p>

            <p>
              I co-authored an IEEE Xplore paper on location-based contact
              tracing using BallTree search. My applied AI work includes
              document retrieval, data-cleaning agent environments, and
              multi-agent adversarial defense. Away from code, I follow
              football, FC Barcelona, and Messi.
            </p>

            <p className="text-ink/60 pt-2">
              Computer Science graduate from VIT Chennai, specializing in
              AI & Robotics. Open to full-time software engineering roles
              and freelance collaborations.
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
                B.Tech CSE · AI & Robotics
                <br />
                <span className="text-ink/50">VIT Chennai · Sep 2022–Aug 2026</span>
              </div>
            </div>
            <div>
              <div className="num-marker mb-2">Recognition</div>
              <ul className="text-ink/80 space-y-1">
                <li>IEEE Xplore published</li>
                <li>Founder, Meridius AI</li>
                <li>Hyundai Motor India intern</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
