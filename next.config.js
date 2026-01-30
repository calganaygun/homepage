const withPWA = require('next-pwa')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  const nextConfig = {
    env: {
      API_URL: isDev ? 'http://localhost:3000' : 'https://calganaygun.com'
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dl.airtable.com',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
    turbopack: {},
    webpack: (config, { dev, isServer }) => {
      // Replace React with Preact only in client production build
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat'
        })
      }
      return config
    }
  }

  return withPWA({
    dest: 'public',
    disable: isDev
  })(nextConfig)
}
