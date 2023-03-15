import { Router } from 'express'
import { BooksController } from '../controllers/BooksController'

const booksRouter = Router()
const booksController = new BooksController()

booksRouter.get('/', booksController.list)

export { booksRouter }
