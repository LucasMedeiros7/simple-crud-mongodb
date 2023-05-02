import { Book, type IBook } from '../models/Book'

interface BookDTO {
  title: string
  author: string
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

  async create ({ title, author, publisher, pages }: BookDTO): Promise<IBook> {
    const newBook = new Book({ title, author, publisher, pages })
    return await newBook.save()
  }

  async update (id: string, { title, publisher, pages, author }: BookDTO): Promise<void> {
    const properties = {}
    for (const [key, value] of Object.entries({ title, publisher, pages, author })) {
      if (value) {
        properties[key] = Number(value) || value
      }
    }
    await Book.findByIdAndUpdate(id, { $set: properties })
  }

  async delete (id: string): Promise<void> {
    await Book.findByIdAndDelete(id)
  }
}
