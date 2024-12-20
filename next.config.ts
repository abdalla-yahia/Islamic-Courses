import type { NextConfig } from "next";

const nextConfig: NextConfig = {

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
    extensions: ['.ts', '.tsx']
  }

  /* config options here */
};

export default nextConfig;





