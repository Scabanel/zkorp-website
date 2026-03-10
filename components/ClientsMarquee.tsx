"use client";

const clients = [
  { name: "ZAMA",              logo: "" },
  { name: "Starknet",          logo: "" },
  { name: "Provable Games",    logo: "" },
  { name: "Cartridge",         logo: "" },
  { name: "Realms DAO",        logo: "" },
  { name: "MedievalTech",      logo: "" },
];

// Triplicate for seamless infinite loop
const track = [...clients, ...clients, ...clients];

export default function ClientsMarquee() {
  return (
    <div
      style={{
        backgroundColor: "#171717",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to right, #171717, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to left, #171717, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Scrolling track */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          animation: "marquee 30s linear infinite",
          width: "max-content",
        }}
      >
        {track.map((client, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1.25rem 2.5rem",
              flexShrink: 0,
            }}
          >
            {client.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  height: "22px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.35,
                }}
              />
            ) : (
              <span
                style={{
                  fontFamily: "var(--font-archivo-black), sans-serif",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {client.name}
              </span>
            )}
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.68rem", marginLeft: "1rem" }}>
              /
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </div>
  );
}
