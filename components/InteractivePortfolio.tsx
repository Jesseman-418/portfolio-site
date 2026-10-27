"use client";

import { useEffect, useMemo, useState } from "react";

type Project = {
  id: string;
  name: string;
  category: "Backend" | "AI & product" | "Founder";
  year: string;
  summary: string;
  details: string;
  stack: string[];
  repo: string;
  live?: string;
  color: string;
  mark: string;
};

const projects: Project[] = [
  {
    id: "gateway",
    name: "Zero-trust API gateway",
    category: "Backend",
    year: "2026",
    summary: "A policy-aware gateway that verifies identity before a request reaches its service.",
    details: "Built around JWT/JWKS verification, role and attribute-based access, per-user rate limits, circuit breakers, health checks, and request metrics. The repository includes 25 automated tests.",
    stack: ["TypeScript", "Node.js", "JWT / JWKS", "Playwright"],
    repo: "https://github.com/Jesseman-418/zero-trust-api-gateway",
    color: "#d8f06a",
    mark: "01",
  },
  {
    id: "oauth",
    name: "OAuth 2.0 authorization server",
    category: "Backend",
    year: "2026",
    summary: "Authorization-code and client-credentials flows with the safety details built in.",
    details: "Implements PKCE, signed tokens, refresh-token rotation, and reuse detection, with routes and data operations separated into modules. The repository includes 53 tests.",
    stack: ["TypeScript", "OAuth 2.0", "OpenID Connect", "PostgreSQL"],
    repo: "https://github.com/Jesseman-418/oauth2-authorization-server",
    color: "#b6d5ff",
    mark: "02",
  },
  {
    id: "docqa",
    name: "DocQA AI",
    category: "AI & product",
    year: "2026",
    summary: "A document workspace that answers from retrieved passages and keeps citations close.",
    details: "Handles PDF, text, and Markdown ingestion, sentence embeddings, persistent FAISS search, and local extractive answers with optional generated responses.",
    stack: ["Python", "FastAPI", "FAISS", "React"],
    repo: "https://github.com/Jesseman-418/docqa-ai",
    color: "#ffae9b",
    mark: "03",
  },
  {
    id: "meridius",
    name: "Meridius AI",
    category: "Founder",
    year: "2025—",
    summary: "An AI services company building useful digital experiences for local businesses.",
    details: "Founded in May 2025. Current work focuses on distinctive websites for local services, restaurants, and wellness businesses, with search and generative-engine visibility in mind.",
    stack: ["Product", "Web design", "SEO / GEO"],
    repo: "https://github.com/Jesseman-418/meridius-ai",
    live: "https://meridius-ai.vercel.app",
    color: "#d4a8ff",
    mark: "04",
  },
  {
    id: "shadowos",
    name: "ShadowOS",
    category: "AI & product",
    year: "2026",
    summary: "An AI-assisted operating environment explored through tools, memory, and agents.",
    details: "A product experiment combining the Gemini API with multi-agent coordination. The code and current state are available in the repository.",
    stack: ["TypeScript", "Gemini API", "Agents"],
    repo: "https://github.com/Jesseman-418/ShadowOS",
    color: "#ffc96f",
    mark: "05",
  },
];

const filters = ["All work", "Backend", "AI & product", "Founder"] as const;

