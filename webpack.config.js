const path = require("path");
const PromptSync = require("prompt-sync");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },

  devServer: {
    static: "./dist",
  },
};
