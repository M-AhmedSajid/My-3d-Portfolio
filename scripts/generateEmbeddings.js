import { GoogleGenAI } from "@google/genai";
import fg from "fast-glob";
import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

/**
 * Clean Markdown syntax to improve semantic vector density
 */
function stripMarkdown(text) {
    return text
        .replace(/^#+\s+/gm, "")       // Remove header symbols (#, ##, etc.)
        .replace(/[*_~`]/g, "")         // Remove emphasis markers (*, _, ~, `)
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Simplify links [text](url) -> text
        .trim();
}

async function generateEmbeddings() {
    const files = await fg("data/**/*.md");
    const embeddings = [];

    for (const file of files) {

        const markdown = await fs.readFile(file, "utf8");
        const { data, content } = matter(markdown);

        // Normalize ID and clean up text
        const id = file.replace(/^data\//, "").replace(/\.md$/, "");
        const docName = path.basename(file, ".md");
        const cleanedContent = stripMarkdown(content);

        // Build a concise context representation prioritizing Title & Overview
        const textToEmbed = `
            Document Title: ${data.title || docName}
            Category/Path: ${id}
            Overview & Content:
            ${cleanedContent}
        `.trim();

        const result = await ai.models.embedContent({
            model: "gemini-embedding-001",
            contents: textToEmbed,
            config: {
                // Task type optimization for document retrieval
                taskType: "RETRIEVAL_DOCUMENT",
            }
        });

        embeddings.push({
            id,
            source: file,
            text: content,
            embedding: result.embeddings[0].values,
        });
    }

    await fs.mkdir("lib", { recursive: true });

    await fs.writeFile(
        "lib/embeddings.json",
        JSON.stringify(embeddings, null, 2)
    );

    console.log(`\n✅ Generated ${embeddings.length} embeddings.`);
}

generateEmbeddings().catch(console.error);