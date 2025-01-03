import type { NextConfig } from "next";
// /** @type {import('next').NextConfig} */
// module.exports = {
//   output: "standalone",
// };
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

  /* config options here */
};

export default nextConfig;




