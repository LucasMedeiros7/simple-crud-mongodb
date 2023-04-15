import express from 'express'
import { routes } from './routes'
import { connectDB } from './infra/db-connection'

const app = express()

void connectDB()

app.use(express.json())
app.use(routes)

export { app }
