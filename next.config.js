/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "localhost:3001",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
