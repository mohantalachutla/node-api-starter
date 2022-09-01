const { merge } = require('webpack-merge')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
dotenvExpand.expand(dotenv.config())

module.exports = (env, args) => {
  const environment = process.env.NODE_ENV
  const common = require('./webpack.common')

  console.info(`Webpack running on ${environment} environment`)
  switch (environment) {
    case 'development':
    case 'dev':
      const dev = require('./webpack.dev')
      return merge(common, dev)
    case 'production':
    case 'prod':
      const prod = require('./webpack.prod')
      return merge(common, prod)
    case 'sit':
      const sit = require('./webpack.sit')
      return merge(common, sit)
    default:
      throw new Error(
        'webpack/webpack.config.js: Environment not set or not found'
      )
  }
}
