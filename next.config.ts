import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure every URL is served without a trailing slash.
  // Prevents Googlebot seeing both /programs and /programs/ as different URLs.
  trailingSlash: false,

  // Permanent www redirect — enforced at the Next.js layer so it works
  // regardless of Vercel domain configuration.
  // Googlebot crawling the non-www version gets a single 301 hop to www.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "magicmathslearning.com" }],
        destination: "https://www.magicmathslearning.com/:path*",
        permanent: true,
      },
    ];
  },

  // Security + crawl-quality headers on every response.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",           value: "DENY" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
