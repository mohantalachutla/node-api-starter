const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
}
