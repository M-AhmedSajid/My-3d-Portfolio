import embeddings from "./embeddings.json" with { type: "json" };
import { embed } from "./embed.js";
import { cosineSimilarity } from "./cosineSimilarity.js";

export async function retrieveContext(question, limit = 3) {
    const questionEmbedding = await embed(question);
    const questionLower = question.toLowerCase();

    const ranked = embeddings
        .map((doc) => {
            let score = cosineSimilarity(questionEmbedding, doc.embedding);

            const fileName = doc.id
                .split("/")
                .pop()
                .replace(/-/g, " ");

            if (questionLower.includes(fileName)) {
                score += 0.3;
            }

            return {
                ...doc,
                score,
            };
        })
        .sort((a, b) => b.score - a.score);

    return ranked.slice(0, limit);
}