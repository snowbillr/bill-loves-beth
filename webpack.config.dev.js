const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    app: './src/scripts/index.tsx',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx', '.json', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        include: path.resolve(__dirname, 'src/scripts/'),
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/styles/'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'production-dependencies',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'index.html'),
        to: path.resolve(__dirname, 'build')
      },
      {
        from: path.resolve(__dirname, 'assets', '**', '*'),
        to: path.resolve(__dirname, 'build')
      }
    ]),
    new ForkTsCheckerWebpackPlugin()
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },
}
