export function chunkText(text, pageNumber = null, size = 720, overlap = 100) {
  const normalized = text.replace(/\r/g, "").replace(/[\t ]+/g, " ").trim();
  const chunks = [];
  let start = 0;
  while (start < normalized.length && chunks.length < 120) {
    let end = Math.min(start + size, normalized.length);
    if (end < normalized.length) {
      const boundary = normalized.lastIndexOf(" ", end);
      if (boundary > start + size * 0.62) end = boundary;
    }
    const content = normalized.slice(start, end).trim();
    if (content.length >= 24) chunks.push({ content, page_number: pageNumber, chunk_index: chunks.length });
    if (end >= normalized.length) break;
    start = Math.max(end - overlap, start + 1);
  }
  return chunks;
}

export function lexicalScore(query, text) {
  const terms = query.toLowerCase().match(/[a-z0-9]{2,}/g) || [];
  if (!terms.length) return 0;
  const source = text.toLowerCase();
  const unique = [...new Set(terms)];
  const hits = unique.reduce((sum, term) => sum + (source.includes(term) ? 1 : 0), 0);
  return hits / unique.length;
}

export function hybridScore(semantic, lexical) {
  return 0.72 * Math.max(0, Math.min(1, semantic)) + 0.28 * Math.max(0, Math.min(1, lexical));
}

export function shouldAbstain(score, threshold = 0.22) {
  return !Number.isFinite(score) || score < threshold;
}
