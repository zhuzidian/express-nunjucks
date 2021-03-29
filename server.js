var express = require('express')
var nunjucks = require('nunjucks')
var path = require('path')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()

nunjucks.configure('pages', {
  autoescape: true,
  express: app,
})

app.use(logger('dev'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(3000, () => {
  console.log(`http://localhost:3000`)
})
