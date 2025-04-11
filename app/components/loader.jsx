"use client";
import React, { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // delay lets the initial render happen first

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`w-screen h-screen z-[99] flex justify-center items-center fixed duration-1000 transition-all bg-white dark:bg-black ${
        isLoading ? "top-0" : "-top-[130%]"
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
    </div>
  );
}
