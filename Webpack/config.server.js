// Import Modules
const path = require('path')
const _ = require('lodash')

// Import Plugin Modules
const webpack = require('webpack')
const slsw = require('serverless-webpack')
const WebpackNodeExternals = require('webpack-node-externals')

// Global Constants
const CWD = process.cwd()

// File Constants
const BUILD = path.resolve(CWD, 'Build/Serverless/Functions')
const CORE = path.resolve(CWD, 'Core')
const BASE = path.resolve(CORE, 'Server')
const SRC = path.resolve(CWD, 'Core/Server/src')

// Current Environment
const STAGE = process.env.STAGE || 'integration'

// Environment Constants
const LIVE = _.isEqual(process.env.NODE_ENV, 'production')
const INTEGRATION = STAGE === 'integration'
const DEVELOPMENT = !LIVE

// Webpack Environment Object
const webpackEnvironmentPlugin = {
  STAGE,
  INTEGRATION,
  DEVELOPMENT,
  SERVICE: slsw.lib.serverless.service.service
}

// Webpack Plugins Object
const webpackPlugins = [
  new webpack.EnvironmentPlugin(webpackEnvironmentPlugin)
]

// Webpack Configuration Object
const webpackConfiguration = {
  context: CWD,
  entry: slsw.lib.entries,
  externals: [WebpackNodeExternals({
    whitelist: [/\.yml/]
  })],
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.json$/,
      use: ['json-loader']
    }, {
      exclude: /node_modules/,
      test: /\.js$/,
      use: ['babel-loader']
    }, {
      test: /\.yml$/,
      use: ['json-loader', 'yaml-loader']
    }, {
      test: /\.sql$/,
      use: ['raw-loader']
    }
  },
  devtool: 'eval-source-map',
  output: {
    filename: '[name].js',
    path: BUILD,
    libraryTarget: 'umd'
  },
  mode: !LIVE ? 'development' : 'production',
  resolve: {
    alias: {
      handler: `${SRC}/handler`,
      configuration: `${SRC}/configuration`,
      constant: `${BASE}/constant`,
      middleware: `${SRC}/middleware`,
      routes: `${BASE}/routes`,
      system: `${SRC}/system`,
      toolbox: `${SRC}/toolbox`,
      utility: `${SRC}/utility`
    }
  },
  plugins: webpackPlugins,
  target: 'node'
}

module.exports = webpackConfiguration
