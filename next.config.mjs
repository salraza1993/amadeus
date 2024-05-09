/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL: 'https://aoscmsadmin.amadeusonlinesuite.com/graphql',
    WORDPRESS_WP_JSON_URL: 'https://aoscmsadmin.amadeusonlinesuite.com/wp-json/'
  },
  optimizeFonts: true,
  reactStrictMode: false,
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 500,
      aggregateTimeout: 300,
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aoscmsadmin.amadeusonlinesuite.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
