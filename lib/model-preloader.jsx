"use client";
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

// This component can be placed in your layout or main page component
// It will start preloading the 3D model as soon as possible
export default function ModelPreloader() {
  useEffect(() => {
    // Start loading the model as early as possible
    useGLTF.preload("./desktop_pc/scene.gltf");
  }, []);
  
  // This component doesn't render anything
  return null;
}