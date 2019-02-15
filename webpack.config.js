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

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      lodash: {
        root: '_',
        commonjs2: 'lodash',
        commonjs: 'lodash',
        amd: 'lodash',
      }
    }
  ],
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
