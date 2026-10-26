import Constellation from "@/components/Constellation";

export default function Hero() {
  return (
    <section id="top" className="hero-section relative min-h-[96svh] overflow-hidden pt-28 pb-10">
      <div className="hero-orbit absolute right-[-8%] top-[15%] z-0 h-[min(78vw,880px)] w-[min(78vw,880px)] opacity-75 pointer-events-none">
        <Constellation />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-[1500px] flex-col justify-between px-6 lg:px-14">
        <div className="flex items-center justify-between gap-6 border-b border-ink/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="signal-dot h-2 w-2 rounded-full bg-cobalt" />
            <span className="num-marker">Software engineer · Chennai, India</span>
          </div>
          <span className="num-marker hidden sm:inline">Available for full-stack roles</span>
        </div>

        <div className="relative mt-20 md:mt-28">
          <p className="num-marker mb-5">Jesseman Devamirtham N · VIT Chennai · Class of 2026</p>
          <h1 className="hero-name display-text max-w-6xl text-[clamp(4.7rem,13.6vw,13.5rem)] leading-[0.78]">
            <span className="block">Jesseman</span>
            <span className="block pl-[5vw] italic text-cobalt">Devamirtham</span>
            <span>.</span>
          </h1>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink/20 pt-7 md:grid-cols-12 md:items-end">
          <p className="max-w-[42rem] text-lg leading-relaxed text-ink/75 md:col-span-6 md:col-start-2 md:text-xl">
            I build secure APIs, full-stack products, and practical automation.
            From OAuth services with 78 tests to telemetry systems for 50+
            robotic weld machines, I like making complex systems feel clear
            and dependable.
          </p>
          <div className="flex flex-wrap items-end gap-x-8 gap-y-5 md:col-span-4 md:col-start-9 md:justify-end">
            <div>
              <div className="num-marker mb-2">Focus</div>
              <div className="text-sm text-ink/80">Backend · Full-stack · Applied AI</div>
            </div>
            <a href="#work" data-cursor="link" className="hero-cta">
              Explore the work
              <span aria-hidden="true" className="cta-mark">↘</span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-ink/15 pt-4">
          <span className="num-marker">Build · Test · Learn · Repeat</span>
          <div className="flex gap-6 text-sm">
            <a data-cursor="link" className="ink-link" href="https://github.com/Jesseman-418" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a data-cursor="link" className="ink-link" href="https://www.linkedin.com/in/njd-jesse/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a data-cursor="link" className="ink-link" href="mailto:njessemandevamirtham@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
