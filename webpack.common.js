const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.ts",
  },
  output: {
    filename: "highlightsToNotion.bundle.js",
    path: path.resolve(__dirname, "./dist/"),
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
