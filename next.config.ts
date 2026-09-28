import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/case-studies", destination: "/projects", permanent: true },
      { source: "/home-solar/:city", destination: "/home-solar", permanent: true },
      { source: "/commercial-solar/:city", destination: "/commercial-solar", permanent: true },
      { source: "/service-areas/greensboro-ga", destination: "/service-areas", permanent: true },
      { source: "/service-areas/eatonton-ga", destination: "/service-areas", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
