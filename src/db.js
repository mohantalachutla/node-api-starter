import { Sequelize } from 'sequelize'

import logger from './http'

const db = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres', //one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'
  logging: (...args) => {
    logger.log(args)
  },
})

export default db
