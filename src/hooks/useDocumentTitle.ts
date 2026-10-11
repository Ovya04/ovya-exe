// src/hooks/useDocumentTitle.ts
import { useEffect } from "react";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    const previous = document.title;
    if (title) document.title = `${title} · OVYA.exe`;
    return () => {
      document.title = previous;
    };
  }, [title]);
}