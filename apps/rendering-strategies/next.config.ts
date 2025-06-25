import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["placehold.co"],
  },
  transpilePackages: ["@workspace/ui"],
};

export default nextConfig;
