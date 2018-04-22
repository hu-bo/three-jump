const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.base');
const devServer = require('./devServer')();
const paths = require('./paths');

// 配置
const webpackDevConfig = merge(webpackBaseConfig('sourceMap'), {
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: `http://localhost:${devServer.port}/`
  },
  module: {
    rules: [
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
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: path.join(paths.appSrc, 'css/[name].css'), // 源码目录
      disable: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
    new OpenBrowserPlugin({ url: `http://localhost:${devServer.port}/` }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: paths.appHtml,
      // chunks: ['vendors', 'app'],
    }),
  ],
  devServer: devServer,
});
module.exports = webpackDevConfig;
