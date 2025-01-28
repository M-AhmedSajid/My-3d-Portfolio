"use client";
import React from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/lib/useMousePosition";
import { useCursor } from "@/context/cursor-context";

export default function Cursor() {
  const { x, y } = useMousePosition();
  const { size } = useCursor();

  return (
    <motion.div
      className="bg-white rounded-full fixed pointer-events-none z-10 mix-blend-difference"
      animate={{
        top: `${y - size / 2}px`,
        left: `${x - size / 2}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut" }}
    />
  );
}
