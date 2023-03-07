import express from 'express'

const app = express()
app.use(express.json())

interface Book {
  id: number
  title: string
  author: string
}

const books: Book[] = [
  {
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin'
  },
  {
    id: 2,
    title: 'Domain Driven Design',
    author: 'Eric Evans'
  }
]

function getIndexOfBook (id: number): number {
  return books.findIndex(book => book.id === id)
}

app.get('/', (request, response) => {
  response.status(200).send('Curso de Node')
})

app.get('/books', (request, response) => {
  response.status(200).json(books)
})

app.get('/books/:id', (request, response) => {
  const id = Number(request.params.id)
  const indexOf = getIndexOfBook(id)
  response.json({ data: books[indexOf] })
})

app.get('/books', (request, response) => {
  response.status(200).json(books)
})

app.post('/books', (request, response) => {
  const { title, author } = request.body
  books.push({ id: books.length + 1, title, author })
  response.status(201).json({
    message: 'Livro adicionado com sucesso',
    data: books.at(-1)
  })
})

app.put('/books/:id', (request, response) => {
  const id = Number(request.params.id)
  const { title, author } = request.body
  const indexOf = getIndexOfBook(id)
  books[indexOf] = { ...books[indexOf], title, author }
  response.json({
    message: 'Livro atualizado com sucesso',
    data: books[indexOf]
  })
})

app.delete('/books/:id', (request, response) => {
  const { id } = request.params
  const indexOf = getIndexOfBook(Number(id))
  books.splice(indexOf, 1)
  response.json({ message: 'Livro deletado com sucesso' })
})

export { app }
