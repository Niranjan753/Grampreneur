/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/your-repo-name/',
  basePath: '/your-repo-name',
};

export default nextConfig;
