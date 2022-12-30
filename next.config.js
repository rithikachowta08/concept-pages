/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   basePath: "/learn",
   images: {
      path: "/_next/image/",
      domains: [
         "search-static.byjusweb.com",
         "static.tllms.com",
         "s3.ap-south-1.amazonaws.com",
         "s3-us-west-2.amazonaws.com",
         "infinitestudent-migration-images.s3-us-west-2.amazonaws.com",
         "*.s3-us-west-2.amazonaws.com",
         "cdn1.byjus.com",
         "search-app.byjusweb.com",
         "search-static-stg.byjusweb.com",
         "df0b18phdhzpx.cloudfront.net",
      ],
   },
};

module.exports = nextConfig;
