"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Track record", href: "#research" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-lg border-b border-ink/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#" className="display-text text-xl tracking-tightest">
          Jesseman<span className="text-cobalt">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-ink/70 hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:njessemandevamirtham@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm bg-ink text-paper hover:bg-cobalt transition-colors"
        >
          Get in touch
          <span aria-hidden>→</span>
        </a>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-ink"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-paper border-b border-ink/5 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-ink/70 hover:text-ink text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:njessemandevamirtham@gmail.com"
            className="block w-full text-center px-4 py-2.5 bg-ink text-paper text-sm"
          >
            Get in touch →
          </a>
        </div>
      )}
    </nav>
  );
}
