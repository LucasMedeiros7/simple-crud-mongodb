import http from 'node:http'

const PORT = process.env.PORT || 3333

const routes = {
  '/': 'Curso de Node',
  '/books': 'Página de Livros',
  '/authors': 'Página de autores',
  '/publisher': 'Página da editora',
  '/about': 'Informações sobre o projeto'
}

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(routes[request.url])
})

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
