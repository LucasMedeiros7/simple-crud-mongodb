import dotenv from 'dotenv'
dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL

export {
  DATABASE_URL
}
