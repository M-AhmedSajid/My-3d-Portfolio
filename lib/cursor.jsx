"use client";
import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useCursor } from "@/context/cursor-context";

export default function Cursor() {
  const { size, button } = useCursor();
  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const updateMousePosition = (e) => {
    const { clientX, clientY } = e;
    if (button) {
      const { left, top, width, height } = button;
      const center = { x: left + width / 2, y: top + height / 2 };
      const distance = { x: clientX - center.x, y: clientY - center.y };
      mouse.x.set(center.x - width / 2 + distance.x * 0.1);
      mouse.y.set(center.y - height / 2 + distance.y * 0.1);
    } else {
      mouse.x.set(clientX - size / 2);
      mouse.y.set(clientY - size / 2);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });

  let animateCursor;
  if (button) {
    const { width, height } = button;
    animateCursor = {
      width: `${width}px`,
      height: `${height}px`,
    };
  } else {
    animateCursor = {
      width: size,
      height: size,
    };
  }

  return (
    <motion.div
      className={`bg-white fixed pointer-events-none z-40 mix-blend-difference ${
        button ? "rounded-md" : "rounded-full"
      }`}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={animateCursor}
    />
  );
}
