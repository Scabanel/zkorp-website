"use client";
import { motion } from "framer-motion";
import ClientsMarquee from "./ClientsMarquee";

const stats = [
  "6 Experts",
  "10 Years of XP",
  "International Context",
  "Multi Awarded Team",
  "+15 Projects on Mainnet",
  "+$75K Won",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      {/* Radial purple glow */}
      {/* Main content */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center px-6 text-center pt-24 pb-8"
        style={{ zIndex: 10 }}
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
          className="section-label"
          style={{
            border: "1px solid rgba(155,143,212,0.3)",
            padding: "6px 18px",
            marginBottom: "3rem",
            color: "#9B8FD4",
          }}
        >
          Web3 Tech Builders · 2026
        </motion.div>

        {/* Wordmark: WE ARE / zKORP */}
        <div style={{ marginBottom: "2.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" as const }}
          >
            <motion.span
              animate={{ y: [0, -14] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.5 }}
              style={{
                display: "block",
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "clamp(3.5rem, 14vw, 11rem)",
                lineHeight: 0.92,
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                color: "#fff",
                userSelect: "none",
                willChange: "transform",
              }}
            >
              WE ARE
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
          >
            <motion.span
              animate={{ y: [0, -14] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.7 }}
              style={{
                display: "block",
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "clamp(4rem, 18vw, 14rem)",
                lineHeight: 0.88,
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                userSelect: "none",
                willChange: "transform",
              }}
            >
              <span style={{ color: "#F07060" }}>z</span>
              <span style={{ color: "#fff" }}>KORP</span>
            </motion.span>
          </motion.div>
        </div>

        {/* Taglines */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" as const }}
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "clamp(0.75rem, 1.6vw, 1rem)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#666",
            maxWidth: "640px",
            marginBottom: "1rem",
          }}
        >
          Web3 Tech Builders for Technical Ambitious Projects
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" as const }}
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "clamp(0.65rem, 1.2vw, 0.85rem)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#444",
            marginBottom: "3rem",
          }}
        >
          &ldquo;Z&rdquo; Technical Experts for &ldquo;Z&rdquo; Web3 Projects
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.78, ease: "easeOut" as const }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <a
            href="#work"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              backgroundColor: "#F07060",
              color: "#fff",
              padding: "16px 36px",
              textDecoration: "none",
              display: "inline-block",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Discover our work →
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#aaa",
              padding: "16px 36px",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.5)";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.2)";
              el.style.color = "#aaa";
            }}
          >
            Work with us
          </a>
        </motion.div>
      </div>

      {/* Clients marquee */}
      <div className="relative" style={{ zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <ClientsMarquee />
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" as const }}
        className="relative"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)", zIndex: 10 }}
      >
        <div className="w-[90%] lg:w-[70%] mx-auto py-5 flex items-center justify-center md:justify-between flex-wrap gap-3">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && (
                <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "0.82rem" }}>/</span>
              )}
              <span className="section-label" style={{ color: "#555", fontSize: "1.1rem" }}>
                {stat}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
