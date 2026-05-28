export default function Contact() {
  return (
    <section id="contact" className="py-32 lg:py-48 border-t border-ink/10 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <span className="num-marker" style={{ color: "#a3a3a3" }}>
              06 — Contact
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95] mb-12">
              Building something
              <br />
              <span className="italic">production-grade</span>?
            </h2>

            <p className="text-xl md:text-2xl text-paper/80 max-w-2xl mb-16 leading-snug font-light">
              Open to full-time engineering roles starting mid-2026, and
              selective client builds in the interim. The fastest path is
              email.
            </p>

            <ul className="space-y-5 text-lg">
              <li className="flex items-baseline gap-6">
                <span className="num-marker text-paper-300">Email</span>
                <a
                  href="mailto:njessemandevamirtham@gmail.com"
                  className="text-paper hover:text-cobalt-400 underline decoration-paper/30 decoration-1 underline-offset-4 hover:decoration-cobalt-400 transition-colors"
                >
                  njessemandevamirtham@gmail.com
                </a>
              </li>
              <li className="flex items-baseline gap-6">
                <span className="num-marker text-paper-300">GitHub</span>
                <a
                  href="https://github.com/Jesseman-418"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper hover:text-cobalt-400 underline decoration-paper/30 decoration-1 underline-offset-4 transition-colors"
                >
                  github.com/Jesseman-418 ↗
                </a>
              </li>
              <li className="flex items-baseline gap-6">
                <span className="num-marker text-paper-300">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/njd-jesse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper hover:text-cobalt-400 underline decoration-paper/30 decoration-1 underline-offset-4 transition-colors"
                >
                  linkedin.com/in/njd-jesse ↗
                </a>
              </li>
              <li className="flex items-baseline gap-6">
                <span className="num-marker text-paper-300">Studio</span>
                <a
                  href="https://stratum-three.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper hover:text-cobalt-400 underline decoration-paper/30 decoration-1 underline-offset-4 transition-colors"
                >
                  stratum-three.vercel.app ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
