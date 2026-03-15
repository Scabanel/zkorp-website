"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  onExit: () => void;
}

// iframe renders AT the screen size — no scale transform, no zoom
const SCREEN_W  = 980;
const SCREEN_H  = 612;
const CABINET_W = 1120;

// Estimated full cabinet bounding box (widest/tallest parts)
const CABINET_TOTAL_W = CABINET_W * 1.12; // base is widest  ≈ 1254px
const CABINET_TOTAL_H = 944;              // marquee+body+panel+lower+base+feet

// ── Sub-components ────────────────────────────────────────────────────────────

function Joystick() {
  return (
    <div style={{ position: "relative", width: 68, height: 78, userSelect: "none" }}>
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0, height: 58,
        borderRadius: "50%",
        background: "radial-gradient(circle at 38% 32%, #2e2e2e, #0d0d0d)",
        border: "2px solid #3a3a3a",
        boxShadow: "0 6px 16px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)",
      }} />
      <div style={{
        position: "absolute",
        bottom: 16, left: "50%",
        transform: "translateX(-50%) rotate(45deg)",
        width: 22, height: 22,
        background: "#111", border: "1px solid #252525",
      }} />
      <div style={{
        position: "absolute",
        bottom: 28, left: "50%",
        transform: "translateX(-50%)",
        width: 10, height: 34,
        background: "linear-gradient(90deg, #333, #888, #555, #888, #333)",
        borderRadius: "4px 4px 1px 1px",
        zIndex: 2,
        boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
      }} />
      <div style={{
        position: "absolute",
        top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: 26, height: 26,
        borderRadius: "50%",
        background: "radial-gradient(circle at 32% 28%, #e2e2e2, #999, #333)",
        border: "1px solid #555",
        boxShadow: "0 3px 10px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.3)",
        zIndex: 3,
      }} />
    </div>
  );
}

