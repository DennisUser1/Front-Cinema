import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
  poweredByHeader: false,
  optimizeFonts: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
    APP_API_URL: process.env.REACT_APP_API_URL,
    APP_UPLOADS_URL: process.env.REACT_APP_UPLOADS_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:`${process.env.REACT_APP_API_URL}/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${process.env.REACT_APP_UPLOADS_URL}/:path*`,
      },
    ]
  },
};

export default nextConfig;
