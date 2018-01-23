var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"
    })
  ],

  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  }
}
