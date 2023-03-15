import { type Request, type Response } from 'express'
import { Books } from '../models/Books'

// interface CreateBookDTO {
//   title: string
//   author: string
//   publisher: string
//   pages: number
// }

export class BooksController {
  async list (request: Request, response: Response): Promise<Response> {
    const books = await Books.find()
    return response.json(books)
  }

  // async create ({ title, author, publisher, pages }: CreateBookDTO) {}
}
