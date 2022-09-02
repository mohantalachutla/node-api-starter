import webpack from 'webpack'
import webpackConfig from '../webpack/webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import express from 'express'

const app = express()

// Injecting webpack into express
if (['dev', 'development'].includes(process.env.NODE_ENV)) {
  const config = webpackConfig()
  // merged config
  console.log({ config })
  const compiler = webpack(config)
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  )
  app.use(webpackHotMiddleware(compiler))
}

export default app
