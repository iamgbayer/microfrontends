const webpackMerge = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')
const path = require('path')

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'microfrontends',
    projectName: 'home',
    webpackConfigEnv
  })

  return webpackMerge.smart(defaultConfig, {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      filename: 'microfrontends.js',
      path: path.resolve(__dirname, 'build')
    },
    devServer: {
      port: 8086
    }
  })
}
