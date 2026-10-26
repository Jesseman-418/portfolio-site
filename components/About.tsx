export default function About() {
  return (
    <section id="about" className="about-section overflow-hidden py-24 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-14">
        <div className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-ink/15 pb-4">
          <span className="num-marker">A bit about me</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/40">Computer Science · AI &amp; Robotics</span>
        </div>

        <h2 className="display-text max-w-6xl text-5xl leading-[0.9] md:text-7xl lg:text-[7.5rem]">
          I like work that survives
          <span className="block pl-[9vw] italic text-cobalt">contact with reality.</span>
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:col-start-3">
            <p className="text-lg leading-relaxed text-ink/80">
              I’m Jesseman Devamirtham N, a 2026 Computer Science graduate from
              VIT Chennai. I build backend services and full-stack applications,
              with a focus on clear interfaces, secure access, and reliable
              behavior.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-4 lg:col-start-8">
            <p className="text-base leading-relaxed text-ink/60">
              At Hyundai Motor India, I worked on dashboards and anomaly
              detection for telemetry from 50+ robotic weld machines. I worked
              with floor engineers to diagnose a critical sensor failure and
              help restore the real-time pipeline within 24 hours.
            </p>
            <p className="text-base leading-relaxed text-ink/60">
              I founded Meridius AI, an AI services company for businesses.
              Its current focus is website work for local services, restaurants,
              spas, and similar businesses, with SEO and GEO optimization.
              My personal projects explore API security, OAuth/OIDC, and
              document retrieval.
            </p>
            <p className="text-base leading-relaxed text-ink/60">
              I’m interested in the parts of engineering that make software
              dependable after it works once: tests, observability, thoughtful
              failure handling, and deployment.
            </p>
          </div>
        </div>

        <div className="about-signals mt-20 grid grid-cols-1 border-y border-ink/15 sm:grid-cols-3">
          <div className="about-signal">
            <span className="num-marker">01 / tested</span>
            <strong className="display-text">78</strong>
            <span className="text-sm text-ink/50">tests across two API projects</span>
          </div>
          <div className="about-signal">
            <span className="num-marker">02 / industrial</span>
            <strong className="display-text">50+</strong>
            <span className="text-sm text-ink/50">robotic weld machines monitored</span>
          </div>
          <div className="about-signal">
            <span className="num-marker">03 / education</span>
            <strong className="display-text">2026</strong>
            <span className="text-sm text-ink/50">VIT Chennai · B.Tech CSE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
