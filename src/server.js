import app from './app'
import webpack from 'webpack'
import webpackConfig from '../webpack/webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const PORT = process.env.PORT ?? 3333

// Injecting webpack into express
if (['dev', 'development'].includes(process.env.NODE_ENV)) {
  const config = webpackConfig()
  const compiler = webpack(config)
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  )
  app.use(webpackHotMiddleware(compiler))
}

app.listen(PORT, function () {
  console.info(`Crypto server running at port : ${PORT}`)
})
