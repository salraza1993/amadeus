/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL: 'http://localhost:8081/amadeos/graphql',
    WORDPRESS_WP_JSON_URL: 'http://localhost:8081/amadeos/wp-json/'
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
    domains: ['localhost'], // Add any other domains if needed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cmsadmin.amadeusonlinesuite.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "aoscmsadmin.amadeusonlinesuite.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost:8081",
        pathname: "**",        
      },
    ],
  },
};

export default nextConfig;
