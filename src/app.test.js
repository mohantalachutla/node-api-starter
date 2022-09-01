import http from './http'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
dotenvExpand.expand(dotenv.config())

const appName = process.env.APP_NAME
const host = process.env.HOST
const port = process.env.PORT

describe('Test Environment ', () => {
  it(`Has ENV APP_NAME set`, () => {
    expect(appName).toBeDefined()
  })

  it(`Has ENV HOST set`, () => {
    expect(host).toBeDefined()
  })

  it(`Has ENV PORT set`, () => {
    expect(port).toBeDefined()
  })

  it(`has to send reponse ${appName}`, async () => {
    expect(await (await http.get(`http://${host}:${port}/`)).data).toContain(
      appName
    )
  })
})
