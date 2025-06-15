"use client";

import { useEffect } from "react";
import AOS from "aos";

export const AOSInit = () => {
  useEffect(() => {
    // Dynamically load the CSS so it's not render-blocking
    import("aos/dist/aos.css").then(() => {
      AOS.init({
        duration: 500,
        once: true,
      });
    });
  }, []);

  return null;
};
