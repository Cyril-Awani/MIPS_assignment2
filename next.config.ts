import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'example.com',             // Your own domain
      'images.unsplash.com',     // Public image domain (e.g., Unsplash)
      'plus.unsplash.com',
      'a0.muscache.com',         // External domain (e.g., Airbnb images)
      'img.freepik.com',         // Another external image domain
    ],
  },
};

export default nextConfig;

