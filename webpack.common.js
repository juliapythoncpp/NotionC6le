const path = require("path");

module.exports = {
  entry: {
    highlightsToNotion: "./src/index.ts",
    //amazonExtractor: "./src/amazonExtractor.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist/"),
    //library: ["highlightsToNotion", "amazonExtractor"],
    library: ["highlightsToNotion"],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};
