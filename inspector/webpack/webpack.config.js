/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
/**
 * COMMON WEBPACK CONFIGURATION
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

/**
 * The webpack config is a function which takes in additional options.
 */
const base = (options) => ({
  entry: options.entry,
  output: Object.assign({ // Compile into build/dist
    path: path.resolve(process.cwd(), 'build/dist'),
    publicPath: '/',
  }, options.output), // Merge with env dependent settings
  module: {
    loaders: [
      {
        test: /\.tsx?$/, loader: 'ts-loader', options: {
          transpileOnly: true,
          compilerOptions: {
            sourceMap: true,
            inlineSourceMap: false,
          }
        }
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
        },
      }
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ].concat(options.plugins || []),
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json'
    ]
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});

module.exports = base({
  // Add hot reloading in development
  entry: {
    'web-client': [
      // 'react-hot-loader/patch',
      // 'webpack-hot-middleware/client?reload=true',
      // 'webpack/hot/only-dev-server',
      path.join(process.cwd(), 'src/index.ts'), // Start with js/app.js
    ],
  },

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  // Emit a source map for easier debugging
  devtool: 'inline-source-map',

  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading

    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
      inject: true,
    }),
  ],

  performance: {
    hints: false,
  },
});
