"use client";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ReactNode, useState, useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";
import AmbientBlobs from "./AmbientBlobs";
import ArcadeCabinet from "./ArcadeCabinet";
import { useKonamiCode } from "@/hooks/useKonamiCode";

export default function ClientProviders({ children }: { children: ReactNode }) {
  const [arcadeMode, setArcadeMode] = useState(false);

  useKonamiCode(() => setArcadeMode(true));

  // F5 to exit (handled in ArcadeCabinet too, but also here for safety)
  useEffect(() => {
    if (!arcadeMode) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "F5") { e.preventDefault(); setArcadeMode(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [arcadeMode]);

  return (
    <LanguageProvider>
      <ParticlesBackground />
      <AmbientBlobs />
      {arcadeMode && <ArcadeCabinet onExit={() => setArcadeMode(false)} />}
      {children}
    </LanguageProvider>
  );
}
