"use client";
import { motion } from "framer-motion";
import { ChromeDots, ImagePlaceholder } from "./Context";
import { useLanguage } from "@/contexts/LanguageContext";
import { images } from "@/lib/images";

export default function BuildProjects() {
  const { t } = useLanguage();
  const tb = t.build;

  return (
    <section id="build" className="relative py-16 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="relative z-10 w-[90%] lg:w-[70%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">{tb.sectionLabel}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.08 }}
              style={{ backgroundColor: "#1a1a1a", border: "1px solid rgba(155,143,212,0.25)", padding: "2rem 2.5rem", marginBottom: "2.5rem" }}
            >
              <ChromeDots />
              <h2
                style={{
                  fontFamily: "var(--font-archivo-black), sans-serif",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
                  textTransform: "uppercase",
                  color: "#F07060",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.02em",
                }}
              >
                {tb.title}
              </h2>
              <p style={{ color: "#bbb", fontSize: "1rem", lineHeight: 1.75 }}>
                {tb.introStart}{" "}
                <strong style={{ color: "#fff" }}>
                  {tb.introHighlight} <span style={{ color: "#F07060" }}>{tb.introTo} {tb.introEnd}</span>
                </strong>.
              </p>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {tb.steps.map((step, i) => (
                <div key={i}>
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.09 }}
                    style={{
                      backgroundColor: "#1e1e1e",
                      borderLeft: "3px solid rgba(155,143,212,0.4)",
                      padding: "1.1rem 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "1.05rem", color: "#fff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {step}
                    </span>
                    <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "1.1rem", color: "#444" }}>
                      0{i + 1}
                    </span>
                  </motion.div>
                  {i < tb.steps.length - 1 && (
                    <div style={{ width: 1, height: 24, backgroundColor: "rgba(155,143,212,0.3)", marginLeft: "2.5rem" }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
            style={{ paddingBottom: "2rem" }}
          >
            <ImagePlaceholder label="Rocket / Vision Illustration" sublabel="→ replace with /public/rocket-illustration.png" aspectRatio="4/3" src={images.build.illustration || undefined} />
            <motion.div
              initial={{ opacity: 0, rotate: -4, scale: 0.85 }}
              whileInView={{ opacity: 1, rotate: -1.5, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                background: "linear-gradient(135deg, #C4B9F0 0%, #F07060 100%)",
                padding: "16px 20px",
                maxWidth: "min(260px, 80vw)",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.5)",
                zIndex: 10,
              }}
            >
              <p style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "1rem", textTransform: "uppercase", color: "#fff", lineHeight: 1.15, letterSpacing: "0.01em" }}>
                {tb.sticker}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
