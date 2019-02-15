var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: [
    './src/index.js'
  ],
  output: {
    library: 'react-csv-to-html-table',
    libraryTarget: 'umd',
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'index.js'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ],
  },
  target: "web",
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  optimization: {
    minimize: true
  }
};
