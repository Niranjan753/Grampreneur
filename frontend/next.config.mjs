/** @type {import('next').NextConfig} */


const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/grampreneur/',
  basePath: '/grampreneur',
};

export default nextConfig;
