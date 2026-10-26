# Jesseman Devamirtham N — Portfolio

A personal portfolio for my work in full-stack software engineering, backend systems, and applied AI.

**Last updated:** 2026-10-26

## Site

[jesseman-dev.vercel.app](https://jesseman-dev.vercel.app/)

The portfolio includes selected projects, an interactive system walkthrough, experience, publication, and contact links. On desktop, a pointer-responsive network graphic and custom cursor react to movement and interactive elements; reduced-motion preferences and touch input are supported.

## Featured projects

- **Zero-Trust API Gateway** — Node.js and Express reverse proxy with JWT/JWKS verification, RBAC/ABAC policies, per-user rate limits, circuit breakers, health checks, and request/error metrics. Includes 25 automated tests.
- **OAuth 2.0 Authorization Server** — Node.js and Express implementation of authorization-code and client-credentials flows, PKCE, signed tokens, and refresh-token reuse detection. Includes 53 automated tests.
- **DocQA AI** — Python and Streamlit document question-answering app with PDF, text, and Markdown ingestion, persistent FAISS retrieval, and source citations.
- **Meridius AI** — AI services company for businesses. Its current focus is websites for local services, restaurants, spas, and similar businesses, with SEO and GEO optimization.

## Technology

Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, and Canvas.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

- `app/` — Next.js app routes, metadata, and global styles
- `components/` — portfolio sections and interactive system walkthrough
