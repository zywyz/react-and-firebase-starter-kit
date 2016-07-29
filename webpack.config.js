var path = require('path');
var webpack = require('webpack');

module.exports =  {
  devtool: 'eval',
  entry: {
    bundle: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8181',
      'webpack/hot/only-dev-server',
      './src/js/index'
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dev/js'),
    filename: 'app.js',
    publicPath: '/js/',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/, // include .js and .jsx files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        loaders: ['eslint']
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