export default function InteractivePortfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const [active, setActive] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 40 });

  const visible = useMemo(
    () => filter === "All work" ? projects : projects.filter((project) => project.category === filter),
    [filter],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="folio" style={{ "--px": `${pointer.x}%`, "--py": `${pointer.y}%` } as React.CSSProperties}
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;
        const box = event.currentTarget.getBoundingClientRect();
        setPointer({ x: ((event.clientX - box.left) / box.width) * 100, y: ((event.clientY - box.top) / box.height) * 100 });
      }}>
      <header className="folio-nav">
        <a className="wordmark" href="#home" aria-label="Jesseman Devamirtham, home"><span className="wordmark-symbol">J<span>.</span></span><span>Jesseman<br />Devamirtham</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}><i /><i /></button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch <span>↗</span></a>
        </nav>
      </header>

      <section className="folio-hero" id="home">
        <div className="hero-topline"><span>SOFTWARE ENGINEER · FOUNDER</span><span className="available"><i /> CHENNAI, INDIA <span className="live-clock">/ OPEN TO WHAT’S NEXT</span></span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-intro">I’m Jesseman.</p>
            <h1>I make<br /><em>systems</em><br />make sense<span className="hero-dot">.</span></h1>
            <p className="hero-description">I build dependable software, explore applied AI, and run Meridius AI — a studio helping businesses make better use of the web.</p>
            <div className="hero-actions"><a className="button-primary" href="#work">Explore selected work <span>↘</span></a><a className="text-link" href="mailto:njessemandevamirtham@gmail.com">Start a conversation <span>↗</span></a></div>
          </div>
          <aside className="hero-art" aria-label="Interactive project constellation">
            <div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" />
            <div className="orbit-label label-a">BACKEND SYSTEMS</div><div className="orbit-label label-b">APPLIED AI</div>
            <div className="orbit-center"><span>JD</span><small>BUILD / LEARN / REPEAT</small></div>
            <div className="orbit-node node-a">API</div><div className="orbit-node node-b">AI</div><div className="orbit-node node-c">UX</div>
            <div className="art-caption">A practice across<br />product &amp; engineering</div>
          </aside>
        </div>
        <div className="hero-bottomline"><span>FULL-STACK PRODUCT ENGINEERING</span><span>SECURE BACKENDS</span><span>APPLIED AI</span><span>↘ SCROLL TO EXPLORE</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-head"><div><span className="section-index">01 / SELECTED WORK</span><h2>Built to be<br /><em>useful.</em></h2></div><p>Products and systems shaped around real constraints: security, evidence, reliability, and the people using them.</p></div>
        <div className="filter-row" role="tablist" aria-label="Filter projects">
          {filters.map((item) => <button key={item} role="tab" aria-selected={filter === item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>{item}<span>{item === "All work" ? projects.length.toString().padStart(2, "0") : projects.filter((project) => project.category === item).length.toString().padStart(2, "0")}</span></button>)}
        </div>
        <div className="work-grid">
          {visible.map((project, index) => <button className="work-card" key={project.id} onClick={() => setActive(project)} style={{ "--accent": project.color, "--delay": `${index * 70}ms` } as React.CSSProperties} aria-label={`Open ${project.name} case study`}>
            <div className="card-art"><div className="art-index">{project.mark} <span>{project.category}</span></div>
              {project.id === "gateway" && <div className="gateway-visual"><div className="gateway-lock">⌑</div><div className="gateway-line" /><div className="gateway-check">REQUEST<br /><b>AUTHORIZED</b></div><div className="gateway-bottom"><i /> TOKEN VERIFIED <span>18 MS</span></div></div>}
              {project.id === "oauth" && <div className="auth-visual"><div className="auth-step">CLIENT</div><div className="auth-connector">··········</div><div className="auth-step featured">VERIFY</div><div className="auth-connector">··········</div><div className="auth-step">TOKEN</div><small>PKCE · OIDC · ROTATION</small></div>}
              {project.id === "docqa" && <div className="doc-visual"><div className="doc-stamp">DOCQA / WORKSPACE</div><h3>What does<br />the evidence say?</h3><div className="doc-source">↳ research-notes.pdf <span>PAGE 04</span></div><div className="doc-source">↳ implementation.md <span>§ 02</span></div></div>}
              {project.id === "meridius" && <div className="meridius-visual"><span>MERIDIUS AI / DIGITAL STUDIO</span><strong>Make room<br />for <i>better.</i></strong><small>WEBSITES FOR LOCAL BUSINESS</small><div className="meridius-sun" /></div>}
              {project.id === "shadowos" && <div className="shadow-visual"><div className="shadow-window"><span>SHADOWOS / AGENT SESSION</span><b>Break the task<br />into steps.</b><i>▸ Research context</i><i>▸ Delegate work</i><i>▸ Reconcile results</i><div className="shadow-pulse" /></div></div>}
              <span className="card-open">↗</span>
            </div>
            <div className="card-info"><div><h3>{project.name}</h3><p>{project.summary}</p></div><span className="card-year">{project.year}</span></div>
          </button>)}
        </div>
      </section>

      <section className="about-section" id="about"><div className="about-label"><span className="section-index">02 / HOW I WORK</span><span>Curiosity with follow-through.</span></div><div className="about-content"><h2>From first<br />principles to<br /><em>finished work.</em></h2><div className="about-copy"><p>I’m a Computer Science graduate from VIT Chennai. I’m drawn to the parts of building that need both careful thinking and practical execution: access control, data workflows, product decisions, and the details that help people trust software.</p><p>At Hyundai Motor India, I worked on telemetry dashboards and anomaly detection for more than 50 robotic welding machines. When a sensor failure disrupted the pipeline, I worked with floor engineers to help restore real-time monitoring within a day.</p><a className="text-link" href="https://www.linkedin.com/in/njd-jesse/" target="_blank" rel="noreferrer">A little more about me <span>↗</span></a></div></div></section>

      <section className="experience-section" id="experience"><div className="section-head experience-head"><div><span className="section-index">03 / EXPERIENCE</span><h2>Learning by<br /><em>shipping.</em></h2></div><a className="text-link" href="https://github.com/Jesseman-418" target="_blank" rel="noreferrer">Browse GitHub <span>↗</span></a></div>
        <div className="timeline">
          <article><time>2025 — NOW</time><div><h3>Founder · Meridius AI</h3><p>Building an AI services company. Current focus: websites that help local businesses communicate clearly and get found.</p></div><span className="timeline-mark">01</span></article>
          <article><time>JUN — JUL 2025</time><div><h3>Software Engineering Intern · Hyundai Motor India</h3><p>Telemetry dashboards and anomaly detection for 50+ robotic weld machines; partnered with floor engineers on a rapid pipeline recovery.</p></div><span className="timeline-mark">02</span></article>
          <article><time>2022 — 2026</time><div><h3>B.Tech, Computer Science · VIT Chennai</h3><p>Focused on software engineering, AI, and robotics. Published undergraduate research on location-aware contact tracing.</p></div><span className="timeline-mark">03</span></article>
        </div>
        <a className="publication" href="https://ieeexplore.ieee.org/document/10537381" target="_blank" rel="noreferrer"><span>PUBLICATION / IEEE</span><strong>Leveraging Location Data for Enhanced Contact Tracing in Educational Settings</strong><span>READ PAPER ↗</span></a>
      </section>

      <section className="contact-section" id="contact"><div><span className="section-index">04 / YOUR TURN</span><h2>Have a good<br /><em>problem?</em></h2></div><div className="contact-copy"><p>I’m open to product engineering roles and thoughtful collaborations. Tell me what you’re working on.</p><a className="contact-email" href="mailto:njessemandevamirtham@gmail.com">njessemandevamirtham@gmail.com <span>↗</span></a><div className="contact-socials"><a href="https://github.com/Jesseman-418" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/njd-jesse/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>
      <footer className="folio-footer"><a className="wordmark" href="#home"><span className="wordmark-symbol">J<span>.</span></span><span>Jesseman<br />Devamirtham</span></a><span>DESIGNED &amp; BUILT WITH INTENTION · © {new Date().getFullYear()}</span><a href="#home">BACK TO TOP ↑</a></footer>

      {active && <div className="case-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
        <section className="case-dialog" role="dialog" aria-modal="true" aria-labelledby="case-title">
          <button className="case-close" onClick={() => setActive(null)} aria-label="Close case study">×</button><span className="section-index">{active.mark} / {active.category.toUpperCase()} / {active.year}</span><h2 id="case-title">{active.name}</h2><p>{active.details}</p><div className="case-stack">{active.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="case-links"><a href={active.repo} target="_blank" rel="noreferrer">View source code ↗</a>{active.live && <a href={active.live} target="_blank" rel="noreferrer">Open live site ↗</a>}</div>
        </section>
      </div>}

      <style jsx global>{`
        :root{--folio-bg:#111210;--folio-ink:#f2f0e8;--folio-muted:#9e9f96;--folio-line:rgba(242,240,232,.15);--folio-acid:#d8f06a}
        html{scroll-behavior:smooth;scroll-padding-top:90px}body{margin:0;background:var(--folio-bg);color:var(--folio-ink);font-family:Arial,Helvetica,sans-serif}body::before{display:none}*{box-sizing:border-box}a{color:inherit;text-decoration:none}button{font:inherit;color:inherit}
        .folio{--px:50%;--py:40%;position:relative;min-height:100vh;overflow:hidden;background:radial-gradient(650px circle at var(--px) var(--py),rgba(216,240,106,.055),transparent 75%),var(--folio-bg);isolation:isolate}
        .folio-nav{height:82px;padding:0 clamp(22px,6vw,92px);display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--folio-line)}.wordmark{display:flex;align-items:center;gap:12px;font-size:10px;line-height:1.35;letter-spacing:.06em;text-transform:uppercase}.wordmark-symbol{font-size:26px;font-weight:800;letter-spacing:-.1em}.wordmark-symbol span{color:var(--folio-acid)}.nav-links{display:flex;align-items:center;gap:clamp(20px,3.4vw,52px);font-size:12px;color:#b9b9b0}.nav-links a{transition:color .2s}.nav-links a:hover,.text-link:hover{color:var(--folio-acid)}.nav-contact{border-bottom:1px solid var(--folio-acid);padding:10px 0;color:var(--folio-ink)!important}.nav-contact span{color:var(--folio-acid);margin-left:10px}.menu-toggle{display:none}
        .folio-hero{padding:24px clamp(22px,6vw,92px) 28px;min-height:calc(100svh - 82px);display:flex;flex-direction:column;justify-content:space-between}.hero-topline,.hero-bottomline{display:flex;justify-content:space-between;gap:18px;color:#9a9b92;font:10px/1.4 monospace;letter-spacing:.1em}.available{display:flex;align-items:center;gap:9px}.available>i{width:7px;height:7px;background:var(--folio-acid);border-radius:50%;box-shadow:0 0 12px #d8f06a}.live-clock{color:#65665f}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(300px,.85fr);align-items:center;gap:5vw;max-width:1450px;width:100%;margin:4vh auto}.hero-intro{color:var(--folio-acid);font:13px/1.4 monospace;margin:0 0 25px}.hero-copy h1{font-size:clamp(64px,10.4vw,150px);line-height:.82;letter-spacing:-.095em;margin:0;font-weight:600}.hero-copy h1 em,.section-head h2 em,.about-content h2 em,.contact-section h2 em{font-family:Georgia,serif;font-weight:400;letter-spacing:-.08em}.hero-copy h1 em{color:var(--folio-acid)}.hero-dot{color:var(--folio-acid)}.hero-description{max-width:480px;color:#b1b1a8;font-size:17px;line-height:1.65;margin:32px 0 0}.hero-actions{display:flex;align-items:center;gap:28px;margin-top:28px;font-size:12px}.button-primary{padding:14px 18px;background:var(--folio-acid);color:#171811;font-weight:700;transition:transform .2s,background .2s}.button-primary:hover{transform:translateY(-3px);background:#e7ff8b}.button-primary span{margin-left:16px}.text-link{font-size:12px;border-bottom:1px solid #6c6d64;padding-bottom:6px;transition:color .2s}.text-link span{color:var(--folio-acid);margin-left:8px}
        .hero-art{height:min(520px,55vw);min-height:330px;position:relative;display:grid;place-items:center}.art-orbit{position:absolute;border:1px solid rgba(216,240,106,.25);border-radius:50%;animation:orbitSpin 24s linear infinite}.orbit-a{width:min(390px,35vw);aspect-ratio:1}.orbit-b{width:min(280px,25vw);aspect-ratio:1;border-style:dashed;animation-direction:reverse;animation-duration:38s}.orbit-center{width:130px;height:130px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--folio-acid);color:#161711;box-shadow:0 0 90px rgba(216,240,106,.15);transform:translate(calc((var(--px) - 50%) * .12),calc((var(--py) - 50%) * .12))}.orbit-center>span{font-size:42px;font-weight:800;letter-spacing:-.1em}.orbit-center small{font:7px monospace;letter-spacing:.1em;margin-top:8px}.orbit-label,.art-caption{position:absolute;color:#96978e;font:9px monospace;letter-spacing:.12em}.label-a{top:15%;left:5%}.label-b{right:2%;top:32%}.art-caption{bottom:12%;left:8%;line-height:1.6;letter-spacing:.05em}.orbit-node{position:absolute;width:40px;height:40px;display:grid;place-items:center;border:1px solid rgba(216,240,106,.6);border-radius:50%;background:#181a14;color:var(--folio-acid);font:10px monospace;animation:float 4s ease-in-out infinite}.node-a{top:17%;right:25%}.node-b{bottom:18%;right:18%;animation-delay:-1.3s}.node-c{top:48%;left:5%;animation-delay:-2.6s}@keyframes orbitSpin{to{transform:rotate(360deg)}}@keyframes float{50%{translate:0 -10px}}
        .hero-bottomline{border-top:1px solid var(--folio-line);padding-top:18px}
        .work-section,.about-section,.experience-section,.contact-section{padding:clamp(90px,12vw,170px) clamp(22px,9vw,140px);border-top:1px solid var(--folio-line)}.section-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:60px}.section-index{color:var(--folio-acid);font:10px monospace;letter-spacing:.12em}.section-head h2,.about-content h2,.contact-section h2{font-size:clamp(55px,8vw,110px);line-height:.9;letter-spacing:-.085em;font-weight:500;margin:26px 0 0}.section-head h2 em,.about-content h2 em,.contact-section h2 em{color:#aaa99f}.section-head>p{max-width:340px;color:#a9aaa1;font-size:14px;line-height:1.7;margin:0 0 6px}
        .filter-row{display:flex;gap:8px;margin-bottom:24px;overflow:auto;padding-bottom:6px}.filter{border:1px solid var(--folio-line);background:transparent;padding:10px 13px;color:#aaa99f;font-size:11px;white-space:nowrap;cursor:pointer;transition:.2s}.filter span{font:9px monospace;color:#77786f;margin-left:12px}.filter:hover,.filter.active{color:#151610;background:var(--folio-acid);border-color:var(--folio-acid)}.filter.active span{color:#3f432d}
        .work-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:36px 22px}.work-card{display:block;text-align:left;padding:0;border:0;background:none;cursor:pointer;animation:cardIn .45s both;animation-delay:var(--delay)}@keyframes cardIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.card-art{height:clamp(250px,34vw,460px);position:relative;overflow:hidden;background:#1c1e18;color:var(--accent);transition:transform .35s}.work-card:hover .card-art{transform:translateY(-4px)}.art-index{position:absolute;z-index:2;top:18px;left:20px;right:20px;display:flex;justify-content:space-between;font:10px monospace;color:rgba(242,240,232,.62);letter-spacing:.1em;text-transform:uppercase}.gateway-visual{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:18px;background:radial-gradient(ellipse at 54% 55%,#38422a,#20231b 56%,#171813)}.gateway-lock{font-size:70px}.gateway-line{height:1px;width:15%;background:var(--accent)}.gateway-check{font:10px monospace;line-height:1.8;color:#aaa}.gateway-check b{font-size:15px;color:var(--accent)}.gateway-bottom{position:absolute;bottom:26px;left:24px;right:24px;border-top:1px solid #ffffff28;padding-top:12px;font:9px monospace;letter-spacing:.1em}.gateway-bottom i{display:inline-block;background:var(--accent);width:6px;height:6px;border-radius:50%;margin-right:8px}.gateway-bottom span{float:right}
        .auth-visual{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;gap:8px;background:radial-gradient(ellipse at center,#253442,#1b2228 70%)}.auth-step{width:85px;height:85px;border:1px solid #b6d5ff75;border-radius:50%;display:grid;place-items:center;font:10px monospace;color:#dcecff}.auth-step.featured{background:#b6d5ff;color:#14202b}.auth-connector{font:12px monospace;color:#b6d5ff}.auth-visual small{position:absolute;bottom:27px;font:9px monospace;letter-spacing:.12em;color:#b6d5ff}
        .doc-visual{position:absolute;width:min(70%,430px);height:70%;left:15%;top:17%;padding:25px;background:#f0eee5;color:#22241e;box-shadow:12px 18px 50px #0006;transform:rotate(-2deg)}.doc-stamp{font:9px monospace;color:#73756e;letter-spacing:.1em}.doc-visual h3{font:clamp(23px,3.5vw,42px)/1.02 Georgia,serif;font-weight:400;margin:28px 0 24px;letter-spacing:-.04em}.doc-source{border-top:1px solid #d7d6cd;padding:12px 0;font:10px monospace}.doc-source span{float:right;color:#797b72}
        .meridius-visual{position:absolute;inset:0;padding:55px;display:flex;flex-direction:column;justify-content:center;background:#dfd7c8;color:#312d25;overflow:hidden}.meridius-visual>span,.meridius-visual>small{font:9px monospace;letter-spacing:.12em;position:relative;z-index:1}.meridius-visual strong{font:clamp(36px,6vw,76px)/.9 Georgia,serif;letter-spacing:-.07em;margin:24px 0;position:relative;z-index:1}.meridius-visual strong i{color:#7d8562}.meridius-sun{position:absolute;width:58%;aspect-ratio:1;border-radius:50%;right:-10%;top:8%;background:radial-gradient(circle at 35% 30%,#f4e7c5,#b7a787 70%);opacity:.8}
        .shadow-visual{position:absolute;inset:0;display:grid;place-items:center;background:radial-gradient(ellipse at 50% 50%,#362a43,#19171c 70%)}.shadow-window{width:68%;height:68%;border:1px solid #ffc96f55;padding:25px;display:flex;flex-direction:column;gap:12px;background:#201c25;position:relative}.shadow-window>span{font:8px monospace;color:#b5a9bb;letter-spacing:.1em}.shadow-window>b{font:clamp(20px,3vw,34px)/1.02 Georgia,serif;font-weight:400;margin:10px 0;color:#f5eee0}.shadow-window>i{font:10px monospace;color:#b2aaba;font-style:normal}.shadow-pulse{position:absolute;width:9px;height:9px;border-radius:50%;background:#ffc96f;right:20px;top:20px;box-shadow:0 0 20px #ffc96f}
        .card-open{position:absolute;right:20px;bottom:18px;width:34px;height:34px;border:1px solid #ffffff75;display:grid;place-items:center;color:#fff;opacity:0;transform:translateY(5px);transition:.2s}.work-card:hover .card-open,.work-card:focus-visible .card-open{opacity:1;transform:translateY(0)}.card-info{display:flex;justify-content:space-between;gap:18px;padding:15px 0}.card-info h3{font-size:17px;letter-spacing:-.04em;margin:0 0 7px;font-weight:500}.card-info p{font-size:12px;line-height:1.55;color:#a5a69d;max-width:420px;margin:0}.card-year{color:#8b8c83;font:10px monospace;white-space:nowrap}
        .about-label{display:flex;justify-content:space-between;color:#aaa99f;font-size:12px}.about-label>span:last-child{font-family:Georgia,serif;font-style:italic}.about-content{display:grid;grid-template-columns:1.1fr .9fr;gap:10vw;margin-top:65px;align-items:end}.about-content h2{margin:0}.about-content h2 em{color:var(--folio-acid)}.about-copy p{color:#b5b5ad;font-size:14px;line-height:1.8;margin:0 0 18px}.about-copy .text-link{display:inline-block;margin-top:12px}
        .experience-head{margin-bottom:48px}.timeline article{display:grid;grid-template-columns:160px 1fr 40px;gap:25px;padding:25px 0;border-top:1px solid var(--folio-line);align-items:start}.timeline time,.timeline-mark{color:#8d8e85;font:10px monospace;letter-spacing:.08em}.timeline h3{margin:0 0 9px;font-size:17px;font-weight:500}.timeline p{margin:0;max-width:620px;color:#a9aaa1;font-size:13px;line-height:1.6}.timeline-mark{color:var(--folio-acid);text-align:right}.publication{display:grid;grid-template-columns:160px 1fr auto;gap:25px;align-items:center;border-top:1px solid var(--folio-line);border-bottom:1px solid var(--folio-line);padding:22px 0;margin-top:30px}.publication span{font:9px monospace;letter-spacing:.09em;color:#999a91}.publication strong{font-size:13px;font-weight:400}.publication span:last-child{color:var(--folio-acid)}
        .contact-section{display:grid;grid-template-columns:1fr .8fr;align-items:end;gap:60px}.contact-section h2 em{color:var(--folio-acid)}.contact-copy p{font-size:15px;color:#adada4;line-height:1.7;max-width:380px}.contact-email{display:inline-block;margin-top:20px;font-size:clamp(15px,2vw,23px);border-bottom:1px solid #77786f;padding-bottom:8px;word-break:break-word}.contact-email span{color:var(--folio-acid);margin-left:8px}.contact-socials{display:flex;gap:23px;margin-top:23px;font:10px monospace;color:#a9aaa1}
        .folio-footer{padding:30px clamp(22px,6vw,92px);border-top:1px solid var(--folio-line);display:flex;justify-content:space-between;align-items:center;color:#999a91}.folio-footer>span,.folio-footer>a:last-child{font:9px monospace;letter-spacing:.1em}.folio-footer>a:last-child:hover{color:var(--folio-acid)}
        .case-overlay{position:fixed;inset:0;z-index:10;background:#080907db;backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px;animation:fadeIn .2s}.case-dialog{position:relative;width:min(620px,100%);padding:clamp(28px,6vw,56px);background:#1b1d18;border:1px solid #ffffff26;box-shadow:0 25px 100px #0009;animation:dialogIn .3s}.case-close{position:absolute;right:20px;top:14px;border:0;background:transparent;font-size:28px;color:#b6b7ad;cursor:pointer}.case-dialog h2{font-size:clamp(32px,6vw,56px);letter-spacing:-.07em;line-height:.95;margin:25px 0}.case-dialog>p{color:#b5b6ad;font-size:14px;line-height:1.75}.case-stack{display:flex;flex-wrap:wrap;gap:8px;margin:25px 0}.case-stack span{padding:8px 10px;border:1px solid #ffffff28;color:#d6d7cc;font:10px monospace}.case-links{display:flex;flex-wrap:wrap;gap:20px;margin-top:28px}.case-links a{color:var(--folio-acid);font-size:12px}.case-links a:hover{text-decoration:underline}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes dialogIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        a:focus-visible,button:focus-visible{outline:2px solid var(--folio-acid);outline-offset:4px}.work-card:focus-visible .card-open{opacity:1}.menu-toggle:focus-visible{outline-offset:6px}
        @media(max-width:850px){.hero-grid{grid-template-columns:1fr .75fr;gap:10px}.hero-copy h1{font-size:clamp(64px,11vw,110px)}.hero-art{min-height:300px}.hero-bottomline span:nth-child(2){display:none}.section-head{align-items:start;flex-direction:column}.section-head>p{max-width:500px}.about-content{gap:6vw}.publication{grid-template-columns:120px 1fr auto;gap:12px}}
        @media(max-width:640px){.folio-nav{height:70px;padding:0 22px}.menu-toggle{display:flex;flex-direction:column;gap:5px;background:none;border:0;padding:12px;cursor:pointer}.menu-toggle i{display:block;width:22px;height:1px;background:var(--folio-ink)}.nav-links{display:none;position:absolute;top:69px;left:0;right:0;z-index:5;background:#171813;border-bottom:1px solid var(--folio-line);padding:24px;flex-direction:column;align-items:stretch;gap:0}.nav-links.nav-open{display:flex}.nav-links a{padding:15px 4px;border-bottom:1px solid var(--folio-line)}.nav-links .nav-contact{border-bottom:1px solid var(--folio-acid);margin-top:10px}.folio-hero{min-height:calc(100svh - 70px);padding:22px 22px}.hero-topline{font-size:8px}.available{gap:6px}.live-clock{display:none}.hero-grid{grid-template-columns:1fr;margin:9vh auto 4vh;gap:18px}.hero-copy h1{font-size:clamp(66px,15vw,105px)}.hero-intro{margin-bottom:18px}.hero-description{font-size:15px;margin-top:23px;max-width:410px}.hero-art{height:280px;min-height:280px;max-width:420px;width:100%;margin:auto}.orbit-a{width:240px}.orbit-b{width:175px}.orbit-center{width:105px;height:105px}.orbit-center>span{font-size:34px}.label-a{left:0}.label-b{right:0}.hero-bottomline{font-size:8px;flex-wrap:wrap}.hero-bottomline span:nth-child(2),.hero-bottomline span:nth-child(3){display:none}.work-section,.about-section,.experience-section,.contact-section{padding:90px 22px}.section-head{margin-bottom:36px}.section-head h2,.about-content h2,.contact-section h2{font-size:clamp(58px,14vw,88px)}.filter-row{margin-right:-22px}.work-grid{grid-template-columns:1fr;gap:25px}.card-art{height:300px}.card-info h3{font-size:16px}.about-label{align-items:flex-start;gap:20px}.about-label>span:last-child{text-align:right}.about-content{grid-template-columns:1fr;gap:32px;margin-top:45px}.timeline article{grid-template-columns:1fr 28px;gap:11px;padding:20px 0}.timeline time{grid-column:1/-1}.timeline-mark{grid-column:2;grid-row:2}.timeline h3{font-size:15px}.publication{grid-template-columns:1fr auto;gap:10px}.publication strong{grid-column:1/-1;grid-row:2;line-height:1.5}.folio-footer{padding:25px 22px;flex-wrap:wrap;gap:20px}.folio-footer>span{order:3;width:100%}.contact-section{grid-template-columns:1fr;gap:20px}.contact-email{font-size:16px}.hero-actions{gap:18px}.button-primary{padding:13px 12px}.text-link{font-size:11px}}
        @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
      `}</style>
    </main>
  );
}
