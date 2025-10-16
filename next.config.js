const createMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    optimizePackageImports: [],
  },
  env: {
    NEXT_PUBLIC_ENABLE_ANALYTICS: enableAnalytics ? "true" : "false",
  },
};

module.exports = createMDX(nextConfig);
