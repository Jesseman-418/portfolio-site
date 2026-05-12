export default function Footer() {
  return (
    <footer className="bg-ink text-paper/50 py-8 border-t border-paper/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
        <span>
          © {new Date().getFullYear()} Jesseman Devamirtham · Built in Chennai
        </span>
        <span>
          Set in <em className="italic">Fraunces</em> &amp; Inter ·
          <a
            href="https://github.com/Jesseman-418/portfolio-site"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:text-cobalt-400 transition-colors"
          >
            Source ↗
          </a>
        </span>
      </div>
    </footer>
  );
}
