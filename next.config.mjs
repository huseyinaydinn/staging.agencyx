/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true, // Kalıcı bir yönlendirme (301) yapmak için true
      },
    ];
  },
};

export default nextConfig;
