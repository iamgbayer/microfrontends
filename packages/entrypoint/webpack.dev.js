const webpack = require('webpack')
const merge = require('webpack-merge')

const PATH = require('../config/path')
const dev = require('../config/webpack.dev.js')

module.exports = merge(dev, {
  entry: {
    entrypoint: `${PATH.source}/index.js`
  },
  output: {
    library: 'entrypoint'
  },

  devServer: {
    port: 8070
  }
})
