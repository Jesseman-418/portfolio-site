export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full">
        {/* Top marker row */}
        <div className="flex items-center justify-between mb-20 md:mb-32">
          <span className="num-marker">01 — Portfolio · 2026</span>
          <span className="num-marker hidden md:inline">Chennai · IND</span>
        </div>

        {/* Headline */}
        <h1 className="display-text text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.92] mb-10">
          Jesseman
          <br />
          <span className="italic">Devamirtham</span>
          <span className="text-cobalt">.</span>
        </h1>

        {/* Subhead grid */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 max-w-5xl mt-12">
          <div className="md:col-span-7 md:col-start-2">
            <p className="text-xl md:text-2xl text-ink/80 leading-snug font-light">
              Full-stack engineer in Chennai. I design and ship complete
              production systems &mdash; React and Next.js front ends, Node and
              FastAPI back ends, PostgreSQL data layers, auth from primitives,
              and Web3 wallet flows. Front to back, schema to deploy.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-10 flex md:flex-col items-start gap-6 md:gap-2 text-sm">
            <div>
              <div className="num-marker mb-1">Currently</div>
              <div className="text-ink/80">B.Tech CSE · VIT Chennai</div>
              <div className="text-ink/50">Final year</div>
            </div>
          </div>
        </div>

        {/* Bottom row — quick links */}
        <div className="grid md:grid-cols-12 gap-8 mt-20 pt-8 border-t border-ink/10">
          <div className="md:col-span-4 md:col-start-2">
            <div className="num-marker mb-2">Selected Work</div>
            <a href="#work" className="display-text text-2xl ink-link">
              Five case studies →
            </a>
          </div>
          <div className="md:col-span-3">
            <div className="num-marker mb-2">Code</div>
            <a
              href="https://github.com/Jesseman-418"
              target="_blank"
              rel="noopener noreferrer"
              className="display-text text-2xl ink-link"
            >
              GitHub →
            </a>
          </div>
          <div className="md:col-span-3">
            <div className="num-marker mb-2">Contact</div>
            <a
              href="mailto:njessemandevamirtham@gmail.com"
              className="display-text text-2xl ink-link"
            >
              Email →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
