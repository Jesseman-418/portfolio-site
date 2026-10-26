"use client";

import { useState } from "react";

const systems = [
  {
    id: "gateway",
    label: "Zero-Trust API Gateway",
    repo: "https://github.com/Jesseman-418/zero-trust-api-gateway",
    layers: [
      { label: "Request", title: "Client request", detail: "An identity token arrives with a request." },
      { label: "Service", title: "Node.js + Express", detail: "The reverse proxy validates and routes allowed traffic." },
      { label: "Guardrails", title: "JWT/JWKS · RBAC/ABAC", detail: "Rate limits, circuit breakers, health checks, and metrics." },
      { label: "Proof", title: "25 tests", detail: "Authentication, policies, and proxy behavior." },
    ],
  },
  {
    id: "oauth",
    label: "OAuth 2.0 Authorization Server",
    repo: "https://github.com/Jesseman-418/oauth2-authorization-server",
    layers: [
      { label: "Request", title: "Client application", detail: "Starts an authorization-code or client-credentials flow." },
      { label: "Service", title: "Node.js + Express", detail: "Serves OAuth 2.0 and OpenID Connect endpoints." },
      { label: "Identity + data", title: "PKCE · SQLite", detail: "Signed tokens, refresh rotation, and reuse detection." },
      { label: "Proof", title: "53 tests", detail: "Exercises authorization flows and token safeguards." },
    ],
  },
  {
    id: "docqa",
    label: "DocQA AI",
    repo: "https://github.com/Jesseman-418/docqa-ai",
    layers: [
      { label: "Interface", title: "Streamlit app", detail: "Upload documents and ask a question." },
      { label: "Processing", title: "Python ingestion", detail: "Split files and create sentence embeddings." },
      { label: "Retrieval", title: "Persistent FAISS", detail: "Retrieve relevant passages with source citations." },
      { label: "Proof", title: "pytest", detail: "Tests chunking, retrieval, and answer generation." },
    ],
  },
];

export default function FullStackShowcase() {
  const [selectedId, setSelectedId] = useState(systems[0].id);
  const selected = systems.find((system) => system.id === selectedId) ?? systems[0];

  return (
    <section id="systems" className="systems-section section-wrap">
      <div className="section-kicker"><span>05</span><span>Under the hood</span></div>
      <div className="section-heading-row systems-heading">
        <h2>Follow the<br /><em>signal.</em></h2>
        <p>Pick a project and trace how the pieces connect, from the first request to the checks that cover its behavior.</p>
      </div>
      <div className="system-tabs" role="tablist" aria-label="Choose a project">
        {systems.map((system) => (
          <button
            key={system.id}
            id={`tab-${system.id}`}
            type="button"
            role="tab"
            aria-selected={selected.id === system.id}
            aria-controls="system-panel"
            data-cursor="link"
            onClick={() => setSelectedId(system.id)}
            className={`system-tab ${selected.id === system.id ? "is-selected" : ""}`}
          >
            {system.label}
          </button>
        ))}
      </div>
      <div id="system-panel" role="tabpanel" aria-labelledby={`tab-${selected.id}`} className="system-flow">
        {selected.layers.map((layer, index) => (
          <article key={layer.label} className="system-step">
            <div className="system-step-top"><span>0{index + 1}</span><i /></div>
            <h3>{layer.title}</h3>
            <p>{layer.detail}</p>
          </article>
        ))}
      </div>
      <a href={selected.repo} target="_blank" rel="noopener noreferrer" data-cursor="link" className="system-source">Read the source on GitHub</a>
    </section>
  );
}
