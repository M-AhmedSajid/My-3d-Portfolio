"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import dynamic from "next/dynamic";
import React from "react";
const Timeline = dynamic(() => import("@/components/timeline"), {
  ssr: false,
});

export default function ExpSection() {
  return (
    <section id="exp">
      <TextAnimate
        animation="slideLeft"
        by="character"
        as="h2"
        once
        className="text-center mb-5 text-4xl font-bold"
      >
        Experience.
      </TextAnimate>
      <div className="container" suppressHydrationWarning>
        <Timeline />
      </div>
    </section>
  );
}
