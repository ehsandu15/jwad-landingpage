/** @type {import('next').NextConfig} */

const parsedUrl = new URL(process.env.NEXT_PUBLIC_STRAPI_URL);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: parsedUrl.protocol.replace(/:$/, ''),
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
 