function ArcadeButton({ color, size = 28 }: { color: string; size?: number }) {
  return (
    <div style={{
      width: size, height: size,
      borderRadius: "50%",
      background: `radial-gradient(circle at 32% 28%, ${color}ff, ${color}88, ${color}33)`,
      border: `2px solid ${color}aa`,
      boxShadow: `0 4px 10px rgba(0,0,0,0.7), 0 0 12px ${color}44, inset 0 1px 0 rgba(255,255,255,0.25)`,
      position: "relative", flexShrink: 0,
    }}>
      <div style={{
        position: "absolute", top: "14%", left: "18%",
        width: "36%", height: "28%",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.28)",
      }} />
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function ArcadeCabinet({ onExit }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [scale, setScale] = useState(1);

  // Compute scale so the cabinet always fits the viewport with breathing room
  useEffect(() => {
    const compute = () => {
      const margin = 48; // px breathing room on each axis
      const sx = (window.innerWidth  - margin) / CABINET_TOTAL_W;
      const sy = (window.innerHeight - margin) / CABINET_TOTAL_H;
      setScale(Math.min(1, sx, sy));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    try {
      const audio = new Audio("/shoryuken.mp3");
      audio.volume = 0.25;
      audio.play().catch(() => {});
    } catch {}
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "F5") { e.preventDefault(); onExit(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onExit]);

  const SIDE_W = (CABINET_W - SCREEN_W) / 2;

  return (
    <>
      <style>{`
        /* VHS effects */
        @keyframes vhs-flicker {
          0%, 87%, 90%, 93%, 100% { opacity: 1; }
          88% { opacity: 0.75; } 91% { opacity: 0.9; } 94% { opacity: 0.82; }
        }
        @keyframes vhs-scanroll {
          from { top: -3px; } to { top: ${SCREEN_H + 3}px; }
        }
        @keyframes vhs-tracking {
          0%, 79%   { opacity: 0; top: -10%; }
          81%       { opacity: 0.26; top: 4%; }
          90%       { opacity: 0.14; top: 86%; }
          92%, 100% { opacity: 0; top: 108%; }
        }
        @keyframes vhs-rgb {
          0%, 77%, 81%, 100% { transform: translateX(0); }
          78% { transform: translateX(-3px); }
          79% { transform: translateX(3px); }
          80% { transform: translateX(-1px); }
        }

        /* LED lighting */
        @keyframes marquee-glow {
          0%, 100% { opacity: 0.7; } 50% { opacity: 1; }
        }
        @keyframes led-flow-up {
          from { background-position: 0 0; }
          to   { background-position: 0 -120px; }
        }
        @keyframes led-flow-down {
          from { background-position: 0 0; }
          to   { background-position: 0 120px; }
        }
        @keyframes backlight-drift {
          0%   { opacity: 0.55; filter: hue-rotate(0deg)   brightness(1); }
          25%  { opacity: 0.85; filter: hue-rotate(35deg)  brightness(1.3); }
          50%  { opacity: 0.65; filter: hue-rotate(-20deg) brightness(1.1); }
          75%  { opacity: 0.9;  filter: hue-rotate(50deg)  brightness(1.4); }
          100% { opacity: 0.55; filter: hue-rotate(0deg)   brightness(1); }
        }
        @keyframes screen-led-pulse {
          0%, 100% { opacity: 0.5; filter: hue-rotate(0deg); }
          33%      { opacity: 0.9; filter: hue-rotate(40deg); }
          66%      { opacity: 0.7; filter: hue-rotate(-25deg); }
        }
        @keyframes led-beam-l {
          0%, 100% { transform: scaleY(1) translateY(0); opacity: 0.6; }
          50%      { transform: scaleY(1.15) translateY(-20px); opacity: 1; }
        }
        @keyframes led-beam-r {
          0%, 100% { transform: scaleY(1) translateY(-20px); opacity: 0.6; }
          50%      { transform: scaleY(1.15) translateY(0); opacity: 1; }
        }
      `}</style>

      <div style={{
        position: "fixed", inset: 0, zIndex: 99999,
        background: "radial-gradient(ellipse 140% 120% at 50% 55%, #0c0808 0%, #020202 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Courier New', monospace",
        overflow: "hidden",
      }}>

        {/* ── BACKLIGHTS (behind everything) ─────────────────────── */}

        {/* Main color-shifting halo */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1100, height: 700,
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(240,112,96,0.18) 0%, rgba(155,143,212,0.12) 50%, transparent 75%)",
          animation: "backlight-drift 6s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        {/* Left beam */}
        <div style={{
          position: "absolute",
          left: "calc(50% - 580px)", top: "15%",
          width: 80, height: "65%",
          background: "linear-gradient(90deg, transparent, rgba(240,112,96,0.15) 50%, transparent)",
          filter: "blur(16px)",
          animation: "led-beam-l 4s ease-in-out infinite",
          pointerEvents: "none", zIndex: 0,
        }} />
        {/* Right beam */}
        <div style={{
          position: "absolute",
          right: "calc(50% - 580px)", top: "15%",
          width: 80, height: "65%",
          background: "linear-gradient(270deg, transparent, rgba(155,143,212,0.15) 50%, transparent)",
          filter: "blur(16px)",
          animation: "led-beam-r 4s ease-in-out infinite",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* ── LED STRIPS (alongside cabinet) ─────────────────────── */}

        {/* Left LED strip */}
        <div style={{
          position: "absolute",
          left: "calc(50% - 530px)", top: "18%",
          width: 4, height: "55%",
          borderRadius: 2,
          background: "repeating-linear-gradient(180deg, #F07060 0px, #F07060 8px, transparent 8px, transparent 16px)",
          backgroundSize: "100% 16px",
          boxShadow: "0 0 8px #F07060, 0 0 20px rgba(240,112,96,0.4)",
          animation: "led-flow-up 1.8s linear infinite, screen-led-pulse 5s ease-in-out infinite",
          pointerEvents: "none", zIndex: 1,
        }} />
        {/* Left strip glow */}
        <div style={{
          position: "absolute",
          left: "calc(50% - 536px)", top: "18%",
          width: 16, height: "55%",
          background: "linear-gradient(90deg, transparent, rgba(240,112,96,0.2), transparent)",
          filter: "blur(4px)",
          animation: "screen-led-pulse 5s ease-in-out infinite",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* Right LED strip */}
        <div style={{
          position: "absolute",
          right: "calc(50% - 530px)", top: "18%",
          width: 4, height: "55%",
          borderRadius: 2,
          background: "repeating-linear-gradient(180deg, #9B8FD4 0px, #9B8FD4 8px, transparent 8px, transparent 16px)",
          backgroundSize: "100% 16px",
          boxShadow: "0 0 8px #9B8FD4, 0 0 20px rgba(155,143,212,0.4)",
          animation: "led-flow-down 1.8s linear infinite, screen-led-pulse 5s ease-in-out infinite 2.5s",
          pointerEvents: "none", zIndex: 1,
        }} />
        {/* Right strip glow */}
        <div style={{
          position: "absolute",
          right: "calc(50% - 536px)", top: "18%",
          width: 16, height: "55%",
          background: "linear-gradient(270deg, transparent, rgba(155,143,212,0.2), transparent)",
          filter: "blur(4px)",
          animation: "screen-led-pulse 5s ease-in-out infinite 2.5s",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* Floor glow */}
        <div style={{
          position: "absolute", bottom: "5%", left: "50%",
          transform: "translateX(-50%)",
          width: 800, height: 50,
          background: "radial-gradient(ellipse, rgba(155,143,212,0.12) 0%, transparent 70%)",
          filter: "blur(16px)",
          animation: "backlight-drift 6s ease-in-out infinite 3s",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* ── CABINET ────────────────────────────────────────────── */}
        <div style={{
          position: "relative", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}>

          {/* MARQUEE */}
          <div style={{
            width: CABINET_W * 0.9, height: 72,
            background: "linear-gradient(180deg, #130808 0%, #230d0d 70%, #1a0a0a 100%)",
            border: "2px solid #F07060",
            borderBottom: "none",
            clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
            boxShadow: "0 -6px 24px rgba(240,112,96,0.3), inset 0 0 40px rgba(240,112,96,0.08)",
          }}>
            <div style={{
              position: "absolute", bottom: 0, left: "6%", right: "6%", height: 2,
              background: "linear-gradient(90deg, transparent, #F07060 25%, #9B8FD4 50%, #F07060 75%, transparent)",
              animation: "marquee-glow 2.4s ease-in-out infinite",
            }} />
            <span style={{
              fontSize: "1.55rem", fontWeight: 900,
              letterSpacing: "0.4em", textTransform: "uppercase",
              textShadow: "0 0 10px rgba(240,112,96,1), 0 0 30px rgba(240,112,96,0.6), 0 0 60px rgba(240,112,96,0.2)",
            }}>
              <span style={{ color: "#F07060" }}>Z</span>
              <span style={{ color: "#fff" }}>KORP</span>
              <span style={{ color: "#9B8FD4", marginLeft: "0.6rem" }}>ARCADE</span>
            </span>
            {[...Array(12)].map((_, i) => (
              <div key={i} style={{
                position: "absolute", bottom: 8,
                left: `${6 + i * 8}%`,
                width: 3, height: 3, borderRadius: "50%",
                background: i % 3 === 0 ? "#F07060" : i % 3 === 1 ? "#9B8FD4" : "#fff",
                boxShadow: `0 0 4px ${i % 3 === 0 ? "#F07060" : i % 3 === 1 ? "#9B8FD4" : "#fff"}`,
              }} />
            ))}
          </div>

          {/* BODY */}
          <div style={{
            width: CABINET_W,
            background: "#0e0e0e",
            border: "2px solid #1c1c1c",
            borderTop: "none", borderBottom: "none",
            display: "flex",
          }}>
            {/* Left speaker */}
            <div style={{
              width: SIDE_W, flexShrink: 0,
              background: "linear-gradient(180deg, #0a0a0a, #101010)",
              borderRight: "1px solid #1a1a1a",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 5, padding: "20px 0",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, padding: "0 8px" }}>
                {[...Array(18)].map((_, i) => (
                  <div key={i} style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "#1a1a1a", border: "1px solid #222",
                  }} />
                ))}
              </div>
              <div style={{ width: 2, height: 40, background: "linear-gradient(180deg, transparent, #F07060, transparent)", opacity: 0.4, marginTop: 8 }} />
            </div>

            {/* Screen bezel */}
            <div style={{ flex: 1, padding: "14px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Screen LED halo (around screen) */}
              <div style={{
                position: "relative",
                padding: 10,
                background: "linear-gradient(145deg, #181818, #0d0d0d)",
                border: "1px solid #252525",
                borderRadius: 10,
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.8)",
              }}>
                {/* Animated colored border around the screen */}
                <div style={{
                  position: "absolute", inset: 4,
                  borderRadius: 8,
                  border: "1px solid transparent",
                  boxShadow: "0 0 12px rgba(155,143,212,0.5), 0 0 30px rgba(155,143,212,0.2)",
                  animation: "screen-led-pulse 4s ease-in-out infinite",
                  pointerEvents: "none",
                  zIndex: 20,
                }} />

                {/* CRT screen */}
                <div style={{
                  position: "relative",
                  width: SCREEN_W, height: SCREEN_H,
                  background: "#000",
                  border: "2px solid #1a1a1a",
                  outline: "1px solid #9B8FD4",
                  outlineOffset: "2px",
                  boxShadow: "0 0 0 1px #333, inset 0 0 60px rgba(0,0,0,0.95), 0 0 40px rgba(155,143,212,0.2)",
                  overflow: "hidden",
                  borderRadius: 4,
                  animation: "vhs-flicker 7s infinite",
                }}>
                  <iframe
                    ref={iframeRef}
                    src="https://zkube-budokan-sepolia.vercel.app/"
                    scrolling="no"
                    style={{
                      width: `${SCREEN_W}px`,
                      height: `${SCREEN_H}px`,
                      border: "none",
                      display: "block",
                      filter: "contrast(1.15) saturate(1.2) brightness(0.84) hue-rotate(2deg)",
                      animation: "vhs-rgb 5s infinite",
                      position: "relative", zIndex: 0,
                    }}
                  />
                  {/* Color bleed */}
                  <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
                    background: "linear-gradient(90deg, rgba(240,80,60,0.06) 0%, transparent 7%, transparent 93%, rgba(80,60,240,0.04) 100%)",
                    mixBlendMode: "screen",
                  }} />
                  {/* VHS tracking */}
                  <div style={{
                    position: "absolute", left: 0, right: 0, height: 10,
                    background: "linear-gradient(180deg, transparent, rgba(200,210,255,0.2), transparent)",
                    animation: "vhs-tracking 9s infinite",
                    zIndex: 6, pointerEvents: "none",
                  }} />
                  {/* Rolling scan */}
                  <div style={{
                    position: "absolute", left: 0, right: 0, height: 2,
                    background: "rgba(155,143,212,0.1)",
                    animation: "vhs-scanroll 3.5s linear infinite",
                    zIndex: 7, pointerEvents: "none",
                  }} />
                  {/* Scanlines */}
                  <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 8,
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)",
                  }} />
                  {/* Head noise */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 8,
                    background: "repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 1px, transparent 2px)",
                    zIndex: 9, pointerEvents: "none",
                  }} />
                  {/* Vignette */}
                  <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10,
                    background: "radial-gradient(ellipse 92% 92% at 50% 50%, transparent 46%, rgba(0,0,0,0.82) 100%)",
                  }} />
                </div>
              </div>
            </div>

            {/* Right speaker */}
            <div style={{
              width: SIDE_W, flexShrink: 0,
              background: "linear-gradient(180deg, #0a0a0a, #101010)",
              borderLeft: "1px solid #1a1a1a",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 5, padding: "20px 0",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, padding: "0 8px" }}>
                {[...Array(18)].map((_, i) => (
                  <div key={i} style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "#1a1a1a", border: "1px solid #222",
                  }} />
                ))}
              </div>
              <div style={{ width: 2, height: 40, background: "linear-gradient(180deg, transparent, #9B8FD4, transparent)", opacity: 0.4, marginTop: 8 }} />
            </div>
          </div>

          {/* CONTROL PANEL */}
          <div style={{
            width: CABINET_W * 1.06,
            background: "linear-gradient(180deg, #111 0%, #0d0d0d 60%, #0a0a0a 100%)",
            border: "2px solid #1c1c1c",
            borderTop: "2px solid #2c2c2c", borderBottom: "none",
            clipPath: "polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)",
            padding: "22px 56px 26px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            position: "relative", gap: 20,
          }}>
            {/* LED strip on top of control panel */}
            <div style={{
              position: "absolute", top: 0, left: "4%", right: "4%", height: 2,
              background: "linear-gradient(90deg, transparent, #F07060 20%, #9B8FD4 50%, #F07060 80%, transparent)",
              animation: "marquee-glow 3s ease-in-out infinite",
            }} />

            {/* P1 — joystick LEFT, buttons RIGHT (Street Fighter layout) */}
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <Joystick />
                <span style={{ fontSize: "0.4rem", color: "#2a2a2a", letterSpacing: "0.14em", textTransform: "uppercase" }}>P1</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <div style={{ display: "flex", gap: 10 }}>
                  {(["#F07060", "#9B8FD4", "#60b8F0"] as string[]).map((c, i) => (
                    <ArcadeButton key={i} color={c} size={26} />
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10, marginLeft: 13 }}>
                  {(["#9B8FD4", "#F07060", "#60F0A0"] as string[]).map((c, i) => (
                    <ArcadeButton key={i} color={c} size={26} />
                  ))}
                </div>
              </div>
            </div>

            {/* Centre — start + coin */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", gap: 16 }}>
                {["1P START", "2P START"].map((label) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                    <div style={{
                      width: 44, height: 16, borderRadius: 4,
                      background: "radial-gradient(circle at 40% 30%, #3a3a3a, #181818)",
                      border: "1px solid #3e3e3e",
                      boxShadow: "0 3px 6px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07)",
                    }} />
                    <span style={{ fontSize: "0.38rem", color: "#2a2a2a", letterSpacing: "0.08em" }}>{label}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 44, height: 5, background: "#080808", border: "1px solid #1e1e1e", borderRadius: 2 }} />
                <span style={{ fontSize: "0.38rem", color: "#202020", letterSpacing: "0.1em", textTransform: "uppercase" }}>Insert Coin</span>
                <div style={{ width: 44, height: 5, background: "#080808", border: "1px solid #1e1e1e", borderRadius: 2 }} />
              </div>
              <button
                onClick={onExit}
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.55rem", letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#444", background: "transparent",
                  border: "1px solid #2a2a2a",
                  padding: "5px 16px", cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.color = "#fff"; el.style.borderColor = "#F07060"; el.style.textShadow = "0 0 6px rgba(240,112,96,0.6)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.color = "#444"; el.style.borderColor = "#2a2a2a"; el.style.textShadow = "none"; }}
              >
                ← Back to site
              </button>
            </div>

            {/* P2 — buttons LEFT, joystick RIGHT (mirror of P1) */}
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <div style={{ display: "flex", gap: 10 }}>
                  {(["#60b8F0", "#9B8FD4", "#F07060"] as string[]).map((c, i) => (
                    <ArcadeButton key={i} color={c} size={26} />
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10, marginLeft: 13 }}>
                  {(["#60F0A0", "#F07060", "#9B8FD4"] as string[]).map((c, i) => (
                    <ArcadeButton key={i} color={c} size={26} />
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <Joystick />
                <span style={{ fontSize: "0.4rem", color: "#2a2a2a", letterSpacing: "0.14em", textTransform: "uppercase" }}>P2</span>
              </div>
            </div>

          </div>

          {/* LOWER CABINET */}
          <div style={{
            width: CABINET_W * 1.1, height: 76,
            background: "linear-gradient(180deg, #0a0a0a, #0d0d0d)",
            border: "2px solid #181818",
            borderTop: "none", borderBottom: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
          }}>
            <div style={{
              width: 110, height: 52,
              background: "linear-gradient(180deg, #0f0f0f, #090909)",
              border: "1px solid #202020",
              borderRadius: 4,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly",
              padding: "6px 0",
            }}>
              <div style={{ width: 56, height: 3, background: "#080808", border: "1px solid #1a1a1a", borderRadius: 2 }} />
              <div style={{
                width: 22, height: 22, borderRadius: "50%",
                border: "1px solid #1e1e1e",
                background: "radial-gradient(circle at 38% 32%, #181818, #080808)",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.9)",
              }} />
            </div>
            {([-1, 1] as number[]).map((side) => (
              <div key={side} style={{
                position: "absolute",
                [side === -1 ? "left" : "right"]: 22,
                display: "flex", gap: 4,
              }}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} style={{
                    width: 2, height: 32,
                    background: i % 2 === 0 ? "#F07060" : "#9B8FD4",
                    opacity: 0.22,
                  }} />
                ))}
              </div>
            ))}
          </div>

          {/* BASE */}
          <div style={{
            width: CABINET_W * 1.12, height: 20,
            background: "linear-gradient(180deg, #0c0c0c, #090909)",
            border: "2px solid #181818",
            borderTop: "1px solid #202020",
            clipPath: "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)",
          }} />

          {/* FEET */}
          <div style={{ display: "flex", gap: CABINET_W * 0.82 }}>
            {[0, 1].map((i) => (
              <div key={i} style={{
                width: 34, height: 16,
                background: "linear-gradient(180deg, #0a0a0a, #070707)",
                border: "1px solid #181818",
                clipPath: i === 0
                  ? "polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)"
                  : "polygon(0% 0%, 82% 0%, 100% 100%, 18% 100%)",
              }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
