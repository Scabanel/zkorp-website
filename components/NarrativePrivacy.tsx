"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChromeDots, ProjectCard, ImagePlaceholder } from "./shared";
import { privacyProjects } from "@/lib/projects";

const VIDEO_ID = "_9OughD300Y";

const bullets = [
  "FHE (Fully Homomorphic Encryption) is the future of onchain privacy",
  "We are using FHEVM to build consumer FHE apps",
  "From confidential auctions to encrypted DeFi - we both built projects on sepolia and shipped others on mainnet",
];

export default function NarrativePrivacy() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="privacy" className="relative py-12 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-[90%] lg:w-[70%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">02 / Privacy & FHE</span>
        </motion.div>

        {/* Intro: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" style={{ marginBottom: "3rem" }}>
          {/* Left: conviction card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.08 }}
            style={{
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(155,143,212,0.25)",
              padding: "2.5rem",
            }}
          >
            <ChromeDots />
            <h2
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "clamp(1.3rem, 3vw, 2rem)",
                textTransform: "uppercase",
                color: "#F07060",
                marginBottom: "1.5rem",
                letterSpacing: "0.02em",
              }}
            >
              We bet on privacy
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              {bullets.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#F07060", fontFamily: "var(--font-space-mono), monospace", fontSize: "1rem", flexShrink: 0 }}>→</span>
                  <p style={{ color: "#bbb", fontSize: "1rem", lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>

            {/* Article Onyx teaser */}
            <Link
              href="/blog/onyx-fhe-deep-dive"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#555",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "10px 20px",
                textDecoration: "none",
                opacity: 0.5,
                cursor: "not-allowed",
                marginBottom: "1rem",
              }}
            >
              🔒 Read our Onyx deep-dive - Coming soon
            </Link>

            {/* Dedicated site teaser */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#555",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "10px 20px",
                  opacity: 0.4,
                  cursor: "not-allowed",
                }}
              >
                🔒 Dedicated Privacy Site - Coming soon
              </span>
            </div>
          </motion.div>

          {/* Right: Onyx featured image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
            style={{ paddingBottom: "2rem" }}
          >
            <ImagePlaceholder
              label="Onyx - Flagship FHE project"
              aspectRatio="16/10"
              src="/photos/IMG_7904.jpg"
            />
            <motion.div
              initial={{ opacity: 0, rotate: -5, scale: 0.85 }}
              whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                backgroundColor: "rgba(23,23,23,0.96)",
                border: "1px solid rgba(240,112,96,0.45)",
                padding: "16px 20px",
                maxWidth: "min(250px, 80vw)",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.5)",
                zIndex: 10,
              }}
            >
              <p style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "1.1rem", textTransform: "uppercase", color: "#F07060", lineHeight: 1.1 }}>
                Onyx demo @ Zama
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginBottom: "3rem" }}>
          {privacyProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <p className="section-label" style={{ color: "#666", marginBottom: "1rem" }}>
            Watch: Building FHE consumer apps - ZKORP @ Zama CoFHE Shop
          </p>
          <div
            onClick={() => setVideoOpen(true)}
            style={{
              position: "relative",
              maxWidth: "640px",
              margin: "0 auto",
              aspectRatio: "16/9",
              overflow: "hidden",
              border: "1px solid rgba(155,143,212,0.25)",
              cursor: "pointer",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Building FHE consumer apps"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute", inset: 0,
                background: "rgba(0,0,0,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.35)")}
            >
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                backgroundColor: "rgba(240,112,96,0.9)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(240,112,96,0.5)",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" style={{ marginLeft: 3 }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video lightbox */}
        <AnimatePresence>
          {videoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setVideoOpen(false)}
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
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "relative", width: "100%", maxWidth: "900px",
                  aspectRatio: "16/9", border: "1px solid rgba(155,143,212,0.3)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.8)",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
                  title="Building FHE consumer apps"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                />
                <button
                  onClick={() => setVideoOpen(false)}
                  style={{
                    position: "absolute", top: -16, right: -16,
                    width: 32, height: 32, borderRadius: "50%",
                    backgroundColor: "#1c1c1e", border: "1px solid rgba(255,255,255,0.15)",
                    color: "#aaa", fontSize: "1rem", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
