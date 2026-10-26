export default function Contact() {
  return (
    <section id="contact" className="contact-section overflow-hidden bg-cobalt py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-14">
        <div className="mb-20 flex flex-wrap items-center justify-between gap-4 border-b border-paper/20 pb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/65">End of page · Start of conversation</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/65">Chennai, India</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="display-text text-6xl leading-[0.82] md:text-8xl lg:col-span-9 lg:text-[10rem]">
            Have a good
            <span className="block pl-[10vw] italic">problem?</span>
          </h2>

          <div className="flex flex-col justify-end gap-8 lg:col-span-3">
            <p className="max-w-sm text-base leading-relaxed text-paper/75">
              I’m open to full-stack engineering opportunities and thoughtful
              conversations about secure APIs, dependable systems, and applied AI.
            </p>
            <a
              data-cursor="link"
              href="mailto:njessemandevamirtham@gmail.com"
              className="contact-email"
            >
              njessemandevamirtham@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-8 border-t border-paper/20 pt-5 sm:flex-row sm:items-end">
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.14em]">
            <a data-cursor="link" href="https://github.com/Jesseman-418" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            <a data-cursor="link" href="https://www.linkedin.com/in/njd-jesse/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            <a data-cursor="link" href="https://meridius-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-link">Meridius AI</a>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/60">Jesseman Devamirtham N · 2026</span>
        </div>
      </div>
    </section>
  );
}
