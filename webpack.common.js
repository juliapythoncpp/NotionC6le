const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.ts",
  },
  output: {
    filename: "highlightsToNotion.js",
    path: path.resolve(__dirname, "./dist/"),
    library: "highlightsToNotion",
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
