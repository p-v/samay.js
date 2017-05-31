import path from 'path';
import webpack from 'webpack';

const module = {
  entry: './src/samay.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'samay.min.js',
    library: 'samay',
    libraryTarget: 'commonjs2',
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

export default module;
