import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/preview',
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
