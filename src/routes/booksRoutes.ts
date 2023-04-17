import { Router, type Request, type Response } from 'express'
import { BookController } from '../controllers/BookController'
import { BooksService } from '../services/BooksService'

const booksRouter = Router()
const bookService = new BooksService()
const bookController = new BookController(bookService)

const bookControllerFactory = (method: string) => {
  return (req: Request, res: Response) => bookController[method](req, res)
}

booksRouter.get('/', bookControllerFactory('list'))
booksRouter.post('/', bookControllerFactory('create'))

export { booksRouter }
