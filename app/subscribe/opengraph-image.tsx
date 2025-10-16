import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function SubscribeOpenGraphImage() {
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
          background: "linear-gradient(135deg, #04060F 15%, #1F2B4A 90%)",
          color: "#F7FAFF",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        <span style={{ fontSize: 24, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(247,250,255,0.6)" }}>
          Subscribe
        </span>
        <div style={{ fontSize: 62, fontWeight: 700 }}>Join the Channel OS list</div>
        <div style={{ fontSize: 34, fontWeight: 500, maxWidth: "70%", color: "rgba(247,250,255,0.82)" }}>
          Monthly build updates, launch milestones, and Standard release notes.
        </div>
        <div style={{ fontSize: 22, color: "rgba(247,250,255,0.7)" }}>
          2026 is the year of Channel OS.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
