"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getSupabase } from "../lib/supabase";
import { chunkText, embedText, lexicalScore } from "../lib/embeddings";
import { hybridScore, shouldAbstain } from "../lib/retrieval";

const SAMPLE_DOCS = [
  {
    id: "sample-product-brief",
    title: "Product brief — Northstar help center",
    file_name: "northstar-product-brief.md",
    collection_name: "Sample workspace",
    content: "Northstar is a customer support platform for small SaaS teams. The launch goal is to reduce median first-response time from 4 hours to under 90 minutes. The first release includes a shared inbox, saved replies, and customer identity history. The team will measure weekly active agents, first-response time, and tickets resolved without escalation. The pilot will include 12 customer teams and run for six weeks. The product must preserve an audit trail for every change to a customer record.",
    chunks: [],
    ingestion_status: "ready",
    sample: true,
  },
  {
    id: "sample-security-notes",
    title: "Engineering notes — access and retention",
    file_name: "access-retention-notes.txt",
    collection_name: "Sample workspace",
    content: "Workspace data is isolated by account. A member can view records in their own workspace and cannot change ownership fields. Export links expire after 24 hours. Support staff access is time-limited, requires a recorded reason, and appears in the audit log. Uploaded files are deleted when a workspace owner removes them. The service retries transient delivery failures with exponential backoff and moves a message to the dead-letter queue after five attempts.",
    chunks: [],
    ingestion_status: "ready",
    sample: true,
  },
];

function normalizeChunkRows(doc) {
  if (Array.isArray(doc.chunks) && doc.chunks.length) return doc.chunks;
  return chunkText(doc.content || "").map((chunk, index) => ({ ...chunk, chunk_index: index }));
}

async function readFile(file) {
  const ext = file.name.split(".").pop().toLowerCase();
  if (["txt", "md", "markdown"].includes(ext)) {
    return { pages: [{ page_number: null, text: await file.text() }], source_type: ext };
  }
  if (ext !== "pdf") throw new Error("Choose a PDF, TXT, or Markdown file.");
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  pdfjs.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";
  const document = await pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
  const pages = [];
  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const page = await document.getPage(pageNumber);
    const content = await page.getTextContent();
    pages.push({ page_number: pageNumber, text: content.items.map((item) => item.str).join(" ") });
  }
  return { pages, source_type: "pdf" };
}

