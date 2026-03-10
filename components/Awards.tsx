"use client";
import { motion } from "framer-motion";
import { ChromeDots, ImagePlaceholder } from "./Context";
import { images } from "@/lib/images";

const awards = [
  { name: "zKnight", event: "1st Dojo game jam", genre: "2D Tactical Game", image: "/awards/zknight.jpg" },
  { name: "zDefender", event: "2nd Dojo game jam", genre: "Tower Defense", image: "/awards/zdefender.jpg" },
  { name: "zDefender", event: "2nd Dojo game jam", genre: "Tower Defense", image: "/awards/zdefender2.jpg" },
  { name: "zKrown", event: "Bibliotheca DAO grantee", genre: "Risk on Chain", image: "/awards/zkrown.jpg" },
  { name: "zKastle", event: "Dojo track - Starkhack", genre: "Strategy", image: "/awards/zkastle.jpg" },
  { name: "zKlash", event: "Last Dojo game jam", genre: "Autobattler", image: "/awards/zklash.jpg" },
];

const screenshots = [
  { label: "zDefender screenshot", file: images.awards.screenshot1 },
  { label: "zDefender map", file: images.awards.screenshot2 },
  { label: "zKnight isometric", file: images.awards.screenshot3 },
  { label: "zKlash autobattler", file: images.awards.screenshot4 },
];

export default function Awards() {
  return (
    <section id="awards" className="relative py-16 md:py-28 overflow-hidden">
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
          <span className="section-label">07 / Awarded Team</span>
        </motion.div>

        {/* Header card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.08 }}
          style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(155,143,212,0.25)",
            padding: "2rem 2.5rem",
            marginBottom: "3rem",
          }}
        >
          <ChromeDots />
          <h2
            style={{
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontSize: "clamp(1.25rem, 3vw, 2rem)",
              textTransform: "uppercase",
              color: "#F07060",
              marginBottom: "0.75rem",
              letterSpacing: "0.02em",
            }}
          >
            Serial builders...and winners
          </h2>
          <p style={{ color: "#bbb", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "720px" }}>
            More than{" "}
            <strong style={{ color: "#fff" }}>$75K won</strong> by creating games who serves at testing key features of Starknet ecosystem and their limits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: awards list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  backgroundColor: i % 2 === 0 ? "#1e1e1e" : "#1a1a1a",
                  borderLeft: "3px solid rgba(155,143,212,0.4)",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-archivo-black), sans-serif",
                      fontSize: "1.1rem",
                      color: "#fff",
                      textTransform: "uppercase",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {award.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-space-mono), monospace",
                      fontSize: "1.05rem",
                      color: "#666",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginLeft: "0.75rem",
                    }}
                  >
                    {award.event}
                  </span>
                </div>
                <span className="tech-badge" style={{ flexShrink: 0 }}>
                  {award.genre}
                </span>
              </motion.div>
            ))}

            {/* Github link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ marginTop: "2rem" }}
            >
              <a
                href="https://github.com/z-korp"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#9B8FD4",
                  textDecoration: "underline",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Our Github repository →
              </a>
            </motion.div>
          </div>

          {/* Right: screenshot grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {screenshots.map((s, i) => (
              <ImagePlaceholder
                key={i}
                label={s.label}
                sublabel="→ add path in lib/images.ts"
                aspectRatio="4/3"
                src={s.file || undefined}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
