"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["about", "projects", "fullstack", "skills", "experience", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Fullstack", href: "#fullstack" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-950/80 backdrop-blur-xl border-b border-neon-lime/5 shadow-[0_4px_30px_rgba(0,255,0,0.03)]"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-lime/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2">
          <div className="relative">
            <span className="text-xl font-bold tracking-tight gradient-text text-glow-lime">JM</span>
            {/* Glitch layer */}
            <span className="absolute inset-0 text-xl font-bold tracking-tight text-neon-cyan/30 translate-x-[1px] translate-y-[-1px] opacity-0 group-hover:opacity-100 transition-opacity">JM</span>
          </div>
          <span className="text-gray-600 text-xs font-mono hidden sm:inline tracking-widest uppercase">
            //dev
          </span>
          {/* Status dot */}
          <div className="hidden sm:flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded-full bg-neon-lime/5 border border-neon-lime/10">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-status-pulse" />
            <span className="text-[10px] text-neon-lime/60 font-mono">ONLINE</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm px-3 py-2 rounded-lg transition-all font-mono text-xs tracking-wider ${
                active === link.href.slice(1)
                  ? "text-neon-lime bg-neon-lime/5 shadow-[0_0_15px_rgba(0,255,0,0.05)]"
                  : "text-gray-500 hover:text-neon-lime/80 hover:bg-white/[0.02]"
              }`}
            >
              <span className="text-neon-lime/30 mr-1">&gt;</span>
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/njd-jesse/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-xs font-mono font-medium px-5 py-2.5 rounded-lg bg-neon-lime/10 hover:bg-neon-lime/20 text-neon-lime border border-neon-lime/20 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] tracking-wider uppercase"
          >
            Hire_Me()
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-neon-lime/60 hover:text-neon-lime p-3 -m-1 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-neon-lime/5 px-4 sm:px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 text-gray-400 hover:text-neon-lime transition-colors font-mono text-sm min-h-[48px]"
            >
              <span className="text-neon-lime/30 mr-2">&gt;</span>
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/njd-jesse/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 text-center font-mono font-medium px-5 py-3 min-h-[48px] rounded-lg bg-neon-lime/10 text-neon-lime border border-neon-lime/20"
          >
            Hire_Me()
          </a>
        </div>
      )}
    </nav>
  );
}
