"use client";
import { motion } from "framer-motion";
import { ChromeDots } from "./Context";

const videos = [
  {
    title: "Onchain gaming and Realms Universe",
    description: "Story of one of the biggest onchain gaming ecosystem",
    youtubeId: "zRIl_g00T98",
  },
  {
    title: "WE ARE ZKORP",
    description: "Tech experts on Web3 market, before it was cool",
    youtubeId: "_VPtM8GFRVo",
  },
];

function VideoCard({ video, index }: { video: (typeof videos)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        backgroundColor: "#1a1a1a",
        border: "1px solid rgba(155,143,212,0.2)",
        overflow: "hidden",
        transition: "border-color 0.3s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "rgba(155,143,212,0.5)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "rgba(155,143,212,0.2)")
      }
    >
      {/* Video embed */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: "1.25rem 1.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-archivo-black), sans-serif",
            fontSize: "1.1rem",
            textTransform: "uppercase",
            color: "#fff",
            letterSpacing: "0.01em",
            marginBottom: "0.35rem",
          }}
        >
          {video.title}
        </p>
        <p className="section-label" style={{ color: "#555" }}>
          {video.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ContentSection() {
  return (
    <section id="content" className="relative py-28 overflow-hidden">
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

      <div className="relative z-10 w-[70%] mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">13 / Content</span>
        </motion.div>

        {/* Header card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.08 }}
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
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              textTransform: "uppercase",
              color: "#F07060",
              marginBottom: "0.75rem",
              letterSpacing: "0.02em",
            }}
          >
            More than Tech Experts, Content Creators
          </h2>
          <p style={{ color: "#bbb", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "680px" }}>
            We are using our skills in content production, videos &amp; live to gather communities and help our client&rsquo;s project grow.
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
