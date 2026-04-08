"use client";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export function ChromeDots() {
  return (
    <div style={{ display: "flex", gap: "6px", marginBottom: "1.25rem" }}>
      <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FF5F57", display: "inline-block" }} />
      <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FFBD2E", display: "inline-block" }} />
      <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#28C940", display: "inline-block" }} />
    </div>
  );
}

export function ImagePlaceholder({
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

export function StatusBar() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem 1.25rem",
        padding: "6px 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        marginTop: "auto",
      }}
    >
      {[
        { label: "SYS:", value: "ONLINE", color: "#28C940" },
        { label: "FHE:", value: "ENCRYPTED", color: "#FFBD2E" },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className="section-label" style={{ color: "#555", fontSize: "1.1rem" }}>{item.label}</span>
          <span className="section-label" style={{ color: item.color, fontSize: "1.1rem" }}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: "#1a1a1a",
        border: "1px solid rgba(155,143,212,0.2)",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(155,143,212,0.5)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(155,143,212,0.2)")}
    >
      {/* Image */}
      <div style={{ flexShrink: 0 }}>
        <ImagePlaceholder
          label={project.imagePlaceholder}
          sublabel="→ add path in lib/images.ts"
          aspectRatio="16/9"
          src={project.image || undefined}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
          <div>
            <p style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "1.1rem", textTransform: "uppercase", color: "#fff", letterSpacing: "0.01em" }}>
              {project.name}
            </p>
            <p style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "1.05rem", color: "#F07060", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "2px" }}>
              {project.client}
            </p>
          </div>
        </div>

        <p style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "1.1rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {project.tagline}
        </p>

        <p style={{ color: "#aaa", fontSize: "1.05rem", lineHeight: 1.7 }}>
          {project.description}
        </p>

        {project.metric && (
          <p style={{ color: "#9B8FD4", fontSize: "0.82rem", fontStyle: "italic" }}>
            {project.metric}
          </p>
        )}

        <div style={{ marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="section-label" style={{ color: "#444", marginBottom: "0.5rem", fontSize: "1.1rem" }}>Stack</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.stack.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        {project.statusBar && <StatusBar />}
      </div>
    </motion.div>
  );
}
