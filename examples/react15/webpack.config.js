const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('./package');
const path = require('path');
module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  devServer: {
    port: '7102',
    clientLogLevel: 'warning',
    disableHostCheck: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    overlay: { warnings: false, errors: true },
  },
  output: {
    library: `${name}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${name}`,
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        test: /\.(js|jsx)$/,
        // include: [
        //   path.resolve('.'),
        //   path.resolve('./node_modules', 'cron-parser')
        // ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
