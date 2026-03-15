"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Your context", href: "/#context" },
  { label: "Our expertise", href: "/#value" },
  { label: "We are builders", href: "/#build" },
  { label: "Who we are", href: "/#team" },
  { label: "Our projects", href: "/#work" },
  { label: "Awards", href: "/#awards" },
  { label: "Our content", href: "/#content" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(23,23,23,0.99)" : "rgba(23,23,23,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(155,143,212,0.2)" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="w-full px-6 xl:px-10 h-16 xl:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <span style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "clamp(1.25rem, 2vw, 1.75rem)", color: "#F07060", letterSpacing: "-0.01em" }}>z</span>
          <span style={{ fontFamily: "var(--font-archivo-black), sans-serif", fontSize: "clamp(1.25rem, 2vw, 1.75rem)", color: "#fff", letterSpacing: "-0.01em" }}>KORP</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-5 2xl:gap-8">
          {navLinks.map((link) => {
            const isBlog = link.href === "/blog";
            return (
              <Link
                key={link.label}
                href={link.href}
                className="section-label"
                style={{
                  color: isBlog ? "#9B8FD4" : "#888",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                  ...(isBlog && {
                    borderBottom: "1px solid rgba(155,143,212,0.4)",
                    paddingBottom: "2px",
                  }),
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = isBlog ? "#C4B9F0" : "#fff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = isBlog ? "#9B8FD4" : "#888")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/#contact"
          className="hidden xl:inline-flex items-center section-label flex-shrink-0"
          style={{ border: "1px solid #F07060", color: "#F07060", padding: "8px 16px", textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}
          onMouseEnter={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#F07060"; el.style.color = "#fff"; }}
          onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "transparent"; el.style.color = "#F07060"; }}
        >
          Work with us →
        </Link>

        {/* Mobile menu button */}
        <button className="xl:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#fff", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#fff", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#fff", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ backgroundColor: "rgba(23,23,23,0.98)", borderTop: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}
          >
            <div style={{ padding: "1.5rem" }}>
              {navLinks.map((link) => {
                const isBlog = link.href === "/blog";
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="section-label"
                    style={{ display: "block", color: isBlog ? "#9B8FD4" : "#888", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="section-label"
                style={{ display: "inline-block", marginTop: "1rem", border: "1px solid #F07060", color: "#F07060", padding: "10px 20px", textDecoration: "none" }}
              >
                Work with us →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
