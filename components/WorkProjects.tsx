"use client";
import { ImagePlaceholder } from "./Context";
import { images } from "@/lib/images";

const projects = [
  {
    id: "06",
    name: "Zashapon",
    client: "ZAMA",
    tagline: "First consumer apps on fhEVM",
    description:
      "Zama entrusts us with their first consumer apps on fhEVM. Reward distribution system plugged to a set of dapps to reward contribution to an ecosystem.",
    metric: "4 327 Users and 35 016 draws at peak",
    stack: ["Goldsky", "Solidity", "ZAMA fhEVM", "Hardhat", "React JS"],
    image: images.projects.zashapon,
    imagePlaceholder: "Zashapon - Capsule machine illustration",
    clientColor: "#FFCC00",
    statusBar: true,
  },
  {
    id: "07",
    name: "Armored MMA",
    client: "MedievalTech",
    tagline: "Experimental infrastructure on Starknet",
    description:
      "Experimental infrastructure layer built on Starknet that rethinks how sports fans participate, how incentives align and how digital assets are created. Built for a mobile-app.",
    metric: "Free-to-play prediction market · Composable collectibles · Fighter registry",
    stack: ["Cairo", "Torii", "Cartridge", "React JS"],
    image: images.projects.armoredMma,
    imagePlaceholder: "Armored MMA - Medieval knight collectible",
    clientColor: "#fff",
    statusBar: false,
  },
  {
    id: "08",
    name: "DeBerry's",
    client: "ZAMA",
    tagline: "Fully confidential onchain auction platform",
    description:
      "Fully confidential onchain auction platform with one promise: no info leakage. Not the bid, not the strategy behind it. Mobile-first UX for non-crypto natives.",
    metric: "We proved that FHE isn't just a cryptographic curiosity - it's product-ready",
    stack: ["Goldsky", "Solidity", "ZAMA fhEVM", "Hardhat", "React JS"],
    image: images.projects.deberrys,
    imagePlaceholder: "DeBerry's - Confidential auction dapp UI",
    clientColor: "#FFCC00",
    statusBar: true,
  },
  {
    id: "09",
    name: "PlayAscend",
    client: "ZAMA",
    tagline: "First mobile app using Zama",
    description:
      "The first mobile app using Zama where you're fighting an evil AI bot in a fully encrypted rock-paper-scissors battle. Battle-tested infrastructure.",
    metric: "Identified zero-day bugs during infra stress-testing",
    stack: ["Goldsky", "Solidity", "ZAMA fhEVM", "Hardhat", "React JS"],
    image: images.projects.playAscend,
    imagePlaceholder: "PlayAscend - Ascend game visual",
    clientColor: "#FFCC00",
    statusBar: true,
  },
  {
    id: "10",
    name: "ConfidentialGold",
    client: "ZAMA",
    tagline: "Confidential DeFi - Your balance, encrypted onchain",
    description:
      "In 2026, Zama massively invests in DeFi. Turn your public gold tokens into confidential gold. Your balance stays encrypted onchain, meaning that only YOU can see it.",
    metric: "Pioneer in confidential DeFi infrastructure",
    stack: ["Goldsky", "Solidity", "ZAMA fhEVM", "Hardhat", "React JS"],
    image: images.projects.confidentialGold,
    imagePlaceholder: "ConfidentialGold - Steampunk gold illustration",
    clientColor: "#FFCC00",
    statusBar: true,
  },
  {
    id: "11",
    name: "LootSurvivor2 Onboarding",
    client: "Provable Games",
    tagline: "Onboarding Web2 players to Web3 games",
    description:
      "For the biggest onchain game on Starknet, we integrate onramper to help Web2 players jumping quickly on web3 games. We built a specific client for that: LootAdventurer.",
    metric: "Biggest onchain game on Starknet",
    stack: ["Cairo", "Cartridge", "React JS"],
    image: images.projects.lootSurvivor,
    imagePlaceholder: "Loot Survivor 2 - Pixel monster art",
    clientColor: "#fff",
    statusBar: false,
  },
];

function StatusBar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
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
          <span
            className="section-label"
            style={{ color: "#555", fontSize: "1.1rem" }}
          >
            {item.label}
          </span>
          <span
            className="section-label"
            style={{ color: item.color, fontSize: "1.1rem" }}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        border: "1px solid rgba(155,143,212,0.2)",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s",
        overflow: "hidden",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor =
          "rgba(155,143,212,0.5)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor =
          "rgba(155,143,212,0.2)")
      }
    >
      {/* Image */}
      <div style={{ flexShrink: 0 }}>
        <ImagePlaceholder
          label={project.imagePlaceholder}
          sublabel={`→ add path in lib/images.ts`}
          aspectRatio="16/9"
          src={project.image || undefined}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          flex: 1,
        }}
      >
        {/* Header row */}
        <div
          style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "1.1rem",
                textTransform: "uppercase",
                color: "#fff",
                letterSpacing: "0.01em",
              }}
            >
              {project.name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "1.05rem",
                color: "#F07060",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginTop: "2px",
              }}
            >
              {project.client}
            </p>
          </div>
          <span
            className="section-label"
            style={{ color: "#333", fontSize: "0.82rem", flexShrink: 0 }}
          >
            {project.id} / 14
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "1.1rem",
            color: "#888",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {project.tagline}
        </p>

        {/* Description */}
        <p style={{ color: "#aaa", fontSize: "1.05rem", lineHeight: 1.7 }}>
          {project.description}
        </p>

        {/* Metric */}
        <p
          style={{
            color: "#9B8FD4",
            fontSize: "0.82rem",
            fontStyle: "italic",
          }}
        >
          {project.metric}
        </p>

        {/* Stack */}
        <div style={{ marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p
            className="section-label"
            style={{ color: "#444", marginBottom: "0.5rem", fontSize: "1.1rem" }}
          >
            Stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.stack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.statusBar && <StatusBar />}
      </div>
    </div>
  );
}

export default function WorkProjects() {
  return (
    <section
      id="work"
      className="relative py-28 overflow-hidden"
    >
      {/* Grid */}
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

      <div className="relative z-10 w-[70%] mx-auto">
        {/* Label */}
        <div style={{ marginBottom: "1rem" }}>
          <span className="section-label">06-11 / Work Projects</span>
        </div>

        {/* Section title */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              textTransform: "uppercase",
              color: "#fff",
              letterSpacing: "0.02em",
            }}
          >
            We worked on{" "}
            <span style={{ color: "#F07060" }}>these projects</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
