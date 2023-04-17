import { Book, type IBook } from '../models/Book'

interface CreateBookDTO {
  title: string
  author: string
  publisher: string
  pages: number
}

interface UpdateBookDTO {
  title: string
  publisher: string
  pages: number
}

export class BooksService {
  async find (): Promise<IBook[]> {
    return await Book.find()
  }

  async findById (id: string): Promise<IBook> {
    return await Book.findById({ _id: id })
  }

  async create ({
    title,
    author,
    publisher,
    pages
  }: CreateBookDTO): Promise<IBook> {
    const newBook = new Book({ title, author, publisher, pages })
    return await newBook.save()
  }

  async update (id: string, { title, publisher, pages }: UpdateBookDTO): Promise<void> {
    const properties = {}
    for (const [key, value] of Object.entries({ title, publisher, pages })) {
      if (value) {
        properties[key] = Number(value) || value
      }
    }
    await Book.findOneAndUpdate({ _id: id }, { $set: properties })
  }
}
