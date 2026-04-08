"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ClientsMarquee from "./ClientsMarquee";

const stats = [
  "6 Experts",
  "10 Years of XP",
  "International Context",
  "Multi Awarded Team",
  "+15 Projects on Mainnet",
];

const heroPhotos = [
  "/photos/IMG_7658.jpg",
  "/photos/IMG_7689.jpg",
  "/photos/IMG_7690.jpg",
  "/photos/IMG_7726.jpg",
  "/photos/IMG_7747.jpg",
  "/photos/IMG_7749 (1).jpg",
  "/photos/IMG_7884.jpg",
  "/photos/IMG_7900.jpg",
  "/photos/IMG_7955.jpg",
  "/photos/IMG_3039 (1).jpeg",
  "/photos/IMG_7904.jpg",
  "/photos/IMG_1804.JPG",
  "/photos/IMG_8011.jpg",
  "/photos/PXL_20260402_093525888.MP.jpg",
  "/photos/IMG_7872 (1).jpg",
  "/photos/IMG_3163.jpg",
  "/photos/IMG_7973.jpg",
  "/photos/IMG_8025.jpg",
  "/photos/irl-starknet.png",
  "/photos/irl-thomas.png",
  "/photos/realms-article.jpg",
  "/photos/team.png",
];

const heroPhotoFocalPoints: Record<string, string> = {
  "/photos/IMG_7658.jpg": "50% 47%",
  "/photos/IMG_7689.jpg": "49% 48%",
  "/photos/IMG_7690.jpg": "50% 48%",
  "/photos/IMG_7726.jpg": "51% 43%",
  "/photos/IMG_7747.jpg": "50% 45%",
  "/photos/IMG_7749 (1).jpg": "50% 45%",
  "/photos/IMG_7884.jpg": "50% 50%",
  "/photos/IMG_7900.jpg": "50% 50%",
  "/photos/IMG_7955.jpg": "52% 50%",
  "/photos/IMG_3039 (1).jpeg": "50% 42%",
  "/photos/IMG_7904.jpg": "56% 45%",
  "/photos/IMG_1804.JPG": "52% 56%",
  "/photos/IMG_8011.jpg": "46% 43%",
  "/photos/PXL_20260402_093525888.MP.jpg": "44% 46%",
  "/photos/IMG_7872 (1).jpg": "58% 48%",
  "/photos/IMG_3163.jpg": "58% 52%",
  "/photos/IMG_7973.jpg": "55% 52%",
  "/photos/IMG_8025.jpg": "52% 44%",
  "/photos/irl-starknet.png": "50% 48%",
  "/photos/irl-thomas.png": "50% 34%",
  "/photos/realms-article.jpg": "50% 45%",
  "/photos/team.png": "52% 48%",
};

const HERO_BASE_WIDTH = 1920;
const HERO_BASE_HEIGHT = 1080;

function getHeroGridColumns(width: number) {
  if (width < 640) return 2;
  if (width < 1024) return 3;
  return 5;
}

