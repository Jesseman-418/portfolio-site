export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex items-center justify-between mb-20 md:mb-32">
          <span className="num-marker">FULL-STACK ENGINEERING · 2026</span>
          <span className="num-marker hidden md:inline">Chennai · India</span>
        </div>

        <h1 className="display-text text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.92] mb-10">
          Jesseman
          <br />
          <span className="italic">Devamirtham</span>
          <span className="text-cobalt">.</span>
        </h1>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 max-w-5xl mt-12">
          <div className="md:col-span-7 md:col-start-2">
            <p className="text-xl md:text-2xl text-ink/80 leading-snug font-light">
              I’m a 2026 VIT Chennai Computer Science graduate building secure
              APIs, full-stack products, and practical automation. My work
              includes OAuth and OpenID Connect services with 78 automated
              tests, and real-time telemetry systems for 50+ robotic weld
              machines. I’m looking for a full-stack engineering role where I
              can contribute across the stack and deepen my cloud and DevOps
              experience through hands-on work and mentorship.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-10 flex md:flex-col items-start gap-6 md:gap-2 text-sm">
            <div>
              <div className="num-marker mb-1">Education</div>
              <div className="text-ink/80">B.Tech CSE · VIT Chennai</div>
              <div className="text-ink/50">AI &amp; Robotics · 2022–2026</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mt-20 pt-8 border-t border-ink/10">
          <div className="md:col-span-4 md:col-start-2">
            <div className="num-marker mb-2">Selected Work</div>
            <a href="#work" className="display-text text-2xl ink-link">
              Explore the projects
            </a>
          </div>
          <div className="md:col-span-2">
            <div className="num-marker mb-2">Code</div>
            <a
              href="https://github.com/Jesseman-418"
              target="_blank"
              rel="noopener noreferrer"
              className="display-text text-2xl ink-link"
            >
              GitHub
            </a>
          </div>
          <div className="md:col-span-3">
            <div className="num-marker mb-2">Profile</div>
            <a
              href="https://www.linkedin.com/in/njd-jesse/"
              target="_blank"
              rel="noopener noreferrer"
              className="display-text text-2xl ink-link"
            >
              LinkedIn
            </a>
          </div>
          <div className="md:col-span-3">
            <div className="num-marker mb-2">Contact</div>
            <a
              href="mailto:njessemandevamirtham@gmail.com"
              className="display-text text-2xl ink-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
