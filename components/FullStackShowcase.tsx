"use client";

import { useState } from "react";

const systems = [
  {
    id: "gateway",
    label: "Zero-Trust API Gateway",
    repo: "https://github.com/Jesseman-418/zero-trust-api-gateway",
    layers: [
      {
        label: "01 · Request",
        title: "Client request",
        detail: "A request reaches the reverse proxy with an identity token.",
      },
      {
        label: "02 · Service",
        title: "Node.js + Express",
        detail: "The gateway validates the request and forwards allowed traffic to an upstream service.",
      },
      {
        label: "03 · Access + resilience",
        title: "JWT/JWKS · RBAC/ABAC",
        detail: "Per-user rate limits, circuit breakers, health checks, and request/error metrics handle policy and failure cases.",
      },
      {
        label: "04 · Verification",
        title: "25 automated tests",
        detail: "Tests cover authentication, access policies, and proxy behavior.",
      },
    ],
  },
  {
    id: "oauth",
    label: "OAuth 2.0 Authorization Server",
    repo: "https://github.com/Jesseman-418/oauth2-authorization-server",
    layers: [
      {
        label: "01 · Request",
        title: "Client application",
        detail: "A client starts an authorization-code or client-credentials flow.",
      },
      {
        label: "02 · Service",
        title: "Node.js + Express",
        detail: "The authorization server handles OAuth 2.0 and OpenID Connect endpoints.",
      },
      {
        label: "03 · Identity + data",
        title: "PKCE · SQLite",
        detail: "Signed tokens, refresh-token rotation, and reuse detection protect the token lifecycle.",
      },
      {
        label: "04 · Verification",
        title: "53 automated tests",
        detail: "Tests exercise the authorization flows, token behavior, and security checks.",
      },
    ],
  },
  {
    id: "docqa",
    label: "DocQA AI",
    repo: "https://github.com/Jesseman-418/docqa-ai",
    layers: [
      {
        label: "01 · Interface",
        title: "Streamlit application",
        detail: "A user uploads documents and asks a question in a simple web interface.",
      },
      {
        label: "02 · Processing",
        title: "Python ingestion",
        detail: "PDF, text, and Markdown files are split into passages and converted into sentence embeddings.",
      },
      {
        label: "03 · Retrieval",
        title: "Persistent FAISS index",
        detail: "Semantic search retrieves relevant passages and returns source citations.",
      },
      {
        label: "04 · Verification",
        title: "pytest coverage",
        detail: "Tests cover chunking, retrieval, and answer generation; generated answers are optional.",
      },
    ],
  },
];

export default function FullStackShowcase() {
  const [selectedId, setSelectedId] = useState(systems[0].id);
  const selected = systems.find((system) => system.id === selectedId) ?? systems[0];

  return (
    <section id="systems" className="py-32 lg:py-40 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-2">
            <span className="num-marker">System walkthrough</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-text text-5xl md:text-6xl leading-[0.95] mb-6">
              How the pieces{" "}
              <span className="italic">fit together</span>
              <span className="text-cobalt">.</span>
            </h2>
            <p className="text-lg text-ink/70 max-w-2xl leading-relaxed">
              Explore a project from its entry point through services, data or
              access controls, and the checks used to verify its behavior.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10" role="tablist" aria-label="Choose a project">
          {systems.map((system) => (
            <button
              key={system.id}
              id={`tab-${system.id}`}
              type="button"
              role="tab"
              aria-selected={selected.id === system.id}
              aria-controls="system-panel"
              onClick={() => setSelectedId(system.id)}
              className={`px-4 py-3 text-sm border transition-colors ${
                selected.id === system.id
                  ? "bg-ink text-paper border-ink"
                  : "bg-transparent text-ink/70 border-ink/15 hover:border-ink/50"
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-ink/15"
        >
          {selected.layers.map((layer) => (
            <article key={layer.label} className="py-7 pr-6 border-b sm:border-b-0 sm:border-r last:border-r-0 border-ink/10">
              <div className="num-marker mb-4">{layer.label}</div>
              <h3 className="display-text text-2xl leading-tight mb-3">{layer.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{layer.detail}</p>
            </article>
          ))}
        </div>

        <a
          href={selected.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 ink-link text-sm"
        >
          View source on GitHub
        </a>
      </div>
    </section>
  );
}
