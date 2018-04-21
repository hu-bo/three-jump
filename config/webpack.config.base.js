'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');

// conf - postcss
const postcssConf = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    config: {
      path: 'config/postcss.config.js',
    },
  },
};
module.exports = cssOpt => ({
  entry: {
    vendors: ['three'],
    app: paths.appIndexJs
  },
  output: {
    path: paths.appDist,
    filename: 'js/[name].js',
    chunkFilename: 'js/[id][name].js'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.json'],
    alias: {
      ROOT: paths.appSrc,
      COMPONENTS: paths.COMPONENTS
    }
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js)$/,
        enforce: 'pre',
        use: [
          {
            // options: {
            //   formatter: eslintFormatter,
            //   eslintPath: require.resolve('eslint'),
            // },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        test: /\.js?$/,
        include: [paths.appSrc],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          },
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            `css-loader?${cssOpt}`,
            postcssConf,
          ],
        }),
      },
      {
        test: /\.(gif|jpe?g|png)\??.*$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'img/[name].[ext]?[hash]',
          },
        },
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'css/fonts/[name].[ext]?[hash]',
          },
        },
      }
    ],
  }
});
