/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "inex",
     NEXT_PUBLIC_CLOUDINARY_PRESET_NAME:"ineximages"
  },

  images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: '"fimdlytmijdaxydtauxy.supabase.co"',
      },
      
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
      },
     
      
    ],
  },
};
export default nextConfig;
