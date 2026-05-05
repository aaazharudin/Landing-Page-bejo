import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"], // Prefer modern formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Thumbnail sizes
  },

  // Performance optimizations
  compress: true, // Enable gzip compression

  // Experimental features for better performance
  experimental: {
    optimizeCss: false, // Enable when using CSS modules
    optimizePackageImports: ["lucide-react"], // Tree-shake icon libraries
  },
};

export default nextConfig;
