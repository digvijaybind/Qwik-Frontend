const path = require("path");

module.exports = {
  mode: "production",
  entry: "./app/page.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },
  module: {
    test: /\.css/,
    use: ["style-loader", "css-loader"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3500,
  },
};
