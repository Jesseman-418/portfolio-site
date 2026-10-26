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
    <section id="systems" className="systems-section border-y border-ink/10 py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-14">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="num-marker mb-5">Under the hood / choose a project</p>
            <h2 className="display-text text-5xl md:text-7xl lg:text-8xl">
              Follow the
              <span className="block pl-[10vw] italic text-cobalt">signal.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink/60 lg:col-span-3 lg:col-start-10">
            A quick tour through the layers behind a few things I’ve built,
            from the first request to the checks that keep behavior honest.
          </p>
        </div>

        <div className="system-tabs mb-12 flex flex-wrap gap-x-7 gap-y-4 border-b border-ink/15" role="tablist" aria-label="Choose a project">
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
              className={`system-tab py-4 text-sm transition-colors ${
                selected.id === system.id ? "is-selected text-cobalt" : "text-ink/45 hover:text-ink"
              }`}
            >
              {system.label}
            </button>
          ))}
        </div>

        <div
          id="system-panel"
          role="tabpanel"
          aria-labelledby={`tab-${selected.id}`}
          className="system-flow"
        >
          {selected.layers.map((layer, index) => (
            <article key={layer.label} className="system-step">
              <div className="system-step-top">
                <span className="num-marker">0{index + 1} / {layer.label}</span>
                <span className="system-node" aria-hidden="true" />
              </div>
              <h3 className="display-text mt-6 text-3xl leading-tight md:text-4xl">{layer.title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/55">{layer.detail}</p>
            </article>
          ))}
        </div>

        <a
          data-cursor="link"
          href={selected.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 ink-link text-sm"
        >
          Read the source on GitHub
        </a>
      </div>
    </section>
  );
}
