const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    app: './src/scripts/index.ts',
  },

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        include: path.resolve(__dirname, 'src/scripts/'),
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'assets/styles/'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'index.html'),
        to: path.resolve(__dirname, 'docs')
      },
      {
        from: path.resolve(__dirname, 'assets', 'images', '*'),
        to: path.resolve(__dirname, 'docs')
      }
    ]),
    new ForkTsCheckerWebpackPlugin()
  ],
}
