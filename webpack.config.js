const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const stylus_plugin = require('stylus_plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractPlugin = new ExtractTextPlugin({
  filename: "style.css",
  allChunks: true,
})

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.styl$/,
      use: extractPlugin.extract({
        use: [
          {
            loader: 'css-loader',
            options: {importLoaders: 1, sourceMap: true}
          },
          {
            loader: 'stylus-loader',
            options: { sourceMap: true },
          },
        ]
      })
        ,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    }),
    extractPlugin,
  ],
  devServer: {
    historyApiFallback: { index: '/' },
      headers: {
          'Access-Control-Allow-Origin': '*'
      }
  }
}
