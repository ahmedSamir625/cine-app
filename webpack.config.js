const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractLoader = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new MiniCssExtractLoader(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "head" || false,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractLoader.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
};
