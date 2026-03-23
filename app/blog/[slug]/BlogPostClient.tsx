"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { type BlogPost, type BlogSection } from "@/lib/blog-posts";

function TweetEmbed({ tweetId }: { tweetId: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const load = () => {
      (window as any).twttr?.widgets?.load(ref.current);
    };
    if ((window as any).twttr) {
      load();
    } else if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      script.onload = load;
      document.body.appendChild(script);
    } else {
      const interval = setInterval(() => {
        if ((window as any).twttr) { clearInterval(interval); load(); }
      }, 100);
    }
  }, [tweetId]);

  return (
    <div ref={ref} style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}>
      <blockquote className="twitter-tweet">
        <a href={`https://twitter.com/zKorp_/status/${tweetId}`}></a>
      </blockquote>
    </div>
  );
}

function RenderSection({ section, accent }: { section: BlogSection; accent: string }) {
  switch (section.type) {
    case "heading":
      return (
        <div style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
          {section.level === 2 ? (
            <h2
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                textTransform: "uppercase",
                color: "#fff",
                letterSpacing: "0.02em",
                lineHeight: 1.15,
              }}
            >
              {section.text}
            </h2>
          ) : (
            <h3
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                textTransform: "uppercase",
                color: accent,
                letterSpacing: "0.02em",
                lineHeight: 1.2,
              }}
            >
              {section.text}
            </h3>
          )}
        </div>
      );

    case "paragraph":
      return (
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "1.05rem",
            color: "#bbb",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          {section.text}
        </p>
      );

    case "quote":
      return (
        <blockquote
          style={{
            borderLeft: `3px solid ${accent}`,
            paddingLeft: "1.5rem",
            margin: "2rem 0",
            position: "relative",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontSize: "1.1rem",
              color: "#fff",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            &ldquo;{section.text}&rdquo;
          </p>
        </blockquote>
      );

    case "list":
      return (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "1rem 0 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          {section.items?.map((item, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1rem",
                color: "#bbb",
                lineHeight: 1.7,
                paddingLeft: "1.25rem",
                position: "relative",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: "#F07060", fontWeight: 700 }}>·</span>
              {item}
            </li>
          ))}
        </ul>
      );

    case "image":
      return (
        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={section.src}
            alt={section.alt ?? ""}
            style={{ maxWidth: "640px", width: "100%", display: "inline-block", objectFit: "cover" }}
          />
          {section.caption && (
            <p
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "1.1rem",
                color: "#555",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "0.5rem",
                textAlign: "center",
              }}
            >
              {section.caption}
            </p>
          )}
        </div>
      );

    case "tweet":
      return <TweetEmbed tweetId={section.tweetId!} />;

    case "video":
      return (
        <div style={{ margin: "2rem 0", position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
          <iframe
            src={`https://www.youtube.com/embed/${section.youtubeId}`}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>
      );

    case "cta":
      return (
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <a
            href={section.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "1.05rem",
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
            {section.label}
          </a>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#171717", minHeight: "100vh" }}>
        {/* Header */}
        <section
          className="relative pt-36 pb-16 overflow-hidden"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 60% at 50% 0%, ${post.accent}15 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10 w-[90%] lg:w-[70%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
            >
              <span className="section-label" style={{ color: post.accent }}>{post.category}</span>
              <span className="section-label" style={{ color: "#444" }}>·</span>
              <span className="section-label" style={{ color: "#555" }}>{post.date}</span>
              <span className="section-label" style={{ color: "#444" }}>·</span>
              <span className="section-label" style={{ color: "#555" }}>{post.readTime} read</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
                color: "#fff",
                marginBottom: "2rem",
              }}
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}
            >
              <span style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "1.1rem", color: "#fff", textTransform: "uppercase" }}>
                {post.author}
              </span>
              <span className="section-label" style={{ color: "#555" }}>{post.authorHandle}</span>
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginLeft: "0.5rem" }}>
                {post.tags.map((tag) => (
                  <span key={tag} className="tech-badge">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover image */}
        {post.coverImage && (
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-[90%] lg:w-[70%] mx-auto pt-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ position: "relative", overflow: "hidden", aspectRatio: "16/7" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: post.accent }} />
              </motion.div>
            </div>
          </div>
        )}

        {/* Content */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="w-[90%] lg:w-[70%] mx-auto"
          >
            {post.content.map((section, i) => (
              <RenderSection key={i} section={section} accent={post.accent} />
            ))}

            {/* Back link */}
            <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <Link
                href="/blog"
                className="section-label"
                style={{ color: "#555", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
              >
                ← Back to blog
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
