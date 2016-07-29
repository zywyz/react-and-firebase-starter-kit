var path = require('path');
var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports =  {
  quiet: true,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true
  },
  entry: {
    vendor: './src/js/Vendor',
    app: './src/js/index'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'app-[chunkhash].js',
    publicPath: '/js/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new ManifestPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor-[chunkhash].js"),
    new webpack.optimize.UglifyJsPlugin(
    {
      compress: {
        warnings: false
      }
    })
  ]
};
