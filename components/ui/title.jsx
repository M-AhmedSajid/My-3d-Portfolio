"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useCursor } from "@/context/cursor-context";
import { BoxReveal } from "../magicui/box-reveal";

export default function Title({ className, Comp, size, children }) {
  const { setSize } = useCursor();

  return (
    <Comp
      className={cn(className, "font-extrabold relative")}
      onMouseEnter={() => setSize(size)}
      onMouseLeave={() => setSize(24)}
    >
      <BoxReveal>{children}</BoxReveal>
    </Comp>
  );
}
