/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  // env: {
  //     VITE_KEYCLOAK_URL: process.env.VITE_KEYCLOAK_URL,
  //     VITE_KEYCLOAK_REALM: process.env.VITE_KEYCLOAK_REALM,
  //     VITE_KEYCLOAK_CLIENT: process.env.VITE_KEYCLOAK_CLIENT
  // }
};

module.exports = nextConfig
