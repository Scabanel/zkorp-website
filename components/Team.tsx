"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChromeDots } from "./Context";
import { images } from "@/lib/images";

const team = [
  {
    name: "Thomas Belloc",
    roles: ["Project Management", "Web3 Fullstack Dev", "Sales Development"],
    initials: "TB",
    photo: images.team.thomasBelloc,
    links: { x: "https://x.com/Cheelax_", linkedin: "https://www.linkedin.com/in/thomasbelloc/", email: "thomas@zkorp.xyz" },
  },
  {
    name: "Corentin Terrie",
    roles: ["Web3 Fullstack Dev", "UX/UI Designer"],
    initials: "CT",
    photo: images.team.corentinTerrie,
    links: { x: "https://x.com/crowsmos_", linkedin: "https://www.linkedin.com/in/corentin-terrie-9452b0b1/", email: "corentin@zkorp.xyz" },
  },
  {
    name: "Matthias Monnier",
    roles: ["Tech Architect", "Web3 Fullstack Dev", "Smart Contract"],
    initials: "MM",
    photo: images.team.matthiasMonnier,
    links: { x: "https://x.com/ProvableMat", linkedin: "https://www.linkedin.com/in/matthiasmonnier/", email: "matthias@zkorp.xyz" },
  },
  {
    name: "Noé Pichot",
    roles: ["Three.js / WebGL / 3D", "Web3 Fullstack Dev"],
    initials: "NP",
    photo: images.team.noePichot,
    links: { x: "https://x.com/BlackCatRender", linkedin: "https://www.linkedin.com/in/no%C3%A9-pichot-094727ba/", email: "noe@zkorp.xyz" },
  },
  {
    name: "Steven Klinger",
    roles: ["CMO / Sales", "Ex Developer"],
    initials: "SK",
    photo: images.team.stevenKlinger,
    links: { x: "https://x.com/Scabanel_", linkedin: "https://www.linkedin.com/in/steven-klinger/", email: "steven@zkorp.xyz" },
  },
  {
    name: "Jean Christophe Mehr",
    roles: ["Web3 Fullstack Dev", "Onchain Gaming"],
    initials: "JCM",
    photo: images.team.jcMehr,
    links: { x: "https://x.com/djizus_", linkedin: "https://www.linkedin.com/in/mehrjc/" },
  },
];

