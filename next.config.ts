import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/saleem-maini-website") when hosting under a
// sub-path such as GitHub Pages project sites. Leave empty for root domains.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
