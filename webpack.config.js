const path = require("path");

const PromptSync = require("prompt-sync");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
devServer: {
    static: './dist',
},
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/i,
        type: "asset/resource",
      },
    ],
  },
};
