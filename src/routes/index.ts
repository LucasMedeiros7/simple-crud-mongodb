import { Router } from 'express'
import { booksRouter } from './booksRoutes'

const routes = Router()

routes.use('/books', booksRouter)

export { routes }
