"use client";
import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [size, setSize] = useState(24);

  return (
    <CursorContext.Provider value={{ size, setSize }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
