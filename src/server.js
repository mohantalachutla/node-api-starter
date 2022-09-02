import app from './app'

const PORT = process.env.PORT ?? 3333

app.listen(PORT, function () {
  console.info(`Crypto server running at port : ${PORT}`)
})
