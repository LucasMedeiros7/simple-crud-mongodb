import mongoose from 'mongoose'

mongoose
  .connect('mongodb://admin:example@localhost:27017/')
  .then(() => {
    console.log('Connected!')
  })
  .catch(err => {
    console.log('Error', err)
  })

const mongoConnection = mongoose.connection

export { mongoConnection }
