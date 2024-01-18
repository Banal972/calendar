import { MongoClient } from 'mongodb'
const url = process.env.DB_URL as string;
const options = {}
// useNewUrlParser: true <-- 지금 이거 쓰지 않음
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}

export { connectDB }