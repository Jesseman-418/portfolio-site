import { chunkText, lexicalScore } from "./retrieval";

let pipelinePromise;

async function getPipeline(onProgress) {
  if (!pipelinePromise) {
    pipelinePromise = import("@huggingface/transformers").then(({ pipeline, env }) => {
      env.allowLocalModels = false;
      env.useBrowserCache = true;
      return pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2", {
        progress_callback: onProgress,
      });
    });
  }
  return pipelinePromise;
}

export async function embedText(text, onProgress) {
  const extractor = await getPipeline(onProgress);
  const output = await extractor(text.slice(0, 1800), { pooling: "mean", normalize: true });
  const vector = Array.from(output.data, Number);
  if (vector.length !== 384 || vector.some((value) => !Number.isFinite(value))) {
    throw new Error("The embedding model returned an invalid vector.");
  }
  return vector;
}

export { chunkText, lexicalScore };

