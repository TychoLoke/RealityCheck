const path = require("path");

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
  webpack(config) {
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["next-mdx-import-source-file"] = path.join(
      __dirname,
      "mdx-components.tsx",
    );
    return config;
  },
};

module.exports = createMDX(nextConfig);
