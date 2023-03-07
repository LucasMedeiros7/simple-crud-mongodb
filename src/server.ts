import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.redirect('/hello')
})

app.get('/hello', (req, res) => {
  res.send('<h1>Hello World!!!</h1>')
})

app.listen(3333, () => {
  console.log('Server running 🚀')
})
