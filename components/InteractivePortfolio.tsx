"use client";
import { useState } from "react";

type Project = { id:string; name:string; category:string; year:string; summary:string; details:string; stack:string[]; repo:string; live?:string; color:string; mark:string };
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

export default function InteractivePortfolio(){
 const [open,setOpen]=useState<string|null>("gateway");
 const [menu,setMenu]=useState(false);
 const [pressed,setPressed]=useState(0);
 const [identity,setIdentity]=useState(false);
 const [sent,setSent]=useState(false);
 const [role,setRole]=useState(false);
 return <main id="home">
 <header className="nav"><a href="#home" className="logo" aria-label="Jesseman home">j.</a><nav aria-label="Main navigation" className={menu?'links expanded':'links'}><a href="#work" onClick={()=>setMenu(false)}>The work</a><a href="#about" onClick={()=>setMenu(false)}>The person</a><a href="mailto:njessemandevamirtham@gmail.com">Let’s talk</a></nav><button className="menu" onClick={()=>setMenu(!menu)} aria-expanded={menu}>{menu?'Close':'Menu'}</button></header>
 <section className="hero" aria-labelledby="name">
  <div className="hello"><p>Software engineer. Founder. Chennai.</p><p>Good to have you here.</p></div>
  <div className="name-line"><h1 id="name">Jesseman</h1><button className="asterisk" onClick={()=>setPressed(pressed+1)} aria-label="Do not press" style={{transform:`rotate(${pressed*90}deg)`}}>✳</button></div>
  <div className="hero-body"><div className="intro"><h2>I build it.<br/>Then I go<br/>sell it.</h2><p>Software by day. Cold calls, also by day. I’m building Meridius AI and looking for my next engineering challenge.</p><a className="solid" href="#work">Meet the projects</a><div className="socials" aria-label="Social links"><a href="https://www.linkedin.com/in/njd-jesse/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Jesseman-418" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:njessemandevamirtham@gmail.com">Email</a></div><p className="secret" aria-live="polite">{pressed>0?['You had one job.','Fine. It is quite satisfying.','That’s enough asterisk for today.'][Math.min(pressed-1,2)]:'The asterisk is a button. You’ve been warned.'}</p></div>
  <figure className="portrait"><img src="https://avatars.githubusercontent.com/u/143321248?v=4" alt="Jesseman taking a mirror photograph" width="460" height="460" fetchPriority="high"/><figcaption>Yes, the mirror selfie made it to production.</figcaption></figure>
  <div className="gateway-demo"><div className="demo-top"><span>Try something I build</span><span className="signal" aria-hidden="true"/></div><h3>No ID?<br/>No entry.</h3><p>A tiny simulation of my API gateway. Give the request an identity. See what happens.</p><label className="identity"><input type="checkbox" checked={identity} onChange={e=>{setIdentity(e.target.checked);setSent(false)}}/>Include valid identity</label><button className="send" onClick={()=>setSent(true)}>Send request</button><output className={sent?(identity?'result success':'result denied'):'result'} aria-live="polite">{sent?(identity?'200 · You’re on the list.':'401 · Nice try. Who are you?'):'Waiting for your request…'}</output><a href="#work" onClick={()=>setOpen('gateway')}>See the real project</a></div></div>
 </section>
 <section className="work" id="work"><div className="section-title"><h2>Less talking.<br/>More shipping.</h2><p>Open a project. Look under the hood.<br/>The code is there for a reason.</p></div><div className="projects">{projects.map(p=><article key={p.id} className={open===p.id?'project opened':'project'}><h3><button aria-expanded={open===p.id} aria-controls={`detail-${p.id}`} onClick={()=>setOpen(open===p.id?null:p.id)}><span>{p.name}</span><span className="plus" aria-hidden="true">{open===p.id?'−':'+'}</span></button></h3><div id={`detail-${p.id}`} hidden={open!==p.id}><div className="project-detail"><div><p className="summary">{p.summary}</p><p>{p.details}</p><div className="stack">{p.stack.map(t=><span key={t}>{t}</span>)}</div><div className="project-links"><a href={p.repo} target="_blank" rel="noreferrer">Read the code</a>{p.live&&<a href={p.live} target="_blank" rel="noreferrer">Visit Meridius</a>}</div></div><div className={`project-poster ${p.id}`} aria-hidden="true"><strong>{({gateway:'Who goes there?',oauth:'Trust is a process.',docqa:'Show your sources.',meridius:'Open for business.',shadowos:'A little help thinking.'} as Record<string,string>)[p.id]}</strong><span>{p.stack.slice(0,2).join(' + ')}</span></div></div></div></article>)}</div></section>
 <section id="about" className="about"><div className="about-heading"><h2>Two hats.<br/>Same head.</h2><div className="role-switch" aria-label="Choose a side"><button aria-pressed={!role} onClick={()=>setRole(false)}>The engineer</button><button aria-pressed={role} onClick={()=>setRole(true)}>The founder</button></div></div><div className="about-story" aria-live="polite"><h3>{role?'Building the thing is only half the job.':'I like knowing why it broke.'}</h3><p>{role?'I started Meridius AI in May 2025. I find local businesses that need a better website, pick up the phone, and build what I offer. It is teaching me to listen, explain technical decisions, and get comfortable hearing “no”.':'I graduated in Computer Science from VIT Chennai. My projects keep returning to the same questions: who should have access, where did this answer come from, and what happens when something fails?'}</p><p>{role?'Selling and engineering keep each other honest. A feature matters when someone actually needs it.':'At Hyundai Motor India, I worked on monitoring for over 50 robotic welding machines. When a sensor failure interrupted the pipeline, I worked with floor engineers to help restore monitoring within a day.'}</p><a href="https://www.linkedin.com/in/njd-jesse/" target="_blank" rel="noreferrer">The LinkedIn version</a></div><div className="history"><div><p>Meridius AI</p><span>Founder · May 2025–present</span></div><div><p>Hyundai Motor India</p><span>Software intern · Jun–Jul 2025</span></div><div><p>VIT Chennai</p><span>B.Tech CSE · Sep 2022–Aug 2026</span></div></div><a className="paper" href="https://ieeexplore.ieee.org/document/10537381" target="_blank" rel="noreferrer"><span>Also, I published a paper.</span><span>Location data for contact tracing in educational settings · IEEE</span></a></section>
 <section className="contact" id="contact"><p>Your turn.</p><h2>Let’s make<br/>something<br/>work.</h2><div className="contact-bottom"><p>Hiring an engineer? Have a project?<br/>Start with hello. We’ll take it from there.</p><a className="solid" href="mailto:njessemandevamirtham@gmail.com">Email Jesseman</a></div><a className="email" href="mailto:njessemandevamirtham@gmail.com">njessemandevamirtham@gmail.com</a></section>
 <footer><a className="logo" href="#home" aria-label="Back to home">j.</a><span>Built by the person in the photo. © {new Date().getFullYear()}</span><a href="https://github.com/Jesseman-418" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/njd-jesse/" target="_blank" rel="noreferrer">LinkedIn</a></footer>
 </main>;
}
