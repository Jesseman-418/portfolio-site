type Project = {
  title: string;
  summary: string;
  detail: string;
  github: string;
  live?: string;
  art: "gateway" | "oauth" | "docqa" | "meridius";
};

const projects: Project[] = [
  {
    title: "Zero-Trust API Gateway",
    summary: "A reverse proxy that checks identity and access policies before requests reach an upstream service.",
    detail: "JWT/JWKS verification, RBAC and ABAC, per-user rate limits, circuit breakers, health checks, request metrics, and 25 automated tests.",
    github: "https://github.com/Jesseman-418/zero-trust-api-gateway",
    art: "gateway",
  },
  {
    title: "OAuth 2.0 Authorization Server",
    summary: "An OAuth 2.0 and OpenID Connect service for authorization-code and client-credentials flows.",
    detail: "PKCE, signed tokens, refresh-token rotation, and reuse detection, with routes and database operations separated into modules. Covered by 53 tests.",
    github: "https://github.com/Jesseman-418/oauth2-authorization-server",
    art: "oauth",
  },
  {
    title: "DocQA AI",
    summary: "A document question-answering app that keeps retrieved passages connected to their source citations.",
    detail: "PDF, text, and Markdown ingestion, sentence embeddings, persistent FAISS search, local extractive answers, and optional generated answers.",
    github: "https://github.com/Jesseman-418/docqa-ai",
    art: "docqa",
  },
  {
    title: "Meridius AI",
    summary: "An AI services company whose current focus is websites for local services, restaurants, spas, and similar businesses.",
    detail: "Website work combines thoughtful navigation with search-engine optimization and generative-engine optimization. Meridius AI also provides broader AI services to businesses.",
    github: "https://github.com/Jesseman-418/meridius-ai",
    live: "https://meridius-ai.vercel.app",
    art: "meridius",
  },
];

function ProjectArtwork({ art }: { art: Project["art"] }) {
  if (art === "gateway") {
    return (
      <div className="art-window art-gateway" aria-hidden="true">
        <div className="art-toolbar"><span>GATEWAY / CONTROL</span></div>
        <div className="gateway-body">
          <div className="gateway-rail"><i /><i /><i /><i /></div>
          <div className="gateway-main">
            <span className="art-micro">REQUEST POLICY</span>
            <strong>Identity verified</strong>
            <span className="gateway-allow"><i /> ALLOWED · 18ms</span>
            <div className="gateway-bars"><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="gateway-footer"><span>JWT / JWKS</span><span>RBAC · ABAC</span><span>HEALTHY</span></div>
          </div>
        </div>
      </div>
    );
  }
  if (art === "oauth") {
    return (
      <div className="art-window art-oauth" aria-hidden="true">
        <div className="art-toolbar"><span>AUTHORIZATION FLOW</span><span>PKCE / OIDC</span></div>
        <div className="oauth-flow">
          <div><i>01</i><b>Client</b><span>request</span></div>
          <b className="flow-connector">······</b>
          <div><i>02</i><b>Authorize</b><span>verify</span></div>
          <b className="flow-connector">······</b>
          <div><i>03</i><b>Token</b><span>signed</span></div>
        </div>
        <div className="token-chip"><span>ACCESS TOKEN</span><strong>eyJhbGciOi...</strong><i>VALID</i></div>
      </div>
    );
  }
  if (art === "docqa") {
    return (
      <div className="art-window art-docqa" aria-hidden="true">
        <div className="doc-paper">
          <div className="doc-top"><span>DOCQA</span><span>LOCAL SEARCH</span></div>
          <div className="doc-query">What does the report say about retrieval?</div>
          <div className="doc-answer"><i>ANSWER</i><span>Relevant passages are ranked and returned with their source.</span></div>
          <div className="doc-source"><b>01</b><span>research-notes.pdf</span><small>PAGE 04</small></div>
          <div className="doc-source"><b>02</b><span>implementation.md</span><small>SECTION 02</small></div>
        </div>
      </div>
    );
  }
  return (
    <div className="art-window art-meridius" aria-hidden="true">
      <div className="meridius-browser"><span>MERIDIUS AI</span><span>STUDIO / 2026</span></div>
      <div className="meridius-page">
        <div className="meridius-copy"><small>WEBSITE CONCEPT · WELLNESS</small><strong>Room to<br /><em>reset.</em></strong><span>Skin &amp; wellness studio</span><i>Explore the space</i></div>
        <div className="meridius-sun"><span>01</span></div>
      </div>
      <div className="meridius-bottom"><span>DESIGN</span><span>SEO</span><span>GEO</span></div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="projects-section section-wrap">
      <div className="section-heading-row">
        <h2>Made with<br /><em>intent.</em></h2>
        <p>A few systems, experiments, and web projects. Each one started with a different problem and a set of trade-offs.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className={`project-card project-card--${project.art}`}>
            <ProjectArtwork art={project.art} />
            <div className="project-info">
                <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-detail">{project.detail}</p>
              <div className="project-links">
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" data-cursor="link">Live site</a>}
                <a href={project.github} target="_blank" rel="noopener noreferrer" data-cursor="link">Source code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
