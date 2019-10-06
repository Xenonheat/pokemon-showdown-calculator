// Import Modules
const path = require('path')
const _ = require('lodash')

// Import Plugin Modules
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

// Global Constants
const CWD = process.cwd()

// File Constants
const BIN = path.resolve(CWD, 'build/client')
const CORE = path.resolve(CWD, 'Core')
// const BASE = path.resolve(CWD, 'Core/Client')
const SRC = path.resolve(CWD, 'Core/Client/src')

// Environment Constants
const LIVE = !!_.isEqual(process.env.NODE_ENV, 'production')
// const INTEGRATION = !!STAGE
// const DEVELOPMENT = !!LIVE
const STAGE = process.env.STAGE

// Webpack HTMLPluginObject
const webpackHTMLPlugin = {
  template: `${CORE}/index.html`,
  inject: true,
  chunks: [
    'index'
  ],
  filename: 'index.html'
}

// Webpack Environment Object
const webpackEnvironmentPlugin = {
  STAGE
}

// Webpack Plugins Object
const webpackPlugins = [
  new htmlWebpackPlugin(webpackHTMLPlugin),
  new webpack.EnvironmentPlugin(webpackEnvironmentPlugin)
]

// Webpack Configuration Object
const webpackConfiguration = {
  context: CWD,
  entry: `${SRC}/app.js`,
  module: {

  },
  devtool: !LIVE ? 'eval' : 'source-map',
  output: {
    path: BIN,
    filename: 'client.bundle.js'
  },
  devServer: {
    contentBase: `${BIN}`,
    compress: true,
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    open: true,
    inline: true,
    port: 3000
  },
  mode: !LIVE ? 'development' : 'production',
  resolve: {
    alias: {
      components: `${SRC}/Components`,
      assets: `${SRC}/Assets`
    }
  },
  plugins: webpackPlugins
}

module.exports = webpackConfiguration
