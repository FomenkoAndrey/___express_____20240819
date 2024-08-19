import express from 'express'

const PORT = 3000
const app = express()

const getRootHandler = (req, res) => {
  res.send('GET Response from Express for the root route')
}

const getUsersHandler = (req, res) => {
  res.send('GET users route')
}
const postUsersHandler = (req, res) => {
  res.send('POST users route')
}

const getUserByIdHandler = (req, res) => {
  console.log(req.params)
  const { userId } = req.params
  res.send(`GET user by id route with id: ${userId}`)
}

app.get('/', getRootHandler)

app.route('/users').get(getUsersHandler).post(postUsersHandler)
// app.get('/users', getUsersHandler)
// app.post('/users', postUsersHandler)

app.get('/users/:userId', getUserByIdHandler)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
