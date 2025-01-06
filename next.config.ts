/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
      outputFileTracingIncludes: {
        '/api/component-code': ['./app/components/**/*'],
    },
  }
  
  module.exports = nextConfig