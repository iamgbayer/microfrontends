const webpack = require('webpack')
const merge = require('webpack-merge')

const dev = require('../config/webpack.dev.js')

module.exports = merge(dev, {
  devServer: {
    port: 8081
  }
})
