export default function Footer() {
  return (
    <footer className="border-t border-neon-lime/5 py-10 sm:py-12 px-4 sm:px-6 relative">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-lime/10 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="gradient-text font-bold text-sm">JM</span>
          <span className="text-[10px] text-gray-700 font-mono tracking-wider">
            &copy; {new Date().getFullYear()} Jesse Man
          </span>
          <span className="text-[10px] text-gray-800 font-mono">·</span>
          <span className="text-[10px] text-gray-700 font-mono tracking-wider">
            Built with Next.js + Tailwind
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Jesseman-418"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-gray-600 hover:text-neon-lime/60 transition-colors font-mono tracking-wider uppercase"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jesse-man-devamirtham/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-gray-600 hover:text-neon-lime/60 transition-colors font-mono tracking-wider uppercase"
          >
            LinkedIn
          </a>
          <a
            href="mailto:njessemandevamirtham@gmail.com"
            className="text-[10px] text-gray-600 hover:text-neon-lime/60 transition-colors font-mono tracking-wider uppercase"
          >
            Email
          </a>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-neon-lime/5 via-neon-cyan/10 to-neon-purple/5" />
    </footer>
  );
}
