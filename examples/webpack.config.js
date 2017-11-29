var webpack = require('webpack')

module.exports = {

  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devServer: {
    contentBase: './public',
  }

}
