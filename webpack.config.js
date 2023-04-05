const path = require("path");

const PromptSync = require("prompt-sync");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
      publicPath: 'https://j-winston.github.io/Restaurant-Page/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              "...",
              {
                tag: "img",
              },
            ],
          },
        },
      },
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
