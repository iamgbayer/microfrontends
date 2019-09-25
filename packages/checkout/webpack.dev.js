const merge = require('webpack-merge')

const PATH = require('../config/path')
const dev = require('../config/webpack.dev.js')

module.exports = merge(dev, {
  entry: {
    checkout: `${PATH.source}/service.js`
  },
  output: {
    library: 'checkout'
  },
  devServer: {
    port: 8090
  }
})
