/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
module.exports = withImages(
  withCSS({
    target: 'serverless'
  })
)

module.exports = nextConfig
