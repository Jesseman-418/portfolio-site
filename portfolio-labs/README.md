# Jesseman Labs

An applied software portfolio built as a standalone Next.js app. Two working product slices are included:

- **DocQA Workspace**: email OTP accounts, private Supabase collections, PDF/TXT/Markdown ingestion, local 384-dimensional embeddings, hybrid vector + lexical retrieval, citations, abstention, and a retrieval evaluation.
- **Customer Journey Studio**: audience-rule builder, editable email/in-app/wait steps, typed simulation API, sample delivery outcomes, and private persistence for journeys, queue records, and audit events.

## Run locally

```bash
cp .env.example .env.local
# Add the Supabase project URL and publishable key to .env.local
npm install
npm run dev
```

Without Supabase settings, the app runs in sample/demo mode. To enable private cloud persistence, apply [`../supabase/schema.sql`](../supabase/schema.sql) to the Supabase project and set the two public environment variables. The schema enables owner-scoped RLS on all tables; the browser only receives the publishable key. Do not put a service-role key in this app.

## Product decisions

- **Local embeddings** keep document text out of an external model API. First use downloads the pinned MiniLM model in the browser; this costs some initial load time and client compute.
- **Extractive answers** show source passages instead of generating unsupported prose. The product abstains below a retrieval score threshold. This makes evidence review possible, while leaving synthesis for a later iteration with a versioned answer-quality eval.
- **Hybrid retrieval** first selects semantic nearest neighbors in pgvector, then reranks candidates with lexical overlap. Search is scoped to the chosen document and authenticated owner.
- **Text-based PDFs** are supported. Scanned/image-only PDFs need OCR and are reported as having no extractable text.
- **Simulation is clearly labeled**: journey delivery uses predictable sample contacts and never sends real messages. Signed-in runs persist simulated queue items and an audit event; a production worker, provider integration, and scheduled execution are future work.

## Checks

`npm test` runs deterministic tests for chunk overlap, lexical/hybrid ranking, abstention, audience filtering, and journey outcome records. `npm run build` produces the production Next.js build. The retrieval evaluation can be run from the UI with **Load evaluation example**, then **Search sources**; the expected phrase is checked against returned evidence.
