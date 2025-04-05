import { TextAnimate } from "@/components/magicui/text-animate";
import Timeline from "@/components/timeline";
import React from "react";

export default function ExpSection() {
  return (
    <section>
      <TextAnimate
        animation="slideLeft"
        by="character"
        as="h2"
        once
        className="text-center mb-5 text-4xl font-bold"
      >
        Experience.
      </TextAnimate>
      <div className="container">
        <Timeline />
      </div>
    </section>
  );
}
