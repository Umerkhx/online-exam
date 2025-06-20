/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogs.takingmyclassesonline.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
    ],
  },
    eslint: {
    // Disables ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
