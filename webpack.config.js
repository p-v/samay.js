var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/samay.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'samay.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};
