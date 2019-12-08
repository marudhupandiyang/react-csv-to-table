var webpack = require('webpack')
var package = require('./package.json');

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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.BannerPlugin({
      banner: `
${package.name} v${package.version}
${package.description}

Copyright (c) ${(new Date()).getFullYear()} ${package.author}
${package.homepage}

Licensed under the ${package.license} license.
`
    }),
  ],
  optimization: {
    minimize: true
  }
};
