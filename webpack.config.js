const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.rs$/,
        use: [{
          loader: 'wasm-loader'
        }, {
          loader: 'rust-native-wasm-loader',
          options: {
            release: true
          }
        }]
      }
    ]
  }
};