import http from 'http'
import express from 'express'

const PORT = 3000
const app = express()

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
