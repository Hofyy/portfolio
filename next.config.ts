import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',        // <- wichtig für statische Export
  trailingSlash: true,
};

export default nextConfig;
