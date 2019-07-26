const merge = require('webpack-merge')

const common = require('../config/webpack.common.js')

module.exports = merge(common, {
  output: {
    library: 'homeLibrary'
  }
})
