import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/preview',
  output: 'export',
  images: { unoptimized: true },
  // env: {
  //   basePath: '/assortment',
  // },
};

export default nextConfig;
