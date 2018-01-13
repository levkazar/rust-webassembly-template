const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.rs$/,
        use: [
          {
            loader: "rust-native-wasm-loader",
            options: {
              cargoWeb: true,
              name: "static/wasm/[name].[hash:8].wasm",
              release: true
            }
          }
        ]
      }
    ]
  },
  externals: {
    fs: true,
    path: true
  }
};
