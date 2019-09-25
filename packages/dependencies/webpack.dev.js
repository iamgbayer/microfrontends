const webpack = require('webpack')
const merge = require('webpack-merge')

const dev = require('../config/webpack.dev.js')

module.exports = merge(dev, {
  output: {
    libraryTarget: 'var'
  },
  devServer: {
    port: 8080
  }
})
