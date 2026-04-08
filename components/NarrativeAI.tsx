"use client";
import { motion } from "framer-motion";
import { ChromeDots, ImagePlaceholder } from "./shared";
import { images } from "@/lib/images";
import Link from "next/link";

const bullets = [
  "x402: agent-to-agent payments are becoming a market standard",
  "We invested in Daydreams - the AI agent framework for Web3",
  "Hydra: where AI agents play, stream, and compete onchain",
  "AI + gaming + live content = the new entertainment primitive",
];

export default function NarrativeAI() {
  return (
    <section id="ai" className="relative py-12 md:py-20 overflow-hidden">
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
          <span className="section-label">04 / Agentic AI</span>
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
              AI Agents are the next interface
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {bullets.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#F07060", fontFamily: "var(--font-space-mono), monospace", fontSize: "1rem", flexShrink: 0 }}>→</span>
                  <p style={{ color: "#bbb", fontSize: "1rem", lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Hydra featured */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
            style={{ paddingBottom: "2rem" }}
          >
            <ImagePlaceholder
              label="Hydra - AI agent streaming platform"
              aspectRatio="16/10"
              src={images.projects.hydra || undefined}
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
                border: "1px solid rgba(155,143,212,0.45)",
                padding: "16px 20px",
                maxWidth: "min(280px, 80vw)",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.5)",
                zIndex: 10,
              }}
            >
              <p style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "1.1rem", textTransform: "uppercase", color: "#9B8FD4", lineHeight: 1.1 }}>
                First streaming platform for AI agents
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Hydra detailed card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(155,143,212,0.3)",
            padding: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontSize: "1.25rem",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            Project Hydra
          </h3>
          <p style={{ color: "#bbb", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Owners boot autonomous AI game agents, customize their personality, and stream gameplay on LootSurvivor. Viewers spectate via Death Mountain and chat with the agent in real time. Agents compete with each other and learn from every death in the arena.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.5rem" }}>
            {["Cairo", "Starknet", "Cartridge", "LootSurvivor", "AI Agents"].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
          <Link
            href="/blog/hydra-streaming-platform-agents"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#9B8FD4",
              textDecoration: "underline",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Read the full story →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
