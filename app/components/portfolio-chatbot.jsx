"use client";
import { Chatbot } from "react-ai-chat";
import "react-ai-chat/style.css";

export default function PortfolioChatbot() {
  const starterPrompts = [
    "What is Ahmed's main tech stack?",
    "Tell me about his key projects.",
    "Is Ahmed available for work?",
  ];

  return (
    <Chatbot
      title="Ask Ahmed AI"
      subtitle="Trained on my projects, skills, and resume"
      apiEndpoint="/api/chat"
      triggerText="Ask AI about me"
      starterPrompts={starterPrompts}
      emptyStateText="👋 Hi! I can answer questions about Ahmed's experience, tech stack, and portfolio projects."
      theme={{
        primaryColor: "hsl(204 70% 53%)",
        primaryForeground: "hsl(0 0% 98%)",
        light: {
          background: "hsl(0 0% 100%)",
          foreground: "hsl(240 10% 3.9%)",
          mutedBackground: "hsl(240 4.8% 95.9%)",
          mutedForeground: "hsl(240 3.8% 46.1%)",
          borderColor: "hsl(240 5.9% 90%)",
        },
        dark: {
          background: "hsl(0 0% 4.3%)",
          foreground: "hsl(0 0% 98%)",
          mutedBackground: "hsl(240 3.7% 15.9%)",
          mutedForeground: "hsl(240 5% 64.9%)",
          borderColor: "hsl(240 3.7% 15.9%)",
        },
      }}
    />
  );
}
