"use client";
import { motion } from "framer-motion";
import { ChromeDots } from "./shared";

const bullets = [
  "6 experts, 10+ years XP each, 15+ projects live on mainnet",
  "Smart contracts in Cairo & Solidity, full dApp integration",
  "3 conviction bets: Privacy (FHE), Onchain Gaming, Agentic AI",
  "We don't build demos. We ship products people use.",
];

const metrics = [
  { n: "+15", label: "Projects on mainnet" },
  { n: "+$75K", label: "Won in hackathons" },
  { n: "10y+", label: "Average experience" },
  { n: "6", label: "Web3 experts" },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-12 md:py-20 overflow-hidden">
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
          <span className="section-label">01 / Manifesto</span>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.08 }}
          style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(155,143,212,0.25)",
            padding: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <ChromeDots />
          <h2
            style={{
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2.25rem)",
              textTransform: "uppercase",
              color: "#F07060",
              marginBottom: "2rem",
              letterSpacing: "0.02em",
            }}
          >
            We ship on mainnet
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {bullets.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
              >
                <span
                  style={{
                    color: "#F07060",
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: "1.1rem",
                    marginTop: "0.1rem",
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
                <p style={{ color: "#bbb", fontSize: "1.05rem", lineHeight: 1.7 }}>{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Narrative pillars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ marginBottom: "2.5rem" }}
        >
          {[
            { title: "Privacy", accent: "#FFCC00", copy: "FHE-native products for real users." },
            { title: "Onchain Gaming", accent: "#F07060", copy: "Fully onchain gameplay with real ownership." },
            { title: "Agentic AI", accent: "#9B8FD4", copy: "Autonomous agents in production experiences." },
          ].map((pillar) => (
            <div
              key={pillar.title}
              style={{
                backgroundColor: "#1a1a1a",
                border: `1px solid ${pillar.accent}66`,
                padding: "1.25rem 1.2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-archivo-black), sans-serif",
                  textTransform: "uppercase",
                  color: pillar.accent,
                  letterSpacing: "0.02em",
                  marginBottom: "0.45rem",
                }}
              >
                {pillar.title}
              </p>
              <p style={{ color: "#b2b2b2", fontSize: "0.95rem", lineHeight: 1.6 }}>{pillar.copy}</p>
            </div>
          ))}
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
        >
          {metrics.map((m, i) => (
            <div key={i} style={{ backgroundColor: "#171717", padding: "1.75rem 2rem", textAlign: "center" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="metric"
              >
                {m.n}
              </motion.div>
              <div className="section-label" style={{ color: "#555", marginTop: "0.4rem" }}>
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
