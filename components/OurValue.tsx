"use client";
import { motion } from "framer-motion";
import { ChromeDots } from "./Context";
import { useLanguage } from "@/contexts/LanguageContext";

export default function OurValue() {
  const { t } = useLanguage();
  const tv = t.value;

  return (
    <section id="value" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative z-10 w-[70%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">{tv.sectionLabel}</span>
        </motion.div>

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
            {tv.title}
          </h2>
          <p style={{ color: "#bbb", fontSize: "1rem", lineHeight: 1.75 }}>
            {tv.introStart}{" "}
            <strong style={{ color: "#fff" }}>{tv.introStrong}</strong>{" "}
            {tv.introEnd}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tv.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              style={{ backgroundColor: "#1e1e1e", borderLeft: "3px solid #9B8FD4", padding: "1.75rem 2rem" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#9B8FD4",
                  border: "1px solid rgba(155,143,212,0.4)",
                  padding: "5px 12px",
                  display: "inline-block",
                  marginBottom: "1.25rem",
                }}
              >
                {service.label}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {service.items.map((item, j) => (
                  <li
                    key={j}
                    style={{ color: item.bold ? "#fff" : "#aaa", fontWeight: item.bold ? 700 : 400, fontSize: "1.1rem", lineHeight: 1.7, paddingLeft: "1rem", position: "relative" }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#F07060", fontWeight: 700 }}>·</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-8"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
        >
          {tv.metrics.map((m, i) => (
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