export default function Hero() {
  const [heroGridColumns, setHeroGridColumns] = useState(5);

  useEffect(() => {
    const updateColumns = () => setHeroGridColumns(getHeroGridColumns(window.innerWidth));
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const visibleHeroPhotos = useMemo(() => {
    const rows = Math.floor(heroPhotos.length / heroGridColumns);
    if (rows <= 0) return heroPhotos;
    return heroPhotos.slice(0, rows * heroGridColumns);
  }, [heroGridColumns]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      <div className="relative flex-1 overflow-hidden">
        {/* Photo mosaic background - limited to hero content area */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          style={{
            width: `max(100vw, calc(100vh * ${HERO_BASE_WIDTH} / ${HERO_BASE_HEIGHT}))`,
            height: `max(100vh, calc(100vw * ${HERO_BASE_HEIGHT} / ${HERO_BASE_WIDTH}))`,
            opacity: 0.15,
            filter: "grayscale(0.5) brightness(0.75)",
            zIndex: 0,
          }}
        >
          <div
            className="grid h-full w-full overflow-hidden"
            style={{
              gridTemplateColumns: `repeat(${heroGridColumns}, minmax(0, 1fr))`,
              alignContent: "center",
            }}
          >
            {visibleHeroPhotos.map((src, i) => (
              <div key={`${src}-${i}`} style={{ overflow: "hidden", position: "relative", aspectRatio: "16 / 9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: heroPhotoFocalPoints[src] ?? "50% 50%",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Grid lines overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            zIndex: 1,
          }}
        />

        {/* Fade edges */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #171717 75%)",
            zIndex: 2,
          }}
        />

        {/* Main content */}
        <div
          className="relative flex h-full flex-col items-center justify-center px-6 text-center pt-24 pb-8"
          style={{ zIndex: 10 }}
        >
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
            className="section-label"
            style={{
              border: "1px solid rgba(155,143,212,0.3)",
              padding: "6px 18px",
              marginBottom: "3rem",
              color: "#9B8FD4",
            }}
          >
            Web3 devshop · Privacy · Onchain Gaming · Agentic AI
          </motion.div>

          {/* Slogan: 3 lines */}
          <div style={{ marginBottom: "2.5rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" as const }}
            >
              <motion.span
                animate={{ y: [0, -10] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.5 }}
                style={{
                  display: "block",
                  fontFamily: "var(--font-archivo-black), sans-serif",
                  fontSize: "clamp(2rem, 8vw, 6rem)",
                  lineHeight: 0.95,
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  color: "#fff",
                  userSelect: "none",
                  willChange: "transform",
                }}
              >
                WE ARE WEB3 BUILDERS.
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
            >
              <motion.span
                animate={{ y: [0, -10] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.7 }}
                style={{
                  display: "block",
                  fontFamily: "var(--font-archivo-black), sans-serif",
                  fontSize: "clamp(2rem, 8vw, 6rem)",
                  lineHeight: 0.95,
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                color: "#9B8FD4",
                userSelect: "none",
                willChange: "transform",
              }}
              >
                WE ARE HERE TO STAY.
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" as const }}
            >
              <motion.span
                animate={{ y: [0, -10] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.9 }}
                style={{
                  display: "block",
                  fontFamily: "var(--font-archivo-black), sans-serif",
                  fontSize: "clamp(2.5rem, 10vw, 8rem)",
                  lineHeight: 0.95,
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  userSelect: "none",
                  willChange: "transform",
                }}
              >
                <span style={{ color: "#fff" }}>WE ARE </span>
                <span style={{ color: "#F07060" }}>Z</span>
                <span style={{ color: "#fff" }}>KORP.</span>
              </motion.span>
            </motion.div>
          </div>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" as const }}
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "clamp(0.65rem, 1.4vw, 0.95rem)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#555",
              maxWidth: "700px",
              marginBottom: "3rem",
            }}
          >
            Building strong dApps with useful UX for mainnet
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" as const }}
            className="flex items-center gap-4 flex-wrap justify-center"
          >
            <a
              href="#manifesto"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                backgroundColor: "#F07060",
                color: "#fff",
                padding: "16px 36px",
                textDecoration: "none",
                display: "inline-block",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Explore our work →
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#aaa",
                padding: "16px 36px",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.5)";
                el.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.2)";
                el.style.color = "#aaa";
              }}
            >
              Work with us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Clients marquee */}
      <div className="relative" style={{ zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <ClientsMarquee />
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" as const }}
        className="relative"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)", zIndex: 10 }}
      >
        <div className="w-full px-6 lg:px-10 py-5 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-3 justify-items-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center justify-center min-w-0">
              <span className="section-label text-center" style={{ color: "#555", fontSize: "1.1rem" }}>
                {stat}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
