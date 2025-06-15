"use client";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useModelLoadContext } from "@/context/model-load-context";
import React, { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialTxt, setInitialTxt] = useState(true);
  const { modelLoaded } = useModelLoadContext();

  useEffect(() => {
    setInitialTxt(false);

    // Only hide the loader when the 3D model is loaded
    if (modelLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300); // Small delay after model loads to ensure smooth transition

      return () => clearTimeout(timer);
    }
  }, [modelLoaded]);

  return (
    <div
      className={`w-screen h-screen z-[99] flex flex-col justify-center items-center fixed duration-700 transition-transform bg-white dark:bg-black top-0 ${
        isLoading ? "" : "-translate-y-full"
      }`}
    >
      <div className="spinner">
        <div className="absolute w-full h-full bg-primary/25 border-[3.5px] border-primary [transform:translateZ(-45px)_rotateY(180deg)]"></div>
        <div className="absolute w-full h-full bg-primary/25 border-[3.5px] border-primary [transform:rotateY(-270deg)_translateX(50%)] origin-top-right"></div>
        <div className="absolute w-full h-full bg-primary/25 border-[3.5px] border-primary [transform:rotateY(270deg)_translateX(-50%)] origin-left"></div>
        <div className="absolute w-full h-full bg-primary/25 border-[3.5px] border-primary [transform:rotateX(90deg)_translateY(-50%)] origin-top"></div>
        <div className="absolute w-full h-full bg-primary/25 border-[3.5px] border-primary [transform:rotateX(-90deg)_translateY(50%)] origin-bottom"></div>
        <div className="absolute w-full h-full bg-primary/25 border-[3.5px] border-primary [transform:translateZ(45px)]"></div>
      </div>

      {/* Loading message with subtle animation */}
      <div className="text-center mt-10">
        {initialTxt ? (
          <p className="text-lg font-medium text-primary py-2">Initializing...</p>
        ) : (
          <WordRotate
            words={[
              "Loading 3D assets...",
              "Preparing environment...",
              "Rendering models...",
            ]}
            className="text-lg font-medium text-primary"
          />
        )}
        <p className="text-sm text-gray-500 mt-1">
          Please wait while we prepare your experience
        </p>
      </div>
    </div>
  );
}
