/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com', // For Firebase Storage images
      'cdn.magicui.design',             // For Magic UI project
      'cdn.llm.report',                 // For llm.report project
      'pub-83c5db439b40468498f97946200806f7.r2.dev' // For Chat Collect and Automatic Chat
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/image-to-url-converter-9483c.appspot.com/o/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.magicui.design',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.llm.report',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-83c5db439b40468498f97946200806f7.r2.dev',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;