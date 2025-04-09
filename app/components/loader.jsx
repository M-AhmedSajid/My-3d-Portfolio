"use client";
import React, { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className={`w-screen h-screen z-[99] bg-black flex justify-center items-center relative ${isLoading ? "" : "hidden"}`}>
      <div className="spinner">
        <div className="absolute w-full h-full bg-[rgba(247,197,159,0.1)] border-[3.5px] border-[rgb(247,197,159)] [transform:translateZ(-35.2px)_rotateY(180deg)]"></div>
        <div className="absolute w-full h-full bg-[rgba(247,197,159,0.1)] border-[3.5px] border-[rgb(247,197,159)] [transform:rotateY(-270deg)_translateX(50%)] origin-top-right"></div>
        <div className="absolute w-full h-full bg-[rgba(247,197,159,0.1)] border-[3.5px] border-[rgb(247,197,159)] [transform:rotateY(270deg)_translateX(-50%)] origin-left"></div>
        <div className="absolute w-full h-full bg-[rgba(247,197,159,0.1)] border-[3.5px] border-[rgb(247,197,159)] [transform:rotateX(90deg)_translateY(-50%)] origin-top"></div>
        <div className="absolute w-full h-full bg-[rgba(247,197,159,0.1)] border-[3.5px] border-[rgb(247,197,159)] [transform:rotateX(-90deg)_translateY(50%)] origin-bottom"></div>
        <div className="absolute w-full h-full bg-[rgba(247,197,159,0.1)] border-[3.5px] border-[rgb(247,197,159)] [transform:translateZ(35.2px)]"></div>
      </div>
    </div>
  );
}
