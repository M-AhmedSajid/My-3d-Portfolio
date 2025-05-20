"use client"
import { createContext, useContext, useState } from "react";

// Create a context to manage the model loading state
const ModelLoadContext = createContext();

export const ModelLoadProvider = ({ children }) => {
  const [modelLoaded, setModelLoaded] = useState(false);

  return (
    <ModelLoadContext.Provider value={{ modelLoaded, setModelLoaded }}>
      {children}
    </ModelLoadContext.Provider>
  );
};

export const useModelLoadContext = () => useContext(ModelLoadContext);