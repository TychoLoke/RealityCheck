import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #04060F 10%, #1D2638 90%)",
          color: "#F7FAFF",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        <span style={{ fontSize: 28, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(247,250,255,0.7)" }}>
          Build Mode
        </span>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>Channel OS</div>
        <div style={{ fontSize: 40, fontWeight: 500, maxWidth: "70%", color: "rgba(247,250,255,0.85)", lineHeight: 1.3 }}>
          A shared operating system for the IT channel. Launching 1 January 2026.
        </div>
        <div style={{ display: "flex", gap: "24px", fontSize: 26, color: "rgba(247,250,255,0.75)" }}>
          <span>People</span>
          <span>Process</span>
          <span>Data</span>
          <span>Tools</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
