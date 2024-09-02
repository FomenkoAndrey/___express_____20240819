import express from 'express'
import cookieParser from 'cookie-parser'
import Tokens from 'csrf'

const tokens = new Tokens()
const app = express()

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  let secret
  if (!req.cookies.csrfSecret) {
    secret = tokens.secretSync()
    res.cookie('csrfSecret', secret, { httpOnly: true })
  } else {
    secret = req.cookies.csrfSecret
  }

  const token = tokens.create(secret)
  res.locals.csrfToken = token
  next()
})

app.get('/form', (req, res) => {

  console.log(`Form has been sent to the client with CSRF token: ${res.locals.csrfToken}`)
  res.send(`
    <form action="/process" method="POST">
      <input type="hidden" name="_csrf" value="${res.locals.csrfToken}">
      <input type="text" name="data">
      <button type="submit">Submit</button>
    </form>
  `)
})

app.post('/process', (req, res) => {
  const secret = req.cookies.csrfSecret
  const token = req.body._csrf

  console.log('Secret from cookies:', secret)
  console.log('CSRF token from body:', token)


  if (tokens.verify(secret, token)) {
    console.log('Data has been processed successfully')
    res.send('Data has been processed successfully')
  } else {
    console.log('Invalid CSRF token')
    res.status(403).send('Invalid CSRF token')
  }
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
