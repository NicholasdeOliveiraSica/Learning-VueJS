const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    client: {
      webSocketURL: {
        protocol: process.env.HTTPS ? 'wss' : 'ws',
        hostname: '0.0.0.0',
        port: process.env.HTTPS ? 443 : 8080,
      },
    },
    allowedHosts: 'all',
  },
})