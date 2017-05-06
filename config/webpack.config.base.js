'use strict';
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var getClientEnvironment = require('./env');
var path = require('path')
var paths = require('./paths');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var webpackConfig = {
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We read `NODE_PATH` environment variable in `paths.js` and pass paths here.
    // We use `fallback` instead of `root` because we want `node_modules` to "win"
    // if there any conflicts. This matches Node resolution mechanism.
    // https://github.com/facebookincubator/create-react-app/issues/253
    modules: ['node_modules'].concat(paths.nodePaths),
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools, although we do not recommend using it, see:
    // https://github.com/facebookincubator/create-react-app/issues/290
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      '@': resolve('src'),
      'static': resolve('src/static')
    }
  },
  module: {
    // First, run the linter.
    // It's important to do this before Babel processes the JS.
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [{
          // @remove-on-eject-begin
          // Point ESLint to our predefined config.
          options: {
            // configFile: path.join(__dirname, '../.eslintrc'),
            useEslintrc: true
          },
          // @remove-on-eject-end
          loader: 'eslint-loader'
        }],
        include: paths.appSrc,
      },
      // ** ADDING/UPDATING LOADERS **
      // The "url" loader handles all assets unless explicitly excluded.
      // The `exclude` list *must* be updated with every change to loader extensions.
      // When adding a new loader, you must add its `test`
      // as a new entry in the `exclude` list for "url" loader.

      // "url" loader embeds assets smaller than specified size as data URLs to avoid requests.
      // Otherwise, it acts like the "file" loader.
      {
        exclude: [
          /\.html$/,
          // We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
          // because you might change the hot reloading server from the custom one
          // to Webpack's built-in webpack-dev-server/client?/, which would not
          // get properly excluded by /\.(js|jsx)$/ because of the query string.
          // Webpack 2 fixes this, but for now we include this hack.
          // https://github.com/facebookincubator/create-react-app/issues/1713
          /\.(js|jsx)(\?.*)?$/,
          /\.less$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        options: {
          babelrc: true,
          plugins: [
            ['import', [{ libraryName: "antd", style: 'css' }]]
          ],
          cacheDirectory: true
        }
      },
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      // in development "style" loader enables hot editing of CSS.
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: function () {
                return [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ]
                  })
                ]
              }
            }
          }
        ]
      },
      // 解析 less 文件，并加入变量覆盖配置
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader"
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                "@primary-color": "#1DA57A",
                "@icon-url": '"/static/fonts/iconfont"',
              }
            }
          }
        ]
        //loader: 'style-loader!css-loader!postcss-loader!less-loader?{modifyVars:{"@primary-color":"#1DA57A"}}'
      },
      // JSON is not enabled by default in Webpack but both Node and Browserify
      // allow it implicitly so we also enable it.
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // "file" loader for svg
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
      // ** STOP ** Are you adding a new loader?
      // Remember to add the new extension(s) to the "url" loader exclusion list.
    ]
  }
}
module.exports = webpackConfig
