let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './bundle.js',
    libraryTarget: 'var',
    library: 'App'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }]
    }, {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }, {
      test: /app\.json/,
      use: ['@csgis/json-modules-loader', {
        loader: '@csgis/json-module-args-loader',
        options: {
          args: 'deps',
          skip: 1
        }
      }]
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        compact: false
      }
    }]
  },
  plugins: [new CopyWebpackPlugin([
    { from: 'src/index.html' }
  ])]
};
