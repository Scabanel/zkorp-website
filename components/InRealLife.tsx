"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChromeDots, ImagePlaceholder } from "./Context";
import { images } from "@/lib/images";

const VIDEO_ID = "_9OughD300Y";

const details = [
  "Involvement in IRL events, panels around the world (ETHcc, Devcon...)",
  "One month residency in New York for close work with Dojo/Starknet ecosystem",
];

export default function InRealLife() {
  const [open, setOpen] = useState(false);

  return (
    <section id="irl" className="relative py-16 md:py-28 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-[90%] lg:w-[70%] mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">05 / In Real Life</span>
        </motion.div>

        {/* Top row: text left, photos right — balanced heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <div
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(155,143,212,0.25)",
                padding: "2rem 2.5rem",
                marginBottom: "2rem",
              }}
            >
              <ChromeDots />
              <h2
                style={{
                  fontFamily: "var(--font-archivo-black), sans-serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  textTransform: "uppercase",
                  color: "#F07060",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.02em",
                }}
              >
                Above the Screen
              </h2>
              <p style={{ color: "#bbb", fontSize: "1.1rem", lineHeight: 1.75 }}>
                We are both active online <strong style={{ color: "#fff" }}>AND</strong> in real life.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {details.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      color: "#F07060",
                      fontFamily: "var(--font-space-mono), monospace",
                      fontSize: "1.1rem",
                      marginTop: "0.15rem",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                  <p style={{ color: "#888", fontSize: "1.1rem", lineHeight: 1.7 }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: photos + video */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="grid grid-cols-3 gap-4"
          >
            <ImagePlaceholder label="Starknet Event" sublabel="→ /public/irl-starknet.jpg" aspectRatio="1/1" src={images.irl.starknetEvent || undefined} />
            <ImagePlaceholder label="Loot Survivor Event" sublabel="→ /public/irl-loot.jpg" aspectRatio="1/1" src={images.irl.lootSurvivorEvent || undefined} />

            {/* Video thumbnail — click opens lightbox */}
            <div
              onClick={() => setOpen(true)}
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
                border: "1px solid rgba(155,143,212,0.25)",
                cursor: "pointer",
              }}
            >
              {/* YouTube thumbnail, cropped to square */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Video thumbnail"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Dark overlay on hover */}
              <div
                className="group-hover:opacity-100"
                style={{
                  position: "absolute", inset: 0,
                  background: "rgba(0,0,0,0.35)",
                  transition: "background 0.2s",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.35)")}
              >
                {/* Play button */}
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  backgroundColor: "rgba(240,112,96,0.9)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 20px rgba(240,112,96,0.5)",
                  transition: "transform 0.2s",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" style={{ marginLeft: 3 }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setOpen(false)}
                  style={{
                    position: "fixed", inset: 0, zIndex: 9999,
                    backgroundColor: "rgba(0,0,0,0.88)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "2rem",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.92, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "900px",
                      aspectRatio: "16/9",
                      border: "1px solid rgba(155,143,212,0.3)",
                      boxShadow: "0 32px 80px rgba(0,0,0,0.8)",
                    }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
                      title="Building FHE consumer apps - ZKORP @ Zama CoFHE Shop"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                    />
                    {/* Close button */}
                    <button
                      onClick={() => setOpen(false)}
                      style={{
                        position: "absolute", top: -16, right: -16,
                        width: 32, height: 32, borderRadius: "50%",
                        backgroundColor: "#1c1c1e",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#aaa", fontSize: "1rem",
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "color 0.2s, border-color 0.2s",
                      }}
                      onMouseEnter={(e) => { const el = e.currentTarget; el.style.color = "#fff"; el.style.borderColor = "#F07060"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget; el.style.color = "#aaa"; el.style.borderColor = "rgba(255,255,255,0.15)"; }}
                    >
                      ✕
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
