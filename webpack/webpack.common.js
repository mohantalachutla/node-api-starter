const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    bundle: path.resolve(__dirname, '..', './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    assetModuleFilename: '[name][ext]',
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'], //extensions to resolve
    modules: [
      path.resolve(__dirname, '..', 'src/**'),
      path.resolve(__dirname, '..', 'node_modules'),
    ], // to specify external modules //ancestors won't be seached with absolute path
    alias: {
      APP: path.resolve(__dirname, '..', 'src/'),
      '@http$': path.resolve(__dirname, '..', 'src/http.js'),
      '@logger$': path.resolve(__dirname, '..', 'src/logger.js'),
    },
    // fallback: {},
    // enforceExtension: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  target: 'node',
  externalsType: 'global',
  externals: {
    express: 'commonjs express',
    'express-formidable': 'commonjs express-formidable',
    'terser-webpack-plugin': 'commonjs terser-webpack-plugin',
    webpack: 'commonjs webpack',
    lodash: ['commonjs lodash', '_'],
    '@babel/core': ['commonjs @babel/core'],
  },
  stats: 'errors-warnings',
  // stats: 'detailed',
}
