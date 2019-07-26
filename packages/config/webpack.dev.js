const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATH = require('./path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: false,
    contentBase: PATH.build,
    publicPath: '/',
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATH.public}/index.html`
    })
  ]
})
