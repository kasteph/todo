var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
  },
  exports: {
    'jquery': 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      Backbone: 'backbone',
    })
  ],
  amd: {
    jQuery: true
  },
  devtool: 'inline-source-map'
}