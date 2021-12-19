const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  mode: process.env.NODE_ENV === "production" ? "production" : 'development',
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {

    }
  },
};

const server = {
  ...config,
  target: 'node',
  entry: ["./src/server/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist/server"),
  },
}

const client = {
  ...config,
  entry: ["./src/client/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist/client"),
  },
}

module.exports = [client, server];
