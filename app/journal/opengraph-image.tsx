import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function JournalOpenGraphImage() {
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
          background: "linear-gradient(135deg, #04060F 20%, #24304F 90%)",
          color: "#F7FAFF",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        <span style={{ fontSize: 24, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(247,250,255,0.6)" }}>
          Journal
        </span>
        <div style={{ fontSize: 60, fontWeight: 700 }}>Channel OS build notes</div>
        <div style={{ fontSize: 34, fontWeight: 500, maxWidth: "70%", color: "rgba(247,250,255,0.82)" }}>
          Monthly updates while we build the shared operating system for the IT channel.
        </div>
        <div style={{ fontSize: 22, color: "rgba(247,250,255,0.7)" }}>
          Subscribe for the next release note.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
