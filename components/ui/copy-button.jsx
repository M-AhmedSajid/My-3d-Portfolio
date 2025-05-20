"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextAnimate } from "../magicui/text-animate";

export default function CopyButton({txt, className}) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("flex items-center justify-center space-x-3", className)}>
    <p>{txt}</p>
      <Button
        variant="outline"
        size="icon"
        onClick={copyToClipboard}
        aria-label={copied ? "Copied" : "Copy to clipboard"}
      >
        <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
        <Copy
          className={`h-4 w-4 transition-all duration-300 ${
            copied ? "scale-0" : "scale-100"
          }`}
        />
        <Check
          className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
            copied ? "scale-100" : "scale-0"
          }`}
        />
      </Button>
    </div>
  );
}
