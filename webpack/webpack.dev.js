const webpack = require('webpack')
module.exports = {
  mode: 'development',
  devServer: {
    static: false,
    hot: true,
    // open: true,
  },
  devtool: 'eval-cheap-source-map',
}
