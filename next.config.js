/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   basePath: "/us/math/study/concept",
   images: {
      path: "/us/math/study/concept/_next/image/",
      domains: [
         "search-static.byjusweb.com",
         "static.tllms.com",
         "s3.ap-south-1.amazonaws.com",
         "s3-us-west-2.amazonaws.com",
         "infinitestudent-migration-images.s3-us-west-2.amazonaws.com",
         "*.s3-us-west-2.amazonaws.com",
         "cdn1.byjus.com",
         "search-app.byjusweb.com",
         "static-autosolver-website.s3.amazonaws.com",
         "search-static-stg.byjusweb.com",
         "df0b18phdhzpx.cloudfront.net",
      ],
   },
   async redirects() {
      return [
         {
            source: "/us/math/study/:slug",
            destination: "/us/math/study/concept/:slug",
            permanent: true,
            basePath: false,
         },
      ];
   },
};

module.exports = nextConfig;
