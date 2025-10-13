import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 128,
  height: 128,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0E1A",
          color: "#4E7EFF",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        CO
      </div>
    ),
    {
      ...size,
    }
  );
}
