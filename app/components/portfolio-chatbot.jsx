"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === "submitted" || status === "streaming";

  const starterPrompts = [
    "What is Ahmed's main tech stack?",
    "Tell me about his key projects.",
    "Is Ahmed available for work?",
  ];

  // 2. Update handleSubmit to accept optional text directly
  async function handleSubmit(e, customText) {
    if (e) e.preventDefault();
    const textToSend = customText || input;

    if (!textToSend.trim()) return;

    setInput("");
    await sendMessage({ text: textToSend });
  }

  useEffect(() => {
    if (isOpen) {
      document.documentElement.setAttribute("data-scroll-locked", "1");
    } else {
      document.documentElement.removeAttribute("data-scroll-locked");
    }
    return () => {
      document.documentElement.removeAttribute("data-scroll-locked");
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-5 right-5 z-30">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-primary text-white hover:bg-black dark:hover:bg-white dark:hover:text-black  px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="text-sm font-medium pr-1">Ask AI about me</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-x-2 bottom-5 md:inset-auto md:bottom-5 md:right-5 w-[calc(100vw-16px)] md:w-[350px] h-[80vh] md:h-[500px] bg-card border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm">Ask Ahmed AI</h3>
              <p className="text-[11px] text-blue-100">
                Trained on my projects, skills, and resume
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            {messages.length === 0 && (
              <div className="space-y-4 my-auto pt-2">
                <div className="text-muted-foreground text-xs text-center leading-relaxed">
                  👋 Hi! I can answer questions about Ahmed's experience, tech
                  stack, and portfolio projects.
                </div>

                {/* Starter Chips Container */}
                <div className="flex flex-col gap-2 pt-2">
                  <p className="text-[11px] font-medium text-muted-foreground text-center">
                    Try asking:
                  </p>
                  {starterPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleSubmit(undefined, prompt)}
                      className="text-xs text-left bg-muted hover:bg-background hover:text-accent-foreground p-2.5 rounded-lg border transition-colors flex items-center justify-between group"
                    >
                      <span>{prompt}</span>
                      <span className="text-muted-foreground group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`p-3 rounded-xl max-w-[85%] ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-muted text-foreground mr-auto"
                }`}
              >
                {m.parts.map((part, i) => {
                  if (part.type !== "text") return null;

                  return (
                    <div
                      className="prose prose-sm dark:prose-invert max-w-none"
                      key={`${m.id}-${i}`}
                    >
                      <Markdown>{part.text}</Markdown>
                    </div>
                  );
                })}
              </div>
            ))}
            {isLoading && (
              <div className="bg-muted rounded-xl p-3 mr-auto max-w-[85%] flex items-end gap-1">
                Thinking
                <div className="size-1.5 bg-foreground rounded-full animate-bounce [animation-delay:-0.3s] mb-1"></div>
                <div className="size-1.5 bg-foreground rounded-full animate-bounce [animation-delay:-0.15s] mb-1"></div>
                <div className="size-1.5 bg-foreground rounded-full animate-bounce mb-1"></div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
              placeholder="Ask a question..."
              className="flex-1 text-sm bg-muted px-3 py-2 rounded-lg border focus:outline-none"
              autoFocus
            />
            <Button
              type="submit"
              disabled={isLoading || !input.length}
              className="size-9 [&_svg]:size-4"
            >
              <Send />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
