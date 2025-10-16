import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function AboutOpenGraphImage() {
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
          background: "#FFFFFF",
          color: "#0B0E1A",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: "0.4em", textTransform: "uppercase", color: "#8A93A6" }}>
          About
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>Channel OS™</div>
        <div style={{ fontSize: 36, fontWeight: 500, maxWidth: "70%", color: "#0B0E1A", lineHeight: 1.3 }}>
          An independent initiative by Tycho Löke.
        </div>
        <div style={{ display: "flex", gap: "24px", fontSize: 26, color: "#8A93A6" }}>
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
