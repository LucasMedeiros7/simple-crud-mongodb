import express from 'express'
import { mongoConnection } from './infra/db-connection'
import { routes } from './routes'

mongoConnection.on('error', console.log.bind(console, 'Connection failed'))
mongoConnection.once('open', () => {
  console.log('Database are connected')
})

const app = express()
app.use(express.json())
app.use(routes)

export { app }
