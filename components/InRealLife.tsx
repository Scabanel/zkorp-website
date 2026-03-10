"use client";
import { motion } from "framer-motion";
import { ChromeDots, ImagePlaceholder } from "./Context";
import { images } from "@/lib/images";

const details = [
  "Involvement in IRL events, panels around the world (ETHcc, Devcon...)",
  "One month residency in New York for close work with Dojo/Starknet ecosystem",
];

export default function InRealLife() {
  return (
    <section id="irl" className="relative py-28 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-[70%] mx-auto">
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
            className="grid grid-cols-2 gap-4"
          >
            <ImagePlaceholder label="Starknet Event" sublabel="→ /public/irl-starknet.jpg" aspectRatio="1/1" src={images.irl.starknetEvent || undefined} />
            <ImagePlaceholder label="Loot Survivor Event" sublabel="→ /public/irl-loot.jpg" aspectRatio="1/1" src={images.irl.lootSurvivorEvent || undefined} />

            {/* Video embed */}
            <div
              className="col-span-2"
              style={{
                position: "relative",
                aspectRatio: "16/9",
                overflow: "hidden",
                border: "1px solid rgba(155,143,212,0.25)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/_9OughD300Y"
                title="Building FHE consumer apps - zKorp @ Zama CoFHE Shop"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
