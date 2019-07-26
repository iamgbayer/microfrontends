const merge = require('webpack-merge')

const dev = require('../config/webpack.dev.js')

module.exports = merge(dev, {
  output: {
    library: 'homeLibrary'
  },
  devServer: {
    port: 8083
  }
})
