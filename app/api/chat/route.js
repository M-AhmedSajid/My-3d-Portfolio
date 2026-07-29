import { retrieveContext } from "@/lib/retrieveContext";
import { google } from "@ai-sdk/google";
import {
    convertToModelMessages,
    createUIMessageStreamResponse,
    streamText,
    toUIMessageStream,
} from "ai";

const allowedOrigin = process.env.ALLOWED_ORIGIN;

const corsHeaders = {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: corsHeaders,
    });
}

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req) {
    try {
        const { messages } = await req.json();

        const lastUserMessage = messages
            .filter((m) => m.role === "user")
            .at(-1);

        const question =
            lastUserMessage?.parts
                ?.filter((part) => part.type === "text")
                ?.map((part) => part.text)
                ?.join(" ") ?? "";

        const relevantDocs = await retrieveContext(question);

        const context = relevantDocs
            .map((doc) => `Source: ${doc.id}
            ${doc.text}
        `).join("\n\n====================\n\n");

        const system = `
        You are the AI assistant for Muhammad Ahmed Sajid's portfolio.

        Your job is to help visitors learn about Ahmed's background, projects, skills, education, services, and experience.

        Guidelines:

        - Use the provided portfolio context as your primary source of truth.
        - If the answer is not present in the context, clearly say you don't have that information instead of guessing.
        - Never fabricate projects, experience, skills, education, contact information, or achievements.
        - Keep answers concise and professional.
        - Expand only if the user asks for more detail.
        - If someone is interested in hiring or collaborating with Ahmed, encourage them to use the contact section of the portfolio.
        - Politely decline unrelated general knowledge questions by explaining that you're designed specifically for Ahmed's portfolio.

        Portfolio Context:

        ${context}
    `;

        const recentMessages = messages.slice(-6);

        const modelMessages = await convertToModelMessages(recentMessages);

        const result = streamText({
            model: google("gemini-3.5-flash-lite"),
            system,
            messages: modelMessages,
        });

        return createUIMessageStreamResponse({
            stream: toUIMessageStream({
                stream: result.stream,
            }),
            headers: corsHeaders,
        });
    } catch (error) {
        console.error(error);

        return new Response(
            JSON.stringify({
                error: "Something went wrong.",
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    ...corsHeaders,
                },
            }
        );
    }

}