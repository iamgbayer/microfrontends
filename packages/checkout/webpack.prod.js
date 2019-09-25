const merge = require('webpack-merge')

const PATH = require('../config/path')
const common = require('../config/webpack.common.js')

module.exports = merge(common, {
  entry: {
    service: `${PATH.source}/service.js`
  },
  mode: 'production',
  devtool: 'source-map',
  output: {
    library: 'homeService'
  }
})
