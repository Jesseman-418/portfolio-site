import test from "node:test";
import assert from "node:assert/strict";
import { chunkText, hybridScore, lexicalScore, shouldAbstain } from "../lib/retrieval.js";
import { demoContacts, simulateJourney } from "../lib/journey.js";

test("chunks normalized text with overlap, stable indices, and page attribution", () => {
  const source = ("This sentence contains enough words to be retained by the document chunking system. ").repeat(20);
  const chunks = chunkText(source, 3, 180, 30);
  assert.ok(chunks.length > 1);
  assert.deepEqual(chunks.map((chunk) => chunk.chunk_index), chunks.map((_, index) => index));
  assert.ok(chunks.every((chunk) => chunk.page_number === 3 && chunk.content.length >= 24));
  const overlap = Math.max(...Array.from({ length: 31 }, (_, size) => size).filter((size) =>
    size > 0 && chunks[0].content.slice(-size) === chunks[1].content.slice(0, size)
  ));
  assert.ok(overlap >= 15, `expected a useful overlap, got ${overlap}`);
});

test("hybrid ranking incorporates lexical and semantic evidence", () => {
  assert.equal(lexicalScore("launch target", "The launch target is under ninety minutes."), 1);
  assert.ok(hybridScore(0.8, 0.9) > hybridScore(0.8, 0.1));
});

test("low retrieval confidence abstains; strong evidence can answer", () => {
  assert.equal(shouldAbstain(0.1), true);
  assert.equal(shouldAbstain(0.22), false);
  assert.equal(shouldAbstain(Number.NaN), true);
});

test("journey simulation applies audience filters and emits per-step delivery audit data", () => {
  const run = simulateJourney({ audience: { plan: "trial", min_activity: 2 }, steps: [
    { id: "welcome", type: "email", label: "Welcome" },
    { id: "delay", type: "wait", label: "Wait one day", delay_minutes: 1440 },
  ] });
  assert.equal(run.contacts_considered, demoContacts.length);
  assert.equal(run.contacts_eligible, 1);
  assert.equal(run.contacts_excluded, 3);
  assert.equal(run.outcomes[0].contact_id, "cont_amber");
  assert.equal(run.outcomes[0].deliveries[1].status, "scheduled");
  assert.ok(run.delivery_count >= 1);
});
