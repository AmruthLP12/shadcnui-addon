/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
      outputFileTracingIncludes: {
        '/api/component-code': ['./app/components/**/*'],
      },
    },
  }
  
  module.exports = nextConfig