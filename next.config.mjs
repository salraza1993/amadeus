/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL: 'https://cmsadmin.amadeusonlinesuite.net/graphql',
    NEXT_PUBLIC_WORDPRESS_WP_JSON_URL: 'https://cmsadmin.amadeusonlinesuite.net/wp-json/',
    NEXT_PUBLIC_WORDPRESS_CONTACT_FROM_URL: 'contact-form-7/v1/contact-forms/(id)/feedback',
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: '6Lc9YMgpAAAAAK3M3oEHJ08vuJazjDuyuzy4JfdM',
    NEXT_PUBLIC_CLARITY_PROJECT_ID: 'm9tn2pqor9',
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
    // domains: ['localhost'], // Add any other domains if needed
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
