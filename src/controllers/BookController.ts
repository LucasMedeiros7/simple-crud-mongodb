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

  async listById (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const book = await this.bookService.findById(id)
      if (!book) {
        return response.status(400).json({ message: 'Livro não encontrado' })
      }
      return response.json(book)
    } catch (error) {
      return response.status(400).json({ message: 'Livro não encontrado', error: error.message })
    }
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
    const { title, publisher, pages, author } = request.body as BookRequest
    try {
      await this.bookService.update(id, { title, publisher, pages, author })
      return response.json({ message: 'Livro atualizado com sucesso' })
    } catch (error) {
      return response.status(500).json({ message: 'Falha ao atualizar o Livro', error: error.message })
    }
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      await this.bookService.delete(id)
      return response.json({ message: 'Livro removido com sucesso' })
    } catch (error) {
      return response.status(500).json({ message: 'Falha ao atualizar o Livro', error: error.message })
    }
  }
}