export default function Workspace() {
  const supabase = useMemo(() => getSupabase(), []);
  const uploadRef = useRef(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [authBusy, setAuthBusy] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const [documents, setDocuments] = useState(SAMPLE_DOCS);
  const [selectedId, setSelectedId] = useState(SAMPLE_DOCS[0].id);
  const [collection, setCollection] = useState("All collections");
  const [newCollection, setNewCollection] = useState("");
  const [question, setQuestion] = useState("");
  const [expectedPhrase, setExpectedPhrase] = useState("");
  const [answer, setAnswer] = useState(null);
  const [queries, setQueries] = useState([]);
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [modelState, setModelState] = useState("The embedding model loads on first use.");
  const [showEval, setShowEval] = useState(false);
  const [retryFiles, setRetryFiles] = useState([]);

  const collections = [...new Set(documents.map((doc) => doc.collection_name || "Default collection"))];
  const visibleDocs = documents.filter((doc) => collection === "All collections" || doc.collection_name === collection);
  const selectedDoc = visibleDocs.find((doc) => doc.id === selectedId) || visibleDocs[0] || null;

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }) => setUser(data.user || null));
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => data.subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    if (!user || !supabase) return;
    let live = true;
    async function load() {
      setNotice("");
      const [docsResult, queryResult] = await Promise.all([
        supabase.from("lab_documents").select("*").order("created_at", { ascending: false }).limit(100),
        supabase.from("lab_document_queries").select("*").order("created_at", { ascending: false }).limit(30),
      ]);
      if (!live) return;
      if (docsResult.error) setNotice(`Couldn't load your documents: ${docsResult.error.message}`);
      else if (docsResult.data?.length) {
        setDocuments(docsResult.data);
        setSelectedId(docsResult.data[0].id);
        setCollection("All collections");
      }
      if (queryResult.data) setQueries(queryResult.data);
    }
    load();
    return () => { live = false; };
  }, [user, supabase]);

  async function sendOtp(event) {
    event.preventDefault();
    if (!supabase) return setAuthMessage("Cloud sign-in is not configured. Demo mode still works locally.");
    setAuthBusy(true); setAuthMessage("");
    const { error } = await supabase.auth.signInWithOtp({ email: email.trim(), options: { shouldCreateUser: true } });
    setAuthBusy(false);
    if (error) setAuthMessage(error.message);
    else { setOtpSent(true); setAuthMessage("Check your inbox for the sign-in code."); }
  }

  async function verifyOtp(event) {
    event.preventDefault();
    if (!supabase) return;
    setAuthBusy(true); setAuthMessage("");
    const { error } = await supabase.auth.verifyOtp({ email: email.trim(), token: otp.trim(), type: "email" });
    setAuthBusy(false);
    if (error) setAuthMessage(error.message);
    else { setOtp(""); setOtpSent(false); setAuthMessage("Signed in. Your workspace data is private to your account."); }
  }

  async function signOut() {
    if (supabase) await supabase.auth.signOut();
    setUser(null); setDocuments(SAMPLE_DOCS); setQueries([]); setAnswer(null);
    setSelectedId(SAMPLE_DOCS[0].id); setCollection("All collections");
  }

  function addSampleWorkspace() {
    setDocuments(SAMPLE_DOCS);
    setSelectedId(SAMPLE_DOCS[0].id);
    setCollection("All collections");
    setNotice("Sample workspace loaded. Ask about launch goals, audit trails, exports, or retry behavior.");
  }

  async function uploadFiles(event) {
    const files = [...(event.target.files || [])];
    event.target.value = "";
    if (!files.length) return;
    let failedFile = files[0];
    let activeDocumentId = null;
    setBusy(true); setNotice("");
    try {
      const targetCollection = newCollection.trim() || (collection === "All collections" ? "Default collection" : collection);
      setModelState("Loading the local embedding model. First download may take a little time.");
      for (const file of files) {
        failedFile = file;
        if (file.size > 10 * 1024 * 1024) throw new Error(`${file.name} is over the 10 MB demo limit.`);
        const parsed = await readFile(file);
        const chunks = parsed.pages.flatMap((page) => chunkText(page.text, page.page_number));
        if (!chunks.length) throw new Error(`${file.name} has no extractable text.`);
        if (chunks.length > 120) throw new Error(`${file.name} is too long for this demo (maximum 120 chunks).`);

        let row = {
          id: `local-${crypto.randomUUID()}`,
          title: file.name.replace(/\.[^.]+$/, ""),
          file_name: file.name,
          collection_name: targetCollection,
          content: parsed.pages.map((page) => page.text).join("\n\n"),
          ingestion_status: "processing",
          chunks: chunks.map(({ content, page_number, chunk_index }) => ({ content, page_number, chunk_index })),
          sample: false,
        };

        if (user && supabase) {
          const { data, error } = await supabase.from("lab_documents").insert({
            title: row.title, file_name: row.file_name, collection_name: targetCollection,
            content: row.content, ingestion_status: "processing", chunks: { count: chunks.length, source_type: parsed.source_type },
          }).select().single();
          if (error) throw new Error(`Couldn't save ${file.name}: ${error.message}`);
          row = { ...row, ...data };
          activeDocumentId = row.id;
        }

        const embedded = [];
        for (let index = 0; index < chunks.length; index += 1) {
          setModelState(`Embedding ${file.name} · ${index + 1} of ${chunks.length}`);
          embedded.push({ ...chunks[index], embedding: await embedText(chunks[index].content, (progress) => {
            if (progress?.status === "progress" && Number.isFinite(progress.progress)) setModelState(`Downloading embedding model · ${Math.round(progress.progress)}%`);
          }) });
        }

        if (user && supabase) {
          const chunkRows = embedded.map((chunk) => ({
            document_id: row.id, chunk_index: chunk.chunk_index, content: chunk.content,
            page_number: chunk.page_number, embedding: `[${chunk.embedding.join(",")}]`,
          }));
          const { error: chunkError } = await supabase.from("lab_document_chunks").insert(chunkRows);
          if (chunkError) {
            await supabase.from("lab_documents").update({ ingestion_status: "failed" }).eq("id", row.id);
            throw new Error(`Embedding save failed for ${file.name}: ${chunkError.message}`);
          }
          const { error: readyError } = await supabase.from("lab_documents").update({ ingestion_status: "ready" }).eq("id", row.id);
          if (readyError) throw new Error(`Document saved, but status update failed: ${readyError.message}`);
        }
        row = { ...row, chunks: embedded, ingestion_status: "ready" };
        setDocuments((current) => [row, ...current.filter((doc) => doc.id !== row.id)]);
        setSelectedId(row.id);
      }
      setNewCollection("");
      setRetryFiles([]);
      activeDocumentId = null;
      setModelState("Model loaded and ready.");
      setNotice(user ? "Documents are indexed and saved to your private workspace." : "Documents are indexed in this browser. Sign in to keep them in Supabase.");
    } catch (error) {
      if (activeDocumentId && user && supabase) await supabase.from("lab_documents").delete().eq("id", activeDocumentId);
      setRetryFiles(failedFile ? [failedFile] : []);
      setModelState("Model ready when you are.");
      setNotice(error.message || "Upload failed. Try a smaller text-based file.");
    } finally { setBusy(false); }
  }

  async function runQuery(event) {
    event.preventDefault();
    if (!selectedDoc || !question.trim()) return;
    setBusy(true); setAnswer(null); setNotice("");
    try {
      const vector = await embedText(question.trim(), (progress) => {
        if (progress?.status === "progress" && Number.isFinite(progress.progress)) setModelState(`Downloading embedding model · ${Math.round(progress.progress)}%`);
      });
      let candidates = [];
      if (user && supabase && !selectedDoc.sample) {
        const { data, error } = await supabase.rpc("match_lab_document_chunks", {
          query_embedding: `[${vector.join(",")}]`, match_count: 16, target_document: selectedDoc.id,
        });
        if (error) throw new Error(`Retrieval failed: ${error.message}`);
        candidates = (data || []).map((chunk) => ({ ...chunk, semantic_score: Number(chunk.similarity) }));
      } else {
        candidates = normalizeChunkRows(selectedDoc).map((chunk) => ({ ...chunk, document_id: selectedDoc.id, semantic_score: 0 }));
      }
      candidates = candidates.map((chunk) => {
        const lexical_score = lexicalScore(question, chunk.content);
        const semantic_score = Number(chunk.semantic_score) || 0;
        return { ...chunk, lexical_score, score: hybridScore(semantic_score, lexical_score) };
      }).sort((a, b) => b.score - a.score).slice(0, 4);

      const best = candidates[0];
      const confidence = best ? Math.min(0.99, Math.max(0, best.score)) : 0;
      const abstained = !best || shouldAbstain(confidence);
      const result = {
        answer: abstained
          ? "I couldn't find strong evidence for that in the selected document. Try a more specific question or upload a source that covers it."
          : candidates.slice(0, 2).map((chunk) => chunk.content).join("\n\n"),
        confidence,
        abstained,
        citations: abstained ? [] : candidates.slice(0, 3).map((chunk) => ({
          document_id: chunk.document_id,
          file_name: selectedDoc.file_name,
          page_number: chunk.page_number,
          chunk_index: chunk.chunk_index,
          score: chunk.score,
          excerpt: chunk.content,
        })),
        retrieval: "MiniLM embeddings + lexical overlap",
      };
      if (expectedPhrase.trim()) {
        result.evaluation = {
          expected_phrase: expectedPhrase.trim(),
          expected_phrase_found: result.citations.some((citation) => citation.excerpt.toLowerCase().includes(expectedPhrase.trim().toLowerCase())),
          citation_present: result.citations.length > 0,
          evaluator_version: "retrieval-check-v1",
        };
      }
      setAnswer(result);

      if (user && supabase) {
        const { data, error } = await supabase.from("lab_document_queries").insert({
          document_id: selectedDoc.sample ? null : selectedDoc.id,
          question: question.trim(), answer: result.answer,
          citations: result.citations, evaluation: result.evaluation || { confidence: result.confidence, abstained: result.abstained },
        }).select().single();
        if (error) setNotice(`Answer ready, but query history couldn't be saved: ${error.message}`);
        else setQueries((current) => [data, ...current]);
      }
      setModelState("Model loaded and ready.");
    } catch (error) { setNotice(error.message || "Couldn't answer that question."); }
    finally { setBusy(false); }
  }

  async function deleteDocument(doc) {
    if (doc.sample) {
      setDocuments((current) => current.filter((item) => item.id !== doc.id));
      if (selectedId === doc.id) setAnswer(null);
      return;
    }
    if (!user || !supabase) return setNotice("Sign in before deleting cloud documents.");
    const { error } = await supabase.from("lab_documents").delete().eq("id", doc.id);
    if (error) return setNotice(`Delete failed: ${error.message}`);
    setDocuments((current) => current.filter((item) => item.id !== doc.id));
    if (selectedId === doc.id) setAnswer(null);
    setNotice("Document and its indexed chunks were deleted.");
  }

  function loadEvalExample() {
    setQuestion("What is the launch target for first-response time?");
    setExpectedPhrase("under 90 minutes");
    setSelectedId(SAMPLE_DOCS[0].id);
    setCollection("All collections");
    setShowEval(true);
    setNotice("Evaluation example loaded. Run it and check whether the cited evidence contains the expected phrase.");
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#top" aria-label="DocQA Workspace home"><span className="brand-icon">D</span><span>Jesseman Labs</span></a>
        <div className="sidebar-heading">Workspace</div>
        <a className="lab-nav" href="/journey">02 <span>Customer journey studio</span></a>
        <label className="field-label" htmlFor="collection-filter">Collection</label>
        <select id="collection-filter" value={collection} onChange={(event) => { setCollection(event.target.value); setAnswer(null); }}>
          <option>All collections</option>
          {collections.map((name) => <option key={name}>{name}</option>)}
        </select>
        <div className="document-heading"><span>Documents</span><span>{visibleDocs.length}</span></div>
        <div className="document-list">
          {visibleDocs.map((doc) => (
            <button className={`document-item ${selectedDoc?.id === doc.id ? "selected" : ""}`} key={doc.id} onClick={() => { setSelectedId(doc.id); setAnswer(null); }}>
              <span className="file-glyph">{doc.file_name?.split(".").pop()?.toUpperCase().slice(0, 3) || "DOC"}</span>
              <span className="document-name"><strong>{doc.title}</strong><small>{doc.collection_name} · {doc.ingestion_status}</small></span>
            </button>
          ))}
          {!visibleDocs.length && <p className="sidebar-empty">No documents in this collection yet.</p>}
        </div>
        <button className="upload-button" onClick={() => uploadRef.current?.click()} disabled={busy}>Add documents</button>
        <input ref={uploadRef} className="visually-hidden" type="file" accept=".pdf,.txt,.md,.markdown" multiple onChange={uploadFiles} />
        <button className="quiet-button sample-button" onClick={addSampleWorkspace}>Load sample workspace</button>
        <div className="sidebar-foot"><span className="status-dot" />Local embeddings · private cloud storage when signed in</div>
      </aside>

      <section className="main-panel" id="top">
        <header className="topbar">
          <div className="breadcrumbs"><span>Workspace</span><b>/</b><strong>Document assistant</strong></div>
          <div className="account-area">
            {user ? <><span className="account-email">{user.email}</span><button className="quiet-button" onClick={signOut}>Sign out</button></> : <span className="demo-pill">Demo mode</span>}
          </div>
        </header>

        <div className="content-wrap">
          <section className="intro-row">
            <div>
              <p className="eyebrow">FULL-STACK · RAG · EVALUATION</p>
              <h1>Ask your documents.<br /><em>See the evidence.</em></h1>
              <p className="intro-copy">A document workspace with private collections, local embeddings, hybrid retrieval, citations, and a visible abstention path.</p>
            </div>
            <div className="privacy-card"><span className="privacy-mark">↗</span><strong>Source-first by design</strong><p>Embeddings run in your browser. Signed-in documents and vectors stay in your Supabase workspace.</p></div>
          </section>

          <section className="toolbar-row" aria-label="Document controls">
            <div className="selected-document"><span className="large-file-glyph">{selectedDoc?.file_name?.split(".").pop()?.toUpperCase().slice(0, 3) || "DOC"}</span><div><strong>{selectedDoc?.title || "Choose a document"}</strong><small>{selectedDoc ? `${selectedDoc.collection_name} · ${normalizeChunkRows(selectedDoc).length} passages` : "Add a source to begin"}</small></div></div>
            <div className="toolbar-actions">
              <input className="collection-input" aria-label="New collection name" placeholder="Collection name" value={newCollection} onChange={(event) => setNewCollection(event.target.value)} />
              <button className="quiet-button" onClick={() => selectedDoc && deleteDocument(selectedDoc)} disabled={!selectedDoc}>Remove</button>
            </div>
          </section>

          {notice && <div className="notice" role="status"><span>{notice}</span>{retryFiles.length > 0 && <button className="notice-retry" onClick={async () => { const transfer = new DataTransfer(); retryFiles.forEach((file) => transfer.items.add(file)); if (uploadRef.current) { uploadRef.current.files = transfer.files; await uploadFiles({ target: uploadRef.current }); } }} disabled={busy}>Retry upload</button>}<button onClick={() => setNotice("")} aria-label="Dismiss">×</button></div>}

          <div className="work-grid">
            <section className="query-card">
              <div className="card-heading"><div><span className="step-number">01</span><h2>Ask a question</h2></div><span className="card-tag">EXTRACTIVE RAG</span></div>
              <form onSubmit={runQuery}>
                <label className="field-label" htmlFor="question">Question</label>
                <textarea id="question" rows="3" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="What is the launch target for first-response time?" required />
                {showEval && <div className="evaluation-input"><label className="field-label" htmlFor="expected-phrase">Expected phrase for this retrieval check</label><input id="expected-phrase" value={expectedPhrase} onChange={(event) => setExpectedPhrase(event.target.value)} placeholder="under 90 minutes" /></div>}
                <div className="query-actions"><button className="primary-button" type="submit" disabled={busy || !selectedDoc}>{busy ? "Working…" : "Search sources"}</button><button className="text-button" type="button" onClick={loadEvalExample}>Load evaluation example</button></div>
              </form>
              <p className="model-status">{modelState}</p>
              {answer && <div className="answer-panel">
                <div className="answer-title"><span>{answer.abstained ? "No strong evidence" : "Answer from retrieved passages"}</span><span>{Math.round(answer.confidence * 100)}% retrieval score</span></div>
                <p className={answer.abstained ? "abstention" : "answer-text"}>{answer.answer}</p>
                {answer.evaluation && <div className={`eval-result ${answer.evaluation.expected_phrase_found ? "pass" : "fail"}`}><strong>{answer.evaluation.expected_phrase_found ? "Retrieval check passed" : "Expected phrase not found"}</strong><span>{answer.evaluation.citation_present ? "At least one citation was returned." : "No citation returned."}</span></div>}
              </div>}
            </section>

            <section className="evidence-card">
              <div className="card-heading"><div><span className="step-number">02</span><h2>Evidence</h2></div><span className="card-tag">CITATIONS</span></div>
              {answer?.citations?.length ? <div className="citation-list">{answer.citations.map((citation, index) => <article className="citation" key={`${citation.chunk_index}-${index}`}><div className="citation-meta"><span>Source {String(index + 1).padStart(2, "0")}</span><span>{citation.page_number ? `Page ${citation.page_number}` : `Passage ${citation.chunk_index + 1}`}</span><span>{Math.round(citation.score * 100)}%</span></div><p>{citation.excerpt}</p><strong>{citation.file_name}</strong></article>)}</div> : <div className="empty-evidence"><div className="empty-symbol">⌕</div><strong>Your sources will appear here</strong><p>Run a question to see the passages used to form the response.</p></div>}
            </section>
          </div>

          <section className="lower-grid">
            <div className="history-card"><div className="card-heading"><div><span className="step-number">03</span><h2>Recent questions</h2></div><span className="card-tag">{queries.length} SAVED</span></div>
              {queries.length ? <div className="history-list">{queries.slice(0, 5).map((item) => <button className="history-item" key={item.id} onClick={() => { setQuestion(item.question); setAnswer({ answer: item.answer, citations: item.citations || [], confidence: item.evaluation?.confidence || 0, abstained: item.evaluation?.abstained || false, evaluation: item.evaluation?.expected_phrase ? item.evaluation : null }); }}><span>{item.question}</span><small>{new Date(item.created_at).toLocaleDateString()}</small></button>)}</div> : <p className="muted-copy">Queries are saved to your account after sign-in.</p>}
            </div>
            <div className="auth-card"><div className="card-heading"><div><span className="step-number">04</span><h2>{user ? "Private workspace" : "Save your work"}</h2></div><span className="card-tag">SUPABASE AUTH</span></div>
              {user ? <div className="signed-in-state"><span className="check-mark">✓</span><p>Signed in as <strong>{user.email}</strong>. Your documents, chunks, and query history are protected by owner-scoped row-level security.</p></div> : <form className="auth-form" onSubmit={otpSent ? verifyOtp : sendOtp}><label className="field-label" htmlFor="email">Email address</label><input id="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required disabled={otpSent} />{otpSent && <><label className="field-label" htmlFor="otp">Email sign-in code</label><input id="otp" inputMode="numeric" autoComplete="one-time-code" value={otp} onChange={(event) => setOtp(event.target.value)} placeholder="Enter the code" required /></>}<button className="secondary-button" disabled={authBusy}>{authBusy ? "Please wait…" : otpSent ? "Verify and sign in" : "Email me a sign-in code"}</button>{otpSent && <button type="button" className="text-button" onClick={() => { setOtpSent(false); setAuthMessage(""); }}>Use another email</button>}{authMessage && <p className="auth-message" role="status">{authMessage}</p>}</form>}
            </div>
          </section>

          <footer className="footer-note"><span>DocQA Workspace · Portfolio project 01</span><span>No generative model is used in this demo. Responses quote retrieved passages; uploaded source text is never executed as instructions.</span></footer>
        </div>
      </section>
    </main>
  );
}
