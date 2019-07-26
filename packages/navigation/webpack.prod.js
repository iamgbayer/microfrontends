const merge = require('webpack-merge')

const PATH = require('../config/path')
const common = require('../config/webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    service: `${PATH.source}/service.js`
  },
  output: {
    library: 'navigationService'
  }
})
