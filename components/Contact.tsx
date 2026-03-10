"use client";
import { motion } from "framer-motion";

export default function Contact() {

  return (
    <section id="contact" className="relative py-16 md:py-28 overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Purple glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(155,143,212,0.06) 0%, transparent 70%)",
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
          <span className="section-label">{"09 / Work With Us"}</span>
        </motion.div>

        {/* Main CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(155,143,212,0.3)",
            padding: "clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Corner accents */}
          <div
            style={{
              position: "absolute", top: 0, left: 0, width: "120px", height: "120px",
              borderRight: "1px solid rgba(155,143,212,0.15)",
              borderBottom: "1px solid rgba(155,143,212,0.15)",
            }}
          />
          <div
            style={{
              position: "absolute", bottom: 0, right: 0, width: "120px", height: "120px",
              borderLeft: "1px solid rgba(155,143,212,0.15)",
              borderTop: "1px solid rgba(155,143,212,0.15)",
            }}
          />

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
              textTransform: "uppercase",
              color: "#fff",
              letterSpacing: "0.02em",
              marginBottom: "2.5rem",
              lineHeight: 1.05,
            }}
          >
            {"Want to work with us?"}
          </motion.h2>

          {/* X CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <a
              href="https://x.com/zKorp_"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "clamp(1.25rem, 3vw, 2rem)",
                textTransform: "uppercase",
                color: "#9B8FD4",
                textDecoration: "underline",
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C4B9F0")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9B8FD4")}
            >
              {"Contact us on X"}
            </a>
          </motion.div>

          <p
            style={{
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
              textTransform: "uppercase",
              color: "#fff",
              letterSpacing: "0.05em",
              marginBottom: "1.5rem",
            }}
          >
            {"or send us an email to book a call"}
          </p>

          <motion.a
            href="mailto:thomas@zkorp.xyz"
            whileHover={{ opacity: 0.75 }}
            style={{
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontSize: "clamp(1.25rem, 3vw, 2rem)",
              textTransform: "uppercase",
              color: "#F07060",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            thomas@zkorp.xyz
          </motion.a>
        </motion.div>

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "1.25rem", color: "#F07060" }}>z</span>
            <span style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "1.25rem", color: "#fff" }}>KORP</span>
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
            {[
              { label: "Our X Profile", href: "https://x.com/zKorp_" },
              { label: "Our Website", href: "https://zkorp.xyz" },
              { label: "Our Github", href: "https://github.com/z-korp" },
              { label: "Our Youtube Channel", href: "https://www.youtube.com/channel/UCkNlwiBo6wPZHhBFZTh7EUQ/" },
              { label: "Our LinkedIn", href: "https://www.linkedin.com/company/zkorp/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="section-label"
                style={{ color: "#555", textDecoration: "underline", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Tech stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {["Cairo", "Node.js", "Solidity", "Ethereum", "React"].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <p className="section-label" style={{ color: "#333", fontSize: "1.1rem" }}>
            © 2026 zKorp. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
