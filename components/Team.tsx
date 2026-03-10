"use client";
import { motion } from "framer-motion";
import { ChromeDots } from "./Context";
import { images } from "@/lib/images";

const team = [
  {
    name: "Thomas Belloc",
    roles: ["Project Management", "Web3 Fullstack Developer", "Sales Development"],
    initials: "TB",
    photo: images.team.thomasBelloc,
    links: {
      x: "https://x.com/Cheelax_",
      linkedin: "https://www.linkedin.com/in/thomasbelloc/",
      email: "thomas@zkorp.xyz",
    },
  },
  {
    name: "Corentin Terrie",
    roles: ["Web3 Fullstack Developer", "UX/UI Designer"],
    initials: "CT",
    photo: images.team.corentinTerrie,
    links: {
      x: "https://x.com/crowsmos_",
      linkedin: "https://www.linkedin.com/in/corentin-terrie-9452b0b1/",
      email: "corentin@zkorp.xyz",
    },
  },
  {
    name: "Matthias Monnier",
    roles: ["Tech Architect", "Web3 Fullstack Developer", "Smart Contract Specialist"],
    initials: "MM",
    photo: images.team.matthiasMonnier,
    links: {
      x: "https://x.com/ProvableMat",
      linkedin: "https://www.linkedin.com/in/matthiasmonnier/",
      email: "matthias@zkorp.xyz",
    },
  },
  {
    name: "Noé Pichot",
    roles: ["Three.js, WebGL / 3D", "Web3 Fullstack Developer"],
    initials: "NP",
    photo: images.team.noePichot,
    links: {
      x: "https://x.com/BlackCatRender",
      linkedin: "https://www.linkedin.com/in/no%C3%A9-pichot-094727ba/",
      email: "noe@zkorp.xyz",
    },
  },
  {
    name: "Steven Klinger",
    roles: ["CMO / Sales", "Ex Developer"],
    initials: "SK",
    photo: images.team.stevenKlinger,
    links: {
      x: "https://x.com/Scabanel_",
      linkedin: "https://www.linkedin.com/in/steven-klinger/",
      email: "steven@zkorp.xyz",
    },
  },
  {
    name: "Jean Christophe Mehr",
    roles: ["Web3 Fullstack Developer", "Onchain Gaming Specialist"],
    initials: "JCM",
    photo: images.team.jcMehr,
    links: {
      x: "https://x.com/djizus_",
      linkedin: "https://www.linkedin.com/in/mehrjc/",
    },
  },
];

// Simple SVG icons
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      style={{
        backgroundColor: "#1e1e1e",
        border: "1px solid rgba(155,143,212,0.2)",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        cursor: "default",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "rgba(155,143,212,0.5)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "rgba(155,143,212,0.2)")
      }
    >
      {/* Photo */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1/1",
          backgroundColor: "#2a2a2a",
          border: "1px solid rgba(240,112,96,0.3)",
          overflow: "hidden",
          position: "relative",
          filter: "grayscale(1)",
        }}
      >
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt={member.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "2rem",
                color: "#444",
                letterSpacing: "0.05em",
              }}
            >
              {member.initials}
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-archivo-black), sans-serif",
            fontSize: "1.1rem",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            marginBottom: "0.5rem",
          }}
        >
          {member.name}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          {member.roles.map((role, i) => (
            <span key={i} className="section-label" style={{ color: "#666", fontSize: "0.82rem" }}>
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Social links */}
      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "auto" }}>
        {member.links.x && (
          <a
            href={member.links.x}
            target="_blank"
            rel="noopener noreferrer"
            title="X / Twitter"
            style={{
              color: "#555",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
          >
            <IconX />
          </a>
        )}
        {member.links.linkedin && (
          <a
            href={member.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{
              color: "#555",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#9B8FD4")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
          >
            <IconLinkedIn />
          </a>
        )}
        {"email" in member.links && member.links.email && (
          <a
            href={`mailto:${member.links.email}`}
            title={member.links.email as string}
            style={{
              color: "#555",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F07060")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
          >
            <IconMail />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-16 md:py-28 overflow-hidden">
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

      <div className="relative z-10 w-[90%] lg:w-[70%] mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">04 / We Are zKorp</span>
        </motion.div>

        {/* Header card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
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
              fontSize: "clamp(1.1rem, 3vw, 1.75rem)",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "1rem",
              letterSpacing: "0.02em",
            }}
          >
            We are Web3 builders, we are{" "}
            <span style={{ color: "#F07060" }}>zKorp</span>
          </h2>
          <p style={{ color: "#bbb", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "720px" }}>
            We work with Web3 companies because we deeply trust utility and future of this ecosystem, in many global fields. That&rsquo;s why we became specialists in this technical area, to transform projects into concrete proof of problem&rsquo;s solving.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
