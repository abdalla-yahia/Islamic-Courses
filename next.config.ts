import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns:[
    {
      protocol:'https',
      hostname:'encrypted-tbn0.gstatic.com'
    },
    {
      protocol:'https',
      hostname:'img.pikbest.com'
    }

    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
      resolve: {
    extensions: ['.js', '.jsx']
  },

      
  /* config options here */
};

export default nextConfig;





