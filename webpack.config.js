module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map'
}