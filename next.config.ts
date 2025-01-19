import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: './', // Ensure assets are loaded relative to the site root
};

export default nextConfig;
