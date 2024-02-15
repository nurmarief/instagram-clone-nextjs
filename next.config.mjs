/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.insoft.co.id',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ]
  }
};

export default nextConfig;
