import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "be-buitenbijons-test.ddev.site",
        port: "33003",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
