"use client";

import { useModelLoadContext } from "@/context/model-load-context";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor = "#2aafe4",
  duration,
}) => {
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { modelLoaded } = useModelLoadContext();
  useEffect(() => {
    if (isInView && modelLoaded) {
      slideControls.start("visible");
    } else {
      slideControls.start("hidden");
    }
  }, [isInView, modelLoaded, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
        {children}

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration ? duration : 0.5, ease: "easeIn", delay: 0.8 }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor,
        }}
      />
    </div>
  );
};
