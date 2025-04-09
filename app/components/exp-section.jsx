import { TextAnimate } from "@/components/magicui/text-animate";
import Timeline from "@/components/timeline";
import React from "react";

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
