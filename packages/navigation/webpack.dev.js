const merge = require('webpack-merge')

const PATH = require('../config/path')
const dev = require('../config/webpack.dev.js')

module.exports = merge(dev, {
  entry: {
    service: `${PATH.source}/service.js`
  },
  output: {
    library: 'navigationService'
  },
  devServer: {
    port: 8082
  }
})
