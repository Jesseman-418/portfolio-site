export default function About() {
  return (
    <section id="about" className="about-section section-wrap">
      <div className="section-kicker"><span>01</span><span>A little about me</span></div>
      <div className="about-layout">
        <h2>Good software<br /><em>does its job.</em></h2>
        <div className="about-copy">
          <p className="about-lede">
            I’m Jesseman, a Computer Science graduate from VIT Chennai. I work across backend services and full-stack applications, with a focus on secure access, dependable behavior, and interfaces that feel clear.
          </p>
          <p>
            At Hyundai Motor India, I worked with telemetry from 50+ robotic weld machines. After a critical sensor failure, I partnered with floor engineers to help restore the real-time pipeline within 24 hours.
          </p>
          <p>
            I also founded Meridius AI, an AI services company for businesses. Its current focus is websites for local services, restaurants, spas, and similar businesses, with SEO and GEO optimization.
          </p>
          <div className="about-facts">
            <div><strong>78</strong><span>tests across two API projects</span></div>
            <div><strong>50+</strong><span>machines in a live telemetry system</span></div>
            <div><strong>2026</strong><span>VIT Chennai · B.Tech CSE</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
