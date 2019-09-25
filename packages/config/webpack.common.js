const webpack = require('webpack')

const PATH = require('./path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: `${PATH.source}/index.js`
  },

  externals: [
    'react',
    'react-dom',
    'react-router-dom',
    'single-spa',
    'styled-components',
    'prop-types'
  ],

  output: {
    publicPath: '/',
    libraryTarget: 'amd',
    path: PATH.build
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    symlinks: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.EnvironmentPlugin({
      ENV: JSON.stringify(process.env.ENV)
    }),
    new HtmlWebpackPlugin({
      template: `${PATH.public}/index.html`,
      inject: false
    })
  ]
}
