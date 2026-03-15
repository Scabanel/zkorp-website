"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#171717", minHeight: "100vh" }} className="overflow-hidden">
        {/* Header */}
        <section
          className="relative pt-36 pb-20 overflow-hidden"
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
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(155,143,212,0.08) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 w-[90%] lg:w-[70%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "1.25rem" }}
            >
              <span className="section-label">Blog / Insights</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
                color: "#fff",
                marginBottom: "1.5rem",
              }}
            >
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "1.05rem",
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                maxWidth: "480px",
              }}
            >
              Field insights from the zKorp team - tech, Web3, onchain gaming.
            </motion.p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="relative py-20">
          <div className="w-[90%] lg:w-[70%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: "easeOut" as const }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <article
                      style={{
                        backgroundColor: "#1a1a1a",
                        border: "1px solid rgba(255,255,255,0.07)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                        height: "100%",
                        transition: "border-color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor = `${post.accent}55`)
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)")
                      }
                    >
                      {/* Cover image / placeholder */}
                      <div
                        style={{
                          height: "200px",
                          backgroundColor: "#1e1e1e",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {post.coverImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                          />
                        ) : (
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div
                              style={{
                                fontFamily: "var(--font-archivo-black), sans-serif",
                                fontSize: "4rem",
                                opacity: 0.06,
                                textTransform: "uppercase",
                                color: "#fff",
                                userSelect: "none",
                                letterSpacing: "-0.04em",
                              }}
                            >
                              ZKORP
                            </div>
                          </div>
                        )}
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: post.accent }} />
                        <div className="section-label" style={{ position: "absolute", top: "12px", right: "12px", color: "#555", fontSize: "1.1rem", background: "rgba(0,0,0,0.5)", padding: "2px 6px" }}>
                          {post.date}
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.875rem" }}>
                          <span className="section-label" style={{ color: post.accent, fontSize: "0.78rem" }}>{post.category}</span>
                          <span className="section-label" style={{ color: "#444", fontSize: "1.1rem" }}>{post.readTime} read</span>
                        </div>

                        <h2
                          style={{
                            fontFamily: "var(--font-archivo-black), sans-serif",
                            fontSize: "1.1rem",
                            textTransform: "uppercase",
                            color: "#fff",
                            letterSpacing: "0.01em",
                            lineHeight: 1.2,
                            marginBottom: "0.875rem",
                          }}
                        >
                          {post.title}
                        </h2>

                        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.88rem", color: "#888", lineHeight: 1.6, flex: 1, marginBottom: "1.25rem" }}>
                          {post.excerpt}
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "1.25rem" }}>
                          {post.tags.map((tag) => (
                            <span key={tag} className="tech-badge">{tag}</span>
                          ))}
                        </div>

                        <div className="section-label" style={{ color: post.accent, fontSize: "0.82rem" }}>
                          Read more →
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Back link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ marginTop: "4rem", textAlign: "center" }}
            >
              <Link
                href="/"
                className="section-label"
                style={{ color: "#555", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
              >
                ← Back to home
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
