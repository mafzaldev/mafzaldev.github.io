/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mafzaldev.github.io',

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