function IconX() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.256 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
  const slabRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = slabRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMouse({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
  };

  const rotateX = isHovered ? (mouse.y - 0.5) * -16 : 0;
  const rotateY = isHovered ? (mouse.x - 0.5) * 16 : 0;
  const holoAngle  = 115 + mouse.x * 40;
  const holoOffset = mouse.y * 30;

  const sa = isHovered ? 1 : 0.6;
  const slabAngle  = 140 + rotateY * 3.5 - rotateX * 1.5;

  // Slab border: neutral silver/clear plastic
  const slabGlass = `linear-gradient(${slabAngle}deg,
    rgba(255,255,255,${0.75 * sa})   0%,
    rgba(220,220,240,${0.28 * sa})  18%,
    rgba(255,255,255,${0.06 * sa})  42%,
    rgba(200,210,230,${0.18 * sa})  62%,
    rgba(255,255,255,${0.04 * sa})  78%,
    rgba(255,255,255,${0.60 * sa}) 100%)`;

  // Photo frame: iridescent, offset angle for depth
  const photoAngle = slabAngle + 60;
  const photoGlass = `linear-gradient(${photoAngle}deg,
    rgba(255,255,255,${0.50 * sa})   0%,
    rgba(240,112, 96,${0.32 * sa})  25%,
    rgba(255,255,255,${0.05 * sa})  52%,
    rgba(155,143,212,${0.30 * sa})  74%,
    rgba(255,255,255,${0.42 * sa}) 100%)`;

  const memberNum = String(index + 1).padStart(3, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{ perspective: "900px", height: "100%" }}
    >
      {/* ═══ SLAB outer shell ═══ */}
      <div
        ref={slabRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setMouse({ x: 0.5, y: 0.5 }); }}
        style={{
          height: "100%",
          padding: "2px",
          background: slabGlass,
          transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? 12 : 0}px)`,
          transition: isHovered
            ? "transform 0.07s ease-out, box-shadow 0.3s ease"
            : "transform 0.55s ease, box-shadow 0.55s ease",
          boxShadow: isHovered
            ? "0 28px 56px rgba(0,0,0,0.8), 0 0 60px rgba(155,143,212,0.06), 0 0 0 1px rgba(255,255,255,0.04)"
            : "0 6px 24px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)",
          transformStyle: "preserve-3d",
          cursor: "default",
        }}
      >
        {/* Slab body */}
        <div style={{ backgroundColor: "#131315", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* ─── TOP LABEL ─── */}
          <div style={{ backgroundColor: "#0c0c0e", padding: "0.42rem 0.6rem 0.38rem", borderBottom: "2px solid #F07060", position: "relative", overflow: "hidden", flexShrink: 0 }}>
            <div style={{
              position: "absolute", inset: 0,
              opacity: isHovered ? 0.5 : 0.12, transition: "opacity 0.4s ease",
              background: `linear-gradient(90deg, transparent 0%, rgba(155,143,212,0.3) ${mouse.x * 80 + 5}%, rgba(240,112,96,0.18) ${mouse.x * 80 + 22}%, transparent 100%)`,
              pointerEvents: "none",
            }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
              <span style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "0.68rem", letterSpacing: "0.02em" }}>
                <span style={{ color: "#F07060" }}>Z</span><span style={{ color: "#fff" }}>KORP</span>
              </span>
              <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "0.56rem", color: "#555", letterSpacing: "0.06em" }}>
                #{memberNum}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "0.6rem", color: "#bbb", textTransform: "uppercase", letterSpacing: "0.03em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "72%" }}>
                {member.name}
              </span>
              <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "0.5rem", color: "#9B8FD4", letterSpacing: "0.1em", flexShrink: 0 }}>
                CERT
              </span>
            </div>
          </div>

          {/* ─── SLAB PADDING ─── */}
          <div style={{ padding: "7px", flex: 1, display: "flex" }}>

            {/* ─── CARD INSIDE SLAB ─── */}
            <div style={{
              flex: 1,
              backgroundColor: "#1c1c1e",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "0.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.3)",
            }}>

              {/* — Holographic rainbow — */}
              <div style={{
                position: "absolute", inset: 0,
                opacity: isHovered ? 0.55 : 0, transition: "opacity 0.35s ease",
                background: `linear-gradient(${holoAngle}deg,
                  transparent 0%,
                  rgba(255, 50,  90,  0.28) ${15 + holoOffset}%,
                  rgba(255, 190, 50,  0.28) ${28 + holoOffset}%,
                  rgba( 50, 255, 140, 0.28) ${42 + holoOffset}%,
                  rgba( 50, 140, 255, 0.28) ${56 + holoOffset}%,
                  rgba(180,  50, 255, 0.28) ${70 + holoOffset}%,
                  rgba(255,  50, 180, 0.28) ${82 + holoOffset}%,
                  transparent 100%)`,
                mixBlendMode: "screen", pointerEvents: "none", zIndex: 2,
              }} />

              {/* — Specular glare — */}
              <div style={{
                position: "absolute", inset: 0,
                opacity: isHovered ? 1 : 0, transition: "opacity 0.35s ease",
                background: `radial-gradient(ellipse at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 28%, transparent 65%)`,
                pointerEvents: "none", zIndex: 3,
              }} />

              {/* — Corner foil — */}
              <div style={{
                position: "absolute", bottom: 0, right: 0, width: "40%", height: "30%",
                opacity: isHovered ? 0.25 : 0.04, transition: "opacity 0.4s ease",
                background: "radial-gradient(ellipse at 100% 100%, rgba(155,143,212,0.5), transparent 70%)",
                pointerEvents: "none", zIndex: 2,
              }} />

              {/* ── PHOTO — glass frame wrapper ── */}
              <div style={{
                width: "100%",
                padding: "1.5px", background: photoGlass,
                flexShrink: 0, position: "relative", zIndex: 1,
                boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}>
                {/* Inner square container — aspect ratio here so height is always = width */}
                <div style={{
                  width: "100%", aspectRatio: "1/1",
                  backgroundColor: "#2a2a2a",
                  overflow: "hidden", position: "relative",
                  filter: isHovered ? "grayscale(0) brightness(1.06)" : "grayscale(1)",
                  transition: "filter 0.5s ease",
                }}>
                  {/* Glass shimmer */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "35%",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)",
                    pointerEvents: "none", zIndex: 4,
                  }} />
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={member.photo} alt={member.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "1.5rem", color: "#444", letterSpacing: "0.05em" }}>
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* ── NAME ── */}
              <p style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "0.82rem", color: "#fff",
                textTransform: "uppercase", letterSpacing: "0.02em",
                position: "relative", zIndex: 1, margin: 0,
              }}>
                {member.name}
              </p>

              {/* ── ROLES — flex:1 pushes social to bottom ── */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.12rem", flex: 1, position: "relative", zIndex: 1 }}>
                {member.roles.map((role, i) => (
                  <span key={i} className="section-label" style={{ color: "#999", fontSize: "0.62rem" }}>
                    {role}
                  </span>
                ))}
              </div>

              {/* ── SOCIAL — always at bottom ── */}
              <div style={{ display: "flex", gap: "0.25rem", position: "relative", zIndex: 5 }}>
                {member.links.x && (
                  <a href={member.links.x} target="_blank" rel="noopener noreferrer" title="X / Twitter"
                    style={{ color: "#888", transition: "color 0.15s, background-color 0.15s, border-color 0.15s", display: "flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#fff"; el.style.backgroundColor = "rgba(255,255,255,0.12)"; el.style.borderColor = "rgba(255,255,255,0.2)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#888"; el.style.backgroundColor = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  ><IconX /></a>
                )}
                {member.links.linkedin && (
                  <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"
                    style={{ color: "#888", transition: "color 0.15s, background-color 0.15s, border-color 0.15s", display: "flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#9B8FD4"; el.style.backgroundColor = "rgba(155,143,212,0.12)"; el.style.borderColor = "rgba(155,143,212,0.3)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#888"; el.style.backgroundColor = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  ><IconLinkedIn /></a>
                )}
                {"email" in member.links && member.links.email && (
                  <a href={`mailto:${member.links.email}`} title={member.links.email as string}
                    style={{ color: "#888", transition: "color 0.15s, background-color 0.15s, border-color 0.15s", display: "flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#F07060"; el.style.backgroundColor = "rgba(240,112,96,0.12)"; el.style.borderColor = "rgba(240,112,96,0.3)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#888"; el.style.backgroundColor = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  ><IconMail /></a>
                )}
              </div>

            </div>{/* end card */}
          </div>{/* end slab padding */}

          {/* ─── BOTTOM STRIP ─── */}
          <div style={{ backgroundColor: "#0c0c0e", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "0.26rem 0.65rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
            <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "0.46rem", color: "#333", letterSpacing: "0.12em", textTransform: "uppercase" }}>ZKORP.XYZ</span>
            <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "0.46rem", color: "#333", letterSpacing: "0.1em", textTransform: "uppercase" }}>WEB3 BUILDERS</span>
          </div>

        </div>{/* end slab body */}
      </div>{/* end slab */}
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-16 md:py-28 overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 w-[90%] lg:w-[75%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">04 / We Are ZKORP</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, delay: 0.1 }}
          style={{ backgroundColor: "#1a1a1a", border: "1px solid rgba(155,143,212,0.25)", padding: "2rem 2.5rem", marginBottom: "3rem" }}
        >
          <ChromeDots />
          <h2 style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "clamp(1.1rem, 3vw, 1.75rem)", textTransform: "uppercase", color: "#fff", marginBottom: "1rem", letterSpacing: "0.02em" }}>
            We are Web3 builders, we are <span style={{ color: "#F07060" }}>ZKORP</span>
          </h2>
          <p style={{ color: "#bbb", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "720px" }}>
            We work with Web3 companies because we deeply trust utility and future of this ecosystem, in many global fields. That&rsquo;s why we became specialists in this technical area, to transform projects into concrete proof of problem&rsquo;s solving.
          </p>
        </motion.div>

        {/* 6 slabs in one row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
