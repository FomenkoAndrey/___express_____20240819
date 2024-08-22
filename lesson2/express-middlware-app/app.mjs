import express from 'express'
import morgan from 'morgan'
import { log } from './utils/helpers.mjs'

const PORT = 3000

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res) => {
  log('Request body', req.body, 'red')
  res.send('Response from server')
})

app.listen(PORT, () => {
  log(`Server is running on http://localhost:${PORT}`, 'yellow')
})
