"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Work", href: "#work" },
    { label: "Systems", href: "#systems" },
    { label: "Experience", href: "#research" },
  ];

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="site-nav fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-paper/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3.5 lg:px-14">
        <a
          href="#top"
          data-cursor="link"
          aria-label="Jesseman Devamirtham home"
          className="flex items-center gap-3"
        >
          <span className="nav-monogram">J</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">
            Jesseman Devamirtham
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex lg:gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="link"
                className="nav-link font-mono text-[10px] uppercase tracking-[0.16em] text-ink/60 transition-colors hover:text-cobalt"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          data-cursor="link"
          href="mailto:njessemandevamirtham@gmail.com"
          className="nav-contact hidden items-center gap-3 border border-ink/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors hover:border-cobalt hover:text-cobalt md:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
          Say hello
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="nav-toggle md:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="mobile-menu md:hidden">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              data-cursor="link"
              className="mobile-menu-link"
            >
              <span className="num-marker">0{index + 1}</span>
              <span>{link.label}</span>
            </a>
          ))}
          <a
            href="mailto:njessemandevamirtham@gmail.com"
            onClick={closeMenu}
            className="mobile-menu-contact"
          >
            njessemandevamirtham@gmail.com
          </a>
        </div>
      )}
    </nav>
  );
}
