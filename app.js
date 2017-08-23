let app = require('express')()
const router = require('./router')

app.use(router)

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello' })
})

module.exports = app