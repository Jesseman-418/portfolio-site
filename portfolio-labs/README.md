# Jesseman Labs

An applied software portfolio built as a standalone Next.js app. The first complete experience is **DocQA Workspace**: a responsive document product with email OTP accounts, private Supabase collections, PDF/TXT/Markdown ingestion, local 384-dimensional embeddings, hybrid vector + lexical retrieval, citations, abstention, and a small retrieval evaluation.

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
- **One project slice first**: use the document workspace to establish auth, RLS, ingestion, accessibility, tests, and deployment patterns before adding the other portfolio labs.

## Checks

`npm run build` produces the production Next.js build. The retrieval evaluation can be run from the UI with **Load evaluation example**, then **Search sources**; the expected phrase is checked against returned evidence.
