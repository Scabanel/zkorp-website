"use client";
import { useEffect, useRef } from "react";

// Use e.key for arrows (same on all layouts) and lowercase letters for B/A
// so it works on AZERTY keyboards too.
const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function useKonamiCode(onSuccess: () => void) {
  const progress = useRef(0);
  const callbackRef = useRef(onSuccess);
  callbackRef.current = onSuccess;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key; // e.key gives the actual character, layout-aware
      if (key === KONAMI[progress.current]) {
        progress.current += 1;
        if (progress.current === KONAMI.length) {
          progress.current = 0;
          callbackRef.current();
        }
      } else {
        progress.current = key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []); // stable — callback stored in ref
}
