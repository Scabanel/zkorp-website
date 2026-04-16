"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { type BlogPost, type BlogSection } from "@/lib/blog-posts";
import { getCategoryAccent } from "@/lib/blog-helpers";

const TOKEN_COLORS: Record<string, string> = {
  comment: "#6b7280",
  string: "#A5D6A7",
  keyword: "#C792EA",
  type: "#82AAFF",
  number: "#F78C6C",
  builtin: "#4DD0E1",
  function: "#FFD166",
};

const SOLIDITY_PATTERN =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b(?:pragma|solidity|import|from|contract|interface|library|struct|mapping|enum|private|public|internal|external|returns|return|function|if|else|for|while|true|false|calldata|storage|memory|view|pure|payable|event|emit|modifier|indexed)\b)|(\b(?:address|bool|string|bytes\d*|bytes|uint\d*|int\d*|euint64|euint128|externalEuint64)\b)|(\b\d+(?:\.\d+)?\b)|(\b(?:FHE|IERC7984|msg|block|this|tx)\b)|(\b[a-zA-Z_]\w*(?=\s*\())/g;
const TYPESCRIPT_PATTERN =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b(?:import|from|export|default|const|let|var|function|return|if|else|for|while|switch|case|break|continue|try|catch|finally|throw|new|async|await|class|extends|implements|interface|type|enum|public|private|protected|readonly|static|as|in|of|typeof|instanceof|void|declare)\b)|(\b(?:string|number|boolean|unknown|any|never|object|undefined|null|Promise|Record|ReactNode)\b)|(\b\d+(?:\.\d+)?\b)|(\b(?:console|window|document|Math|JSON|Array|Object|Set|Map)\b)|(\b[a-zA-Z_]\w*(?=\s*\())/g;

function getTokenType(match: RegExpMatchArray): string | null {
  if (match[1]) return "comment";
  if (match[2]) return "string";
  if (match[3]) return "keyword";
  if (match[4]) return "type";
  if (match[5]) return "number";
  if (match[6]) return "builtin";
  if (match[7]) return "function";
  return null;
}

function highlightWithPattern(text: string, pattern: RegExp): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    const tokenType = getTokenType(match);
    const tokenText = match[0];
    if (tokenType && TOKEN_COLORS[tokenType]) {
      nodes.push(
        <span key={`tok-${key++}`} style={{ color: TOKEN_COLORS[tokenType] }}>
          {tokenText}
        </span>
      );
    } else {
      nodes.push(tokenText);
    }

    lastIndex = index + tokenText.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderCode(text: string, language?: string): ReactNode {
  const normalized = (language ?? "").toLowerCase();
  if (normalized === "solidity" || normalized === "sol") {
    return highlightWithPattern(text, SOLIDITY_PATTERN);
  }
  if (normalized === "typescript" || normalized === "ts" || normalized === "tsx" || normalized === "javascript" || normalized === "js") {
    return highlightWithPattern(text, TYPESCRIPT_PATTERN);
  }
  return text;
}

function renderText(text: string) {
  return text.split(/(@\w+)/g).map((part, i) =>
    /^@\w+$/.test(part) ? (
      <a
        key={i}
        href={`https://x.com/${part.slice(1)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1d9bf0", textDecoration: "none" }}
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

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
          {renderText(section.text!)}
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
            &ldquo;{renderText(section.text!)}&rdquo;
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
              {renderText(item)}
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

    case "code":
      return (
        <div style={{ margin: "1.5rem 0 2rem" }}>
          {section.language && (
            <div
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.75rem",
                color: "#7f8c9a",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "0.5rem",
              }}
            >
              {section.language}
            </div>
          )}
          <pre
            style={{
              margin: 0,
              padding: "1rem",
              background: "rgba(0, 0, 0, 0.35)",
              border: "1px solid rgba(255,255,255,0.08)",
              overflowX: "auto",
            }}
          >
            <code
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#d0d7de",
                whiteSpace: "pre",
              }}
            >
              {renderCode(section.text ?? "", section.language)}
            </code>
          </pre>
        </div>
      );

    case "cta":
      const isZama = section.variant === "zama";
      const isCentered = section.align === "center";
      return (
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            textAlign: isCentered ? "center" : "left",
          }}
        >
          <a
            href={section.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "1.05rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              backgroundColor: isZama ? "#FFCC00" : "#F07060",
              color: isZama ? "#111" : "#fff",
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
  const accent = getCategoryAccent(post.category, post.accent);

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
              background: `radial-gradient(ellipse 60% 60% at 50% 0%, ${accent}15 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10 w-[90%] lg:w-[70%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
            >
              <span className="section-label" style={{ color: accent }}>{post.category}</span>
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
                  <span
                    key={tag}
                    className="tech-badge"
                    style={{ color: accent, borderColor: `${accent}55` }}
                  >
                    {tag}
                  </span>
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
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: accent }} />
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
              <RenderSection key={i} section={section} accent={accent} />
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
