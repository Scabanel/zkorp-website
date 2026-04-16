import { images } from "@/lib/images";

export interface Project {
  id: string;
  name: string;
  client: string;
  tagline: string;
  description: string;
  metric: string;
  stack: string[];
  image: string;
  imagePlaceholder: string;
  clientColor: string;
  statusBar: boolean;
  narrative: "privacy" | "gaming" | "ai";
}

export const allProjects: Project[] = [
  // ── Privacy / FHE ──────────────────────────────────────────
  {
    id: "12",
    name: "Onyx with FHE",
    client: "ZAMA",
    tagline: "Confidential financial flux platform",
    description:
      "Onyx is the confidential financial flux platform. It's using FHE to guarantee private amounts, verifiable execution, in a trustless environment.",
    metric: "",
    stack: ["Goldsky", "Solidity", "ZAMA fhEVM", "Hardhat", "React JS"],
    image: images.projects.onyx,
    imagePlaceholder: "Onyx with FHE - Confidential finance illustration",
    clientColor: "#FFCC00",
    statusBar: true,
    narrative: "privacy",
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
    narrative: "privacy",
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
    narrative: "privacy",
  },
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
    narrative: "privacy",
  },
  {
    id: "10",
    name: "ConfidentialGold",
    client: "ZAMA",
    tagline: "Confidential DeFi - Your balance, encrypted onchain",
    description:
      "Turn your public gold tokens into confidential gold. Your balance stays encrypted onchain, meaning that only YOU can see it.",
    metric: "Pioneer in confidential DeFi infrastructure",
    stack: ["Goldsky", "Solidity", "ZAMA fhEVM", "Hardhat", "React JS"],
    image: images.projects.confidentialGold,
    imagePlaceholder: "ConfidentialGold - Steampunk gold illustration",
    clientColor: "#FFCC00",
    statusBar: true,
    narrative: "privacy",
  },
  {
    id: "14",
    name: "Privacy Looker",
    client: "ZAMA",
    tagline: "Privacy transaction visualizer",
    description:
      "Real-time 3D visualization of Zama Shield and Unshield transaction flows happening on Ethereum.",
    metric: "",
    stack: ["Next.js", "WebGPU", "Three.js"],
    image: images.projects.privacyLooker,
    imagePlaceholder: "Privacy Looker - Transaction flow visualizer",
    clientColor: "#FFCC00",
    statusBar: true,
    narrative: "privacy",
  },

  // ── Onchain Gaming ─────────────────────────────────────────
  {
    id: "15",
    name: "zKube",
    client: "zKorp",
    tagline: "Most traction at launch on Starknet",
    description:
      "Fully onchain puzzle game built on Starknet with Dojo. Won the most traction on Starknet at launch and continues to evolve with composable integrations.",
    metric: "Most played game at launch on Starknet ecosystem",
    stack: ["Cairo", "Starknet", "Dojo", "Cartridge"],
    image: images.awards.screenshot4,
    imagePlaceholder: "zKube - Fully onchain puzzle game",
    clientColor: "#F07060",
    statusBar: false,
    narrative: "gaming",
  },
  {
    id: "07",
    name: "Armored MMA",
    client: "MedievalTech",
    tagline: "Experimental infrastructure on Starknet",
    description:
      "Experimental infrastructure layer built on Starknet that rethinks how sports fans participate, how incentives align and how digital assets are created.",
    metric: "Free-to-play prediction market · Composable collectibles · Fighter registry",
    stack: ["Cairo", "Torii", "Cartridge", "React JS"],
    image: images.projects.armoredMma,
    imagePlaceholder: "Armored MMA - Medieval knight collectible",
    clientColor: "#fff",
    statusBar: false,
    narrative: "gaming",
  },
  {
    id: "11",
    name: "LootSurvivor2 Onboarding",
    client: "Provable Games",
    tagline: "Onboarding Web2 players to Web3 games",
    description:
      "For the biggest onchain game on Starknet, we integrate onramper to help Web2 players jumping quickly on web3 games.",
    metric: "Biggest onchain game on Starknet",
    stack: ["Cairo", "Cartridge", "React JS"],
    image: images.projects.lootSurvivor,
    imagePlaceholder: "Loot Survivor 2 - Pixel monster art",
    clientColor: "#fff",
    statusBar: false,
    narrative: "gaming",
  },

  // ── Agentic AI ─────────────────────────────────────────────
  {
    id: "13",
    name: "Hydra",
    client: "zKorp",
    tagline: "The first streaming platform for AI agents",
    description:
      "Owners boot autonomous AI game agents, customize their personality, and stream gameplay on LootSurvivor. Viewers spectate and chat with the agent in real time.",
    metric: "First onchain gaming streaming platform for AI agents",
    stack: ["Cairo", "Starknet", "Cartridge", "LootSurvivor", "AI Agents"],
    image: images.projects.hydra,
    imagePlaceholder: "Hydra - AI agent streaming platform",
    clientColor: "#9B8FD4",
    statusBar: false,
    narrative: "ai",
  },
];

export const privacyProjects = allProjects.filter(
  (p) => p.narrative === "privacy" && !["06", "09", "10"].includes(p.id)
);
export const gamingProjects = allProjects.filter((p) => p.narrative === "gaming");
export const aiProjects = allProjects.filter((p) => p.narrative === "ai");

export const awards = [
  { name: "zKnight", event: "1st Dojo game jam", genre: "2D Tactical Game" },
  { name: "zDefender", event: "2nd Dojo game jam", genre: "Tower Defense" },
  { name: "zKrown", event: "Bibliotheca DAO grantee", genre: "Risk on Chain" },
  { name: "zKastle", event: "Dojo track - Starkhack", genre: "Strategy" },
  { name: "zKlash", event: "Last Dojo game jam", genre: "Autobattler" },
];
