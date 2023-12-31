const Dotenv = require('dotenv-webpack');
const path = require("path");
const HtmlWebpack = require("html-webpack-plugin");
module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer :{
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpack({
      template: "./src/index.html",
      title : "index.html",
    }),

    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
