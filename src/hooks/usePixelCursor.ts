// src/hooks/usePixelCursor.ts
import { useEffect } from "react";
import { cursorValues } from "../utils/cursor";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

/** Enables the custom cursor only for mouse/trackpad users. Touch devices are untouched. */
export function usePixelCursor() {
  useEffect(() => {
    const mql = window.matchMedia(FINE_POINTER);
    const root = document.documentElement;

    const apply = () => {
      if (mql.matches) {
        root.style.setProperty("--cursor-arrow", cursorValues.arrow);
        root.style.setProperty("--cursor-pointer", cursorValues.pointer);
        root.classList.add("custom-cursor");
      } else {
        root.classList.remove("custom-cursor");
      }
    };

    apply();
    mql.addEventListener("change", apply);
    return () => {
      mql.removeEventListener("change", apply);
      root.classList.remove("custom-cursor");
    };
  }, []);
}