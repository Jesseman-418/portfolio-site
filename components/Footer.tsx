export default function Footer() {
  return (
    <footer className="site-footer border-t border-ink/10 bg-paper py-7 text-ink/45">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-6 font-mono text-[10px] uppercase tracking-[0.12em] sm:flex-row sm:items-center sm:justify-between lg:px-14">
        <span>© {new Date().getFullYear()} Jesseman Devamirtham · Built in Chennai</span>
        <span>
          Set in <em className="normal-case italic">Fraunces</em> + Inter ·
          <a
            data-cursor="link"
            href="https://github.com/Jesseman-418/portfolio-site"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-ink/70 transition-colors hover:text-cobalt"
          >
            Source
          </a>
        </span>
      </div>
    </footer>
  );
}
