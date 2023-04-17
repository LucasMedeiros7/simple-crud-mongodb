import { type Document, Schema, model } from 'mongoose'

interface IBook extends Document {
  id: string
  title: string
  author: string
  publisher: string
  pages: number
}

const bookSchema = new Schema<IBook>({
  id: String,
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  pages: Number
})

const Book = model<IBook>('books', bookSchema)

export { Book, type IBook }
