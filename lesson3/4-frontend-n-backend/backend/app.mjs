import express from 'express'
import { log } from './utils/helpers.mjs'
import morgan from 'morgan'
import cors from 'cors'

const PORT = 3000
const app = express()
const corsOptions = {
  origin: 'http://localhost:513',
  optionsSuccessStatus: 200
}

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.use((req, res) => {
  const data = {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JavaScript']
  }

  log('Body:', req.body, 'red')
  log('Data:', data, 'blue')

  res.json(data)
})

app.listen(PORT, () => log(`Server is running on http://localhost:${PORT}`, 'yellow'))
