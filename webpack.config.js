var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Backbone': __dirname + '/node_modules/backbone'
    })
  ],
  devtool: 'inline-source-map'
}