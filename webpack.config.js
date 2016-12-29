/*eslint-env node, es6 */

'use strict'

const webpack = require('webpack')
const path = require('path')
const clone = require('clone')

const configs = [
  {
    entry: {
      'is-element-in-view': path.resolve(__dirname, './index.js')
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].umd.js',
      libraryTarget: 'umd',
      library: "isElementInView",
    },

    module: {
      loaders: [
        {
          test: /\.js$/i,
          loader: 'babel',
        },
      ]
    },

    babel: {
      presets: ['es2015'],
    },

    devtool: [
      'source-map'
    ],
  },
  {
    entry: {
      'is-element-in-view': path.resolve(__dirname, './index.js')
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
    },

    module: {
      loaders: [
        {
          test: /\.js$/i,
          loader: 'babel',
        },
      ]
    },

    babel: {
      presets: ['es2015'],
    },

    devtool: [
      'source-map'
    ],
  },
]

const webpackConfig = []

configs.forEach(config => {
  const c = clone(config)
  c.output.filename = c.output.filename.replace(/\.js$/, '.min.js')
  c.plugins = [new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  })]

  webpackConfig.push(config, c)
})

module.exports = webpackConfig
