const merge = require('webpack-merge')

const common = require('../config/webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    library: 'homeLibrary'
  }
})
