const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Other configurations...
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "os": require.resolve("os-browserify/browser"),
      "fs": false, // Use false if you don't want to include a polyfill
      "net": false,
      "tls": false,
      "dns": false,
      "child_process": false
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]
};