import type { NextConfig } from "next";

// Adresele vechi *.vercel.app trimit permanent la domeniul principal,
// ca Google să indexeze un singur site.
const oldHosts = [
  "ganafc.vercel.app",
  "ganafa.vercel.app",
  "ganafc-aldeagabriel72-7925.vercel.app",
  "ganafc-git-main-aldeagabriel72-7925.vercel.app",
];

const nextConfig: NextConfig = {
  async redirects() {
    return oldHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://ganaaccounting.ro/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
