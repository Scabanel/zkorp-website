"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChromeDots } from "./shared";

const details = [
  "Involvement in IRL events, panels around the world (ETHcc, Devcon...)",
  "One month residency in New York for close work with Dojo/Starknet ecosystem",
  "Present at Zama Builder Villa during EthCC Cannes 2026",
];

export default function InRealLife() {
  return (
    <section id="irl" className="relative py-12 md:py-20 overflow-hidden">
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
          <span className="section-label">06 / In Real Life</span>
        </motion.div>

        {/* Top row: text left, photos right - balanced heights */}
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
                We show up
              </h2>
              <p style={{ color: "#bbb", fontSize: "1.1rem", lineHeight: 1.75 }}>
                We are both active online <strong style={{ color: "#fff" }}>AND</strong> in real life. ETHcc, Devcon, Starknet summits - we present, we panel, we ship.
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

          {/* Right: photo grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="grid grid-cols-3 gap-3"
          >
            {[
              "/photos/IMG_3039 (1).jpeg",
              "/photos/IMG_7904.jpg",
              "/photos/PXL_20260402_093525888.MP.jpg",
              "/photos/IMG_8011.jpg",
              "/photos/IMG_3163.jpg",
              "/photos/IMG_1804.JPG",
              "/photos/IMG_7658.jpg",
              "/photos/IMG_7747.jpg",
              "/photos/team.png",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                style={{
                  aspectRatio: "1/1",
                  overflow: "hidden",
                  border: "1px solid rgba(155,143,212,0.2)",
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="zKorp IRL"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.86) contrast(1.04) saturate(0.96)",
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Blog link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
            style={{ marginTop: "1.5rem" }}
          >
            <div className="flex flex-wrap gap-5 items-center">
              <Link
                href="/blog/web3-devconnect-argentina-2025"
                style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#F07060", textDecoration: "underline", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Read about our Argentina trip →
              </Link>
              <a
                href="https://x.com/zKorp_/status/2039659843171009006"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#9B8FD4", textDecoration: "underline", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Zama Builder Villa @ EthCC Cannes 2026 →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
