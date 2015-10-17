var webpack     = require('webpack');

module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
  }
  plugins: [
    new webpack.ProvidePlugin({
      'Backbone': 'backbone',
    })
  ],
  devtool: 'inline-source-map'
}