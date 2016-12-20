var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var env = config.build.env
var projectRoot = path.resolve(__dirname, '../')

var webpackConfig ={
  entry: {
    'vue-loading-spinner': './src/index.js'
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin('[name].css'),
  ]
}

module.exports = webpackConfig
