/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: { serverComponentsExternalPackages: ["@huggingface/transformers"] },
};

export default nextConfig;
