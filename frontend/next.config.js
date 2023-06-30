require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com', "drive.google.com"],
  },
  env: {
    NEXT_PUBLIC_STORE_API: process.env.NEXT_PUBLIC_STORE_API,
  },
};
