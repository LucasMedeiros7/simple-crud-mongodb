import mongoose from 'mongoose'
import { DATABASE_URL } from './env'

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(DATABASE_URL)
  } catch (error) {
    console.error('Connection to database failed!')
    console.error(error)
  }
}

mongoose.connection.on('error', (error) => {
  console.error('Connection to MongoDB failed!')
  console.error(error)
})

process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close()
    console.log('\nConnection to MongoDB closed!')
    process.exit(0)
  } catch (error) {
    console.error('Failed to close connection to MongoDB!')
    console.error(error)
    process.exit(1)
  }
})

mongoose.connection.once('open', () => {
  console.log('Connected to database!')
})
