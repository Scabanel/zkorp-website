"use client";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { images } from "@/lib/images";

function ChromeDots() {
  return (
    <div style={{ display: "flex", gap: "6px", marginBottom: "1.25rem" }}>
      <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FF5F57", display: "inline-block" }} />
      <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FFBD2E", display: "inline-block" }} />
      <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#28C940", display: "inline-block" }} />
    </div>
  );
}

function ImagePlaceholder({
  label,
  sublabel,
  aspectRatio = "16/10",
  src,
}: {
  label: string;
  sublabel?: string;
  aspectRatio?: string;
  src?: string;
}) {
  if (src) {
    return (
      <div style={{ aspectRatio, position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        aspectRatio,
        backgroundColor: "#1a1a1a",
        border: "1px solid #2d2d2d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(155,143,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(155,143,212,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <p className="section-label" style={{ color: "#444", textAlign: "center", position: "relative", zIndex: 1, padding: "0 1rem" }}>
        {label}
      </p>
      {sublabel && (
        <p style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "1.1rem", color: "#333", marginTop: "0.5rem", position: "relative", zIndex: 1, textAlign: "center" }}>
          {sublabel}
        </p>
      )}
    </div>
  );
}

export { ImagePlaceholder, ChromeDots };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Context() {
  const { t } = useLanguage();
  const tc = t.context;

  return (
    <section id="context" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-[70%] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} style={{ marginBottom: "3rem" }}>
          <span className="section-label">{tc.sectionLabel}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{ backgroundColor: "#1a1a1a", border: "1px solid rgba(155,143,212,0.25)", padding: "2.5rem" }}
          >
            <ChromeDots />
            <h2
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                textTransform: "uppercase",
                color: "#F07060",
                marginBottom: "1.5rem",
                letterSpacing: "0.02em",
              }}
            >
              {tc.title}
            </h2>
            <p style={{ color: "#bbb", lineHeight: 1.85, marginBottom: "1.25rem", fontSize: "1rem" }}>
              {tc.p1a}{" "}
              <strong style={{ color: "#fff" }}>{tc.p1b}</strong>{" "}
              {tc.p1c}{" "}
              <strong style={{ color: "#fff" }}>{tc.p1d}</strong>.
            </p>
            <p style={{ color: "#F07060", lineHeight: 1.85, marginBottom: "1.25rem", fontSize: "1rem" }}>
              {tc.p2}
            </p>
            <p style={{ color: "#bbb", lineHeight: 1.85, fontSize: "1rem" }}>{tc.p3}</p>
            <p style={{ color: "#fff", fontWeight: 700, marginTop: "0.75rem", fontSize: "1.05rem" }}>{tc.p4}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <ImagePlaceholder label="Starknet Foundation Event Photo" sublabel="→ replace with /public/starknet-event.jpg" src={images.context.starknetEvent || undefined} />
            <motion.div
              initial={{ opacity: 0, rotate: -5, scale: 0.85 }}
              whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                position: "absolute",
                bottom: "-24px",
                right: "-8px",
                background: "linear-gradient(135deg, #C4B9F0 0%, #F07060 100%)",
                padding: "16px 20px",
                maxWidth: "250px",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.5)",
                zIndex: 10,
              }}
            >
              <p style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "1.1rem", textTransform: "uppercase", color: "#fff", lineHeight: 1.1, letterSpacing: "0.01em" }}>
                {tc.sticker}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
