"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Systems", href: "#systems" },
  { label: "Experience", href: "#research" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="floating-nav" aria-label="Main navigation">
      <a href="#top" className="brand-mark" aria-label="Jesseman Devamirtham home" data-cursor="link">
        <span>J</span>
        <span className="brand-name">Jesseman<br />Devamirtham</span>
      </a>

      <div className="nav-pill">
        <a href="#top" aria-label="Home" data-cursor="link" className="nav-home">/</a>
        {links.map((link) => (
          <a key={link.href} href={link.href} data-cursor="link">{link.label}</a>
        ))}
      </div>

      <a
        href="https://github.com/Jesseman-418"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="profile-orb"
        data-cursor="link"
      >
        GH
      </a>

      <button
        className="mobile-nav-toggle"
        type="button"
        onClick={() => setMobileOpen((open) => !open)}
        aria-expanded={mobileOpen}
        aria-controls="mobile-links"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
      >
        <span />
        <span />
      </button>

      {mobileOpen && (
        <div className="mobile-nav-panel" id="mobile-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
          ))}
          <a href="mailto:njessemandevamirtham@gmail.com" onClick={() => setMobileOpen(false)}>Email me</a>
        </div>
      )}
    </nav>
  );
}
