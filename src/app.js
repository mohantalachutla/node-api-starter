import cors from 'cors'
import morgan from 'morgan'
import eformidable from 'express-formidable'
import esession from 'express-session'
import * as _ from 'lodash'

import { corsOptions } from './config'
import routes from './controller'
import app from './inject'

// Express configuration in Use
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(
  eformidable({
    encoding: 'utf-8',
    multiples: true,
  })
)
app.use(
  esession({ resave: false, saveUninitialized: true, secret: 'itsasecret' })
)

const _use = _.bind(_.spread(app.use), app)
routes.forEach((route) => _use(route))
export default app
