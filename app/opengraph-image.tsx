import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const brandGradient = "linear-gradient(135deg, #0B0E1A 20%, #4E7EFF 100%)";

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
          background: brandGradient,
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>Channel OS</div>
        <div style={{
          fontSize: 44,
          fontWeight: 600,
          maxWidth: "80%",
          lineHeight: 1.2,
        }}>
          The vendor-neutral operating system for the channel (VDP)
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: 28,
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          <span>People</span>
          <span>Process</span>
          <span>Data</span>
          <span>Tools</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
