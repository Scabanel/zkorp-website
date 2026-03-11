"use client";
// Fixed ambient blobs - rendered once in the layout, visible across all sections.
// Pure CSS animations for performance; opacity kept very low to never disturb reading.
export default function AmbientBlobs() {
  return (
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {/* Coral - top-right */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-8%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,112,96,0.07) 0%, transparent 65%)",
          animation: "blob-a 22s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      {/* Purple - bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(155,143,212,0.07) 0%, transparent 65%)",
          animation: "blob-b 28s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      {/* Purple - center, very faint */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "25%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(155,143,212,0.04) 0%, transparent 60%)",
          animation: "blob-c 18s ease-in-out infinite",
          willChange: "transform",
        }}
      />
    </div>
  );
}
