import express from 'express'

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
  const items = ['AdriiF', 'Andrii', 'Jack', 'Diagen', 'item5', 'item6', 'item7']
  res.render('index', { items })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
