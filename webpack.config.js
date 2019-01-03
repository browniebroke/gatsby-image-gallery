let path = require('path')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // See https://github.com/webpack/webpack/issues/6522
    globalObject: "typeof self !== 'undefined' ? self : this",
    library: 'Gallery',
    libraryTarget: 'umd',
  },
  externals: [nodeExternals({ importType: 'umd' })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
