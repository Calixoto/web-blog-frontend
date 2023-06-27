/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  optimizeFonts: true,
  images: {
    domains: ["github.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
