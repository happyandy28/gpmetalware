import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment with custom domain or subdirectory
  // Uncomment and modify if needed:
  // basePath: "/your-repo-name",
  // assetPrefix: "/your-repo-name/",
  trailingSlash: true,
};

export default nextConfig;
