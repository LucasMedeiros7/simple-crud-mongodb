import { type Request, type Response } from 'express'
import { type BooksService } from '../services/BooksService'

interface BookRequest {
  title: string
  author: string
  publisher: string
  pages: number
}

export class BookController {
  constructor (private readonly bookService: BooksService) {}

  async list (_request: Request, response: Response): Promise<Response> {
    const books = await this.bookService.find()
    return response.json(books)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const { title, author, publisher, pages } = request.body as BookRequest
    try {
      const newBook = await this.bookService.create({ title, author, publisher, pages })
      return response.status(201).json(newBook.toJSON())
    } catch (error) {
      return response.status(500).json({ message: 'Falha ao cadastrar o Livro', error: error.message })
    }
  }

  async update (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { title, publisher, pages } = request.body as BookRequest
    try {
      await this.bookService.update(id, { title, publisher, pages })
      return response.json({ message: 'Livro atualizado com sucesso' })
    } catch (error) {
      return response.status(500).json({ message: 'Falha ao atualizar o Livro', error: error.message })
    }
  }
}
