/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No remote embassy-approved imagery yet. Restrict until real,
    // embassy-supplied asset domains are confirmed.
    remotePatterns: [],
  },
};

export default nextConfig;
