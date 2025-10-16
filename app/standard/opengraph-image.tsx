import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function StandardOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #04060F 10%, #2A3560 90%)",
          color: "#F7FAFF",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        <span style={{ fontSize: 24, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(247,250,255,0.6)" }}>
          Standard Preview
        </span>
        <div style={{ fontSize: 64, fontWeight: 700 }}>Channel OS Standard</div>
        <div style={{ fontSize: 36, fontWeight: 500, maxWidth: "70%", color: "rgba(247,250,255,0.85)" }}>
          People · Process · Data · Tools · Adapters
        </div>
        <div style={{ fontSize: 22, color: "rgba(247,250,255,0.7)" }}>
          Preview only — launch 1 Jan 2026
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
