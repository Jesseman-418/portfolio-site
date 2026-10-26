# Jesseman Devamirtham N — Portfolio

A personal portfolio for my work in full-stack software engineering, backend systems, and applied AI.

**Last updated:** 2026-10-26

## Site

[jesseman-dev.vercel.app](https://jesseman-dev.vercel.app/)

The portfolio includes an introduction, technical skills, selected projects, an interactive system walkthrough, experience, publication, and contact links.

## Featured projects

- **Zero-Trust API Gateway** — Node.js and Express reverse proxy with JWT/JWKS verification, RBAC/ABAC policies, per-user rate limits, circuit breakers, health checks, and request/error metrics. Includes 25 automated tests.
- **OAuth 2.0 Authorization Server** — Node.js and Express implementation of authorization-code and client-credentials flows, PKCE, signed tokens, and refresh-token reuse detection. Includes 53 automated tests.
- **DocQA AI** — Python and Streamlit document question-answering app with PDF, text, and Markdown ingestion, persistent FAISS retrieval, and source citations.
- **Meridius AI** — Website studio showcase with distinct demo sites for local business niches.

## Technology

Next.js 14, React 18, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

- `app/` — Next.js app routes, metadata, and global styles
- `components/` — portfolio sections and interactive system walkthrough
