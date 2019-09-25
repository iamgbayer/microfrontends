const merge = require('webpack-merge')

const PATH = require('../config/path')
const dev = require('../config/webpack.dev.js')

module.exports = merge(dev, {
  entry: {
    navigation: `${PATH.source}/service.js`
  },
  output: {
    library: 'navigation'
  },
  devServer: {
    port: 8050
  }
})
