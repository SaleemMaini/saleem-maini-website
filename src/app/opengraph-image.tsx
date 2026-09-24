import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b0f17",
          color: "#e5e7eb",
        }}
      >
        <div style={{ fontSize: 28, color: "#818cf8", fontWeight: 600 }}>{profile.availability}</div>
        <div style={{ fontSize: 88, fontWeight: 800, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 44, color: "#94a3b8", marginTop: 8 }}>
          {`${profile.role} · ${profile.specialty}`}
        </div>
        <div style={{ fontSize: 30, color: "#94a3b8", marginTop: 40 }}>
          5+ years · Fintech & SaaS · React Native · Expo · Next.js
        </div>
      </div>
    ),
    size,
  );
}
