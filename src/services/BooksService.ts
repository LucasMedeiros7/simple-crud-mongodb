import { Book, type IBook } from '../models/Book'

interface CreateBookDTO {
  title: string
  author: string
  publisher: string
  pages: number
}

export class BooksService {
  async find (): Promise<IBook[]> {
    return await Book.find()
  }

  async create ({ title, author, publisher, pages }: CreateBookDTO): Promise<IBook> {
    const newBook = new Book({ title, author, publisher, pages })
    return await newBook.save()
  }
}
